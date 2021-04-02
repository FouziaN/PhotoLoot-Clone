import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ImageBackground} from 'react-native';

const ChallengeScreen = (props: any) => {
  return (
    <View>
      <View>
        <ImageBackground
          style={styles.Image}
          source={require('../../assets/img/HikingImage.jpeg')}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('HomeScreen')}>
            <Image
              style={styles.BackIcon}
              source={require('../../assets/img/arrow.png')}></Image>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <View style={styles.Layout}>
        <Text style={styles.Text1}>Roads less traveled</Text>
        <View style={styles.Layout2}>
          <Image
            style={styles.Clock}
            source={require('../../assets/img/clock.png')}
          />
          <Text style={styles.Text2}>1day left</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.layout1}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.icon}
                source={require('../../assets/img/icGoldMedal.png')}
              />
              <View>
                <Text style={styles.Text3}>1st Prize</Text>
                <Text style={styles.Text4}>$125</Text>
              </View>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.icon}
                source={require('../../assets/img/icSilverMedal.png')}
              />
              <View>
                <Text style={styles.Text3}>2nd Prize</Text>
                <Text style={styles.Text4}>$60</Text>
              </View>
            </View>
          </View>
          <View style={styles.layout1}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.icon}
                source={require('../../assets/img/icBronzeMedal.png')}
              />
              <View>
                <Text style={styles.Text3}>3rd Prize</Text>
                <Text style={styles.Text4}>$35</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.Layer}>
          <Image source={require('../../assets/img/icDescription.png')} />
          <Text style={styles.Text5}>Description</Text>
        </View>
        <Text style={styles.Text}>
          This challenge is all about uploading the posts about your recent
          travels to places that are usually less traveled. Post more of your
          travelling pictures and get the chance to win.
        </Text>
        <View style={styles.Layer}>
          <Image source={require('../../assets/img/icRules.png')} />
          <Text style={styles.Text5}>Rules</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Image
            style={{...styles.icon, marginLeft: 40}}
            source={require('../../assets/img/icRulesChck.png')}
          />
          <Text style={{...styles.Text, marginLeft: 10}}>
            You need to travel to places where people {'\n'} have not visited
            much or is not known by {'\n'} many people. Don’t forget to keep
            your {'\n'} camera handy. ¸
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{...styles.icon, marginLeft: 40}}
            source={require('../../assets/img/icRulesChck.png')}
          />
          <Text style={{...styles.Text, marginLeft: 10}}>
            Click a picture of yours or of that place or {'\n'} whateve you feel
            looks amazing and {'\n'} prize worthy.¸
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{...styles.icon, marginLeft: 40}}
            source={require('../../assets/img/icRulesChck.png')}
          />
          <Text style={{...styles.Text, marginLeft: 10}}>
            Upload directly from the camera or can {'\n'} choose from your
            gallery.
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{...styles.icon, marginLeft: 40}}
            source={require('../../assets/img/icRulesChck.png')}
          />
          <Text style={{...styles.Text, marginLeft: 10}}>
            Do give the caption of the image uploaded {'\n'} by you.
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => props.navigation.navigate('GalleryScreen')}
            style={{
              ...styles.layout1,
              width: 125,
              height: 45,
              marginLeft: 25,
              marginTop: 15,
            }}>
            <Text style={styles.GalleryText}>View Gallery</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.Icon2}
              source={require('../../assets/img/icPlusSign.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Image: {
    width: 390,
    height: 194,
  },
  Layout: {
    width: 390,
    height: 650,
    backgroundColor: 'white',
    borderRadius: 20,
    position: 'absolute',
    top: 200,
  },
  Text1: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    marginTop: 15,
    marginLeft: 15,
  },
  Clock: {
    width: 12,
    height: 12,
    backgroundColor: '#9e9e9e',
    marginLeft: 15,
    marginTop: 14,
  },
  Text2: {
    fontSize: 12,
    fontWeight: '800',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#9e9e9e',
    marginTop: 12,
    marginLeft: 8,
  },
  Layout2: {
    flexDirection: 'row',
  },
  layout1: {
    width: 105,
    height: 58,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 13.5,
    shadowOpacity: 1,
    marginLeft: 15,
    marginTop: 25,
  },
  icon: {
    marginTop: 14,
    marginLeft: 15,
  },
  Text3: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    marginTop: 15,
    marginLeft: 12,
    color: 'rgba(0, 0, 0, 0.4)',
  },
  Text4: {
    fontSize: 12.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#5ed177',
    marginTop: 5,
    marginLeft: 20,
  },
  Text5: {
    fontSize: 14,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    marginLeft: 7,
  },
  Layer: {
    flexDirection: 'row',
    marginTop: 28,
    marginLeft: 20,
  },
  Text: {
    opacity: 0.6,
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'rgba(0, 0, 0, 0.6)',
    marginLeft: 40,
    marginTop: 12,
    marginRight: 40,
  },
  Icon2: {
    borderRadius: 10,
    backgroundColor: '#ff9803',
    shadowColor: 'rgba(135, 135, 135, 0.5)',
    shadowOffset: {
      width: 0,
      height: 9.5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    height: 45,
    width: 70,
    marginTop: 15,
    marginRight: 15,
  },
  GalleryText: {
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ff9803',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  BackIcon: {
    width: 25,
    height: 25,
    marginTop: 40,
    marginLeft: 15,
  },
});

export default ChallengeScreen;
