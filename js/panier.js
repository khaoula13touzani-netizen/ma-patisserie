// Gestion du panier
let panier = JSON.parse(localStorage.getItem('panier')) || [];

// Mettre à jour le badge du panier
function mettreAJourBadgePanier() {
    const badges = document.querySelectorAll('#panier-count');
    const total = panier.reduce((acc, item) => acc + item.quantite, 0);
    badges.forEach(badge => {
        badge.textContent = total;
    });
}

// Ajouter un produit au panier
function ajouterAuPanier(idProduit) {
    const produit = produits.find(p => p.id === idProduit);
    if (!produit) return;
    
    const itemExistant = panier.find(item => item.id === idProduit);
    
    if (itemExistant) {
        itemExistant.quantite += 1;
    } else {
        panier.push({
            id: produit.id,
            nom: produit.nom,
            prix: produit.prix,
            emoji: produit.emoji,
            quantite: 1
        });
    }
    
    localStorage.setItem('panier', JSON.stringify(panier));
    mettreAJourBadgePanier();
    alert(`${produit.nom} a été ajouté au panier!`);
}

// Supprimer un produit du panier
function supprimerDuPanier(idProduit) {
    panier = panier.filter(item => item.id !== idProduit);
    localStorage.setItem('panier', JSON.stringify(panier));
    afficherPanier();
    mettreAJourBadgePanier();
}

// Modifier la quantité
function modifierQuantite(idProduit, nouvelleQuantite) {
    nouvelleQuantite = parseInt(nouvelleQuantite);
    if (nouvelleQuantite <= 0) {
        supprimerDuPanier(idProduit);
        return;
    }
    
    const item = panier.find(p => p.id === idProduit);
    if (item) {
        item.quantite = nouvelleQuantite;
        localStorage.setItem('panier', JSON.stringify(panier));
        afficherPanier();
        mettreAJourBadgePanier();
    }
}

// Afficher le panier
function afficherPanier() {
    const panierVide = document.getElementById('panier-vide');
    const panierContenu = document.getElementById('panier-contenu');
    const panierItemsList = document.getElementById('panier-items-list');
    
    if (!panierItemsList) return; // Pas sur la page du panier
    
    if (panier.length === 0) {
        if (panierVide) panierVide.style.display = 'block';
        if (panierContenu) panierContenu.style.display = 'none';
        return;
    }
    
    if (panierVide) panierVide.style.display = 'none';
    if (panierContenu) panierContenu.style.display = 'grid';
    
    panierItemsList.innerHTML = '';
    
    panier.forEach(item => {
        const row = document.createElement('tr');
        const total = (item.prix * item.quantite).toFixed(2);
        row.innerHTML = `
            <td>${item.emoji} ${item.nom}</td>
            <td>${item.prix.toFixed(2)} €</td>
            <td><input type="number" value="${item.quantite}" min="1" onchange="modifierQuantite(${item.id}, this.value)"></td>
            <td>${total} €</td>
            <td><button class="btn btn-small" onclick="supprimerDuPanier(${item.id})" style="background-color: #dc3545; color: white;">Supprimer</button></td>
        `;
        panierItemsList.appendChild(row);
    });
    
    // Calculer les totaux
    const sousTotal = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);
    const fraisLivraison = 5.00;
    const total = sousTotal + fraisLivraison;
    
    document.getElementById('sous-total').textContent = sousTotal.toFixed(2) + ' €';
    document.getElementById('frais-livraison').textContent = fraisLivraison.toFixed(2) + ' €';
    document.getElementById('total').textContent = total.toFixed(2) + ' €';
}

// Initialiser à la charge de la page
document.addEventListener('DOMContentLoaded', function() {
    mettreAJourBadgePanier();
    afficherPanier();
});