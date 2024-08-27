import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import users from '../../assets/data/users';
import {SafeAreaView} from 'react-native-safe-area-context';

const CollabsScreen = () => {
  return (
    <SafeAreaView style={styles.pageContainer} edges={['top', 'left', 'right']}>
      <View style={styles.newConContainer}>
        <Text style={styles.containerTitle}>New Connections</Text>
        <FlatList
          data={users}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Image source={{uri: item.imageUrl}} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.name.split(' ')[0]}</Text>
            </View>
          )}
          contentContainerStyle={styles.listContainer}
          horizontal={true}
        />
      </View>

      <View>
        <View style={styles.chatsContainer}>
          <Text style={styles.chatsTitle}>Chats</Text>
          <FlatList
            data={users}
            renderItem={({item}) => (
              <View style={styles.chatListItem}>
                <Image
                  source={{uri: item.imageUrl}}
                  style={styles.chatItemImage}
                />
                <View style={styles.chatItemContent}>
                  <Text style={styles.chatItemTitle}>{item.name}</Text>
                  <Text
                    style={styles.chatItemMsg}
                    numberOfLines={1}
                    ellipsizeMode={'tail'}>
                    {item.bio}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: '95%',
    height: '100%',
    paddingTop: 10,
    gap: 30,
  },
  newConContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(26, 26, 26, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    gap: 20,
  },
  containerTitle: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    gap: 0,
  },
  itemContainer: {
    width: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#fcf7ff',
  },
  chatsTitle: {
    fontSize: 22,
    fontWeight: '800',
    paddingBottom: 5,
    paddingLeft: 5,
    textAlign: 'center',
  },
  chatsContainer: {
    height: '75%',
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'rgba(26, 26, 26, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 0.5,
    borderRadius: 15,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.62,
    elevation: 7,
    gap: 5,
  },
  chatListItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 0.5,
    borderBottomColor: 'rgb(220 220 220)',
    paddingVertical: 10,
    gap: 10,
  },
  chatItemImage: {
    width: 60,
    height: 60,
    borderRadius: '50%',
    borderColor: 'rgba(255, 255, 255, 0.8)',
    borderWidth: 1,
  },
  chatItemContent: {
    display: 'flex',
    flexDirection: 'column',
    color: '#fcf7ff',
  },
  chatItemTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#fcf7ff',
  },
  chatItemMsg: {
    fontSize: 14,
    width: '100%',
    color: '#fcf7ff',
    fontWeight: '500',
  },
});

export default CollabsScreen;
