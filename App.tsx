import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // Manages navigation state
import { createStackNavigator } from '@react-navigation/stack'; // Creates a stack navigator for screen transitions
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Provides a safe area context to avoid notches and edges

import HomeScreen from './src/view/screens/HomeScreen'; // Import Home screen component
import DetailScreen from './src/view/screens/DetailScreen'; // Import Detail screen component
import Header from './src/components/Header'; // Import Header component
import Footer from './src/components/Footer'; // Import Footer component
import { DataItem } from './src/types/HomeScreenTypes'; // Import DataItem type for type checking

// Define types for each screen in the stack navigator
type RootStackParamList = {
  Home: undefined; // Home screen does not require any parameters
  DetailScreen: { item: DataItem }; // DetailScreen requires an item of type DataItem
};

// Create a stack navigator with the defined types
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      {/* Wraps the navigator to manage navigation state */}
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            cardStyle: { backgroundColor: '#FFFFFF' }, // Sets the background color of screens
            header: () => <Header />, // Uses Header component for top of each screen
          }}
        >
          {/* Define the Home screen */}
          <Stack.Screen name="Home" component={HomeScreen} />
          
          {/* Define the DetailScreen and set its title */}
          <Stack.Screen 
            name="DetailScreen" 
            component={DetailScreen} 
            options={{ title: 'Details' }} 
          />
        </Stack.Navigator>
        
        {/* Renders Footer component at the bottom of the screen */}
        <Footer />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App; // Exports the App component as the default export
