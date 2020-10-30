import React from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import { Input, Block } from 'galio-framework';


const {width, height} = Dimensions.get('window');

export default function BookingSearchBar(){
    return(
        <View style = {styles.container}>
            <Input
                placeholder="Search for a place"
                right
                icon="search1"
                family="antdesign"
                iconSize={24}
                // iconColor="red"
                style = {styles.barStyle}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        // backgroundColor: 'green',
    },
    barStyle: {
        width: width * 0.9,
        borderRadius: 100,
    },
});