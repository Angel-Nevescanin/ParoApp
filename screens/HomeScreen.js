import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      {/* Encabezado */}
      <Text style={styles.title}>Hola Ángel 👋</Text>
      <Text style={styles.subtitle}>Bienvenido a ParoApp</Text>

      {/* Buscador */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={20} color="#777" />
        <TextInput placeholder="Buscar paros..." style={styles.searchInput} />
      </View>

      {/* Tarjeta: Mapa */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("MapScreen")}>
        <Ionicons name="map" size={26} color="#0D47A1" />
        <Text style={styles.cardTitle}>Ver Mapa</Text>
        <Text style={styles.cardDesc}>Ubicación de paros en tiempo real</Text>
      </TouchableOpacity>

      {/* Tarjeta: Crear Paro */}
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("CrearParo")}>
        <Ionicons name="add-circle" size={26} color="#0D47A1" />
        <Text style={styles.cardTitle}>Crear Nuevo Paro</Text>
        <Text style={styles.cardDesc}>Registra un paro escolar rápidamente</Text>
      </TouchableOpacity>

      {/* Accesos Directos */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.miniCard} onPress={() => navigation.navigate("MisParos")}>
          <Ionicons name="document-text" size={30} color="#0D47A1" />
          <Text style={styles.miniCardText}>Mis Paros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniCard} onPress={() => navigation.navigate("Config")}>
          <Ionicons name="settings" size={30} color="#0D47A1" />
          <Text style={styles.miniCardText}>Config</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniCard} onPress={() => navigation.navigate("Perfil")}>
          <Ionicons name="person" size={30} color="#0D47A1" />
          <Text style={styles.miniCardText}>Perfil</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0D47A1",
    paddingTop: 70,
    paddingHorizontal: 20
  },

  title: {
    color: "white",
    fontSize: 28,
    fontWeight: "bold"
  },

  subtitle: {
    color: "#e0e0e0",
    fontSize: 16,
    marginBottom: 25
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingHorizontal: 12,
    borderRadius: 10,
    height: 45,
    marginBottom: 25
  },

  searchInput: {
    marginLeft: 10,
    flex: 1
  },

  card: {
    backgroundColor: "white",
    padding: 18,
    borderRadius: 15,
    marginBottom: 20
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5
  },

  cardDesc: {
    fontSize: 14,
    color: "#777",
    marginTop: 3
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  miniCard: {
    backgroundColor: "white",
    width: "30%",
    paddingVertical: 25,
    borderRadius: 15,
    alignItems: "center"
  },

  miniCardText: {
    fontSize: 14,
    marginTop: 5
  }
});
