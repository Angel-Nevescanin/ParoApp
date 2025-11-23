import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default function MisParosScreen(){
return (
<View style={styles.container}>
<Text style={styles.title}>MIS PAROS</Text>
<View style={styles.card}><Text>Lista de paros creados / historial</Text></View>
<TouchableOpacity style={styles.bottomBtn}><Text>Pedir Paro</Text></TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, alignItems:'center', backgroundColor:'#bfe1ff'},
title:{fontSize:22, marginTop:8, fontWeight:'700'},
card:{width:'94%', marginTop:12, padding:12, borderRadius:12, backgroundColor:'#eaf6ff'},
bottomBtn:{ position:'absolute', bottom:16, backgroundColor:'#ffb03b', paddingVertical:12, paddingHorizontal:24, borderRadius:8}
});