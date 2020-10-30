import React from 'react';
import {Dimensions} from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import RentScreen from './RentScreen';
import BookScreen from './BookScreen';
import NextScreen from './NextScreen';
import ChatScreen from './ChatScreen';
import Profile from './Profile';
import CONSTANTS from '../Constants';
import { SimpleLineIcons } from '@expo/vector-icons';
import IconI from 'react-native-vector-icons/Octicons';


const {width, height} = Dimensions.get('window');
const HomeStackNavigator = createStackNavigator();

export default function HomeStack() {
    return (
      <HomeStackNavigator.Navigator
        screenOptions = {{
            title: 'ParkSpot',
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerTitleStyle: {
                alignSelf: 'center',
                color: CONSTANTS.COLOR.LIGHTBLUE,
                fontSize: 25,
                marginRight: width * 0.15,
            },
            headerLeft: () =>
                <IconI name = 'three-bars' size = {28} color = 'black' style = {{marginLeft: 20}} />
            ,
            // headerShown: false,
        }}
      >
        <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
        {/* <HomeStackNavigator.Screen name="Rentscreen" component={RentScreen} /> */}
        <HomeStackNavigator.Screen name="BookScreen" component={BookScreen} />
        <HomeStackNavigator.Screen name="NextScreen" component={NextScreen} />
        <HomeStackNavigator.Screen name="Profile" component={Profile} />
        <HomeStackNavigator.Screen name="ChatScreen" component={ChatScreen} />
        <HomeStackNavigator.Screen name="RentScreen" component={RentScreen} />
      </HomeStackNavigator.Navigator>
    );
  }