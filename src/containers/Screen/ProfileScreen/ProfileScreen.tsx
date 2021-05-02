import React, { useEffect } from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './style';
import EditProfileScreen from '../EditProfileScreen/EditProfileScreen';
import database from '@react-native-firebase/database'
import auth, { firebase } from '@react-native-firebase/auth'
import setup from '../../../../setup'
import { useState } from 'react';


const ProfileScreen = (props: any) => {
const [LoggedInUser, setLoggedInUser] = useState({
  id :'',
  email : '',
  userName : '',
  
})

useEffect (() => {
  const UserId = firebase.auth().currentUser ;
  firebase.database().ref(`Users/${UserId?.uid}`)
  .on('value',(User) => {
    setLoggedInUser({
      id: User.val().uid,
      email : User.val().email,
      userName : User.val().UserName,
    });
  })
},[])
  
  return (
    <SafeAreaView>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Patricia.cau88</Text>
        <View style={{padding: 15}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.Image}
              source={require('../../../assets/img/icPofPic.png')}
            />
            <View style={{marginTop: 25, marginLeft: 18}}>
              <Text style={styles.Text3}>{LoggedInUser.userName}</Text>
              <Text style={styles.Text2}>{LoggedInUser.email}</Text>
              <Text style={styles.Text1}>
                My grandfather gave me my first camera at the age of 10 and I
                haven’t put it down since.
              </Text>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Text style={styles.FollowerCount}>250k</Text>
                <Text style={styles.VotesList}>votes received till now</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.EditIcon}
            onPress={() => props.navigation.navigate('EditProfileScreen')}>
              <Image source={require('../../../assets/img/icEditProfile.png')} />
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

export default ProfileScreen;
