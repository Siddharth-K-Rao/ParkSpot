import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity, Image, Animated, Easing} from 'react-native';
import CONSTANTS from '../Constants';
import BookScreen from './BookScreen'

const {width, height} = Dimensions.get('window');

export default function HomeScreen(props){

    const carPosition = new Animated.Value(400);
    // var bottom = -300;

    useEffect(() => {
        Animated.timing(carPosition, {
            toValue: 0,
            duration: 2000,
            useNativeDriver: true,
            easing: Easing.in()
        }).start();
    }, []);

    return(
        <View style = {styles.container}>
            <View style = {styles.innerTopContainer}>
            <Text style = {styles.headingText}>How may we help you?</Text>

            <TouchableOpacity style = {styles.buttonStyle} activeOpacity = {0.7} onPress = {() => {props.navigation.navigate('RentScreen')}}>
                <Text style = {styles.buttonText}>I have a spot to rent</Text>
            </TouchableOpacity>

            <TouchableOpacity style = {styles.buttonStyle} activeOpacity = {0.7} onPress = {() => {props.navigation.navigate('BookScreen')}}>
                <Text style = {styles.buttonText}>I need a parking spot</Text>
            </TouchableOpacity>
            </View>
            
            <View style = {styles.innerBottomContainer}>
            </View>
            
            <Animated.Image source = {require('../../assets/car-top-view-crop.png')} style = {[styles.imageStyle, {transform: [{translateY: carPosition}]}]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    innerTopContainer: {
        justifyContent: 'flex-end',
        // backgroundColor: 'green',
        flex: 20,
    },
    innerBottomContainer: {
        flex: 1,
    },
    headingText: {
        fontSize: 20,
        textAlign: 'center',
    },
    buttonStyle: {
        backgroundColor: CONSTANTS.COLOR.TURQUOISE,
        width: width * 0.75,
        height: width * 0.13,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: height * 0.06,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    imageStyle: {
        width: width,
        height: height * 0.5,
        resizeMode: 'contain',
    },
});