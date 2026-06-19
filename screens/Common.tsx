import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '@/constants/theme';
export function Screen({children,title}:{children:React.ReactNode;title?:string}){return <ScrollView style={styles.root} contentContainerStyle={styles.content}>{title&&<Text style={styles.title}>{title}</Text>}{children}</ScrollView>}
export function Section({title,children}:{title:string;children:React.ReactNode}){return <View style={{marginTop:spacing.lg}}><Text style={styles.section}>{title}</Text>{children}</View>}
export const styles=StyleSheet.create({root:{flex:1,backgroundColor:colors.sand},content:{padding:spacing.lg,paddingBottom:110,maxWidth:1180,width:'100%',alignSelf:'center'},title:{fontSize:30,fontWeight:'900',color:colors.deepGreen,marginVertical:spacing.md},section:{fontSize:22,fontWeight:'900',color:colors.ink,marginBottom:spacing.md}});
