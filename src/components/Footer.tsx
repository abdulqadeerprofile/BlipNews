import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FooterProps, IconProps } from '../types/FooterTypes.ts';

// Import icon images for footer navigation
const homeIcon = require('../assets/images/icons/home.png');
const exploreIcon = require('../assets/images/icons/explore.png');
const bookmarkIcon = require('../assets/images/icons/bookmark.png');

// Define the Footer component with strict typing
const Footer: React.FC<FooterProps> = () => {
  // Handle press action for the Home icon
  const handleHomePress = () => {
    console.log('Home icon pressed');
    // Add navigation logic here, e.g., navigation.navigate('Home')
  };

  // Handle press action for the Explore icon
  const handleExplorePress = () => {
    console.log('Explore icon pressed');
    // Add navigation logic here, e.g., navigation.navigate('Explore')
  };

  // Handle press action for the Bookmark icon
  const handleBookmarkPress = () => {
    console.log('Bookmark icon pressed');
    // Add navigation logic here, e.g., navigation.navigate('Bookmarks')
  };

  // Function to render each icon with its press handler
  const renderIcon = ({ onPress, source }: IconProps) => (
    <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
      <Image source={source} style={styles.icon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Render each icon with its corresponding press handler */}
      {renderIcon({ onPress: handleHomePress, source: homeIcon })}
      {renderIcon({ onPress: handleExplorePress, source: exploreIcon })}
      {renderIcon({ onPress: handleBookmarkPress, source: bookmarkIcon })}
    </View>
  );
};

// Styles for the Footer component
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Arrange icons in a row
    justifyContent: 'space-around', // Distribute icons with space between them
    alignItems: 'center', // Center icons vertically
    backgroundColor: '#FFFFFF', // Background color of the footer
    paddingVertical: 10, // Vertical padding for the footer
    borderTopWidth: 1, // Border width at the top of the footer
    borderTopColor: '#E0E0E0', // Border color at the top of the footer
  },
  iconContainer: {
    padding: 10, // Padding around each icon
  },
  icon: {
    width: 24, // Width of each icon
    height: 24, // Height of each icon
  },
});

export default Footer;
