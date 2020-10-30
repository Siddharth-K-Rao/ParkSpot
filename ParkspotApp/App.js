import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import HomeStack from './src/screens/HomeStack';
import MyBookingStack from './src/screens/MyBookingStack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import CONSTANTS from './src/Constants';
import IconAD from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');
const Drawer = createDrawerNavigator();

function CustomDrawerComponent(props){
  return(
    <DrawerContentScrollView {...props}>
      <View style = {{alignItems: 'center'}}>
        <Image source = {require('./assets/logo3.png')} style = {styles.headerImage} />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerType = 'front' 
        drawerStyle = {styles.drawerContainer}
        drawerContent = {(props) => <CustomDrawerComponent {...props} />}
        drawerContentOptions = {{
          activeTintColor: CONSTANTS.COLOR.LIGHTBLUE,
          activeBackgroundColor: '#eee',
          // inactiveBackgroundColor: '#555',
          inactiveTintColor: 'black',
          itemStyle: {
            borderRadius: 10,
          },
          style: {
            marginTop: 50,
          },
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeStack} 
          options={{
            title: 'Home',
            drawerIcon: ({focused, size}) => (
              <IconAD
                name="home"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="Bookings" 
          component={MyBookingStack} 
          options={{
            title: 'My bookings',
            drawerIcon: ({focused, size}) => (
              <IconMC
                name="calendar-account"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="RentedSpots" 
          component={HomeStack} 
          options={{
            title: 'Your spots',
            drawerIcon: ({focused, size}) => (
              <IconFA5
                name="parking"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={HomeStack} 
          options={{
            title: 'Settings',
            drawerIcon: ({focused, size}) => (
              <IconAD
                name="setting"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="Rate" 
          component={HomeStack} 
          options={{
            title: 'Rate',
            drawerIcon: ({focused, size}) => (
              <IconAD
                name="staro"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="FAQ" 
          component={HomeStack} 
          options={{
            title: 'FAQ',
            drawerIcon: ({focused, size}) => (
              <IconMC
                name="information-outline"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
        <Drawer.Screen 
          name="HelpFeedback" 
          component={HomeStack} 
          options={{
            title: 'Help and feedback',
            drawerIcon: ({focused, size}) => (
              <IconE
                name="help"
                size={size}
                color={focused ? CONSTANTS.COLOR.LIGHTBLUE : 'black'}
              />
            ),
          }}
        />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainer: {
    backgroundColor: 'white',
  },
  headerImage: {
    width: '90%', 
    height: height * 0.1,
    margin: 5,
  },
});
