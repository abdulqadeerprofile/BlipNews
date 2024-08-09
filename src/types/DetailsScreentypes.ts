import { RouteProp } from '@react-navigation/native';
import { DataItem } from './HomeScreenTypes';

// Define the type for navigation parameters for DetailScreen
export type DetailScreenRouteProp = RouteProp<{ DetailScreen: { item: DataItem } }, 'DetailScreen'>;
