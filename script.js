document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const categoryItems = document.querySelectorAll('.category-item');
    const header = document.querySelector('header');
    const searchInput = document.getElementById('searchInput');
    const cartCountElement = document.getElementById('cart-item-count');
    const cartCountHeader = document.getElementById('cart-item-count-header');
    const whatsappNumber = '22667472504';

    // Nouvelles variables pour la gestion des avis
    const avisForm = document.getElementById('avis-form');
    const avisInput = document.getElementById('avis-input');
    const avisList = document.getElementById('avis-list');

    // Placeholders dynamiques pour la barre de recherche
    const placeholders = [
        "Rechercher des produits...",
        "Téléphones, écouteurs, tablettes...",
        "Power banks, chargeurs, câbles...",
        "Montres connectées, gadgets...",
        "Accessoires PC, jeux, gaming..."
    ];
    let placeholderIndex = 0;

    const updatePlaceholder = () => {
        searchInput.placeholder = placeholders[placeholderIndex];
        placeholderIndex = (placeholderIndex + 1) % placeholders.length;
    };

    setInterval(updatePlaceholder, 3000);
    updatePlaceholder();

    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // --- Fonctions de gestion du panier (stockage local) ---
    const getCart = () => {
        try {
            return JSON.parse(localStorage.getItem('cart')) || [];
        } catch (e) {
            console.error("Erreur de parsing du panier du Local Storage:", e);
            return [];
        }
    };

    const saveCart = (cart) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    const addToCart = (product) => {
        const cart = getCart();
        const existingItemIndex = cart.findIndex(item => item.id === product.id);

        if (existingItemIndex > -1) {
            cart[existingItemIndex].quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        saveCart(cart);
    };

    const updateCartCount = () => {
        const cart = getCart();
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

        if (cartCountElement) {
            cartCountElement.textContent = totalItems;
            if (totalItems > 0) {
                cartCountElement.classList.add('visible');
            } else {
                cartCountElement.classList.remove('visible');
            }
        }
        if (cartCountHeader) {
            cartCountHeader.textContent = totalItems;
            if (totalItems > 0) {
                cartCountHeader.classList.add('visible');
            } else {
                cartCountHeader.classList.remove('visible');
            }
        }
    };

const allProductsData = [
    // Téléphones & Tablettes (20 produits)
    { id: 'a1', name: "Tecno Camon 40 pro 265GB ", image: "a1.jpg", price: "145 000 FCFA", category: "telephones_tablettes" },
    { id: 'a2', name: "Redmi A3", image: "a2.jpg", price: "50 000 FCFA", category: "telephones_tablettes" },
    { id: 'a3', name: "Samsung Galaxy A25 5G", image: "a3.jpg", price: "155 000 FCFA", category: "telephones_tablettes" },
    { id: 'a4', name: "Tecno Camon 40", image: "a4.jpg", price: "125 000 FCFA", category: "telephones_tablettes" },
    { id: 'a5', name: "Redmi Note 14", image: "a5.jpg", price: "98 000 FCFA", category: "telephones_tablettes" },
    { id: 'a6', name: "Tecno Spark 40 128GB", image: "a6.jpg", price: "60 000 FCFA", category: "telephones_tablettes" },
    { id: 'a7', name: "Infinix Smart 9 128GB", image: "a7.jpg", price: "55 000 FCFA", category: "telephones_tablettes" },
    { id: 'a8', name: "Itel A80", image: "a8.jpg", price: "45 000 FCFA", category: "telephones_tablettes" },
    { id: 'a9', name: "Infinix hot 60i", image: "a9.jpg", price: "60 000 FCFA", category: "telephones_tablettes" },
    { id: 'a10', name: "Tecno Spark 40 256GB", image: "a10.jpg", price: "75 000 FCFA", category: "telephones_tablettes" },
    { id: 'a11', name: "Redmi 13C 128GB", image: "a11.jpg", price: "55 000 FCFA", category: "telephones_tablettes" },
    { id: 'a12', name: "Redmi Note 14", image: "a12.jpg", price: "125 000 FCFA", category: "telephones_tablettes" },
    { id: 'a13', name: "Tecno Pop 10 128GB", image: "a13.jpg", price: "52 000 FCFA", category: "telephones_tablettes" },
    { id: 'a14', name: "Redmi Note Pro+ 512GB", image: "a14.jpg", price: "210 000 FCFA", category: "telephones_tablettes" },
    { id: 'a15', name: "Note 14 Pro+ 256GB", image: "a15.jpg", price: "180 000 FCFA", category: "telephones_tablettes" },
    { id: 'a16', name: "Redmi 14C 128GB ", image: "a16.jpg", price: "59 000 FCFA", category: "telephones_tablettes" },
    { id: 'a17', name: "Spark GO 1 128GB", image: "a17.jpg", price: "57 000 FCFA", category: "telephones_tablettes" },
    { id: 'a18', name: "Itel A70 128GB", image: "a18.jpg", price: "47 000 FCFA", category: "telephones_tablettes" },
    { id: 'a19', name: "Tecno Pop 10C 64GB ", image: "a19.jpg", price: "45 000 FCFA", category: "telephones_tablettes" },
    { id: 'a20', name: "Infinix Smart9 64GB", image: "a20.jpg", price: "47 000 FCFA", category: "telephones_tablettes" },
    { id: 'a21', name: "Villaon V40 34GB", image: "a21.jpg", price: "30 000 FCFA", category: "telephones_tablettes" },
    { id: 'a22', name: "Itel A06 64GB", image: "a22.jpg", price: "37 000 FCFA", category: "telephones_tablettes" },
    { id: 'a23', name: "Samsung Galaxy A05", image: "a23.jpg", price: "70 000 FCFA", category: "telephones_tablettes" },
    { id: 'a24', name: "Infinix Smart10 128GB", image: "a24.jpg", price: "54 000 FCFA", category: "telephones_tablettes" },
    { id: 'a25', name: "Samsung Galaxy A14", image: "a25.jpg", price: "70 000 FCFA", category: "telephones_tablettes" },
    { id: 'a26', name: "Itel A50 64GB", image: "a26.jpg", price: "42 000 FCFA", category: "telephones_tablettes" },
    { id: 'a27', name: "Tecno Spark 30 Transformers 256GB", image: "a27.jpg", price: "93 000 FCFA", category: "telephones_tablettes" },
    { id: 'a28', name: "Redmi Note 13 Pro 512GB", image: "a28.jpg", price: "170 000 FCFA", category: "telephones_tablettes" },
    { id: 'a29', name: "Tecno Pop 10 128GB", image: "a29.jpg", price: "52 000 FCFA", category: "telephones_tablettes" },
    { id: 'a30', name: "Samsung Galaxy A16 128GB", image: "a31.jpg", price: "76 000 FCFA", category: "telephones_tablettes" },
    { id: 'a32', name: "Itel A90 128GB", image: "a32.jpg", price: "46 000 FCFA", category: "telephones_tablettes" },
    { id: 'a33', name: "Infinix Smart9 64GB", image: "a33.jpg", price: "47 000 FCFA", category: "telephones_tablettes" },
    { id: 'a34', name: "Redmi Note 14", image: "a34.jpg", price: "125 000 FCFA", category: "telephones_tablettes" },
    { id: 'a35', name: "Itel A06", image: "a35.jpg", price: "30 000 FCFA", category: "telephones_tablettes" },
    
   
    // Écouteurs & Casques (20 produits)
    { id: 'b1', name: "Earbuds DM-09", image: "b1.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b2', name: "Pro 9Plus", image: "b2.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b3', name: "JBL TuneK83", image: "b3.jpg", price: "4 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b4', name: "Wireless 5.4", image: "b4.jpg", price: "4 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b5', name: "Business Earphone 5.4", image: "b5.jpg", price: "4 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b6', name: "HEPU HP-663", image: "b6.jpg", price: "4 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b7', name: "Oraimo I22", image: "b7.jpg", price: "4 750 FCFA", category: "ecouteurs_casques" },
    { id: 'b8', name: "Oraimo B29", image: "b8.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b9', name: "JBL WS530", image: "b9.jpg", price: "3 750 FCFA", category: "ecouteurs_casques" },
    { id: 'b10', name: "Ecouteur filaire", image: "b10.jpg", price: "700 FCFA", category: "ecouteurs_casques" },
    { id: 'b11', name: "CAT STN-28", image: "b11.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b12', name: "i88 Macron", image: "b12.jpg", price: "3 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b13', name: "JBL TWS-BT03", image: "b13.jpg", price: "3 750 FCFA", category: "ecouteurs_casques" },
    { id: 'b14', name: "HEPU HP-622", image: "b14.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b15', name: "Samsung Galaxy 2020", image: "b15.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b16', name: "Oraimo Air 12 Pro", image: "b16.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b17', name: "JBL i22", image: "b17.jpg", price: "5 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b18', name: "JBL B29", image: "b18.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b19', name: "Wireless K53", image: "b19.jpg", price: "5 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b20', name: "Wireless Q3", image: "b20.jpg", price: "4 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b21', name: "Ecouteur filaire LG RG-56", image: "b21.jpg", price: "1 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b22', name: "Ecouteur filaire Oraimo", image: "b22.jpg", price: "800 FCFA", category: "ecouteurs_casques" },
    { id: 'b23', name: "Wireless DM-08", image: "b23.jpg", price: "3 750 FCFA", category: "ecouteurs_casques" },
    { id: 'b24', name: "Wireless KTR-Q7", image: "b24.jpg", price: "5 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b25', name: "Clip on 2 in 1", image: "b25.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b26', name: "Wireless DM-03", image: "b26.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b27', name: "In EAR DM-02", image: "b27.jpg", price: "3 500 FCFA", category: "ecouteurs_casques" },
    { id: 'b28', name: "Earbuds Y09", image: "b28.jpg", price: "4 000 FCFA", category: "ecouteurs_casques" },
    { id: 'b29', name: "Ecouteur filaire résistant", image: "b29.jpg", price: "1 200 FCFA", category: "ecouteurs_casques" },
    
    // Power Banks & Énergie (20 produits)
    { id: 'c1', name: "Power bank HEPU 20000mAh", image: "c1.jpg", price: "7 000 FCFA", category: "power_banks_energie" },
    { id: 'c2', name: "Power Bank HP-231 20000mAh", image: "c2.jpg", price: "7 000 FCFA", category: "power_banks_energie" },
    { id: 'c3', name: "Power bank HP-A03 30000mAh", image: "c3.jpg", price: "9 000 FCFA", category: "power_banks_energie" },
    { id: 'c4', name: "HP-962 20000mAh", image: "c4.jpg", price: "6 000 FCFA", category: "power_banks_energie" },
    { id: 'c5', name: "Car Kit X8", image: "c5.jpg", price: "2 500 FCFA", category: "power_banks_energie" },
    { id: 'c6', name: "Car Charger HP-777", image: "c6.jpg", price: "3 000 FCFA", category: "power_banks_energie" },
    { id: 'c7', name: "Cables courts résistants", image: "c7.jpg", price: "500 FCFA", category: "power_banks_energie" },
    { id: 'c8', name: "Cable 3 in 1 TPE", image: "c8.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c9', name: "Cable Fast Charging 3in1", image: "c9.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c10', name: "Chargeur HP825", image: "c10.jpg", price: "1 500 FCFA", category: "power_banks_energie" },
    { id: 'c11', name: "chargeur Itel", image: "c11.jpg", price: "1 500 FCFA", category: "power_banks_energie" },
    { id: 'c12', name: "Fast Data Cable 3in1", image: "c12.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c13', name: "Fast Cable 3in1", image: "c13.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c14', name: "Power bank HP B-950 30000mAh", image: "c14.jpg", price: "8 000 FCFA", category: "power_banks_energie" },
    { id: 'c15', name: "Car Inverter 500W", image: "c15.jpg", price: "10 000 FCFA", category: "power_banks_energie" },
    { id: 'c16', name: "Chargeur Smart Fast", image: "c16.jpg", price: "1 500 FCFA", category: "power_banks_energie" },
    { id: 'c17', name: "Cable Magnétique X", image: "c17.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c18', name: "cable simple", image: "c18.jpg", price: "700 FCFA", category: "power_banks_energie" },
    { id: 'c19', name: "cable long 3 têtes", image: "c19.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c20', name: "Power bank Itel 27000mAh", image: "c20.jpg", price: "7 500 FCFA", category: "power_banks_energie" },
    { id: 'c21', name: "Chargeur HP828", image: "c21.jpg", price: "1 750 FCFA", category: "power_banks_energie" },
    { id: 'c22', name: "Data Cable HP23", image: "c22.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c23', name: "Chargeur Itel M11", image: "c23.jpg", price: "700 FCFA", category: "power_banks_energie" },
    { id: 'c24', name: "Chargeur KTD Dounia 3in1", image: "c24.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c25', name: "Chargeur Rapide ", image: "c25.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c26', name: "Cables longs tout type", image: "c26.jpg", price: "1 000 FCFA", category: "power_banks_energie" },
    { id: 'c27', name: "Pawer bank 10000mAh HP-240", image: "c27.jpg", price: "3 500 FCFA", category: "power_banks_energie" },
    { id: 'c28', name: "Chargeur Pour Iphone", image: "c28.jpg", price: "2 000 FCFA", category: "power_banks_energie" },
    { id: 'c29', name: "Power Bank 20000mAh HP-962", image: "c29.jpg", price: "12 000 FCFA", category: "power_banks_energie" },
    { id: 'c30', name: "Car MP3 player G23", image: "c30.jpg", price: "2 500 FCFA", category: "power_banks_energie" },
    


    //accesoires_tech et divers
    { id: 'd1', name: "Clé USB KIOXIA 16,32 et 128GB", image: "d1.jpg", price: "2000/3000/5000 FCFA", category: "accessoires_divers" },
    { id: 'd2', name: "Clé USB 32,64GB", image: "d2.jpg", price: "3000/3500 FCFA", category: "accessoires_divers" },
    { id: 'd3', name: "Toshiba 500GB", image: "d3.jpg", price: "22 500 FCFA", category: "accessoires_divers" },
    { id: 'd4', name: "Toshiba 1TB", image: "d4.jpg", price: "35 000 FCFA", category: "accessoires_divers" },
    { id: 'd5', name: "Toshiba 4TB", image: "d5.jpg", price: "70 000 FCFA", category: "accessoires_divers" },
    { id: 'd6', name: "Carte mémoire 2GB", image: "d6.jpg", price: "1 250 FCFA", category: "accessoires_divers" },
    { id: 'd7', name: "Carte mémoire 4GB", image: "d7.jpg", price: "1 500 FCFA", category: "accessoires_divers" },
    { id: 'd8', name: "Carte mémoire 8GB", image: "d8.jpg", price: "2 000 FCFA", category: "accessoires_divers" },
    { id: 'd9', name: "Carte mémoire 16GB", image: "d9.jpg", price: "2 500 FCFA", category: "accessoires_divers" },
    { id: 'd10', name: "Carte mémoire 32GB", image: "d10.jpg", price: "3 500 FCFA", category: "accessoire_divers" },
    { id: 'd11', name: "Clavier connectable", image: "d11.jpg", price: "13 500 FCFA", category: "accessoires_divers" },
    { id: 'd12', name: "Batteries originales", image: "d12.jpg", price: "1 500 FCFA", category: "accessoires_divers" },
    { id: 'd13', name: "Batteries", image: "d13.jpg", price: "900/1000 FCFA", category: "accessoires_divers" },
    { id: 'd14', name: "Support Pied multifonction ", image: "d14.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd15', name: "Support Pied magnétique", image: "d15.jpg", price: "2 500 FCFA", category: "accessoires_divers" },
    { id: 'd16', name: "Support Pied multifonctionnel", image: "d16.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd17', name: "Support Pied léger", image: "d17.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd18', name: "Support Pied magnétique", image: "d18.jpg", price: "2 500 FCFA", category: "accessoires_divers" },
    { id: 'd19', name: "Support Pied multifonctionnel", image: "d19.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd20', name: "Mini sac d'air pods", image: "d20.jpg", price: "1 250 FCFA", category: "accessoires_divers" },
    { id: 'd21', name: "Support Pied multifonctionnel", image: "d21.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd22', name: "Support Pied multifonction", image: "d22.jpg", price: "3 000 FCFA", category: "accessoires_divers" },
    { id: 'd23', name: "Support Pied résistant", image: "d23.jpg", price: "2 500 FCFA", category: "accessoires_divers" },
    { id: 'd24', name: "Support Pied en plastique durable", image: "d24.jpg", price: "1 500 FCFA", category: "accessoires_divers" },
    { id: 'd25', name: "Support pour Télévision", image: "d25.jpg", price: "1 500 FCFA", category: "accessoires_divers" },
    { id: 'd26', name: "Mini sac d'air pods WMAX", image: "d26.jpg", price: "1 500 FCFA", category: "accessoires_divers" },
    { id: 'd27', name: " Super Mini sac d'air pods", image: "d27.jpg", price: "1 250 FCFA", category: "accessoires_divers" },
    { id: 'd28', name: "Caméra 04 pièces", image: "d28.jpg", price: "110 000 FCFA", category: "accessoires_divers" },
    { id: 'd29', name: "Incassables Miroirs", image: "d29.jpg", price: "1 000 FCFA", category: "accessoires_divers" },
    { id: 'd30', name: "Incassables simples", image: "d30.jpg", price: "700 FCFA", category: "accessoires_divers" },
    { id: 'd31', name: "Clé OTG USB", image: "d31.jpg", price: "2 000 FCFA", category: "accessoires_divers" },
    { id: 'd32', name: "Clé USB Card Reader", image: "d32.jpg", price: "2 000 FCFA", category: "accessoires_divers" },
    { id: 'd33', name: "Television Ecran 22 Kidar Power", image: "d33.jpg", price: "30 000 FCFA", category: "accessoires_divers" },
    { id: 'd34', name: "Camera Professionnel 4pièces Wifi kit ", image: "d34.jpg", price: "115 000 FCFA", category: "accessoires_divers" },
    { id: 'd35', name: "Camera Professionnel 8pièces Wifi kit", image: "d35.jpg", price: "140 000 FCFA", category: "accessoires_divers" },
    { id: 'd36', name: "Baffles Boomeurs SY-607 SORAIYA", image: "d36.jpg", price: "23 000 FCFA", category: "accessoires_divers" },
    { id: 'd37', name: "Baffles Boomeurs SY-5211", image: "d37.jpg", price: "23 000 FCFA", category: "accessoires_divers" },
    { id: 'd38', name: "Baffles Boomeurs SY-601", image: "d38.jpg", price: "23 000 FCFA", category: "accessoires_divers" },
    { id: 'd39', name: "Camera Smart Wifi", image: "d39.jpg", price: "43 000 FCFA", category: "accessoires_divers" },
    { id: 'd40', name: "Ventilateur Hybride 4pièces", image: "d40.jpg", price: "12000/40000 FCFA", category: "accessoires_divers" },
    { id: 'd41', name: "Television Ecran 32 simple/smart", image: "d41.jpg", price: "55000/65000 FCFA", category: "accessoires_divers" },
    { id: 'd42', name: "Television Ecran 43 smart", image: "d42.jpg", price: "110 000 FCFA", category: "accessoires_divers" },
    { id: 'd43', name: "Television Ecran 50 smart", image: "d43.jpg", price: "155 000 FCFA", category: "accessoires_divers" },
    { id: 'd44', name: "Television Ecran 55 smart", image: "d44.jpg", price: "185 000 FCFA", category: "accessoires_divers" },
    
    // Montres Connectées & Boomeur (20 produits)
    { id: 'e1', name: "Montre connecté 02 bandes ", image: "e1.jpg", price: "6 000 FCFA", category: "montres_boomeur" },
    { id: 'e2', name: "Montre connecté Smart+colier", image: "e2.jpg", price: "8 000 FCFA", category: "montres_boomeur" },
    { id: 'e3', name: "Montre connecté MVP-150", image: "e3.jpg", price: "6 000 FCFA", category: "montres_boomeur" },
    { id: 'e4', name: "Montres Connectées+ecouteurs+ventilateurmini", image: "e4.jpg", price: "9 000 FCFA", category: "montres_boomeur" },
    { id: 'e5', name: "Boomeur models LP V", image: "e5.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e6', name: "Boomeur models Hapilife", image: "e6.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e7', name: "Boomeur avec éclairage", image: "e7.jpg", price: "5 000 FCFA", category: "montres_boomeur" },
    { id: 'e8', name: "Boomeur JBL mini", image: "e8.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e9', name: "Boomeur super bass", image: "e9.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e10', name: "Boomeur Stylé WUF-W33", image: "e10.jpg", price: "4 500 FCFA", category: "montres_boomeur" },
    { id: 'e11', name: "Boomeur Hapilife super bass", image: "e11.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e12', name: "Boomeur models HF-F101", image: "e12.jpg", price: "4 000 FCFA", category: "montres_boomeur" },
    { id: 'e13', name: "Boomeur models DN-M17", image: "e13.jpg", price: "4 500 FCFA", category: "montres_boomeur" },
    { id: 'e14', name: "Boomeur models Hapilife", image: "e14.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e15', name: "Boomeur models NSM-9527mini", image: "e15.jpg", price: "4 500 FCFA", category: "montres_boomeur" },
    { id: 'e16', name: "Boomeur Hapilife Ai-159 ", image: "e16.jpg", price: "4 500 FCFA", category: "montres_boomeur" },
    { id: 'e17', name: "Boomeur Hapilife L02", image: "e17.jpg", price: "2 500 FCFA", category: "montres_boomeur" },
    { id: 'e18', name: "Boomeur JSJZ-200", image: "e18.jpg", price: "3 000 FCFA", category: "montres_boomeur" },
    { id: 'e19', name: "Boomeur SONAC de Qualité", image: "e19.jpg", price: "20 000 FCFA", category: "montres_boomeur" },
    
    
    // Équipement solaire (36 produits)
    { id: 'f1', name: "Plaque solaire 50/100watt", image: "f1.jpg", price: "20 000/35 000 FCFA", category: "equipement_solaire" },
    { id: 'f2', name: "Batteries 12-65/12-100/12-200", image: "f2.jpg", price: "47/65/140 000 FCFA", category: "equipement_solaire" },
    { id: 'f3', name: "Batteries Kidar 12V200AH", image: "f3.jpg", price: "140 000 FCFA", category: "equipement_solaire" },
    { id: 'f4', name: "Power Bank solaire", image: "c2.jpg", price: "7 000 FCFA", category: "equipement_solaire" },
    { id: 'f5', name: "Plaque HBS 50w", image: "f5.jpg", price: "20 000 FCFA", category: "equipement_solaire" },
    { id: 'f6', name: "Batteries Kidar 12V150AH", image: "f6.jpg", price: "95 000 FCFA", category: "equipement_solaire" },
    { id: 'f7', name: "Plaque HBS 100watt", image: "f7.jpg", price: "35 000 FCFA", category: "equipement_solaire" },
    { id: 'f8', name: "Plaque HBS 275watt", image: "f8.jpg", price: "75 000 FCFA", category: "equipement_solaire" },
    { id: 'f9', name: "Batteries VV Original 4pieces", image: "f9.jpg", price: "22000/85000 FCFA", category: "equipement_solaire" },
    { id: 'f10', name: "Batteries Dyvinity 12V100AH", image: "f10.jpg", price: "40 000 FCFA", category: "equipement_solaire" },
    { id: 'f11', name: "Batteries Taineng 04pièces", image: "f11.jpg", price: "15000/50000 FCFA", category: "equipement_solaire" },
    { id: 'f12', name: "Cable 2*1.5mm 91m de long", image: "f12.jpg", price: " 9 500 FCFA", category: "equipement_solaire" },
    { id: 'f13', name: "Chargeur 60prises USB", image: "f13.jpg", price: "26 000 FCFA", category: "equipement_solaire" },
    { id: 'f14', name: "Lampe solaire avec charge USB", image: "f14.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f15', name: "Prise solaire", image: "f15.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f16', name: "Cable resitant 91m", image: "f16.jpg", price: "9 500 FCFA", category: "equipement_solaire" },
    { id: 'f17', name: "Lampe Solaire fort Eclairage", image: "f17.jpg", price: "4 500 FCFA", category: "equipement_solaire" },
    { id: 'f18', name: "Chargeur 40 prises USB", image: "f18.jpg", price: "22 000 FCFA", category: "equipement_solaire" },
    { id: 'f19', name: "Chargeur LCD USB intégré", image: "f19.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f20', name: "Chargeur solaire 7in1", image: "f20.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f21', name: "Car Inverter 500W", image: "c15.jpg", price: "10 000 FCFA", category: "equipement_solaire" },
    { id: 'f22', name: "Plaque 150W solaire HBS", image: "f22.jpg", price: "53 000 FCFA", category: "equipement_solaire" },
    { id: 'f23', name: "Chargeur solaire 7in1", image: "f23.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f24', name: "Plaque solaire 320W", image: "f24.jpg", price: "83 000 FCFA", category: "equipement_solaire" },
    { id: 'f25', name: "Cable 2*8mm 91m", image: "f25.jpg", price: "4 500 FCFA", category: "equipement_solaire" },
    { id: 'f26', name: "Cable chargeur HP-031 8in1", image: "f26.jpg", price: "1 200 FCFA", category: "equipement_solaire" },
    { id: 'f27', name: "Lampes chargeables", image: "f27.jpg", price: "1 000 FCFA", category: "equipement_solaire" },
    { id: 'f28', name: "Convertisseur 1000W", image: "f28.jpg", price: "20 000 FCFA", category: "equipement_solaire" },
    { id: 'f29', name: "Convertisseur 200W", image: "f29.jpg", price: "5 000 FCFA", category: "equipement_solaire" },
    { id: 'f30', name: "Convertisseur 300W", image: "f30.jpg", price: "7 500 FCFA", category: "equipement_solaire" },
    { id: 'f31', name: "Convertisseur 400W", image: "f31.jpg", price: "8 500 FCFA", category: "equipement_solaire" },
    { id: 'f32', name: "Chargeur solaire HP-054", image: "f32.jpg", price: "1 200 FCFA", category: "equipement_solaire" },
    { id: 'f33', name: "Controleur de Charge 20", image: "f33.jpg", price: "10 000 FCFA", category: "equipement_solaire" },
    { id: 'f34', name: "Controleur de Charge 30", image: "f34.jpg", price: "13 000 FCFA", category: "equipement_solaire" },
    { id: 'f35', name: "Chargeur 50ports USB", image: "f35.jpg", price: "23 500 FCFA", category: "equipement_solaire" },
    { id: 'f36', name: "Plaque 400W HBS solaire", image: "f36.jpg", price: "95 000 FCFA", category: "equipement_solaire" },

    // Téléphones à touches (20 produits)
    { id: 'i1', name: "Tecno T315 touche", image: "i1.jpg", price: "8 500 FCFA", category: "telephones_touches" },
    { id: 'i2', name: "Oking OK93mini touche", image: "i2.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i3', name: "Tecno T528 touche", image: "i3.jpg", price: "8 500 FCFA", category: "telephones_touches" },
    { id: 'i4', name: "Tecno T475 touche", image: "i4.jpg", price: "15 000 FCFA", category: "telephones_touches" },
    { id: 'i5', name: "Opus S123 touche", image: "i5.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i6', name: "Villaon V5606 touche", image: "i6.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i7', name: "Oking OK2173 touche", image: "i7.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i8', name: "Tecno T528 touche", image: "i8.jpg", price: "11 000 FCFA", category: "telephones_touches" },
    { id: 'i9', name: "Tecno T352 touche", image: "i9.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i10', name: "Villaon V230 touche", image: "i10.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i11', name: "HOMII H1820 touche", image: "i11.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i12', name: "Itel it5627 touche", image: "i12.jpg", price: "12 000 FCFA", category: "telephones_touches" },
    { id: 'i13', name: "Itel it5621 touche", image: "i13.jpg", price: "10 000 FCFA", category: "telephones_touches" },
    { id: 'i14', name: "Villaon V110 touche", image: "i14.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i15', name: "Itel it2165 touche", image: "i15.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i16', name: "N320 touche", image: "i16.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i17', name: "Tecno T402 touche", image: "i17.jpg", price: "9 000 FCFA", category: "telephones_touches" },
    { id: 'i18', name: "Itel it5626 touche", image: "i18.jpg", price: "12 000 FCFA", category: "telephones_touches" },
    { id: 'i19', name: "Tecno T301 touche", image: "i19.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i20', name: "Tecno T353 touche", image: "i20.jpg", price: "9 000 FCFA", category: "telephones_touches" },
    { id: 'i21', name: "Itel it2160 touche", image: "i21.jpg", price: "6 500 FCFA", category: "telephones_touches" },
    { id: 'i22', name: "Tecno T313 touche", image: "i22.jpg", price: "10 000 FCFA", category: "telephones_touches" },
    { id: 'i23', name: "Villaon V211 touche", image: "i23.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i24', name: "Opus S129 touche", image: "i24.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i25', name: "Oking OK5615 touche", image: "i25.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i26', name: "Opus S127 touche", image: "i26.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i27', name: "Villaon V210 touche", image: "i27.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i28', name: "Opus S124 touche", image: "i28.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i29', name: "Oking it2160 touche", image: "i29.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i30', name: "Tecno T302 touche", image: "i30.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i31', name: "Opus S123 touche", image: "i31.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i32', name: "Oking OK95mini touche", image: "i32.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i33', name: "Tecno T663 touche", image: "i33.jpg", price: "13 000 FCFA", category: "telephones_touches" },
    { id: 'i34', name: "Opus S128 touche", image: "i34.jpg", price: "5 000 FCFA", category: "telephones_touches" },
    { id: 'i35', name: "Tecno T315 touche", image: "i35.jpg", price: "9 000 FCFA", category: "telephones_touches" },
    { id: 'i36', name: "HYUNDAI T4 4sim touche", image: "i36.jpg", price: "15 000 FCFA", category: "telephones_touches" },
    { id: 'i37', name: "Tecno T101 touche", image: "i37.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i38', name: "touche OK302 ", image: "i38.jpg", price: "6 000 FCFA", category: "telephones_touches" },
    { id: 'i39', name: "Itel it5606 touche", image: "i39.jpg", price: "7 000 FCFA", category: "telephones_touches" },
    { id: 'i40', name: "Villaon V220 touche", image: "i40.jpg", price: "6 000 FCFA", category: "telephones_touches" },

    
     //Produits Phares (sélection mise à jour)
    { id: 'h1', name: "Mini Boomeur JBL", image: "e8.jpg", price: "2 500 FCFA", oldPrice: "3 000 FCFA", discount: "16.67%", category: "promo" },
    { id: 'h2', name: "Power bank HEPU 20000mAh", image: "c1.jpg", price: "6 500 FCFA", oldPrice: "7 000 FCFA", discount: "7.14%", category: "promo" },
    { id: 'h3', name: "cable long 3 têtes", image: "c19.jpg", price: "1 000 FCFA", oldPrice: "700 FCFA", discount: "30%", category: "promo" },
    { id: 'h4', name: "touche OK302 ", image: "i38.jpg", price: "5 000 FCFA", oldPrice: "6 000 FCFA", discount: "16.65%", category: "promo" },
    { id: 'h5', name: "Pro 9Plus", image: "b2.jpg", price: "3 000 FCFA", oldPrice: "3 500 FCFA", discount: "14.29%", category: "promo" },
    { id: 'h6', name: "Support Pied multifonctionnel", image: "d16.jpg", price: "2 500 FCFA", oldPrice: "3 000 FCFA", discount: "16.67%", category: "promo" },
    
];
const productsByCategory = {
    telephones_tablettes: allProductsData.filter(p => p.category === 'telephones_tablettes'),
    ecouteurs_casques: allProductsData.filter(p => p.category === 'ecouteurs_casques'),
    power_banks_energie: allProductsData.filter(p => p.category === 'power_banks_energie'),
    accessoires_divers: allProductsData.filter(p => p.category === 'accessoires_divers'),
    montres_boomeur: allProductsData.filter(p => p.category === 'montres_boomeur'),
    equipement_solaire: allProductsData.filter(p => p.category === 'equipement_solaire'),
    telephones_touches: allProductsData.filter(p => p.category === 'telephones_touches'),
    promo: allProductsData.filter(p => p.category === 'promo'), // La catégorie 'promo' est maintenant filtrée directement depuis allProductsData
    all: allProductsData
};

let currentActiveCategory = 'all';

const renderProducts = (targetElement, productsToDisplay) => {
    targetElement.innerHTML = '';
    if (productsToDisplay.length === 0) {
        targetElement.innerHTML = '<p style="text-align: center; color: #777; width: 100%;">Aucun produit disponible pour cette sélection.</p>';
        return;
    }

    productsToDisplay.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <button class="add-to-cart-icon-btn" aria-label="Ajouter ${product.name} au panier" data-product-id="${product.id}">
                    <i class="fas fa-shopping-cart"></i>
                </button>
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                ${product.oldPrice ? `<div class="product-old-price">${product.oldPrice}</div>` : ''}
                ${product.discount ? `<div class="product-discount">${product.discount}</div>` : ''}
            </div>
            <a href="https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Bonjour, je souhaite commander le produit : ' + product.name)}"
               target="_blank" class="order-whatsapp-btn" aria-label="Commander ${product.name} via WhatsApp">
               <i class="fab fa-whatsapp"></i> Commander
            </a>
        `;
        targetElement.appendChild(productCard);
    });

    targetElement.querySelectorAll('.add-to-cart-icon-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = button.getAttribute('data-product-id');
            const productToAdd = allProductsData.find(p => p.id === productId);

            if (productToAdd) {
                addToCart(productToAdd);
                console.log(`Produit ${productToAdd.name} ajouté au panier !`);
                button.innerHTML = '<i class="fas fa-check"></i>';
                button.style.backgroundColor = '#28a745';
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-shopping-cart"></i>';
                    if (window.matchMedia("(max-width: 768px)").matches) {
                        button.style.backgroundColor = 'var(--primary-green)';
                    } else {
                        button.style.backgroundColor = 'rgba(59, 141, 108, 0.9)';
                    }
                }, 1000);
            }
        });
    });
};

const applyFilters = () => {
    const searchTerm = searchInput.value.toLowerCase().trim();
    let productsToDisplay = productsByCategory[currentActiveCategory] || [];

    if (searchTerm) {
        productsToDisplay = productsToDisplay.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
    }
    
    // On affiche tous les produits filtrés dans la seule liste principale
    renderProducts(productList, productsToDisplay);
};

updateCartCount();
applyFilters();

categoryItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const category = item.getAttribute('data-category');

        categoryItems.forEach(cat => cat.classList.remove('active'));
        item.classList.add('active');

        currentActiveCategory = category;
        applyFilters();
    });
});

if (searchInput) {
    searchInput.addEventListener('input', () => {
        applyFilters();
    });
}

const voiceSearchButton = document.querySelector('.voice-search-button');
if (voiceSearchButton) {
    voiceSearchButton.addEventListener('click', () => {
        alert('Fonctionnalité de recherche vocale (non implémentée)');
    });
}

const scanButton = document.querySelector('.scan-button');
if (scanButton) {
    scanButton.addEventListener('click', () => {
        alert('Fonctionnalité de recherche par image (non implémentée)');
    });
}

// --- Fonctions de gestion des avis ---
if (avisForm) {
    avisForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const avisContent = avisInput.value.trim();

        if (avisContent) {
            const newAvisElement = document.createElement('div');
            newAvisElement.classList.add('avis-item');
            newAvisElement.innerHTML = `<p>${avisContent}</p>`;
            
            // Ajoute le nouvel avis au début de la liste
            avisList.prepend(newAvisElement);
            
            // Réinitialise le champ de saisie
            avisInput.value = '';

            // Pour une implémentation complète, ici, on enverrait l'avis à une base de données (comme MongoDB)
            console.log("Nouvel avis soumis :", avisContent);
        }
    });
}
});