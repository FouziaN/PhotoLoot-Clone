import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Data = [
  {
    ChallengeImage: require('../../assets/img/CurrentChallanges.jpeg'),
    IconImage: require('../../assets/img/icDollar.png'),
    ChallenegName: 'Current Challenges',
    ChallengeGoing: '2 Ongoing',
  },
];

const CurrentChallengeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Current Challenges</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/BeachHappy.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 350,
              }}>
              <Text style={styles.Text1}>Beach happy</Text>
              <Text style={styles.PrizeText}>Total Prize</Text>
            </View>
            <View style = {{flexDirection : 'row' , justifyContent : 'space-evenly'}}>
              <View style={styles.Layout2}>
                <Image
                  style={styles.Clock}
                  source={require('../../assets/img/clock.png')}
                />
                <Text style={styles.Text2}>2days left</Text>
              </View>
              <View style={{flexDirection: 'row' , marginLeft : 15}}>
                <Text style = {styles.dollar}>$</Text>
                <Text style = {styles.price}>150</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/HikingImage.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 350,
              }}>
              <Text style={styles.Text1}>Roads travelled</Text>
              <Text style={styles.PrizeText}>Total Prize</Text>
            </View>
            <View style = {{flexDirection : 'row' , justifyContent : 'space-evenly'}}>
              <View style={styles.Layout2}>
                <Image
                  style={styles.Clock}
                  source={require('../../assets/img/clock.png')}
                />
                <Text style={styles.Text2}>1days left</Text>
              </View>
              <View style={{flexDirection: 'row' , marginLeft : 15}}>
                <Text style = {styles.dollar}>$</Text>
                <Text style = {styles.price}>200</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
     
      </View>
      <View style={{marginTop: 10}}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/Wonder.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 350,
              }}>
              <Text style={styles.Text1}>7 wonders</Text>
              <Text style={styles.PrizeText}>Total Prize</Text>
            </View>
            <View style = {{flexDirection : 'row' , justifyContent : 'space-evenly'}}>
              <View style={styles.Layout2}>
                <Image
                  style={styles.Clock}
                  source={require('../../assets/img/clock.png')}
                />
                <Text style={styles.Text2}>18h 42m left</Text>
              </View>
              <View style={{flexDirection: 'row' , marginLeft : 15}}>
                <Text style = {styles.dollar}>$</Text>
                <Text style = {styles.price}>270</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
     <View style ={{marginTop : 20}} >
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/Wonder.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={{alignSelf: 'center', justifyContent: 'space-between'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                width: 350,
              }}>
              <Text style={styles.Text1}>7 wonders</Text>
              <Text style={styles.PrizeText}>Total Prize</Text>
            </View>
            <View style = {{flexDirection : 'row' , justifyContent : 'space-evenly'}}>
              <View style={styles.Layout2}>
                <Image
                  style={styles.Clock}
                  source={require('../../assets/img/clock.png')}
                />
                <Text style={styles.Text2}>18h 42m left</Text>
              </View>
              <View style={{flexDirection: 'row' , marginLeft : 15}}>
                <Text style = {styles.dollar}>$</Text>
                <Text style = {styles.price}>270</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop : 10
  },
  Header: {
    width: 400,
    height: 64,
    backgroundColor: '#ff9803',
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: 'white',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 15.5,
    marginLeft: 29,
    color: 'rgb(96,96,96)',
  },
  ImageBack: {
    width: 345,
    height: 140,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  layout1: {
    position: 'absolute',
    top: 140,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Icon: {
    marginLeft: 89,
    marginTop: 5,
  },
  Text1: {
    fontSize: 15.3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000000',
  },
  Text2: {
    fontSize: 11.3,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(77, 77, 77, 0.8)',
    marginLeft : 5
  },
  Clock: {
    width: 10,
    height: 10,
    backgroundColor: '#9e9e9e',
    marginTop : 3
  },
  Layout2: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop : 5
  },
  PrizeText: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 0.4)',
    marginTop : 3
  },
  dollar : {
    fontSize: 12.5,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffbc3a",
    marginTop : 5
  },
  price :{
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#ffbc3a",
    marginLeft : 3
  }

});

export default CurrentChallengeScreen;
