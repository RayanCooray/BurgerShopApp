import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './app/screens/HomePage';
import MenuPage from './app/screens/MenuPage';
import BurgerCustomizationPage from './app/screens/BurgerCustomizationPage';
import OrderSummaryPage from './app/screens/OrderSummaryPage';
import Notification from './app/components/NotificationPage';
import ProfilePage from './app/screens/ProfilePage';
import { TailwindProvider } from 'tailwindcss-react-native';
import {useFonts} from "expo-font";
import { IslandMoments_400Regular } from '@expo-google-fonts/island-moments';
import { BebasNeue_400Regular } from '@expo-google-fonts/bebas-neue';
import LoadingScreen from './app/Loading/LoadingScreen';
import Welcome from './app/screens/Welcome';
import LoginScreen from './app/screens/LoginScreen';
const Stack = createStackNavigator();

export default function App() {
  
  const [fontsLoaded, fontError] = useFonts({
    IslandMoments_400Regular,
    BebasNeue_400Regular
});

if (!fontsLoaded) {
  return <LoadingScreen />;
}

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Menu" component={MenuPage} />
          <Stack.Screen name="CustomizeBurger" component={BurgerCustomizationPage} />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen name="OrderSummary" component={OrderSummaryPage} />
          <Stack.Screen name="Profile" component={ProfilePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>
  );
}
