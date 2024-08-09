import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList } from 'react-native';
import COLORS from '../consts/color';
import { NewsItem, RenderItemProps, TrendingProps } from '../types/TrendingTypes';

// Sample data for news items including images, headlines, and timestamps
const newsImages: NewsItem[] = [
  { id: '1', image: require('../assets/images/trendingImages/news1.jpg'), headline: 'News America', timestamp: '10:30 AM' },
  { id: '2', image: require('../assets/images/trendingImages/news2.jpg'), headline: 'New York Times', timestamp: '11:00 AM' },
  { id: '3', image: require('../assets/images/trendingImages/news3.jpg'), headline: 'Football', timestamp: '12:00 PM' },
  { id: '4', image: require('../assets/images/trendingImages/news4.jpg'), headline: 'Kutub Minar', timestamp: '1:00 PM' },
  { id: '5', image: require('../assets/images/trendingImages/news5.jpg'), headline: 'Delhi Gate', timestamp: '2:00 PM' },
];

// Functional component for displaying trending news items
const Trending: React.FC<TrendingProps> = () => {
  // Function to render each item in the FlatList
  const renderItem = ({ item }: RenderItemProps) => {
    return (
      <View style={styles.itemContainer}>
        {/* Display the news image */}
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          {/* Display the news headline */}
          <Text style={styles.headline}>{item.headline}</Text>
          {/* Display the news timestamp */}
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={newsImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} // Unique key for each item
        horizontal // Display items horizontally
        pagingEnabled // Enable paging for horizontal scroll
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
      />
    </View>
  );
};

// Get window width for responsive design
const { width } = Dimensions.get('window');

// Styles for the Trending component
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the available space
  },
  itemContainer: {
    width: width * 0.8, // Set width relative to screen size
    marginRight: 16, // Space between items
    position: 'relative', // Relative positioning for text container
  },
  image: {
    width: '100%', // Full width of the container
    height: 200, // Fixed height for images
    borderRadius: 10, // Rounded corners for images
  },
  textContainer: {
    padding: 10, // Padding around text
    backgroundColor: COLORS.yellow, // Background color for text container
    borderRadius: 10, // Rounded corners for text container
    elevation: 5, // Shadow effect for Android
  },
  headline: {
    color: '#FFFFFF', // Text color
    fontSize: 16, // Font size for headline
    fontWeight: 'bold', // Bold font weight
  },
  timestamp: {
    color: '#FFFFFF', // Text color
    fontSize: 14, // Font size for timestamp
    marginTop: 5, // Space above timestamp
  },
});

export default Trending;
