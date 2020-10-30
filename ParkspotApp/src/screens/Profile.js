import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import DropDownPicker from 'react-native-dropdown-picker';
import DropdownAlert from 'react-native-dropdownalert';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import IconFA from 'react-native-vector-icons/FontAwesome';


const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: 'https://i.insider.com/5e3d951be35bab70d52d3adb?width=600&format=jpeg&auto=webp'}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}>Details</Text>
                <Block row space="between">
                  <Block row>
                    <Block middle style={styles.pro}>
                      <Text size={16} color="white">Pro</Text>
                    </Block>
                    <Text color="white" size={16} muted style={styles.seller}>Seller</Text>
                    <Text size={16} color={materialTheme.COLORS.WARNING}>
                      4.8 
                      {/* <Icon name="shape-star" family="GalioExtra" size={14} /> */}
                    </Text>
                  </Block>
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      {/* <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} /> */}
                      {` `} Whitefield Main Road
                      </Text>
                  </Block>
                </Block>
              </Block>
              <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} style={styles.gradient} />
            </Block>
          </ImageBackground>
        </Block>

        <Block flex style={styles.options}>
        <View style = {styles.container}>
            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Arrival</Text>
                <Text style = {{}}>Mon Aug 31 2020, 12:00 AM</Text>
            </View>
            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Departure</Text>
                <Text style = {{}}>Mon Aug 31 2020, 6:30 AM</Text>
            </View>

            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Vehicle</Text>
                <DropDownPicker
                    items={[
                        {label: 'Bike', value: 'Bike', icon: () => <IconM name="bike" size={18} color="dodgerblue" />},
                        {label: 'Car', value: 'Car', icon: () => <IconM name="car" size={18} color="dodgerblue" />},
                    ]}
                    defaultValue={'Car'}
                    containerStyle={{height: 40, backgroundColor: 'white', width: width * 0.22}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
                <TextInput
                  style = {{borderRadius: 10, paddingHorizontal: 10, width: width * 0.39, height: '60%', backgroundColor: '#eee'}}
                  placeholder = "model & num"
                />
            </View>

            <View style = {styles.rowStyle}>
                <Text style = {{fontWeight: 'bold'}}>Payment</Text>
                <DropDownPicker
                    items={[
                        {label: 'Google Pay', value: 'Google', icon: () => <IconFA name="google" size={18} color="#000" />},
                        {label: 'Card', value: 'Card', icon: () => <IconF name="credit-card" size={18} color="#000" />},
                        {label: 'Banking', value: 'Bank', icon: () => <IconFA name="bank" size={18} color="#000" />},
                        // {label: 'Paypal', value: 'Paypal', icon: () => <IconFA name="paypal" size={18} color="#000" />},
                    ]}
                    defaultValue={'Google'}
                    containerStyle={{height: 40, backgroundColor: 'white', width: width * 0.4}}
                    style={{backgroundColor: '#fafafa'}}
                    itemStyle={{
                        justifyContent: 'flex-start'
                    }}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => this.setState({
                        country: item.value
                    })}
                />
            </View>
            <Button color = 'info' onPress = {() => this.props.navigation.navigate('ChatScreen')} style = {{width: width * 0.3, marginTop: height * 0.03, marginRight: width * 0.5, borderRadius: 30}}>Chat</Button>
            <Button color = 'success' style = {{width: width * 0.8, marginTop: height * 0.05}} onPress = {() => this.dropDownAlertRef.alertWithType('success', 'Success', 'Your spot is booked!')}>Book now</Button>
        </View>
        <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
        </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
    marginBottom: -HeaderHeight * 2,
  },
  profileImage: {
    width: width * 1.1,
    height: 'auto',
  },
  profileContainer: {
    width: width,
    height: height / 2.2,
  },
  profileDetails: {
    paddingTop: theme.SIZES.BASE * 4,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  profileTexts: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
    zIndex: 2
  },
  pro: {
    backgroundColor: materialTheme.COLORS.LABEL,
    paddingHorizontal: 6,
    marginRight: theme.SIZES.BASE / 2,
    borderRadius: 4,
    height: 19,
    width: 50,
  },
  seller: {
    marginRight: theme.SIZES.BASE / 2,
  },
  options: {
    position: 'relative',
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: -theme.SIZES.BASE * 13,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2,
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: 'center',
    width: thumbMeasure,
    height: thumbMeasure
  },
  gradient: {
    zIndex: 1,
    left: 0,
    right: 0,
    bottom: 0,
    height: '30%',
    position: 'absolute',
  },
  container: {
    flex: 1,
    // backgroundColor: 'white',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  rowStyle: {
      flexDirection: 'row',
      width: width * 0.9,
      justifyContent: 'space-between',
      height: height * 0.07,
      alignItems: 'center',
      borderBottomWidth: 0.5,
      paddingHorizontal: width * 0.05,
  },
});
