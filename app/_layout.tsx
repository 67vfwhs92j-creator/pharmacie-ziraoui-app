import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { CartProvider } from '@/hooks/useCart';
import { LanguageProvider } from '@/hooks/useLanguage';
export default function RootLayout(){return <LanguageProvider><CartProvider><StatusBar style="dark"/><Stack screenOptions={{headerShown:false}}><Stack.Screen name="(tabs)"/><Stack.Screen name="product/[id]"/><Stack.Screen name="checkout/index"/><Stack.Screen name="order/success"/></Stack></CartProvider></LanguageProvider>}
