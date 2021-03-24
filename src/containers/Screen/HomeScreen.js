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



const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <View style = {{flexDirection : 'row' ,alignSelf : 'center', justifyContent : 'center' }}>
          <Text style={styles.HeaderText}>Home</Text>
          <TouchableOpacity>
          <View style={styles.Votes}></View>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CurrentChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/CurrentChallanges.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.Icon}
              source={require('../../assets/img/icDollar.png')}
            />
            <View>
              <Text style={styles.Text1}>Current Challenges</Text>
              <Text style={styles.Text2}>2 Ongoing</Text>
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
              source={require('../../assets/img/challengeAccepted.jpeg')}
            />

            <Image
              style={styles.layout1}
              source={require('../../assets/img/icWhiteBase.png')}></Image>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.Icon}
                source={require('../../assets/img/icCalendar.png')}
              />
              <View>
                <Text style={styles.Text1}>Upcoming Challenges</Text>
                <Text style={styles.Text2}>2 Upcoming</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HallofFameScreen')}>
          <View>
            <Image
              style={styles.ImageBack}
              source={require('../../assets/img/Trophy.jpeg')}
            />

            <Image
              style={styles.layout1}
              source={require('../../assets/img/icWhiteBase.png')}></Image>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.Icon}
                source={require('../../assets/img/icTrophy.png')}
              />
              <View>
                <Text style={styles.Text1}>Hall Of Fame</Text>
                <Text style={styles.Text2}>View Winners</Text>
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
    marginTop : 20,
    backgroundColor: 'white',
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
    marginLeft: 20,
  },
  Text2: {
    fontSize: 11.3,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(77, 77, 77, 0.8)',
    marginLeft: 20,
    marginTop: 5,
  },
  Votes: {
    width: 82,
    height: 30,
    borderRadius: 6,
    backgroundColor: 'white',
    marginTop : 20,
    justifyContent : 'flex-end',
    marginLeft : 60
  },
});

export default HomeScreen;
