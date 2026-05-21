// Base de données des produits
const produits = [
    {
        id: 1,
        nom: "Croissant Classique",
        categorie: "croissants",
        prix: 2.50,
        description: "Croissant feuilleté traditionnel",
        emoji: "🥐",
        rating: 4.5,
        avis: 124
    },
    {
        id: 2,
        nom: "Pain au Chocolat",
        categorie: "croissants",
        prix: 3.00,
        description: "Pain feuilleté au chocolat délicieux",
        emoji: "🍫",
        rating: 4.8,
        avis: 156
    },
    {
        id: 3,
        nom: "Gâteau Forêt Noire",
        categorie: "gateaux",
        prix: 28.00,
        description: "Gâteau chocolat cerises classique",
        emoji: "🎂",
        rating: 4.7,
        avis: 89
    },
    {
        id: 4,
        nom: "Éclair au Café",
        categorie: "patisseries",
        prix: 4.50,
        description: "Éclair garni de crème au café",
        emoji: "☕",
        rating: 4.6,
        avis: 78
    },
    {
        id: 5,
        nom: "Macarons Assortis",
        categorie: "biscuits",
        prix: 12.00,
        description: "Boîte de 6 macarons colorés",
        emoji: "🍪",
        rating: 4.9,
        avis: 234
    },
    {
        id: 6,
        nom: "Tarte Tatin",
        categorie: "gateaux",
        prix: 22.00,
        description: "Tarte aux pommes caramélisée",
        emoji: "🥧",
        rating: 4.7,
        avis: 102
    },
    {
        id: 7,
        nom: "Mille-feuille",
        categorie: "patisseries",
        prix: 6.00,
        description: "Crème et feuilletage croustillant",
        emoji: "📄",
        rating: 4.5,
        avis: 67
    },
    {
        id: 8,
        nom: "Brownies",
        categorie: "biscuits",
        prix: 3.50,
        description: "Carrés chocolat moelleux",
        emoji: "🍫",
        rating: 4.8,
        avis: 145
    },
    {
        id: 9,
        nom: "Cheesecake",
        categorie: "gateaux",
        prix: 24.00,
        description: "Cheesecake new-yorkais authentique",
        emoji: "🧁",
        rating: 4.9,
        avis: 198
    },
    {
        id: 10,
        nom: "Profiteroles",
        categorie: "patisseries",
        prix: 8.00,
        description: "Choux garnies de crème et sauce chocolat",
        emoji: "🍮",
        rating: 4.7,
        avis: 112
    }
];

// Fonction pour afficher les produits
function afficherProduits(listeProduits) {
    const conteneur = document.getElementById('products-list') || document.getElementById('featured-list');
    if (!conteneur) return;
    
    conteneur.innerHTML = '';
    
    if (listeProduits.length === 0) {
        conteneur.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem;">Aucun produit trouvé</p>';
        return;
    }
    
    listeProduits.slice(0, conteneur.id === 'featured-list' ? 4 : listeProduits.length).forEach(produit => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image">${produit.emoji}</div>
            <div class="product-info">
                <div class="product-category">${produit.categorie}</div>
                <div class="product-name">${produit.nom}</div>
                <div class="product-description">${produit.description}</div>
                <div class="product-footer">
                    <div class="product-price">${produit.prix.toFixed(2)} €</div>
                    <div class="product-rating">★ ${produit.rating} (${produit.avis})</div>
                </div>
            </div>
            <button class="btn btn-primary btn-small" onclick="ajouterAuPanier(${produit.id})">Ajouter</button>
        `;
        conteneur.appendChild(card);
    });
}