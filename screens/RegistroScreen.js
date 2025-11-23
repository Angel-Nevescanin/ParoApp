import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function RegisterScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Registro</Text>


<TextInput style={styles.input} placeholder="Nombre Completo" />
<TextInput style={styles.input} placeholder="Correo" />
<TextInput style={styles.input} placeholder="Teléfono" />
<TextInput style={styles.input} placeholder="Sexo" />
<TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />


<TouchableOpacity style={styles.btnPrimary}>
<Text style={styles.btnText}>Registrarse</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.goBack()}>
<Text style={styles.btnText}>Cancelar</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#bfe1ff'},
title:{fontSize:28, fontWeight:'700', marginBottom:20},
input:{width:'80%', backgroundColor:'#fff', padding:12, borderRadius:10, marginVertical:8},
btnPrimary:{backgroundColor:'#2ec4b6', padding:12, width:'80%', alignItems:'center', borderRadius:10, marginTop:16},
btnSecondary:{backgroundColor:'#ff5e57', padding:12, width:'80%', alignItems:'center', borderRadius:10, marginTop:10},
btnText:{color:'#fff', fontWeight:'700'}
});