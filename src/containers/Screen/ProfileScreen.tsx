import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ProfileScreen = (props: any) => {
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Patricia.cau88</Text>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.Image}
              source={require('../../assets/img/icPofPic.png')}
            />
            <View style={{marginTop: 25, marginLeft: 18}}>
              <Text style={styles.Text3}>Patricia Caullins</Text>
              <Text style={styles.Text2}>patricia_caul@xyz.com</Text>
              <Text style={styles.Text1}>
                My grandfather gave me my first camera at the age of 10 and I
                haven’t put it down since.
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.FollowerCount}>250k</Text>
                <Text style={styles.VotesList}>votes received till now</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.EditIcon}>
              <Image source={require('../../assets/img/icEditProfile.png')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.noPost}>No Posts Yet?</Text>
          <Text style={styles.PhotoText}>
            Upload beautiful photos by participating in different challenges and
            fill your posts gallery.
          </Text>
          <TouchableOpacity style={styles.Button}>
            <Text style = {styles.ParticipateText}>Participate</Text>
            </TouchableOpacity>
         
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  Image: {
    marginTop: 20,
  },
  Text1: {
    width: 241.5,
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 5,
  },
  Text2: {
    opacity: 0.4,
    fontSize: 12.5,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(21, 21, 21, 0.4)',
    marginTop: 5,
  },
  Text3: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
  },
  EditIcon: {
    marginTop: 16,
    marginRight: 15,
  },
  FollowerCount: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgb(255, 152 ,3)',
  },
  VotesList: {
    marginLeft: 5,
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: 'rgb( 162, 161, 161)',
  },
  noPost: {
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffc26b',
    marginTop: 185,
  },
  PhotoText: {
    fontSize: 14,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: 'rgba(21, 21, 21, 0.6)',
    marginTop: 15,
  },
  Button: {
    width: 145,
    height: 45,
    borderRadius: 10,
    shadowColor: 'rgba(191, 191, 191, 0.5)',
    shadowOffset: {
      width: 0,
      height: 5.5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#ff9803',
    alignSelf : 'center',
    marginTop : 22.5
  },
  ParticipateText : {
    fontSize: 15,
  fontWeight: "600",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#ff9803",
  alignSelf : 'center',
  marginTop : 12
  }
});

export default ProfileScreen;
