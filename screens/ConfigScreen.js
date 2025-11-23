import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function ConfigScreen(){
return (
<View style={styles.container}>
<Text style={styles.title}>CONFIGURACIÓN</Text>
<View style={styles.card}><Text>Preferencias y configuración de la app</Text></View>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, alignItems:'center', backgroundColor:'#bfe1ff'},
title:{fontSize:22, marginTop:8, fontWeight:'700'},
card:{width:'94%', marginTop:12, padding:12, borderRadius:12, backgroundColor:'#eaf6ff'}
});