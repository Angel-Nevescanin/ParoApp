import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default function Navbar(){
return (
<View style={styles.nav}>
<Text style={styles.text}>INICIO</Text>
<Text style={styles.text}>MAPA</Text>
<Text style={styles.text}>MIS PAROS</Text>
<Text style={styles.text}>PERFIL</Text>
</View>
);
}


const styles = StyleSheet.create({
nav:{flexDirection:'row', justifyContent:'space-around', backgroundColor:'#0a3d62', padding:10},
text:{color:'#fff', fontWeight:'600'}
});