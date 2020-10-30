import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const {width, height} = Dimensions.get('window');


export default function DateBar({leftText = 'Arrival', rightText = 'Departure'}){

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isDatePickerVisible2, setDatePickerVisibility2] = useState(false);
    const [arrivalDate, setArrivalDate] = useState('choose date');
    const [departureDate, setDepartureDate] = useState('choose date');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirmArrival = (date) => {
        setArrivalDate(date.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
        hideDatePicker();
    };
    
    const showDatePicker2 = () => {
        setDatePickerVisibility2(true);
    };
    
    const hideDatePicker2 = () => {
        setDatePickerVisibility2(false);
    };

    const handleConfirmArrival2 = (date) => {
        setDepartureDate(date.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}));
        hideDatePicker2();
    };

    return(
        <View style = {styles.container}>
            <TouchableOpacity style = {styles.arrivalView} onPress = {showDatePicker}>
                <Text style = {{fontWeight: 'bold'}}>{leftText}</Text>
                <Text style = {{width: width * 0.4, textAlign: 'center'}}>{arrivalDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity style = {styles.arrivalView} onPress = {showDatePicker2}>
                <Text style = {{fontWeight: 'bold'}}>{rightText}</Text>
                <Text style = {{width: width * 0.4, textAlign: 'center'}}>{departureDate}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="datetime"
                onConfirm={handleConfirmArrival}
                onCancel={hideDatePicker}
            />
            <DateTimePickerModal
                isVisible={isDatePickerVisible2}
                mode="datetime"
                onConfirm={handleConfirmArrival2}
                onCancel={hideDatePicker2}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    arrivalView: {
        width: width * 0.5,
        height: height * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
    },
});