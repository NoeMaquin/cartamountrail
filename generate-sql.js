const fs = require('fs');

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

let sql = `-- SCRIPT DE MIGRACIÓN DE DATOS (EJECUTAR EN SUPABASE SQL EDITOR)\n\n`;
sql += `-- INSERT CATEGORIES\n`;
let order = 0;
for (const [key, titleEs] of Object.entries(categoryTitles)) {
  const titleEn = dictionary[titleEs] || titleEs;
  sql += `INSERT INTO categories (name_es, name_en, key, "order") VALUES ('${titleEs}', '${titleEn}', '${key}', ${order});\n`;
  order++;
}

sql += `\n-- INSERT PRODUCTS\n`;
for (const [catKey, products] of Object.entries(menuData)) {
  for (const prod of products) {
    const nameEn = dictionary[prod.name] || prod.name;
    const descEn = dictionary[prod.desc] || prod.desc;
    const badge = prod.badge ? `'${prod.badge}'` : 'NULL';
    const escape = (str) => str.replace(/'/g, "''");
    // Usamos la ruta original para las imágenes, porque se asume que las copiamos
    sql += `INSERT INTO products (category_key, name_es, name_en, description_es, description_en, price, image_url, badge) VALUES ('${catKey}', '${escape(prod.name)}', '${escape(nameEn)}', '${escape(prod.desc)}', '${escape(descEn)}', ${prod.price}, '/${prod.img}', ${badge});\n`;
  }
}

fs.writeFileSync('seed.sql', sql);
console.log('SQL generated.');
