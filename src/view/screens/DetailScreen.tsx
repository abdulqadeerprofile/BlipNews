import React from 'react';
import { 
  View, 
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity 
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { DetailScreenRouteProp } from '../../types/DetailsScreentypes'; // Import type for route params

const DetailScreen: React.FC = () => {
  // Access route parameters
  const route = useRoute<DetailScreenRouteProp>();
  const { item } = route.params; // Extract the news item from route params

  // Function to handle share button press
  const handleSharePress = () => {
    // Implement share functionality here
    console.log('Share button pressed');
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
      showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
    >
      {/* Display the image of the news item */}
      <Image source={item.imageUrl} style={styles.image} />
      <View style={styles.textContainer}>
        <View style={styles.headerContainer}>
          {/* Display the channel icon and share button */}
          <Image source={item.channelIcon} style={styles.channelIcon} />
          <TouchableOpacity 
            onPress={handleSharePress} 
            style={styles.shareButton}
          >
            <Image
              source={require('../../assets/images/icons/share-icon.png')} // Path to share icon
              style={styles.shareIcon}
            />
          </TouchableOpacity>
        </View>
        {/* Display the title and description of the news item */}
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </ScrollView>
  );
};

// Define styles for the DetailScreen component
const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Ensures the ScrollView takes up full space
    backgroundColor: '#FFFFFF', // Background color of the screen
    paddingBottom: 20, // Padding at the bottom of the screen
  },
  image: {
    width: '100%', // Full width of the container
    height: 200, // Fixed height for the image
  },
  textContainer: {
    padding: 20, // Padding around text elements
  },
  headerContainer: {
    flexDirection: 'row', // Arrange icons and button in a row
    alignItems: 'center', // Align items vertically in the center
    justifyContent: 'space-between', // Space between icons and share button
    marginBottom: 10, // Margin below the header
  },
  channelIcon: {
    width: 30, // Width of the channel icon
    height: 30, // Height of the channel icon
  },
  shareButton: {
    backgroundColor: '#f0f0f0', // Background color of the share button
    borderRadius: 15, // Rounded corners for the button
    padding: 8, // Padding inside the button
    alignItems: 'center', // Center the icon inside the button
  },
  shareIcon: {
    width: 20, // Width of the share icon
    height: 20, // Height of the share icon
    resizeMode: 'contain', // Ensure the icon fits within the container
  },
  title: {
    fontSize: 20, // Font size for the title
    fontWeight: 'bold', // Bold font weight for the title
    color: '#000', // Color of the title text
    marginBottom: 10, // Margin below the title
  },
  description: {
    fontSize: 15, // Font size for the description
    color: '#666', // Color of the description text
  },
});

export default DetailScreen;
