import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import CollabsScreen from './src/screens/CollabsScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => {
  const bgImage = require('./assets/images/bg.jpg');

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <SafeAreaProvider>
        <View style={styles.pageContainer}>
          {/* <HomeScreen /> */}
          <CollabsScreen />
        </View>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});

export default App;
