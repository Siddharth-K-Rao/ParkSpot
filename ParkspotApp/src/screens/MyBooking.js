import React, { Component } from 'react';
import { Image, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header style = {{backgroundColor: 'dodgerblue', justifyContent: 'center', alignItems: 'center'}} ><Text style = {{color: 'white', fontSize: 24}}>Your bookings</Text></Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg'}} /> */}
                <Body>
                  <Text style = {{fontSize: 18, marginLeft: 10}}>Hoodi Circle</Text>
                  {/* <Text style = {{fontSize: 16}}>GeekyAnts</Text> */}
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://img.scoop.it/d28Dz5iqjQWKspmYQ11TlTl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress = {() => this.props.navigation.navigate('MyBookingNext')}>
                  <Text>     </Text>
                  <Icon active name="star" />
                  <Text> 4.6</Text>
                </Button>
              </Left>
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body> */}
              <Right>
                <Text>Booked 11h ago      </Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg'}} /> */}
                <Body>
                  <Text style = {{fontSize: 18, marginLeft: 10}}>Ashok Nagar</Text>
                  {/* <Text style = {{fontSize: 16}}>GeekyAnts</Text> */}
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://www.resortsinbangalore.co.in/puri_large.JPG'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>     </Text>
                  <Icon active name="star" />
                  <Text> 4.3</Text>
                </Button>
              </Left>
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body> */}
              <Right>
                <Text>Booked 2d ago      </Text>
              </Right>
            </CardItem>
          </Card>


          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source={{uri: 'https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg'}} /> */}
                <Body>
                  <Text style = {{fontSize: 18, marginLeft: 10}}>Banashankari</Text>
                  {/* <Text style = {{fontSize: 16}}>GeekyAnts</Text> */}
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://cache.careers360.mobi/media/presets/768X400/colleges/staticmap/2020/8/5/37.png'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Text>     </Text>
                  <Icon active name="star" />
                  <Text> 4.9</Text>
                </Button>
              </Left>
              {/* <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body> */}
              <Right>
                <Text>Booked 4d ago      </Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}