import { View } from 'react-native';
import { router } from 'expo-router';
import { ProductCard } from '@/components/ui';
import { products } from '@/data/products';
import { useCart } from '@/hooks/useCart';
import { Screen } from './Common';
export default function CatalogScreen(){const{addToCart}=useCart();return <Screen title="Catalogue"><View style={{flexDirection:'row',flexWrap:'wrap',gap:14}}>{products.map(p=><ProductCard key={p.id} product={p} onPress={()=>router.push(`/product/${p.id}`)} onAdd={()=>addToCart(p)}/>)}</View></Screen>}
