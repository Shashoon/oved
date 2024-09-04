import React from 'react';
import {ImageBackground, SafeAreaView, StyleSheet} from 'react-native';
import CollabsScreen from './src/screens/CollabsScreen';
import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Amplify} from 'aws-amplify';
import outputs from './amplify_outputs.json';

Amplify.configure(outputs);

export type RootStackParamList = {
  Home: undefined;
  Chats: undefined;
  BottomNavbar: undefined;
};

const Tab = createBottomTabNavigator<ParamListBase>();

const App = () => {
  const bgImage = require('./assets/images/bg.jpg');

  const getNavBarOptions = ({route}: {route: any}) => ({
    tabBarIcon: ({focused}: {focused: boolean}) => {
      let iconName: string;

      switch (route.name) {
        case 'Home':
          iconName = focused ? 'home' : 'home-outline';
          break;
        case 'Chats':
          iconName = focused ? 'chatbox' : 'chatbox-outline';
          break;
        case 'Search':
          iconName = focused ? 'search' : 'search-outline';
          break;
        case 'Profile':
          iconName = focused ? 'person' : 'person-outline';
          break;
        default:
          iconName = 'ellipse';
      }

      return <Ionicons name={iconName} size={24} color={'white'} />;
    },
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: 'gray',
    tabBarStyle: styles.navbarContainer,
    tabBarItemStyle: styles.test,
    headerShown: false,
    tabBarShowLabel: false,
  });

  return (
    <ImageBackground source={bgImage} resizeMode="cover" style={styles.bgImage}>
      <SafeAreaView style={styles.safeAreaContainer}>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={getNavBarOptions}
            initialRouteName="Home"
            sceneContainerStyle={styles.pageContainer}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Chats" component={CollabsScreen} />
            <Tab.Screen name="Search" component={HomeScreen} />
            <Tab.Screen name="Profile" component={CollabsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  safeAreaContainer: {
    flex: 1,
    width: '100%',
  },
  pageContainer: {
    backgroundColor: 'transparent',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbarContainer: {
    width: '95%',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(26, 26, 26, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.7)',
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
  test: {
    width: 30,
    height: 30,
  },
});

export default App;
