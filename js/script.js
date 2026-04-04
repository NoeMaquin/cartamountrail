// Datos de la Carta (lista definitiva proporcionada por el usuario)
const menuData = {
  jugos: [
    { name: "Jugo Natural (Agua)", desc: "Agua, pulpa a elección (papaya, piña, fresa, mango, maracuya)", price: 13, img: "" },
    { name: "Jugo Natural (Leche)", desc: "Leche, pulpa a elección (papaya, fresa, mango, maracuya)", price: 16, img: "" },
    { name: "Extracto de naranja", desc: "Naranja pura", price: 13, img: "" },
    { name: "Jugo verde", desc: "Espinaca, apio, manzana verde y naranja", price: 17, img: "" },
  ],
  bebidas_frias: [
    { name: "Soda michelada", desc: "Soda, zumo de limón, michelado", price: 10, img: "" },
    { name: "Granizado Brownie", desc: "Leche deslactosada, brownie chocolate, salsa  de chocolate, chantilly", price: 20, img: "" },
    { name: "Limonada natural", desc: "Agua, zumo de limón", price: 12, img: "" },
    { name: "Milo", desc: "Milo, leche", price: 15, img: "" },
  ],
  calientes_sin_cafe: [
    { name: "Chocolate masmelos", desc: "Masmelos, chocolate, leche deslactosada", price: 18, img: "" },
    { name: "Infusión frutas", desc: "Fresa, arándanos, infusión, agua caliente", price: 15, img: "" },
    { name: "Vino caliente", desc: "Vino tinto, canela, whisky, naranja", price: 28, img: "" },
    { name: "Milo caliente", desc: "Milo, leche deslactosada", price: 14, img: "" },
    { name: "Maicena tradicional", desc: "Azúcar, maicena, leche", price: 14, img: "" },
    { name: "Maicena café", desc: "Leche deslactosada, espresso, maicena, leche", price: 16, img: "" },
    { name: "Te matcha", desc: "Te matcha, leche deslactosada", price: 15, img: "" },
  ],
  frias_con_cafe: [
    { name: "Granizado Café", desc: "Leche deslactosada, azúcar, espresso, chantilly", price: 20, img: "" },
    { name: "Affogato", desc: "Helado Vainilla, espresso", price: 16, img: "" },
    { name: "Frapuccino", desc: "Leche deslactosada, espresso, crema de whisky, chantilly, galletas oreo", price: 26, img: "" },
    { name: "Latte frío", desc: "Café, leche", price: 16, img: "" },
    { name: "Latte Macerado", desc: "Espresso, leche deslactosada, licor de elección", price: 25, img: "" },
    { name: "Mountain Coffee", desc: "Cold brew, agua tónica", price: 22, img: "" },
    { name: "Andea Citrus Brew", desc: "Cold brew, soda toronja, miel", price: 24, img: "" },
    { name: "Tropical peak brew", desc: "Cold brew, soda de piña, limón", price: 24, img: "" },
    { name: "Spiced Montain Brew", desc: "Cold brew, ginger beer, canela", price: 24, img: "" },
  ],
  calientes_con_cafe: [
    { name: "Espresso", desc: "Café molido, agua", price: 8, img: "" },
    { name: "Espresso doble", desc: "Café recién molido, agua", price: 14, img: "" },
    { name: "Café Americano", desc: "Espresso, agua", price: 11, img: "" },
    { name: "Espresso machiatto", desc: "Espresso, leche cremada y texturizada", price: 12, img: "" },
    { name: "Capuchino", desc: "Espresso, leche deslactosada, vaso comestible", price: 15, img: "" },
    { name: "Latte", desc: "Espresso, leche deslactosada", price: 16, img: "" },
    { name: "Mocaccino", desc: "Espresso, salsa hersheys, leche deslactosada, cocoa", price: 18, img: "" },
    { name: "Café Misk'i", desc: "Espresso, miel, anís, canela", price: 14, img: "" },
    { name: "Irish Coffee", desc: "Espresso, whiskey, leche deslactosada", price: 26, img: "" },
    { name: "Carajillo", desc: "Espresso, licor (coca, muña o hierbaluisa)", price: 20, img: "" },
    { name: "Capuchino crema cacao/whisky/hierba luisa", desc: "Espresso, leche deslactosada", price: 24, img: "" },
    { name: "Capuchino Alpamayo", desc: "Espresso, leche deslactosada, chantilly, vaso comestible", price: 18, img: "" },
    { name: "Flat White", desc: "Espresso doble, leche deslactosada", price: 16, img: "" },
  ],
  brunch: [
    { name: "Parfait", desc: "Yogurt griego, fresa, plátano, manzana, granola, miel", price: 25, img: "" },
  ],
  postres: [
    { name: "Torta Chocolate", desc: "-", price: 15, img: "" },
    { name: "Torta de zanahoria", desc: "-", price: 15, img: "" },
    { name: "Torta selva negra", desc: "-", price: 15, img: "" },
    { name: "Cheesecake Arándonos", desc: "-", price: 18, img: "" },
    { name: "Cheesecake Maracuya", desc: "-", price: 18, img: "" },
    { name: "Pie de Limón", desc: "-", price: 16, img: "" },
    { name: "Torta chocolate con helado", desc: "Helado de vainilla", price: 22, img: "" },
  ],
  aguas: [
    { name: "Agua con gas Socosani", desc: "", price: 8, img: "" },
    { name: "Agua sin gas Socosani", desc: "", price: 7, img: "" },
    { name: "Soda saborizada", desc: "Toronja o piña", price: 13, img: "" },
    { name: "Powerade 600ml", desc: "Bebida hidratante", price: 6, img: "" },
    { name: "Powerade 1000ml", desc: "Bebida hidratante", price: 9, img: "" },
  ],
  cerveza_sierra_andina: [
    { name: "Inti Golden Ale", desc: "", price: 20, img: "" },
    { name: "Alpamayo Amber Ale", desc: "", price: 20, img: "" },
    { name: "Mama Killa Spice Ale", desc: "", price: 20, img: "" },
    { name: "Huaracina Pale Ale", desc: "", price: 22, img: "" },
    { name: "Chachapoyana Kolsch", desc: "", price: 20, img: "" },
    { name: "Shaman Ipa", desc: "", price: 22, img: "" },
    { name: "Don Juan Porter", desc: "", price: 22, img: "" },
    { name: "Pachacutec Imperial Ale", desc: "", price: 22, img: "" },
    { name: "Chakana Quinoa Ipa", desc: "", price: 20, img: "" },
    { name: "Golden Stout", desc: "", price: 20, img: "" },
    { name: "Black Jesus", desc: "", price: 22, img: "" },
  ],
  sandwiches: [
    { name: "Caprese", desc: "Pan integral/focaccia, queso, albahaca, tomate, pesto", price: 28, img: "" },
    { name: "Pollo al Pesto", desc: "Pan focaccia, pollo, tomate, pesto", price: 30, img: "" },
    { name: "Jamón y queso", desc: "Pan croissant, jamón, queso", price: 20, img: "" },
  ],
};

