import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const Card = (props: any) => {
  const {name, skills, imageUri, bio} = props;

  return (
    <View style={styles.card}>
      <Image source={{uri: imageUri}} style={styles.imageContainer} />
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>{name}</Text>
        </View>
        <Text style={styles.cardSubtitle}>{skills}</Text>
        <Text style={styles.cardBio} numberOfLines={2} ellipsizeMode="tail">
          {bio}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    minHeight: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 10,
    padding: 10,
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
  },
  imageContainer: {
    width: '25%',
    height: '100%',
    borderRadius: 15,
    borderColor: '#c6c0ca',
    borderWidth: 0.5,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '70%',
  },
  cardTitle: {
    color: '#fcf7ff',
    fontSize: 16,
    fontWeight: '700',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'purple',
    fontWeight: '500',
  },
  cardBio: {
    fontSize: 12,
    fontWeight: '700',
    color: 'rgb(224 216 227)',
    width: '100%',
  },
});

export default Card;
