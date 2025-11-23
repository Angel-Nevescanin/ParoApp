import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeScreen from './screens/HomeScreen';
import MisParosScreen from './screens/MisParosScreen';
import PerfilScreen from './screens/PerfilScreen';
import ConfigScreen from './screens/ConfigScreen';
// import MapScreen from './screens/MapScreen';  // <-- LO DEJAMOS PARA EL FINAL

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Inicio" component={HomeScreen} />

          {/* QUITAR TEMPORALMENTE EL MAPA */}
          {/* <Tab.Screen name="Mapa" component={MapScreen} /> */}

          <Tab.Screen name="MisParos" component={MisParosScreen} options={{ title: 'Mis Paros' }} />
          <Tab.Screen name="Perfil" component={PerfilScreen} />
          <Tab.Screen name="Config" component={ConfigScreen} options={{ title: 'Config' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
