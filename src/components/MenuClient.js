"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const coffeeFacts = [
  "El café fue descubierto en Etiopía, cuando un pastor notó que sus cabras bailaban después de comer las bayas de un árbol.",
  "El café es la segunda bebida más consumida en el mundo, después del agua.",
  "Un árbol de café tarda entre 3 y 4 años en dar sus primeros frutos y puede vivir más de 100 años.",
  "La palabra 'café' proviene del árabe qahwah, que originalmente describía un tipo de vino.",
  "El espresso no tiene más cafeína que el café filtrado; su concentración es mayor, pero el volumen es menor.",
  "En japonés, 'kissaten' es el nombre del café tradicional donde la experiencia es tan importante como la bebida.",
  "El café fue prohibido en varios países europeos en el siglo XVII; los líderes temían que impulsara el pensamiento crítico.",
  "Finlandia es el país que más café consume per cápita en el mundo, con más de 12 kg por persona al año.",
  "El cold brew no es café frío: se prepara en agua fría durante 12 a 24 horas, sin calor en ningún momento.",
  "La cereza del café es un fruto: cada baya contiene dos semillas, que son los granos que conocemos.",
  "El café Kopi Luwak, uno de los más caros del mundo, es procesado en el tracto digestivo de la civeta asiática.",
  "El flat white nació en Australia y Nueva Zelanda en la década de 1980, antes de llegar al mundo entero.",
];

// SVG Taza
const cupSVG = `
<svg class="cup-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0 3h2v3h-2M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
</svg>`;

export default function MenuClient({ categories, products }) {
  const [activeCategory, setActiveCategory] = useState(categories[0]?.key || "");
  const [isEnglish, setIsEnglish] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [fact, setFact] = useState("Cargando los mejores sabores de la montaña...");

  useEffect(() => {
    setFact(coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)]);
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const hasRealImage = (url) => url && !url.includes("demo_");

  const activeProducts = products
    .filter((p) => p.category_key === activeCategory)
    .sort((a, b) => {
      const aImg = hasRealImage(a.image_url) ? 1 : 0;
      const bImg = hasRealImage(b.image_url) ? 1 : 0;
      return bImg - aImg;
    });

  return (
    <>
      <div id="preloader" className={showPreloader ? "" : "preloader-hide"}>
        <div className="preloader-inner">
          <img src="/assets/logo.png" alt="Carta Mountrail" className="preloader-logo" />
          <p className="preloader-fact" id="preloader-fact-text">{fact}</p>
          <div className="preloader-bar">
            <div className="preloader-bar-fill"></div>
          </div>
        </div>
      </div>

      <div className="fixed-top-logo">
        <img src="/assets/logo.png" alt="Carta Mountrail" className="header-logo" />
      </div>

      <div className="lang-toggle-container">
        <span className={`lang-label ${!isEnglish ? "active" : ""}`} id="label-es">ES</span>
        <label className="lang-switch">
          <input
            type="checkbox"
            id="langToggle"
            checked={isEnglish}
            onChange={(e) => setIsEnglish(e.target.checked)}
          />
          <span className="lang-slider"></span>
        </label>
        <span className={`lang-label ${isEnglish ? "active" : ""}`} id="label-en">EN</span>
      </div>

      <div className="mountain-footer-container">
        <img src="/assets/Montaña.png" alt="Montaña Continua" />
      </div>

      <div className="app-container">
        <div className="category-slider-container">
          <Swiper
            slidesPerView="auto"
            spaceBetween={12}
            freeMode={true}
            modules={[FreeMode]}
            className="category-slider"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.key} className="!w-auto">
                <div
                  className={`category-pill ${activeCategory === cat.key ? "active" : ""}`}
                  onClick={() => setActiveCategory(cat.key)}
                >
                  {isEnglish ? cat.name_en : cat.name_es}
                </div>
              </SwiperSlide>
            ))}
            {categories.length === 0 && (
              <SwiperSlide className="!w-auto">
                <div className="category-pill active">Sin Categorías</div>
              </SwiperSlide>
            )}
          </Swiper>
        </div>

        <div className="swiper-container">
          {activeProducts.length > 0 ? (
            <Swiper
              effect={"slide"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={20}
              pagination={{ clickable: true }}
              modules={[Pagination]}
              className="w-full pt-4 pb-12"
            >
              {activeProducts.map((product) => (
                <SwiperSlide key={product.id} className="!w-[65vw] !max-w-[260px] !h-auto transition-all duration-500">
                  {({ isActive }) => (
                    <div className={`product-card h-full ${isActive ? "active-card" : "opacity-50 scale-[0.85]"}`}>
                      <div className="product-img-container">
                        {hasRealImage(product.image_url) ? (
                          <img
                            src={product.image_url}
                            alt={isEnglish ? product.name_en : product.name_es}
                            className="product-img-file"
                            onError={(e) => {
                              e.target.outerHTML = cupSVG;
                            }}
                          />
                        ) : (
                          <div dangerouslySetInnerHTML={{ __html: cupSVG }} />
                        )}
                      </div>
                      <div className="product-info">
                        <h3 className="product-name">
                          {isEnglish ? product.name_en : product.name_es}
                          {product.badge && <span className="badge-new">{product.badge}</span>}
                        </h3>
                        <p className="product-desc">
                          {isEnglish ? product.description_en : product.description_es}
                        </p>
                        <div className="product-price">S/ {product.price}</div>
                      </div>
                    </div>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center text-gray-400 mt-10">
              {categories.length === 0 ? "Configura tu menú en el administrador." : "No hay productos aquí aún."}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
