import React, { createContext, useContext, useMemo, useState } from 'react';
import { I18nManager } from 'react-native';
import { Language } from '@/types';
const dict={fr:{home:'Accueil',catalog:'Catalogue',search:'Recherche',cart:'Panier',account:'Compte'},ar:{home:'الرئيسية',catalog:'الكتالوج',search:'بحث',cart:'السلة',account:'الحساب'},en:{home:'Home',catalog:'Catalog',search:'Search',cart:'Cart',account:'Account'}};
const C=createContext({language:'fr' as Language,isRTL:false,t:(k:keyof typeof dict.fr)=>dict.fr[k],setLanguage:(_:Language)=>{}});
export function LanguageProvider({children}:{children:React.ReactNode}){const[language,setLanguageState]=useState<Language>('fr');const isRTL=language==='ar';const value=useMemo(()=>({language,isRTL,t:(k:keyof typeof dict.fr)=>dict[language][k]??dict.fr[k],setLanguage:(l:Language)=>{I18nManager.allowRTL(l==='ar');setLanguageState(l)}}),[language]);return <C.Provider value={value}>{children}</C.Provider>}
export const useLanguage=()=>useContext(C);
