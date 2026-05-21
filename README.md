# Ma Pâtisserie 🥐

Bienvenue sur le site de vente de Ma Pâtisserie ! Un site e-commerce moderne pour vendre vos délicieuses pâtisseries en ligne.

## 🎯 Fonctionnalités

- 🛒 Catalogue de produits avec images
- 🛍️ Panier d'achat fonctionnel
- 💳 Intégration de paiement (à configurer)
- 📱 Design responsive (mobile & desktop)
- 🔍 Recherche de produits
- ⭐ Système d'évaluations
- 👤 Gestion des comptes utilisateurs (à développer)

## 📂 Structure du Projet

```
ma-patisserie/
├── index.html              # Page d'accueil
├── produits.html           # Catalogue de produits
├── panier.html             # Panier d'achat
├── css/
│   └── style.css          # Styles globaux
├── js/
│   ├── main.js            # Script principal
│   ├── panier.js          # Gestion du panier
│   └── produits.js        # Gestion des produits
├── data/
│   └── produits.json      # Base de données des produits
└── README.md              # Ce fichier
```

## 🚀 Installation & Utilisation

1. Clonez le repository :
```bash
git clone https://github.com/khaoula13touzani-netizen/ma-patisserie.git
cd ma-patisserie
```

2. Ouvrez `index.html` dans votre navigateur ou utilisez un serveur local :
```bash
python -m http.server 8000
# ou
npx http-server
```

3. Accédez à `http://localhost:8000` dans votre navigateur

## 🛠️ Technologies Utilisées

- HTML5
- CSS3
- JavaScript (Vanilla)
- LocalStorage (pour le panier)

## 📋 Configuration Personnalisée

Modifiez les fichiers suivants pour personnaliser votre site :

- `js/produits.js` - Modifiez le tableau `produits` pour ajouter/modifier vos pâtisseries
- `css/style.css` - Personnalisez les couleurs et le design
- `index.html` - Modifiez le contenu de l'accueil

## 🎨 Personnalisation des Couleurs

Dans `css/style.css`, modifiez les variables CSS :

```css
:root {
    --primary-color: #d4a574;      /* Couleur principale */
    --secondary-color: #8b4513;    /* Couleur secondaire */
    --text-color: #333;            /* Couleur du texte */
    --light-bg: #f9f7f4;           /* Couleur de fond clair */
}
```

## 📦 Prochaines Étapes

- [ ] Ajouter des images de produits
- [ ] Intégrer un système de paiement (Stripe, PayPal)
- [ ] Ajouter une base de données (Firebase, MongoDB)
- [ ] Mettre en place un système d'authentification
- [ ] Déployer le site (Netlify, Vercel, GitHub Pages)
- [ ] Ajouter des avis clients
- [ ] Implémenter les filtres avancés
- [ ] Créer un espace administrateur

## 📞 Support

Pour toute question ou problème, créez une issue dans le repository.

## 📄 Licence

Ce projet est sous licence MIT. Vous êtes libre de le modifier et de le distribuer.

---

**Bon développement ! 🎉**