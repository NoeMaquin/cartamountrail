// Datos de la Carta (Simplificados sin emoticones)
const menuData = {
    bebidas_frias: [
        { name: "Soda Michelada", desc: "Soda, hielo, zumo de limón, michelado", img: "assets/img/soda-michelada.jpg" },
        { name: "Granizado Brownie", desc: "Leche deslactosada, brownie chocolate, chantilly", img: "assets/img/granizado-brownie.jpg" },
        { name: "Limonada Natural", desc: "Agua, zumo de limón, hielo, neutro", img: "" },
        { name: "Jugo Natural", desc: "Agua o leche, pulpa a elección", img: "" },
        { name: "Milo Helado", desc: "Milo, leche, hielo", img: "" }
    ],
    calientes_sin_cafe: [
        { name: "Chocolate Marshmallow", desc: "Chocolate, marshmallow, leche cremada", img: "assets/img/choco-marsh.jpg" },
        { name: "Infusión de Frutas", desc: "Fresa, arándanos, agua caliente", img: "" },
        { name: "Vino Caliente", desc: "Vino tinto, canela, whisky, naranja", img: "" },
        { name: "Milo Caliente", desc: "Milo, leche cremada y texturizada", img: "" },
        { name: "Maicena Tradicional", desc: "Azúcar, maicena, leche", img: "" },
        { name: "Maicena Café", desc: "Milo, espresso, maicena, leche", img: "" },
        { name: "Té Matcha", desc: "Té matcha, leche cremada", img: "" },
        { name: "Infusión de Altura", desc: "Licor de coca, miel de jengibre, naranja", img: "" }
    ],
    frias_con_cafe: [
        { name: "Granizado Café", desc: "Espresso largo, hielo, chantilly", img: "assets/img/granizado-cafe.jpg" },
        { name: "Affogato", desc: "Helado vainilla, espresso", img: "" },
        { name: "Frapuccino Oreo", desc: "Espresso, crema de whisky, galletas oreo", img: "" },
        { name: "Limonada Café", desc: "Espresso, zumo de limón, sirope de cedrón", img: "" },
        { name: "Latte Frío", desc: "Café, leche, hielo", img: "" },
        { name: "Latte Macerado", desc: "Espresso, leche, licor de elección", img: "" },
        { name: "Mountain Coffee", desc: "Cold brew, agua tónica, naranja deshidratada", img: "" },
        { name: "Andea Citrus Brew", desc: "Cold brew, pink soda, miel", img: "" },
        { name: "Tropical Peak Brew", desc: "Cold brew, pineapple punch, piña", img: "" },
        { name: "Spiced Mountain Brew", desc: "Cold brew, ginger beer, canela", img: "" }
    ],
    calientes_con_cafe: [
        { name: "Espresso", desc: "Café molido, agua (corto)", img: "assets/img/espresso.jpg" },
        { name: "Café Americano", desc: "Espresso, agua", img: "" },
        { name: "Capuchino", desc: "Espresso, leche cremada y texturizada", img: "" },
        { name: "Latte", desc: "Espresso, leche cremada y texturizada", img: "" },
        { name: "Mocaccino", desc: "Espresso, salsa hersheys, cocoa", img: "" },
        { name: "Café Misk’i", desc: "Espresso, miel, anís, canela", img: "" },
        { name: "Irish Coffee", desc: "Espresso, whiskey, chantilly", img: "" },
        { name: "Capuchino Saborizado", desc: "Vainilla o Caramelo", img: "" },
        { name: "Carajillo", desc: "Espresso, ron, sirope de panela", img: "" },
        { name: "Capuchino Especial", desc: "Crema de cacao, whisky o hierba luisa", img: "" },
        { name: "Espresso Doble", desc: "Doble carga de café recién molido", img: "" },
        { name: "Espresso Machiatto", desc: "Espresso, mancha de leche cremada", img: "" },
        { name: "Capuchino Nevado", desc: "Espresso, leche, crema chantilly", img: "" },
        { name: "Citrus Andino Latte", desc: "Espresso, leche, sirope de cedrón", img: "" },
        { name: "Flat White", desc: "Espresso doble, leche cremada", img: "" }
    ],
    brunch: [
        { name: "Parfait", desc: "Yogurt griego, frutas, granola, miel", img: "assets/img/parfait.jpg" }
    ],
    proximamente: [
        { name: "Andes Fresh Coffee", desc: "Cold brew, sirope de muña, limón", img: "" },
        { name: "Kawsay Coffee", desc: "Cold brew, sirope coca, ginger, toronja", img: "" }
    ]
};

// SVG de la Silueta de Taza
const cupSVG = `
<svg class="cup-icon-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 21h18v-2H2M20 8h-2V5h2m0 3h2v3h-2M5 5h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"/>
</svg>`;

const productList = document.getElementById('product-list');
const categoryPills = document.querySelectorAll('.cat-pill');
const screens = document.querySelectorAll('.screen');

function switchScreen(screenId) {
    screens.forEach(screen => {
        screen.classList.remove('active');
        if (screen.id === screenId) screen.classList.add('active');
    });
    window.scrollTo(0, 0);
}

function renderProducts(category) {
    const products = menuData[category] || [];
    productList.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        const imageHTML = product.img 
            ? `<img src="${product.img}" alt="${product.name}" class="product-img-file" onerror="this.parentElement.innerHTML='${cupSVG}'">`
            : cupSVG;

        card.innerHTML = `
            <div class="product-img">${imageHTML}</div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.desc}</div>
            </div>
            <div class="product-price">S/ --</div>
        `;
        productList.appendChild(card);
    });
}

function selectCategory(category) {
    categoryPills.forEach(pill => {
        pill.classList.remove('active');
        if (pill.dataset.category === category) pill.classList.add('active');
    });
    renderProducts(category);
    switchScreen('screen-home');
}

categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
        categoryPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        renderProducts(pill.dataset.category);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    renderProducts('calientes_con_cafe');

    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            hero.classList.add('scrolled');
        } else {
            hero.classList.remove('scrolled');
        }
    });
});
