import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Card from '../components/Card';
import users from '../../assets/data/users';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.pageContainer}>
      <FlatList
        data={users}
        renderItem={({item}) => (
          <Card
            name={item.name}
            skills={item.skills}
            imageUri={item.imageUrl}
            bio={item.bio}
          />
        )}
        contentContainerStyle={styles.cardsContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    height: '75%',
  },
  cardsContainer: {
    gap: 5,
  },
});

export default HomeScreen;
