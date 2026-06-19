import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '@/constants/theme';
import { useLanguage } from '@/hooks/useLanguage';
export default function TabLayout(){const{t}=useLanguage();const icon=(name:keyof typeof Ionicons.glyphMap)=>({color,size}:{color:string;size:number})=><Ionicons name={name} color={color} size={size}/>;return <Tabs screenOptions={{headerShown:false,tabBarActiveTintColor:colors.deepGreen,tabBarInactiveTintColor:colors.muted,tabBarStyle:{height:72,paddingBottom:10}}}><Tabs.Screen name="index" options={{title:t('home'),tabBarIcon:icon('home')}}/><Tabs.Screen name="catalog" options={{title:t('catalog'),tabBarIcon:icon('grid')}}/><Tabs.Screen name="search" options={{title:t('search'),tabBarIcon:icon('search')}}/><Tabs.Screen name="cart" options={{title:t('cart'),tabBarIcon:icon('bag')}}/><Tabs.Screen name="account" options={{title:t('account'),tabBarIcon:icon('person')}}/></Tabs>}
