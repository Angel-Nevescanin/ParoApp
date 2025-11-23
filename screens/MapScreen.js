import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";

export default function MapScreen({ navigation }) {

  // 👉 Si es WEB, mostramos mensaje y evitar errores
  if (Platform.OS === "web") {
    return (
      <View style={styles.webContainer}>
        <Text style={styles.webTitle}>🌐 Mapa no disponible en Web</Text>
        <Text style={styles.webText}>Por favor abre la app en Android o iOS para ver el mapa.</Text>

        <TouchableOpacity
          style={styles.webBackBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>Regresar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // 👉 Versión móvil con mapa
  const [region, setRegion] = useState({
    latitude: 29.0892,
    longitude: -110.9613,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [marker, setMarker] = useState({
    latitude: 29.0892,
    longitude: -110.9613,
  });

  const centerMap = () => {
    setRegion({
      ...region,
      latitude: marker.latitude,
      longitude: marker.longitude,
    });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={region}
        onRegionChangeComplete={(reg) => setRegion(reg)}
      >
        <Marker
          coordinate={marker}
          title="Paro Activo"
          description="Ubicación aproximada dentro del campus"
        />
      </MapView>

      {/* Botón regresar */}
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={26} color="white" />
      </TouchableOpacity>

      {/* Botón centrar */}
      <TouchableOpacity style={styles.centerBtn} onPress={centerMap}>
        <Ionicons name="locate" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // 🌐 WEB
  webContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  webTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  webText: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: "center",
  },
  webBackBtn: {
    backgroundColor: "#0D47A1",
    padding: 12,
    borderRadius: 10,
  },

  // 📱 MÓVIL
  container: { flex: 1 },
  map: { width: "100%", height: "100%" },

  backBtn: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#0D47A1",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },

  centerBtn: {
    position: "absolute",
    bottom: 40,
    right: 20,
    backgroundColor: "#0D47A1",
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 6,
  },
});
