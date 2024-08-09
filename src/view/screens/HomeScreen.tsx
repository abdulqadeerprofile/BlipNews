import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Trending from '../../components/Trending';
import Menu from '../../components/Menu';
import { newsData } from '../../consts/newsData';
import { DataItem } from '../../types/NewsDataTypes'; 
import { RootStackParamList, HomeScreenProps } from '../../types/HomeScreenTypes';

// Define the type for the navigation prop in HomeScreen
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = () => {
  // Use navigation hook to handle navigation
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Function to handle press on a news item
  const handleItemPress = (item: DataItem) => {
    // Navigate to DetailScreen with the selected item
    navigation.navigate('DetailScreen', { item });
  };

  // Function to truncate text to a specified limit
  const truncateText = (text: string, limit: number) => {
    return text.length > limit ? `${text.slice(0, limit)}...` : text;
  };

  // Render each item in the FlatList
  const renderItem = ({ item }: { item: DataItem }) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => handleItemPress(item)}
    >
      <Image source={item.imageUrl} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Image source={item.channelIcon} style={styles.channelIcon} />
        <Text style={styles.itemTitle}>{truncateText(item.title, 20)}</Text>
        <Text style={styles.itemDescription}>
          {truncateText(item.description, 35)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={newsData}
        ListHeaderComponent={
          <>
            {/* Search and Sort Section */}
            <View style={styles.searchContainer}>
              <View style={styles.searchWrapper}>
                <TouchableOpacity>
                  <Image
                    source={require('../../assets/images/icons/search.png')}
                    style={styles.searchIcon}
                  />
                </TouchableOpacity>
                <TextInput
                  style={styles.searchInput}
                  placeholder="Search"
                  placeholderTextColor="#888"
                />
              </View>
              <TouchableOpacity style={styles.sortButton}>
                <Image
                  source={require('../../assets/images/icons/sort.png')}
                  style={styles.sortIcon}
                />
              </TouchableOpacity>
            </View>

            {/* Trending Section */}
            <View style={styles.trendingContainer}>
              <Text style={styles.trendingText}>Trending</Text>
              <TouchableOpacity>
                <Text style={styles.seeMoreText}>See all</Text>
              </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 20 }}>
              <Trending />
            </View>

            {/* Menu Section */}
            <View style={styles.menuContainer}>
              <Menu />
            </View>
          </>
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false} // Hide vertical scroll indicator
        showsHorizontalScrollIndicator={false} // Hide horizontal scroll indicator
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

// Define styles for the HomeScreen component
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFFFF',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    color: '#000',
  },
  sortButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sortIcon: {
    width: 30,
    height: 30,
    tintColor: '#888',
  },
  trendingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  trendingText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  seeMoreText: {
    fontSize: 16,
    color: '#007BFF',
  },
  menuContainer: {
    marginTop: 5,
    paddingBottom: 20
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  channelIcon: {
    width: 20,
    height: 20,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default HomeScreen;
