import { Linking, Text } from 'react-native';
import { Button, Card } from '@/components/ui';
import { appConfig } from '@/constants/config';
import { colors } from '@/constants/theme';
import { lastOrder } from './CheckoutScreen';
import { whatsappOrderUrl } from '@/services/whatsapp';
import { Screen, Section } from './Common';
export default function SuccessScreen(){const order=lastOrder;return <Screen title="Commande confirmée"><Card style={{backgroundColor:colors.lightGreen}}><Text style={{fontSize:24,fontWeight:'900',color:colors.deepGreen}}>Succès !</Text><Text>Numéro de commande : {order?.id ?? 'PZ-DEMO'}</Text><Text>Statut : Commande reçue</Text></Card>{order&&<Section title="Récapitulatif"><Card>{order.items.map((i:any)=><Text key={i.product.id}>• {i.product.name} x{i.quantity}</Text>)}<Text>Total : {order.total.toFixed(2)} MAD</Text><Button title="Envoyer par WhatsApp" icon="logo-whatsapp" onPress={()=>Linking.openURL(whatsappOrderUrl(order))}/><Button title="Suivre ma commande" variant="outline" onPress={()=>{}}/></Card></Section>}<Card style={{marginTop:16}}><Text>Le numéro WhatsApp est fictif : {appConfig.whatsapp}. Le vrai numéro sera ajouté plus tard.</Text></Card></Screen>}
