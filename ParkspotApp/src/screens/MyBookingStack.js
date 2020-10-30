import React from 'react';
import {Dimensions} from 'react-native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import MyBooking from './MyBooking';
import MyBookingNext from './MyBookingNext';
import BookScreen from './BookScreen';
import CONSTANTS from '../Constants';
import { SimpleLineIcons } from '@expo/vector-icons';
import IconI from 'react-native-vector-icons/Octicons';


const {width, height} = Dimensions.get('window');
const HomeStackNavigator = createStackNavigator();

export default function MyBookingStack() {
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
        <HomeStackNavigator.Screen name="MyBooking" component={MyBooking} />
        {/* <HomeStackNavigator.Screen name="Rentscreen" component={RentScreen} /> */}
        <HomeStackNavigator.Screen name="MyBookingNext" component={MyBookingNext} />
      </HomeStackNavigator.Navigator>
    );
  }