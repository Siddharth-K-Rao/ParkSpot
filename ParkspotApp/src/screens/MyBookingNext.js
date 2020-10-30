import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, ScrollView, Image, ImageBackground, Platform } from 'react-native';
import { Block, Text, theme, Button } from 'galio-framework';
import { LinearGradient } from 'expo-linear-gradient';
import { Images, materialTheme } from '../constants';
import { HeaderHeight } from "../constants/utils";
import StarRating from 'react-native-star-rating';
import DropdownAlert from 'react-native-dropdownalert';


const { width, height } = Dimensions.get('screen');
const thumbMeasure = (width - 48 - 32) / 3;

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            starCount: 0
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }

  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={{uri: 'https://img.scoop.it/d28Dz5iqjQWKspmYQ11TlTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9'}}
            style={styles.profileContainer}
            imageStyle={styles.profileImage}>
            <Block flex style={styles.profileDetails}>
              <Block style={styles.profileTexts}>
                <Text color="white" size={28} style={{ paddingBottom: 8 }}></Text>
                <Block row space="between">
                  <Block row>
                    <Block middle style={styles.pro}>
                      <Text size={16} color="white">Done</Text>
                    </Block>
                    <Text color="white" size={16} muted style={styles.seller}>Seller</Text>
                    <Text size={16} color={materialTheme.COLORS.WARNING}>
                      4.6
                      {/* <Icon name="shape-star" family="GalioExtra" size={14} /> */}
                    </Text>
                  </Block>
                  <Block>
                    <Text color={theme.COLORS.MUTED} size={16}>
                      {/* <Icon name="map-marker" family="font-awesome" color={theme.COLORS.MUTED} size={16} /> */}
                      {` `} Hoodi Circle
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
            <Button color = '#27ae60' style = {{width: width * 0.8, marginTop: height * 0.05}}>One Tap Extension</Button>
            <Button color = '#27ae60' style = {{width: width * 0.8, marginTop: height * 0.01}}>Directions</Button>
            <Button color = '#27ae60' style = {{width: width * 0.8, marginTop: height * 0.01}}>Mark Vehicle Location</Button>
            <Button color = '#3498db' style = {{width: width * 0.8, marginTop: height * 0.01}}>Manage Booking</Button>
            <Text />
            <Text style = {{fontSize: 16}}>Rate this spot</Text>
            <StarRating
                disabled={false}
                maxStars={5}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
                fullStarColor = {"#FFDF00"}
            />
        </View>


        </Block>
        <DropdownAlert ref={ref => this.dropDownAlertRef = ref} />
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
    height: 22,
    width: 60,
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
