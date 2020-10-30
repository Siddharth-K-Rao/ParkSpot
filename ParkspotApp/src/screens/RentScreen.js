import React, {useState, useRef} from 'react';
import {View, StyleSheet, Text, Dimensions, TextInput} from 'react-native';
import {Button, CheckBox, Radio} from 'native-base';
import DateBar from '../components/DateBar';
import DropdownAlert from 'react-native-dropdownalert';


const {width, height} = Dimensions.get('window');

export default function RentScreen(){

    const dropRef = useRef(null);

    const [bike, setBike] = useState(false);
    const [car, setCar] = useState(false);
    const [hour, setHour] = useState(false);
    const [day, setDay] = useState(false);
    const [any, setAny] = useState(false);

    function toggleBike(){
        setBike(!bike);
    }
    function toggleCar(){
        setCar(!car);
    }
    
    function toggleHour(){
        setHour(true);
        setDay(false);
        setAny(false);
    }
    function toggleDay(){
        setHour(false);
        setDay(true);
        setAny(false);
    }
    function toggleAny(){
        setHour(false);
        setDay(false);
        setAny(true);
    }
    

    return(
        <View style = {styles.container}>
            <Text style = {styles.headingText}>Your parking spot Details</Text>

            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Area photos</Text>
                <Button style = {styles.buttonStyle}>
                    <Text>Upload</Text>
                </Button>
            </View>

            <Text style = {{fontWeight: 'bold', marginLeft: 40, marginTop: 10}}>Vehicle allowed</Text>
            <Text></Text>
            <View style = {{flexDirection: 'row'}}>
                <CheckBox checked = {bike} style = {{marginLeft: 30,}} onPress = {() => toggleBike()}/><Text style = {{marginLeft: 20,}}>Bike</Text>
            </View>
            <View style = {{flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 0.5}}>
                <CheckBox checked = {car} style = {{marginLeft: 30,}} onPress = {() => toggleCar()} /><Text style = {{marginLeft: 20,}}>Car</Text>
            </View>

            <Text style = {{fontWeight: 'bold', marginLeft: 40, marginTop: 10}}>Type of parking space</Text>
            <Text></Text>
            <View style = {{flexDirection: 'row'}}>
                <Radio selected = {hour} style = {{marginLeft: 30,}} onPress = {() => toggleHour()}/><Text style = {{marginLeft: 20,}}>Hourly</Text>
            </View>
            <View style = {{flexDirection: 'row', marginTop: 10}}>
                <Radio selected = {day} style = {{marginLeft: 30,}} onPress = {() => toggleDay()}/><Text style = {{marginLeft: 20,}}>Daily</Text>
            </View>
            <View style = {{flexDirection: 'row', paddingVertical: 10, borderBottomWidth: 0.5}}>
                <Radio selected = {any} style = {{marginLeft: 30,}} onPress = {() => toggleAny()} /><Text style = {{marginLeft: 20,}}>Any</Text>
            </View>

            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Num of spots</Text>
                <TextInput
                  style = {{borderRadius: 10, paddingHorizontal: 10, width: width * 0.39, height: '60%', backgroundColor: '#eee'}}
                  placeholder = "Enter here"
                />
            </View>
            
            <View style = {{borderBottomWidth: 0.5}}>
                {/* <Text style = {{fontWeight: 'bold'}}>Start date</Text> */}
                <DateBar leftText = 'Start Date' rightText = 'End Date' />
            </View>

            <Button full success style = {{marginTop: 140, height: 60}} onPress = {() => {dropRef.current.alertWithType('success', 'Congrats', 'Your spot is now available to rent!')}} >
                <Text style = {{color: 'white', fontSize: 24}}>Rent spot</Text>
            </Button>

            <DropdownAlert ref = {dropRef}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        backgroundColor: 'white',
        // alignItems: 'center',
    },
    headingText: {
        fontSize: 20,
        paddingVertical: 20,
        width,
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'dodgerblue',
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
    buttonStyle: {
        paddingHorizontal: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'dodgerblue',
        backgroundColor: 'white',
        marginTop: 10,
    },
});