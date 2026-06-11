// Datos de la Carta
const menuData = {
  calientes_con_cafe: [
    { name: "Espresso", desc: "Café molido, agua", price: 8, img: "assets/demo_coffee.png" },
    { name: "Espresso doble", desc: "Café recién molido, agua", price: 14, img: "assets/demo_coffee.png" },
    { name: "Café Americano", desc: "Espresso, agua", price: 11, img: "assets/demo_coffee.png" },
    { name: "Espresso machiatto", desc: "Espresso, leche cremada y texturizada", price: 12, img: "assets/demo_coffee.png" },
    { name: "Capuchino", desc: "Espresso, leche deslactosada, vaso comestible", price: 15, img: "assets/demo_coffee.png" },
    { name: "Latte", desc: "Espresso, leche deslactosada", price: 16, img: "assets/demo_coffee.png" },
    { name: "Mocaccino", desc: "Espresso, salsa hersheys, leche deslactosada, cocoa", price: 18, img: "assets/demo_coffee.png" },
    { name: "Café Misk'i", desc: "Espresso, miel, anís, canela", price: 14, img: "assets/demo_coffee.png" },
    { name: "Carajillo", desc: "Espresso, licor (coca, muña o hierbaluisa)", price: 20, img: "assets/demo_coffee.png" },
    { name: "Capuchino crema cacao/whisky/hierba luisa", desc: "Espresso, leche deslactosada", price: 24, img: "assets/demo_coffee.png" },
    { name: "Capuchino Alpamayo", desc: "Espresso, leche deslactosada, chantilly, vaso comestible", price: 18, img: "assets/demo_coffee.png" },
    { name: "Flat White", desc: "Espresso doble, leche deslactosada", price: 16, img: "assets/demo_coffee.png" },
  ],
  cafes_filtrados: [
    { name: "V60 1 taza", desc: "", price: 15, img: "assets/demo_coffee.png" },
    { name: "Origami 1 taza", desc: "", price: 15, img: "assets/demo_coffee.png" },
    { name: "Prensa Francesa 1 taza", desc: "", price: 15, img: "assets/demo_coffee.png" },
    { name: "V60 3 tazas", desc: "", price: 35, img: "assets/demo_coffee.png" },
    { name: "Origami 3 tazas", desc: "", price: 35, img: "assets/demo_coffee.png" },
    { name: "Aeropress 3 tazas", desc: "", price: 35, img: "assets/demo_coffee.png" },
    { name: "Prensa Francesa 3 tazas", desc: "", price: 35, img: "assets/demo_coffee.png" },
  ],
  jugos: [
    { name: "Jugo Natural (Agua)", desc: "Agua, pulpa a elección (papaya, piña, fresa, mango, maracuya)", price: 13, img: "assets/demo_smoothie.png" },
    { name: "Jugo Natural (Leche)", desc: "Leche, pulpa a elección (papaya, fresa, mango, maracuya)", price: 16, img: "assets/demo_smoothie.png" },
    { name: "Jugo de naranja", desc: "", price: 13, img: "assets/demo_smoothie.png" },
  ],
  bebidas_frias: [
    { name: "Soda michelada", desc: "Soda, zumo de limón, michelado", price: 10, img: "assets/demo_smoothie.png" },
    { name: "Limonada natural", desc: "Agua, zumo de limón", price: 12, img: "assets/demo_smoothie.png" },
    { name: "Milo", desc: "Milo, leche", price: 15, img: "assets/demo_smoothie.png" },
    { name: "Smoothie Energy green", desc: "Palta, plátano, hierbabuena, yogurt griego", price: 20, img: "assets/demo_smoothie.png", badge: "Nuevo" },
    { name: "Pink Matcha", desc: "Fresa, matcha", price: 20, img: "assets/demo_smoothie.png", badge: "Nuevo" },
  ],
  calientes_sin_cafe: [
    { name: "Chocolate masmelos", desc: "Masmelos, chocolate, leche deslactosada", price: 18, img: "assets/demo_coffee.png" },
    { name: "Infusión frutas", desc: "Fresa, arándanos, infusión, agua caliente", price: 15, img: "assets/demo_smoothie.png" },
    { name: "Vino caliente", desc: "Vino tinto, canela, whisky, naranja", price: 28, img: "assets/demo_smoothie.png" },
    { name: "Milo caliente", desc: "Milo, leche deslactosada", price: 14, img: "assets/demo_coffee.png" },
    { name: "Maicena tradicional", desc: "Azúcar, maicena, leche", price: 14, img: "assets/demo_smoothie.png" },
    { name: "Maicena café", desc: "Leche deslactosada, espresso, maicena, leche", price: 16, img: "assets/demo_coffee.png" },
    { name: "Te matcha", desc: "Te matcha, leche deslactosada", price: 15, img: "assets/demo_smoothie.png" },
  ],
  frias_con_cafe: [
    { name: "Granizado Café", desc: "Leche deslactosada, azúcar, espresso, chantilly", price: 20, img: "assets/demo_coffee.png" },
    { name: "Affogato", desc: "Helado Vainilla, espresso", price: 16, img: "assets/demo_coffee.png" },
    { name: "Frapuccino", desc: "Leche deslactosada, espresso, crema de whisky, chantilly, galletas oreo", price: 26, img: "assets/demo_coffee.png" },
    { name: "Latte frío", desc: "Café, leche", price: 16, img: "assets/demo_coffee.png" },
    { name: "Latte Macerado", desc: "Espresso, leche deslactosada, licor de elección", price: 25, img: "assets/demo_coffee.png" },
    { name: "Mountain Coffee", desc: "Cold brew, agua tónica", price: 22, img: "assets/demo_coffee.png" },
    { name: "Andea Citrus Brew", desc: "Cold brew, soda toronja, miel", price: 24, img: "assets/demo_coffee.png" },
    { name: "Tropical peak brew", desc: "Cold brew, soda de piña, limón", price: 24, img: "assets/demo_coffee.png" },
    { name: "Spiced Montain Brew", desc: "Cold brew, ginger beer, canela", price: 24, img: "assets/demo_coffee.png" },
  ],
  brunch: [
    { name: "Parfait", desc: "Yogurt griego, fresa, plátano, manzana, granola, miel", price: 25, img: "assets/demo_dessert.png" },
  ],
  postres: [
    { name: "Torta Chocolate", desc: "", price: 15, img: "assets/demo_dessert.png" },
    { name: "Torta de zanahoria", desc: "", price: 15, img: "assets/demo_dessert.png" },
    { name: "Torta de maracuya y chocolate", desc: "", price: 18, img: "assets/demo_dessert.png" },
    { name: "Pie de Limón", desc: "", price: 16, img: "assets/demo_dessert.png" },
    { name: "Torta chocolate con helado", desc: "Helado de vainilla", price: 22, img: "assets/demo_dessert.png" },
  ],
  aguas: [
    { name: "URQUPUSHÚN-UCHCU PEDRO(Mango-Maracuya-Tumbo)", desc: "", price: 15, img: "assets/demo_smoothie.png" },
    { name: "Agua con gas Socosani", desc: "", price: 8, img: "assets/demo_smoothie.png" },
    { name: "Agua sin gas Socosani", desc: "", price: 7, img: "assets/demo_smoothie.png" },
    { name: "Soda saborizada", desc: "Toronja o piña", price: 13, img: "assets/demo_smoothie.png" },
    { name: "Powerade 600ml", desc: "Bebida hidratante", price: 6, img: "assets/demo_smoothie.png" },
    { name: "Powerade 1000ml", desc: "Bebida hidratante", price: 9, img: "assets/demo_smoothie.png" },
  ],
  cerveza_sierra_andina: [
    { name: "Inti Golden Ale", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Alpamayo Amber Ale", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Mama Killa Spice Ale", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Huaracina Pale Ale", desc: "", price: 22, img: "assets/demo_smoothie.png" },
    { name: "Chachapoyana Kolsch", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Shaman Ipa", desc: "", price: 22, img: "assets/demo_smoothie.png" },
    { name: "Don Juan Porter", desc: "", price: 22, img: "assets/demo_smoothie.png" },
    { name: "Pachacutec Imperial Ale", desc: "", price: 22, img: "assets/demo_smoothie.png" },
    { name: "Chakana Quinoa Ipa", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Golden Stout", desc: "", price: 20, img: "assets/demo_smoothie.png" },
    { name: "Black Jesus", desc: "", price: 22, img: "assets/demo_smoothie.png" },
  ],
  sandwiches: [
    { name: "Caprese", desc: "Pan integral/focaccia, queso, albahaca, tomate, pesto", price: 28, img: "assets/demo_dessert.png" },
    { name: "Pollo al Pesto", desc: "Pan focaccia, pollo, tomate, pesto", price: 30, img: "assets/demo_dessert.png" },
    { name: "Jamón y queso", desc: "Pan croissant, jamón, queso", price: 20, img: "assets/demo_dessert.png" },
  ],
};

const categoryTitles = {
  calientes_con_cafe: "CAFÉ CALIENTE",
  cafes_filtrados: "CAFÉS FILTRADOS",
  jugos: "JUGOS",
  bebidas_frias: "BEBIDAS FRÍAS",
  calientes_sin_cafe: "CALIENTES SIN CAFÉ",
  frias_con_cafe: "FRÍAS CON CAFÉ",
  brunch: "BRUNCH",
  postres: "POSTRES",
  aguas: "BEBIDAS",
  cerveza_sierra_andina: "CERVEZAS SIERRA ANDINA",
  sandwiches: "SÁNDWICHES"
};

// SVG de la Silueta de Taza
const cupSVG = `
<svg class="cup-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0 3h2v3h-2M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
</svg>`;

window.handleImgError = function(el) {
  el.outerHTML = cupSVG;
};

let swiperInstance = null;

function renderCategory(categoryKey) {
  const products = menuData[categoryKey] || [];
  const swiperWrapper = document.getElementById("swiper-wrapper");
  swiperWrapper.innerHTML = "";

  products.forEach((product) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";

    const imageHTML = product.img
      ? `<img src="${product.img}" alt="${product.name}" class="product-img-file" onerror="handleImgError(this)">`
      : cupSVG;
      
    const badgeHTML = product.badge ? `<span class="badge-new">${product.badge}</span>` : '';

    slide.innerHTML = `
      <div class="product-card">
        <div class="product-img-container">${imageHTML}</div>
        <div class="product-info">
          <h3 class="product-name">${product.name} ${badgeHTML}</h3>
          <p class="product-desc">${product.desc}</p>
        </div>
        <div class="product-price">S/ ${product.price}</div>
      </div>
    `;
    swiperWrapper.appendChild(slide);
  });

  if (swiperInstance) {
    swiperInstance.destroy(true, true);
  }

  // Initialize Swiper
  swiperInstance = new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 40,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
  
  // Re-apply translation if English is active
  const langToggle = document.getElementById("langToggle");
  if (langToggle && langToggle.checked) {
      if(typeof translateMenu === 'function') translateMenu(true);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const categorySlider = document.getElementById("category-slider");
  let firstKey = "calientes_con_cafe";
  
  // Create Options (Pills)
  for (const [key, title] of Object.entries(categoryTitles)) {
    const pill = document.createElement("div");
    pill.className = "category-pill";
    pill.dataset.value = key;
    pill.textContent = title;
    pill.classList.add("translate-me"); // for translation logic
    
    if (key === firstKey) {
        pill.classList.add("active");
    }
    
    categorySlider.appendChild(pill);
  }

  const pillsNodeList = document.querySelectorAll(".category-pill");

  // Select Option
  pillsNodeList.forEach(pill => {
    pill.addEventListener("click", function() {
      pillsNodeList.forEach(p => p.classList.remove("active"));
      this.classList.add("active");
      
      const value = this.dataset.value;
      
      // Update UI
      renderCategory(value);
      
      // Smooth scroll pill into view
      this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // Render initial category
  renderCategory(firstKey);
});

// ============================================
// Lógica de Precarga y Traducción
// ============================================
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

document.addEventListener("DOMContentLoaded", () => {
  const factEl = document.getElementById("preloader-fact-text");
  if (factEl) {
    factEl.textContent = coffeeFacts[Math.floor(Math.random() * coffeeFacts.length)];
  }

  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("preloader-hide");
      setTimeout(() => preloader.remove(), 700);
    }, 5000);
  }

  const langToggle = document.getElementById("langToggle");
  const labelEs = document.getElementById("label-es");
  const labelEn = document.getElementById("label-en");

  const dictionary = {
    // Titles
    "CAFÉ CALIENTE": "HOT COFFEE",
    "CAFÉS FILTRADOS": "FILTERED COFFEES",
    "JUGOS": "JUICES",
    "BEBIDAS FRÍAS": "COLD DRINKS",
    "CALIENTES SIN CAFÉ": "HOT WHIT OUT COFFEE",
    "FRÍAS CON CAFÉ": "COLD WHIT COFFEE",
    "BRUNCH": "BRUNCH",
    "POSTRES": "DESSERTS",
    "BEBIDAS": "DRINKS (WATER)",
    "CERVEZAS SIERRA ANDINA": "SIERRA ANDINA BEERS",
    "SÁNDWICHES": "SANDWICHES",

    // Jugos
    "Jugo Natural (Agua)": "Natural Juice (Water)",
    "Agua, pulpa a elección (papaya, piña, fresa, mango, maracuya)": "Water, choice of pulp (papaya, pineapple, strawberry, mango, passion fruit)",
    "Jugo Natural (Leche)": "Natural Juice (Milk)",
    "Leche, pulpa a elección (papaya, fresa, mango, maracuya)": "Milk, choice of pulp (papaya, strawberry, mango, passion fruit)",
    "Jugo de naranja": "Orange Juice",

    // Bebidas frias
    "Soda michelada": "Michelada Soda",
    "Soda, zumo de limón, michelado": "Soda, lemon juice, michelado rim",
    "Limonada natural": "Natural Lemonade",
    "Agua, zumo de limón": "Water, lemon juice",
    "Milo": "Milo",
    "Milo, leche": "Milo, milk",
    "Smoothie Energy green": "Energy Green Smoothie",
    "Palta, plátano, hierbabuena, yogurt griego": "Avocado, banana, peppermint, greek yogurt",
    "Pink Matcha": "Pink Matcha",
    "Fresa, matcha": "Strawberry, matcha",

    // Calientes sin cafe
    "Chocolate masmelos": "Marshmallow Chocolate",
    "Masmelos, chocolate, leche deslactosada": "Marshmallows, chocolate, lactose-free milk",
    "Infusión frutas": "Fruit Infusion",
    "Fresa, arándanos, infusión, agua caliente": "Strawberry, blueberries, infusion, hot water",
    "Vino caliente": "Mulled Wine",
    "Vino tinto, canela, whisky, naranja": "Red wine, cinnamon, whiskey, orange",
    "Milo caliente": "Hot Milo",
    "Milo, leche deslactosada": "Milo, lactose-free milk",
    "Maicena tradicional": "Traditional Cornstarch",
    "Azúcar, maicena, leche": "Sugar, cornstarch, milk",
    "Maicena café": "Coffee Cornstarch",
    "Leche deslactosada, espresso, maicena, leche": "Lactose-free milk, espresso, cornstarch, milk",
    "Te matcha": "Matcha Tea",
    "Te matcha, leche deslactosada": "Matcha tea, lactose-free milk",

    // Frias con cafe
    "Granizado Café": "Coffee Slush",
    "Leche deslactosada, azúcar, espresso, chantilly": "Lactose-free milk, sugar, espresso, whipped cream",
    "Affogato": "Affogato",
    "Helado Vainilla, espresso": "Vanilla ice cream, espresso",
    "Frapuccino": "Frappuccino",
    "Leche deslactosada, espresso, crema de whisky, chantilly, galletas oreo": "Lactose-free milk, espresso, Irish cream, whipped cream, oreo cookies",
    "Latte frío": "Iced Latte",
    "Café, leche": "Coffee, milk",
    "Latte Macerado": "Macerated Latte",
    "Espresso, leche deslactosada, licor de elección": "Espresso, lactose-free milk, liqueur of choice",
    "Mountain Coffee": "Mountain Coffee",
    "Cold brew, agua tónica": "Cold brew, tonic water",
    "Andea Citrus Brew": "Andean Citrus Brew",
    "Cold brew, soda toronja, miel": "Cold brew, grapefruit soda, honey",
    "Tropical peak brew": "Tropical Peak Brew",
    "Cold brew, soda de piña, limón": "Cold brew, pineapple soda, lemon",
    "Spiced Montain Brew": "Spiced Mountain Brew",
    "Cold brew, ginger beer, canela": "Cold brew, ginger beer, cinnamon",

    // Cafe Caliente
    "Espresso": "Espresso",
    "Café molido, agua": "Ground coffee, water",
    "Espresso doble": "Double Espresso",
    "Café recién molido, agua": "Freshly ground coffee, water",
    "Café Americano": "Americano",
    "Espresso, agua": "Espresso, water",
    "Espresso machiatto": "Espresso Macchiato",
    "Espresso, leche cremada y texturizada": "Espresso, creamy and textured milk",
    "Capuchino": "Cappuccino",
    "Espresso, leche deslactosada, vaso comestible": "Espresso, lactose-free milk, edible cup",
    "Latte": "Latte",
    "Espresso, leche deslactosada": "Espresso, lactose-free milk",
    "Mocaccino": "Mochaccino",
    "Espresso, salsa hersheys, leche deslactosada, cocoa": "Espresso, Hershey's sauce, lactose-free milk, cocoa",
    "Café Misk'i": "Misk'i Coffee",
    "Espresso, miel, anís, canela": "Espresso, honey, anise, cinnamon",
    "Carajillo": "Carajillo",
    "Espresso, licor (coca, muña o hierbaluisa)": "Espresso, liquor (coca, muña or lemongrass)",
    "Capuchino crema cacao/whisky/hierba luisa": "Cappuccino cocoa/whiskey/lemongrass cream",
    "Capuchino Alpamayo": "Alpamayo Cappuccino",
    "Espresso, leche deslactosada, chantilly, vaso comestible": "Espresso, lactose-free milk, whipped cream, edible cup",
    "Flat White": "Flat White",
    "Espresso doble, leche deslactosada": "Double espresso, lactose-free milk",
    
    // Filtrados
    "V60 1 taza": "V60 1 cup",
    "Origami 1 taza": "Origami 1 cup",
    "Prensa Francesa 1 taza": "French Press 1 cup",
    "V60 3 tazas": "V60 3 cups",
    "Origami 3 tazas": "Origami 3 cups",
    "Aeropress 3 tazas": "Aeropress 3 cups",
    "Prensa Francesa 3 tazas": "French Press 3 cups",

    // Brunch
    "Parfait": "Parfait",
    "Yogurt griego, fresa, plátano, manzana, granola, miel": "Greek yogurt, strawberry, banana, apple, granola, honey",

    // Postres
    "Torta Chocolate": "Chocolate Cake",
    "Torta de zanahoria": "Carrot Cake",
    "Torta de maracuya y chocolate": "Passion Fruit & Chocolate Cake",
    "Pie de Limón": "Lemon Pie",
    "Torta chocolate con helado": "Chocolate Cake with Ice Cream",

    // Bebidas
    "URQUPUSHÚN-UCHCU PEDRO(Mango-Maracuya-Tumbo)": "URQUPUSHÚN-UCHCU PEDRO (Mango-Passion fruit-Banana passionfruit)",
    "Agua con gas Socosani": "Sparkling Water Socosani",
    "Agua sin gas Socosani": "Still Water Socosani",
    "Soda saborizada": "Flavored Soda",
    "Toronja o piña": "Grapefruit or pineapple",
    "Powerade 600ml": "Powerade 600ml",
    "Bebida hidratante": "Hydrating drink",
    "Powerade 1000ml": "Powerade 1000ml",

    // Cervezas Sierra Andina
    "Inti Golden Ale": "Inti Golden Ale",
    "Alpamayo Amber Ale": "Alpamayo Amber Ale",
    "Mama Killa Spice Ale": "Mama Killa Spice Ale",
    "Huaracina Pale Ale": "Huaracina Pale Ale",
    "Chachapoyana Kolsch": "Chachapoyana Kolsch",
    "Shaman Ipa": "Shaman Ipa",
    "Don Juan Porter": "Don Juan Porter",
    "Pachacutec Imperial Ale": "Pachacutec Imperial Ale",
    "Chakana Quinoa Ipa": "Chakana Quinoa Ipa",
    "Golden Stout": "Golden Stout",
    "Black Jesus": "Black Jesus",

    // Sandwiches
    "Caprese": "Caprese",
    "Pan integral/focaccia, queso, albahaca, tomate, pesto": "Whole wheat/focaccia bread, cheese, basil, tomato, pesto",
    "Pollo al Pesto": "Pesto Chicken",
    "Pan focaccia, pollo, tomate, pesto": "Focaccia bread, chicken, tomato, pesto",
    "Jamón y queso": "Ham and Cheese",
    "Pan croissant, jamón, queso": "Croissant bread, ham, cheese",
  };

  const reverseDictionary = Object.entries(dictionary).reduce(
    (acc, [es, en]) => {
      acc[en] = es;
      return acc;
    },
    {}
  );

  const getTranslatableElements = () => document.querySelectorAll(".translate-me, .product-name, .product-desc");

  window.translateMenu = function(isEnglish) {
    const activeDict = isEnglish ? dictionary : reverseDictionary;
    const elements = getTranslatableElements();

    elements.forEach((el) => {
      let textNode = null;
      for (const node of el.childNodes) {
        if (node.nodeType === 3 && node.nodeValue.trim().length > 0) {
          textNode = node;
          break;
        }
      }
      
      if(textNode) {
        let textToFind = textNode.nodeValue.trim();
        if (activeDict[textToFind]) {
          textNode.nodeValue = activeDict[textToFind] + " ";
        }
      } else {
        const textToFind = el.textContent.trim();
        if (activeDict[textToFind]) {
          el.textContent = activeDict[textToFind];
        }
      }
    });
  };

  if (langToggle) {
    langToggle.addEventListener("change", (e) => {
      if (e.target.checked) {
        labelEs.classList.remove("active");
        labelEn.classList.add("active");
        window.translateMenu(true);
      } else {
        labelEn.classList.remove("active");
        labelEs.classList.add("active");
        window.translateMenu(false);
      }
    });
  }
});
