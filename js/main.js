// Script principal

// Initialiser les produits au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Afficher les produits vedettes sur la page d'accueil
    if (document.getElementById('featured-list')) {
        afficherProduits(produits);
    }
    
    // Afficher le panier sur la page du panier
    if (document.getElementById('panier-items-list')) {
        afficherPanier();
    }
});

// Gestion du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Merci pour votre message! Nous vous contacterons bientôt.');
        this.reset();
    });
}

// Animation au scroll
window.addEventListener('scroll', function() {
    // Vous pouvez ajouter d'autres effets de scroll ici
});