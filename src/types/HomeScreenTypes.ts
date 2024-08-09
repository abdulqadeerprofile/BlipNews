import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the type for the data item used in FlatList
export type DataItem = {
  id: string; // Unique identifier for the item
  imageUrl: any; // URL or local image source
  channelIcon: any; // URL or local image source for the channel icon
  title: string; // Title of the item
  description: string; // Description of the item
};

// Define the type for navigation parameters
export type RootStackParamList = {
  Home: undefined; // Home screen without parameters
  DetailScreen: { item: DataItem }; // DetailScreen with a DataItem parameter
};

// Define the type for navigation prop in HomeScreen
export type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>; // Navigation prop for Home screen
};
