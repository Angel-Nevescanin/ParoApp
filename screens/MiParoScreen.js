import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function MiParoScreen(){
return (
<View style={styles.container}>
<Text style={styles.title}>MI PARO</Text>


<TextInput style={styles.input} placeholder="Título del Paro" />
<TextInput style={styles.input} placeholder="Lugar" />
<TextInput style={[styles.input, styles.textArea]} placeholder="Descripción" multiline />


<TouchableOpacity style={styles.btnPrimary}>
<Text style={styles.btnText}>Ofrecer</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, backgroundColor:'#bfe1ff', alignItems:'center'},
title:{fontSize:22, marginTop:20, fontWeight:'700'},
input:{width:'90%', backgroundColor:'#fff', padding:12, borderRadius:10, marginTop:12},
textArea:{height:120, textAlignVertical:'top'},
btnPrimary:{backgroundColor:'#2ec4b6', padding:12, width:'80%', alignItems:'center', borderRadius:10, marginTop:20},
btnText:{color:'#fff', fontWeight:'700'}
});