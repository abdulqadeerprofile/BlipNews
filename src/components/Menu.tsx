import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import COLORS from '../consts/color';
import { MenuItem, RenderItemProps, MenuProps } from '../types/MenuTypes';

// Sample data for menu items
const menuItems: MenuItem[] = [
  { id: '1', title: 'Sports News' },
  { id: '2', title: 'Local News' },
  { id: '3', title: 'Popular News' },
  { id: '4', title: 'Food News' },
];

// Functional component for displaying menu items
const Menu: React.FC<MenuProps> = () => {
  // State to keep track of the selected menu item
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Render function for each menu item in the FlatList
  const renderItem = ({ item }: RenderItemProps) => {
    // Check if the current item is selected
    const isSelected = item.id === selectedId;

    return (
      <TouchableOpacity
        style={[styles.item, isSelected && styles.selectedItem]} // Apply selected styles if the item is selected
        onPress={() => setSelectedId(item.id)} // Update the selected item on press
      >
        {/* Display the menu item title */}
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={menuItems} // Data to be rendered
      renderItem={renderItem} // Function to render each item
      keyExtractor={(item) => item.id} // Unique key for each item
      horizontal // Display items horizontally
      showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
    />
  );
};

// Styles for the Menu component
const styles = StyleSheet.create({
  item: {
    paddingVertical: 10, // Vertical padding for the item
    paddingHorizontal: 20, // Horizontal padding for the item
    marginRight: 10, // Space between items
    borderRadius: 20, // Rounded corners for items
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    borderWidth: 1, // Border width for items
    borderColor: '#E0E0E0', // Border color for items
  },
  selectedItem: {
    borderBottomColor: COLORS.darkBlue, // Bottom border color when selected
    borderBottomWidth: 2, // Bottom border width when selected
  },
  itemText: {
    fontSize: 16, // Font size for menu item text
    color: '#000', // Text color for menu items
  },
  selectedItemText: {
    color: COLORS.darkBlue, // Text color for selected item
    fontWeight: 'bold', // Bold font weight for selected item
  },
});

export default Menu;
