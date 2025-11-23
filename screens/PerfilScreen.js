import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


export default function PerfilScreen(){
return (
<View style={styles.container}>
<Text style={styles.title}>PERFIL</Text>
<View style={styles.card}>
<Image source={require('../assets/logo.png')} style={styles.logo} />
<Text style={styles.name}>Dorian Espinoza</Text>
<Text>25 años</Text>
<Text>Telefono: 6621234567</Text>
<Text>Email: ejemplo@mail.com</Text>
</View>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, alignItems:'center', backgroundColor:'#bfe1ff'},
title:{fontSize:22, marginTop:8, fontWeight:'700'},
card:{width:'94%', marginTop:12, padding:12, borderRadius:12, backgroundColor:'#eaf6ff', alignItems:'center'},
logo:{width:80, height:80, marginBottom:8},
name:{fontWeight:'700', fontSize:16}
});