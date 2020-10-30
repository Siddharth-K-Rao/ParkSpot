import React, {useRef, useEffect, useState} from 'react';
import {View, StyleSheet, Text, Dimensions} from 'react-native';
import BookingSearchBar from '../components/BookingSearchBar';
import DateBar from '../components/DateBar';
import MapView, {Marker} from 'react-native-maps';
import {Button} from 'native-base';


const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 12.99251065;
const LONGITUDE = 77.7121954;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

export default function BookScreen(props){

    const [region, setRegion] = useState({
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    })
    const [markers, setMarkers] = useState([
        {
          coordinate: {
            latitude: LATITUDE + SPACE,
            longitude: LONGITUDE + SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE / 2,
            longitude: LONGITUDE - SPACE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE + SPACE / 1.2,
            longitude: LONGITUDE - SPACE / 3 ,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE - SPACE,
            longitude: LONGITUDE - SPACE / 5,
          },
        },
        {
          coordinate: {
            latitude: LATITUDE - SPACE / 2,
            longitude: LONGITUDE - SPACE,
          },
        },
    ]);

    const ref1 = useRef(null);


    return(
        <View style = {styles.container}>
            <MapView
                style = {styles.map}
                initialRegion={region}
            >
                <Marker
                    ref={ref1}
                    coordinate={markers[0].coordinate}
                    title="Parking Spot 1"
                    description="Anugraha Layout, Kodigehalli"
                    />
                <Marker
                    ref={ref1}
                    coordinate={markers[1].coordinate}
                    title="Parking Spot 2"
                    description="Sriram Layout, Hoodi"
                    />
                <Marker
                    ref={ref1}
                    coordinate={markers[2].coordinate}
                    title="Parking Spot 3"
                    description="Whitefield Main Road, Kodigehalli"
                    />
                <Marker
                    ref={ref1}
                    coordinate={markers[3].coordinate}
                    title="Parking Spot 4"
                    description="Tarun Stores, Devasandra"
                    />
                <Marker
                    ref={ref1}
                    coordinate={markers[4].coordinate}
                    title="Parking Spot 5"
                    description="Basanti Layout, Hoodi"
                    />
                <Marker
                    ref={ref1}
                    coordinate={markers[5].coordinate}
                    title="Parking Spot 6"
                    description="Sai Sathya Layout, Hoodi"
                />
            </MapView>

            <View style = {styles.barStyle}>
                <BookingSearchBar />
            </View>

            <View style = {styles.dateBarStyle}>
                <DateBar />
            </View>
            <Button success style = {styles.buttonStyle} onPress = {() => props.navigation.navigate('Profile')}>
                <Text style = {styles.buttonText}>Next</Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    barStyle: {
        // flex: 1,
        backgroundColor: 'white',
    },
    dateBarStyle: {
        // flex: 1,
        backgroundColor: 'white',
        elevation: 10,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: height,
        // marginTop: height * 0.1,
    },
    buttonStyle: {
        // marginTop: height * 0.9,
        bottom: 0,
        position: 'absolute',
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});