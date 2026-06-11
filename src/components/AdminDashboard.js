import { useState, useEffect } from "react";

// Función para reducir y convertir imagen a WebP
function compressImage(file, maxWidth = 800, quality = 0.8) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob(
          (blob) => {
            if (!blob) return reject(new Error("Error al crear la imagen comprimida"));
            const newFileName = file.name.replace(/\.[^/.]+$/, ".webp");
            const newFile = new File([blob], newFileName, { type: "image/webp", lastModified: Date.now() });
            resolve(newFile);
          },
          "image/webp",
          quality
        );
      };
      img.onerror = (err) => reject(err);
    };
    reader.onerror = (err) => reject(err);
  });
}

const cupSVG = `
<svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0 3h2v3h-2M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
</svg>`;

export default function AdminDashboard({ supabase }) {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCat, setActiveCat] = useState("");
  const [loading, setLoading] = useState(true);

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [nameEs, setNameEs] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [descEs, setDescEs] = useState("");
  const [descEn, setDescEn] = useState("");
  const [price, setPrice] = useState("");
  const [badge, setBadge] = useState("");
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    const { data } = await supabase.from("categories").select("*").order("order");
    if (data) {
      setCategories(data);
      if (data.length > 0 && !activeCat) {
        setActiveCat(data[0].key);
        fetchProducts(data[0].key);
      } else if (activeCat) {
        fetchProducts(activeCat);
      }
    }
    setLoading(false);
  }

  const hasRealImage = (url) => url && !url.includes("demo_");

  async function fetchProducts(catKey) {
    const { data } = await supabase.from("products").select("*").eq("category_key", catKey).order("created_at");
    if (data) {
      const sorted = data.sort((a, b) => {
        const aImg = hasRealImage(a.image_url) ? 1 : 0;
        const bImg = hasRealImage(b.image_url) ? 1 : 0;
        return bImg - aImg;
      });
      setProducts(sorted);
    }
  }

  async function handleAddCategory() {
    const name = prompt("Nombre de nueva categoría (ej. Bebidas Frías):");
    if (!name) return;
    const key = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_");
    await supabase.from("categories").insert([{ name_es: name, name_en: name, key, order: categories.length }]);
    fetchCategories();
  }

  async function handleDeleteCategory(id) {
    if(confirm("¿Seguro? Se borrarán todos los productos de esta categoría PERMANENTEMENTE.")){
       await supabase.from("categories").delete().eq("id", id);
       setActiveCat("");
       fetchCategories();
    }
  }

  async function handleDeleteProduct(id) {
    if(confirm("¿Borrar este producto?")){
      await supabase.from("products").delete().eq("id", id);
      fetchProducts(activeCat);
    }
  }

  function openCreate() {
    setEditingProduct(null);
    setNameEs(""); setNameEn(""); setDescEs(""); setDescEn(""); setPrice(""); setBadge(""); setFile(null);
    setIsFormOpen(true);
  }

  function openEdit(p) {
    setEditingProduct(p);
    setNameEs(p.name_es);
    setNameEn(p.name_en || "");
    setDescEs(p.description_es || "");
    setDescEn(p.description_en || "");
    setPrice(p.price);
    setBadge(p.badge || "");
    setFile(null);
    setIsFormOpen(true);
  }

  async function handleSaveProduct(e) {
    e.preventDefault();
    if (!activeCat) return alert("Selecciona una categoría primero.");
    setSaving(true);
    
    let image_url = editingProduct ? editingProduct.image_url : "";
    if (file) {
      try {
        const compressedFile = await compressImage(file, 800, 0.8);
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.webp`;
        const { error: uploadError } = await supabase.storage.from("menu-images").upload(fileName, compressedFile);
        if (uploadError) throw uploadError;
        const { data: publicUrlData } = supabase.storage.from("menu-images").getPublicUrl(fileName);
        image_url = publicUrlData.publicUrl;
      } catch (err) {
        alert("Error al procesar/subir imagen: " + err.message);
        setSaving(false); return;
      }
    }

    const payload = {
      category_key: activeCat,
      name_es: nameEs, 
      name_en: nameEn || nameEs,
      description_es: descEs, 
      description_en: descEn || descEs,
      price: parseFloat(price), 
      badge: badge || null, 
      image_url
    };

    if (editingProduct) {
      const { error } = await supabase.from("products").update(payload).eq("id", editingProduct.id);
      if (error) alert("Error actualizando: " + error.message);
    } else {
      const { error } = await supabase.from("products").insert([payload]);
      if (error) alert("Error guardando: " + error.message);
    }

    setSaving(false);
    setIsFormOpen(false);
    fetchProducts(activeCat);
  }

  return (
     <div className="min-h-screen bg-[#121212] text-neutral-200 font-sans selection:bg-teal-500/30">
       
       {/* ── HEADER ── */}
       <header className="sticky top-0 z-40 bg-[#1a1a1a]/80 backdrop-blur-md border-b border-white/5 p-4 md:px-8">
         <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
               <div className="w-10 h-10 bg-teal-500/20 rounded-full flex items-center justify-center">
                 <img src="/assets/logo.png" alt="Logo" className="h-6 w-6 object-contain opacity-80" />
               </div>
               <h1 className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Panel de Control</h1>
            </div>
            <button onClick={() => supabase.auth.signOut()} className="text-sm font-semibold text-neutral-400 hover:text-white transition">Cerrar Sesión</button>
         </div>
       </header>

       <main className="max-w-7xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
         
         {/* ── SIDEBAR CATEGORÍAS ── */}
         <aside className="w-full md:w-64 shrink-0">
           <div className="flex justify-between items-center mb-6">
             <h2 className="text-sm font-bold uppercase tracking-wider text-neutral-500">Categorías</h2>
             <button onClick={handleAddCategory} className="w-7 h-7 rounded-full bg-white/5 hover:bg-teal-500 hover:text-black flex items-center justify-center transition border border-white/10" title="Añadir Categoría">+</button>
           </div>
           
           {loading ? (
             <div className="animate-pulse flex flex-col gap-3">
               {[1,2,3,4].map(i => <div key={i} className="h-10 bg-white/5 rounded-lg"></div>)}
             </div>
           ) : (
             <nav className="flex flex-col gap-2">
               {categories.length === 0 && <p className="text-xs text-neutral-600">No hay categorías.</p>}
               {categories.map(c => {
                 const isActive = activeCat === c.key;
                 return (
                   <div 
                     key={c.key} 
                     onClick={() => {setActiveCat(c.key); fetchProducts(c.key);}}
                     className={`group flex justify-between items-center px-4 py-3 rounded-xl cursor-pointer transition-all duration-300 ${isActive ? 'bg-teal-500/10 border border-teal-500/30 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.05)]' : 'bg-transparent hover:bg-white/5 border border-transparent text-neutral-400 hover:text-neutral-200'}`}
                   >
                     <span className="font-medium text-sm">{c.name_es}</span>
                     <button onClick={(e) => {e.stopPropagation(); handleDeleteCategory(c.id)}} className="opacity-0 group-hover:opacity-100 text-neutral-600 hover:text-red-400 transition" title="Borrar categoría">&times;</button>
                   </div>
                 );
               })}
             </nav>
           )}
         </aside>

         {/* ── MAIN CONTENT (PRODUCTOS) ── */}
         <section className="flex-1 min-w-0">
           {activeCat ? (
             <>
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                 <h2 className="text-2xl font-bold text-white">
                   {categories.find(c => c.key === activeCat)?.name_es || "Productos"}
                 </h2>
                 <button onClick={openCreate} className="px-5 py-2.5 bg-teal-500 text-black font-bold rounded-lg hover:bg-teal-400 hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)]">
                   + Añadir Producto
                 </button>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                 {products.length === 0 && <div className="col-span-full py-12 text-center border border-dashed border-white/10 rounded-2xl text-neutral-500">La categoría está vacía. Añade el primer producto.</div>}
                 
                 {products.map(p => (
                   <div key={p.id} className="group relative bg-[#1a1a1a] border border-white/5 hover:border-white/20 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                     
                     {/* Acciones Rápidas (Aparecen al pasar el mouse) */}
                     <div className="absolute top-2 right-2 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button onClick={() => openEdit(p)} className="w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-xs hover:bg-white hover:text-black transition" title="Editar">✏️</button>
                        <button onClick={() => handleDeleteProduct(p.id)} className="w-8 h-8 rounded-full bg-black/60 backdrop-blur border border-white/10 flex items-center justify-center text-xs hover:bg-red-500 hover:text-white transition" title="Eliminar">🗑️</button>
                     </div>

                     {/* Imagen */}
                     <div className="h-40 bg-black/50 flex items-center justify-center overflow-hidden relative">
                       {hasRealImage(p.image_url) ? (
                         <img src={p.image_url} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" alt={p.name_es} />
                       ) : (
                         <div className="w-16 h-16 text-neutral-700" dangerouslySetInnerHTML={{ __html: cupSVG }} />
                       )}
                       {p.badge && <span className="absolute bottom-2 left-2 bg-teal-500 text-black text-[9px] uppercase font-bold px-2 py-1 rounded-md">{p.badge}</span>}
                     </div>
                     
                     {/* Info */}
                     <div className="p-4 flex flex-col flex-1">
                       <h3 className="font-bold text-white text-lg leading-tight mb-1">{p.name_es}</h3>
                       <p className="text-xs text-neutral-500 line-clamp-2 mb-4" title={p.description_es}>{p.description_es || "Sin descripción"}</p>
                       <div className="mt-auto flex justify-between items-end">
                         <span className="text-teal-400 font-semibold text-lg">S/ {p.price}</span>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </>
           ) : (
             <div className="h-full flex items-center justify-center border border-dashed border-white/10 rounded-3xl p-12 text-center text-neutral-500">
                Selecciona una categoría a la izquierda para empezar a administrar tu menú.
             </div>
           )}
         </section>

       </main>

       {/* ── MODAL FORMULARIO (CREAR/EDITAR) ── */}
       {isFormOpen && (
         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
           <div className="bg-[#1e1e1e] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
             
             <div className="flex justify-between items-center mb-6">
               <h2 className="text-2xl font-bold text-white">
                 {editingProduct ? "Editar Producto" : "Nuevo Producto"}
               </h2>
               <button onClick={() => setIsFormOpen(false)} className="text-neutral-500 hover:text-white transition text-2xl leading-none">&times;</button>
             </div>

             <form onSubmit={handleSaveProduct} className="flex flex-col gap-5">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Nombre (ES) *</label>
                   <input required className="bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-teal-500 focus:bg-black transition" value={nameEs} onChange={e=>setNameEs(e.target.value)} />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Nombre (EN) <span className="text-neutral-600 font-normal">Opcional</span></label>
                   <input className="bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-teal-500 focus:bg-black transition" value={nameEn} onChange={e=>setNameEn(e.target.value)} />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Descripción (ES)</label>
                   <textarea rows="2" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-teal-500 focus:bg-black transition resize-none" value={descEs} onChange={e=>setDescEs(e.target.value)} />
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Descripción (EN)</label>
                   <textarea rows="2" className="bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-teal-500 focus:bg-black transition resize-none" value={descEn} onChange={e=>setDescEn(e.target.value)} />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Precio *</label>
                   <div className="relative">
                     <span className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500 font-bold">S/</span>
                     <input type="number" step="0.01" required className="w-full bg-black/40 border border-white/10 rounded-lg p-3 pl-9 text-white outline-none focus:border-teal-500 focus:bg-black transition" value={price} onChange={e=>setPrice(e.target.value)} />
                   </div>
                 </div>
                 <div className="flex flex-col gap-1.5">
                   <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide">Etiqueta (Badge)</label>
                   <input placeholder="Ej: Nuevo, Promo..." className="bg-black/40 border border-white/10 rounded-lg p-3 text-white outline-none focus:border-teal-500 focus:bg-black transition" value={badge} onChange={e=>setBadge(e.target.value)} />
                 </div>
               </div>

               <div className="flex flex-col gap-1.5 mt-2">
                 <label className="text-xs font-semibold text-neutral-400 uppercase tracking-wide flex justify-between">
                   <span>Imagen del Producto</span>
                   {editingProduct?.image_url && !file && <span className="text-teal-400 normal-case font-normal">Ya tiene imagen. Sube otra para reemplazar.</span>}
                 </label>
                 <label className="flex items-center justify-center w-full h-24 px-4 transition bg-black/20 border-2 border-white/10 border-dashed rounded-xl appearance-none cursor-pointer hover:border-teal-500 hover:bg-black/40 focus:outline-none">
                    <span className="flex items-center space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className="font-medium text-neutral-400">
                          {file ? <span className="text-teal-400">{file.name}</span> : <span>Suelta una imagen o <span className="text-teal-400 underline">haz clic aquí</span></span>}
                        </span>
                    </span>
                    <input type="file" accept="image/*" className="hidden" onChange={e=>setFile(e.target.files[0])} />
                </label>
               </div>

               <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-white/5">
                 <button type="button" disabled={saving} onClick={() => setIsFormOpen(false)} className="px-5 py-2.5 rounded-lg text-neutral-400 font-medium hover:text-white hover:bg-white/5 transition disabled:opacity-50">Cancelar</button>
                 <button type="submit" disabled={saving} className="px-6 py-2.5 rounded-lg bg-teal-500 text-black font-bold hover:bg-teal-400 transition shadow-[0_0_20px_rgba(20,184,166,0.3)] disabled:opacity-50 disabled:shadow-none flex items-center gap-2">
                   {saving ? (
                     <><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Guardando...</>
                   ) : "Guardar Producto"}
                 </button>
               </div>

             </form>
           </div>
         </div>
       )}
     </div>
  );
}
