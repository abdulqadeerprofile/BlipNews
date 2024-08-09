import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { HeaderProps, NavigationProp, RouteProp } from '../types/HeaderTypes';

// Define the Header component with strict typing
const Header: React.FC<HeaderProps> = () => {
  // State to track if the notification icon is active
  const [isActive, setIsActive] = useState<boolean>(false);
  
  // Use navigation and route hooks with the defined types
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteProp>();

  // Toggle notification icon state
  const handlePress = () => {
    setIsActive(prevState => !prevState);
  };

  // Navigate back or to Home based on the current route
  const handleIconPress = () => {
    if (route.name !== 'Home') {
      navigation.goBack(); // Go back to the previous screen if not on Home
    } else {
      navigation.navigate('Home'); // Navigate to Home screen if on Home
    }
  };

  return (
    <View style={styles.headerContainer}>
      {/* Navigation Icon Button */}
      <TouchableOpacity onPress={handleIconPress} style={styles.iconButton}>
        <Image
          source={
            route.name === 'Home'
              ? require('../assets/images/icons/profile-icon.png') // Profile icon if on Home
              : require('../assets/images/icons/back-icon.png') // Back icon if not on Home
          }
          style={styles.icon}
        />
      </TouchableOpacity>
      
      {/* Logo Container */}
      <View style={styles.logoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../assets/images/logos/logo.png')} // Logo image
            style={styles.logo}
          />
        </TouchableOpacity>
      </View>
      
      {/* Notification Button */}
      <TouchableOpacity
        style={styles.notificationButton}
        onPress={handlePress} // Toggle notification icon state
      >
        <Image
          source={require('../assets/images/icons/notification-icon.png')} // Notification icon image
          style={[
            styles.notificationIcon,
            { tintColor: isActive ? '#b5b5b5' : '#000000' }, // Change tint color based on active state
          ]}
        />
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Header component
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row', // Arrange items in a row
    alignItems: 'center', // Center items vertically
    justifyContent: 'space-between', // Distribute items with space between them
    height: 60, // Height of the header
    width: '100%', // Full width of the container
  },
  iconButton: {
    position: 'absolute', // Position icon absolutely
    left: 0, // Align to the left
    paddingLeft: 16, // Padding from the left edge
  },
  icon: {
    width: 30, // Width of the icon
    height: 30, // Height of the icon
    resizeMode: 'contain', // Maintain aspect ratio
  },
  logoContainer: {
    flex: 1, // Take up remaining space
    alignItems: 'center', // Center logo horizontally
  },
  logo: {
    width: 100, // Width of the logo
    height: 40, // Height of the logo
    resizeMode: 'contain', // Maintain aspect ratio
  },
  notificationButton: {
    position: 'absolute', // Position notification icon absolutely
    right: 0, // Align to the right
    paddingRight: 16, // Padding from the right edge
  },
  notificationIcon: {
    width: 25, // Width of the notification icon
    height: 25, // Height of the notification icon
    resizeMode: 'contain', // Maintain aspect ratio
  },
});

export default Header;
