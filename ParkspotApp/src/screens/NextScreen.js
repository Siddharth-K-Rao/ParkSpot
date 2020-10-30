import React from 'react';
import {View, Text, StyleSheet, Dimensions, TextInput} from 'react-native';


const {width, height} = Dimensions.get('window');

export default function NextScreen(props){
    return (
        <View style = {styles.container}>
            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Arrival</Text>
                <Text style = {{}}>15th Aug 2020</Text>
            </View>
            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Departure</Text>
                <Text style = {{}}>15th Aug 2020</Text>
            </View>
            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Vehicle</Text>
                <TextInput style = {{borderRadius: 10, paddingHorizontal: 10, width: width * 0.4, height: '60%', backgroundColor: '#eee'}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center',
        alignItems: 'center',
    },
    rowStyle: {
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-between',
        height: height * 0.08,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingHorizontal: width * 0.1,
    },
});