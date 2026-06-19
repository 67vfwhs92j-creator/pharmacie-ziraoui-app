import { appConfig } from '@/constants/config';
import { Order } from '@/types';
export function buildWhatsAppOrderMessage(order: Order){
 const lines=[`Commande ${order.id}`,`Client: ${order.customer.name}`,`Téléphone: ${order.customer.phone}`,`Mode: ${order.receptionMode==='delivery'?'Livraison à domicile':'Retrait pharmacie'}`,'Produits:',...order.items.map(i=>`- ${i.product.name} x${i.quantity}`),`Total: ${order.total.toFixed(2)} MAD`,order.customer.address?`Adresse: ${order.customer.address}, ${order.customer.district}, ${order.customer.city}`:'Adresse: retrait à la pharmacie',order.customer.notes?`Notes: ${order.customer.notes}`:'Notes: aucune'];
 return encodeURIComponent(lines.join('\n'));
}
export const whatsappOrderUrl=(order:Order)=>`https://wa.me/${appConfig.whatsapp.replace(/\D/g,'')}?text=${buildWhatsAppOrderMessage(order)}`;
