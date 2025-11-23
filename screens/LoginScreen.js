import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function LoginScreen({ navigation }) {
return (
<View style={styles.container}>
<Text style={styles.title}>Paroapp</Text>


<TextInput style={styles.input} placeholder="Email / Número" />
<TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />


<TouchableOpacity style={styles.btnPrimary}>
<Text style={styles.btnText}>Iniciar Sesión</Text>
</TouchableOpacity>


<TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('Register')}>
<Text style={styles.btnText}>Registrarse</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container:{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#bfe1ff'},
title:{fontSize:32, fontWeight:'700', marginBottom:20},
input:{width:'80%', backgroundColor:'#fff', padding:12, borderRadius:10, marginVertical:8},
btnPrimary:{backgroundColor:'#2ec4b6', padding:12, width:'80%', alignItems:'center', borderRadius:10, marginTop:16},
btnSecondary:{backgroundColor:'#ffb03b', padding:12, width:'80%', alignItems:'center', borderRadius:10, marginTop:10},
btnText:{color:'#fff', fontWeight:'700'}
});