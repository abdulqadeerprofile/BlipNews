// Import necessary types
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp as NavigationRouteProp } from '@react-navigation/native'; // Importing with alias to avoid conflicts

// Define the type for the navigation stack
type RootStackParamList = {
  Profile: undefined;
  Home: undefined;
};

// Define the type for the navigation prop
export type NavigationProp = StackNavigationProp<RootStackParamList, 'Profile' | 'Home'>;

// Define the type for the route prop
export type RouteProp = NavigationRouteProp<RootStackParamList, 'Profile' | 'Home'>;

// Define the type for HeaderProps
export interface HeaderProps {}

// Define the type for Footer props
export interface FooterProps {}

// Define the type for icon properties
export interface IconProps {
  onPress: () => void; // Function to call when the icon is pressed
  source: any; // The type for image sources in React Native
}
