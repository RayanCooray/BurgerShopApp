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

const Stack = createStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
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
