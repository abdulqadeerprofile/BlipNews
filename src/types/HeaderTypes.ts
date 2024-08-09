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
