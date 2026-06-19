export const appConfig = {
  pharmacyName: 'Pharmacie Ziraoui',
  phone: '+212 522 000 000',
  whatsapp: '+212 600 000 000', // Numéro fictif de démonstration à remplacer avant production.
  address: 'Adresse provisoire, Casablanca, Maroc',
  location: { latitude: 33.5731, longitude: -7.5898 },
  hours: 'Lun - Sam : 09:00 - 20:00 · Dim : garde selon disponibilité',
  social: { instagram: 'https://instagram.com/pharmacie.ziraoui.demo', facebook: 'https://facebook.com/pharmacie.ziraoui.demo' },
  deliveryFees: [
    { id: 'near', label: 'Zone proche', fee: 10 },
    { id: 'middle', label: 'Zone intermédiaire', fee: 20 },
    { id: 'far', label: 'Zone éloignée', fee: 30 },
  ],
  colors: { white:'#FFFFFF', deepGreen:'#0F3D2E', green:'#2E7D5B', lightGreen:'#DDF3E8', gold:'#C9A227', sand:'#F8F3EA', ink:'#173028', muted:'#6B7B74', danger:'#B42318' },
};
export const orderStatuses = ['Commande reçue','En attente de confirmation','Confirmée','En préparation','Prête','En cours de livraison','Livrée','Annulée'] as const;
