import { ImageSourcePropType } from 'react-native';

// Define the type for a news item
export interface NewsItem {
  id: string; // Unique identifier for the news item
  image: ImageSourcePropType; // Image source for the news item
  headline: string; // Headline of the news item
  timestamp: string; // Timestamp of the news item
}

// Define the type for the render item props
export interface RenderItemProps {
  item: NewsItem; // The news item to render
}

// Define the type for Trending component props
export interface TrendingProps {}