// SVG de la Silueta de Taza
const cupSVG = `
<svg class="cup-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0 3h2v3h-2M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
</svg>`;

const productList = document.getElementById("product-list");
const categoryPills = document.querySelectorAll(".cat-pill");
const screens = document.querySelectorAll(".screen");

function switchScreen(screenId) {
  screens.forEach((screen) => {
    screen.classList.remove("active");
    if (screen.id === screenId) screen.classList.add("active");
  });
  window.scrollTo(0, 0);
}

function renderProducts(category) {
  const products = menuData[category] || [];
  productList.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const imageHTML = product.img
      ? `<img src="${product.img}" alt="${product.name}" class="product-img-file" onerror="this.parentElement.innerHTML='${cupSVG}'">`
      : cupSVG;

    card.innerHTML = `
            <div class="product-img">${imageHTML}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.desc}</div>
            </div>
            <div class="product-price">S/ ${product.price || '--'}</div>
        `;
    productList.appendChild(card);
  });
}

function selectCategory(category) {
  categoryPills.forEach((pill) => {
    pill.classList.remove("active");
    if (pill.dataset.category === category) pill.classList.add("active");
  });
  renderProducts(category);
  switchScreen("screen-home");
}

categoryPills.forEach((pill) => {
  pill.addEventListener("click", () => {
    categoryPills.forEach((p) => p.classList.remove("active"));
    pill.classList.add("active");
    renderProducts(pill.dataset.category);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  renderProducts("calientes_con_cafe");

  const heroes = document.querySelectorAll(".hero");
  const catStrips = document.querySelectorAll(".cat-strip");
  let ticking = false;

  // Función para controlar el scroll del header
  function updateHeroState() {
    heroes.forEach((hero) => {
      if (window.scrollY > 100) {
        hero.classList.add("scrolled");
      } else {
        hero.classList.remove("scrolled");
      }
      // Añadir / quitar la clase screen-scrolled en la pantalla padre para ajustar paddings automáticamente
      const parentScreen = hero.closest('.screen');
      if (parentScreen) {
        if (hero.classList.contains('scrolled')) parentScreen.classList.add('screen-scrolled');
        else parentScreen.classList.remove('screen-scrolled');
      }
    });
    // ya usamos la clase screen-scrolled para controlar el top vía CSS, no ajustar inline styles aquí

    ticking = false;
  }

  // Event listener con throttling para mejor rendimiento
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeroState);
        ticking = true;
      }
    },
    { passive: true },
  );

  // Inicializar estado del hero
  updateHeroState();
});
