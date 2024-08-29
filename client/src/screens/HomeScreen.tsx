import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Card from '../components/Card';
import users from '../../assets/data/users';

const HomeScreen = () => (
  <SafeAreaView style={styles.pageContainer}>
    <Text style={styles.containerTitle}>New Connections</Text>
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

const styles = StyleSheet.create({
  pageContainer: {
    height: '95%',
    marginVertical: 10,
    gap: 20,
  },
  cardsContainer: {
    gap: 5,
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
});

export default HomeScreen;
