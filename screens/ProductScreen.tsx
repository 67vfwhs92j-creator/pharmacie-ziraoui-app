import { Image, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Button, Card } from '@/components/ui';
import { colors } from '@/constants/theme';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { formatMAD } from '@/utils/format';
import { Screen, Section } from './Common';
export default function ProductScreen(){const{id}=useLocalSearchParams();const p=products.find(x=>x.id===id)??products[0];const{addToCart}=useCart();return <Screen title={p.name}><Image source={{uri:p.image}} style={{width:'100%',height:360,borderRadius:24,backgroundColor:colors.lightGreen}}/><Card style={{marginTop:16}}><Text style={{color:colors.muted,fontWeight:'800'}}>{p.brand}</Text><Text style={{fontSize:28,fontWeight:'900',color:colors.deepGreen}}>{formatMAD(p.price)}</Text><Text>{p.availability} · Stock fictif : {p.stock} · {p.deliveryEligible?'Livrable':'Retrait uniquement'}</Text><Text style={{marginTop:12}}>{p.description}</Text>{p.requiresPharmacyValidation&&<Text style={{marginTop:10,color:colors.gold,fontWeight:'900'}}>Validation par la pharmacie requise.</Text>}<View style={{flexDirection:'row',gap:10,marginTop:16,flexWrap:'wrap'}}><Button title="Ajouter au panier" icon="bag-add" onPress={()=>addToCart(p)}/><Button title={p.isFavorite?'Favori':'Ajouter aux favoris'} variant="outline" icon="heart"/></View></Card><Section title="Conseils d’utilisation"><Card><Text>{p.usageTips}</Text></Card></Section></Screen>}
