import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }}
        style={styles.avatar}
      />

      <Text style={styles.name}>Usuario Administrador</Text>
      <Text style={styles.email}>admin@selecta.com</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Opciones</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Editar Perfil</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Cambiar Contraseña</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, { backgroundColor: "#d9534f" }]}>
          <Text style={[styles.buttonText, { color: "#fff" }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    backgroundColor: "#f8f9fa",
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: "#666",
  },
  section: {
    width: "90%",
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 18,
    marginBottom: 15,
    fontWeight: "bold",
  },
  button: {
    padding: 15,
    backgroundColor: "#e9ecef",
    borderRadius: 10,
    marginBottom: 12,
  },
  buttonText: {
    fontSize: 16,
  },
});
