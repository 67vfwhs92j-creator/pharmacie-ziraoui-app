# Pharmacie Ziraoui

Première version MVP Expo / React Native / TypeScript pour une pharmacie et parapharmacie marocaine. L'application fonctionne sur iPhone, Android, tablette et navigateur web via Expo Router.

## Fonctionnalités incluses

- Accueil premium avec logo texte provisoire, recherche, bannière, catégories, nouveautés, promotions, services, WhatsApp, appel et encart livraison.
- Catalogue local de démonstration avec 25 produits réalistes de parapharmacie.
- Fiche produit complète avec prix, disponibilité, conseils, livraison, favoris et ajout panier.
- Recherche par produit, marque et catégorie, avec filtres catégorie, marque, promotion, disponibilité et prix.
- Panier local avec modification des quantités, suppression, sous-total et réduction affichée.
- Validation de commande avec retrait ou livraison à domicile, trois zones de livraison et frais automatiques.
- Paiement fictif : espèces à la livraison ou paiement au retrait.
- Confirmation avec numéro de commande fictif, récapitulatif, WhatsApp et suivi.
- Compte client local de démonstration : informations, adresses, commandes, favoris, langue et déconnexion fictive.
- Contact intégré avec adresse, horaires, téléphone, WhatsApp, appel et Google Maps.
- Architecture préparée pour Supabase dans `services/supabase.ts` et `.env.example`.

## Installation

```bash
npm install
```

> Si votre registre npm d'entreprise bloque Expo, configurez un registre autorisé puis relancez `npm install`.

## Lancer l'application

### Version web

```bash
npm run web
```

Ouvrez ensuite l'URL indiquée par Expo, généralement `http://localhost:8081`.

### Sur téléphone

```bash
npm start
```

Installez **Expo Go** sur iPhone ou Android, puis scannez le QR code affiché dans le terminal.

## Vérifications

```bash
npm run typecheck
npm run lint
```

## Configuration centralisée

Les informations modifiables sont dans `constants/config.ts` : nom, téléphone, WhatsApp fictif, adresse, localisation, horaires, tarifs de livraison, couleurs et réseaux sociaux.

## Éléments fictifs à remplacer avant production

- Numéro WhatsApp et téléphone.
- Adresse, horaires et coordonnées Google Maps.
- Produits, images, stocks et prix.
- Persistance du panier et du compte.
- Connexion Supabase, authentification, règles RLS et paiement en ligne.
- Validation pharmaceutique réelle pour articles sensibles.

## Sécurité produit

L'application est centrée sur la parapharmacie. Elle ne propose aucun diagnostic médical. Les produits disposent d'un champ `deliveryEligible` et les articles nécessitant un contrôle peuvent utiliser `requiresPharmacyValidation`.

## Accès web public avec GitHub Pages

Après fusion de la pull request dans `main` et activation de GitHub Pages avec la source **GitHub Actions**, l'application web statique sera publiée automatiquement à l'adresse attendue :

```text
https://67vfwhs92j-creator.github.io/pharmacie-ziraoui-app/
```

Cette URL est configurée pour fonctionner sous le sous-chemin GitHub Pages `/pharmacie-ziraoui-app` grâce au `baseUrl` Expo Router défini dans `app.json`. Les routes Expo Router, les images et les fichiers générés par `npx expo export --platform web` doivent donc être résolus depuis ce chemin public.

### Déploiement automatique

Le workflow GitHub Actions **Deploy Expo Web to GitHub Pages** (`.github/workflows/deploy-web.yml`) s'exécute à chaque push sur `main`. Il :

1. installe les dépendances avec `npm install` ;
2. lance `npm run typecheck` ;
3. lance `npm run lint` ;
4. génère l'export web avec `npx expo export --platform web` ;
5. vérifie que `dist/index.html` existe ;
6. publie le dossier `dist` sur GitHub Pages sans secret supplémentaire.

### Relancer le déploiement

Pour relancer le déploiement sans modifier le code :

1. ouvrez l'onglet **Actions** du dépôt GitHub ;
2. sélectionnez le workflow **Deploy Expo Web to GitHub Pages** ;
3. cliquez sur **Run workflow** sur la branche `main`.

Si GitHub Pages n'a jamais été configuré pour le dépôt, une étape manuelle peut être nécessaire dans **Settings → Pages** : choisir **GitHub Actions** comme source de publication.

### Tester l'export web localement

```bash
npm run export:web
npx expo serve --platform web
```

Le dossier généré localement est `dist`.
