import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, TextInput, Animated, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';
import database, { firebase } from '@react-native-firebase/database'
import { useState } from 'react';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomButton from '../../../components/CustomButton';
import BottomSheet from 'reanimated-bottom-sheet';
import ImagePicker from 'react-native-image-crop-picker';


const EditProfileScreen = (props: any) => {
const [image, setImage] = useState(null);
const [LoggedInUser, setLoggedInUser] = useState({
        id :'',
        email : '',
        userName : '',
        
})

const onChangeUserName = (name : any) => {
    setLoggedInUser({...LoggedInUser , ...{userName : name}}) 
} 

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

const updateSingleData = () => {
    const UserId = firebase.auth().currentUser ;
    firebase.database().ref(`Users/${UserId?.uid}`).update({
        UserName: LoggedInUser.userName,
      })
      .then((value) => console.log(' updated.'));
      
}

  const takePhotoFromCamera = () => {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then((image) => {
        console.log(image);
        const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
        setImage(imageUri);
      });

  }






    return (
        <SafeAreaView>
            <View style={styles.Header}>
                <Text style={styles.HeaderText}>Edit Profile</Text>
                 
               
               
                <View >
                    <TouchableOpacity onPress = {takePhotoFromCamera} style={{ alignItems: 'center', margin: 30 }}>
                        <Image
                            style={styles.Image}
                            source={require('../../../assets/img/icPofPic.png')}
                        />
                    </TouchableOpacity>

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Name"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        value={LoggedInUser.userName}
                        onChangeText = {onChangeUserName}
                        
                    />

                    <TextInput
                        style={{...styles.TextInput, height : 100}}
                        placeholder="Detail"
                        keyboardType="number-pad"
                        autoCorrect={false}
                    />

                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        keyboardType="number-pad"
                        autoCorrect={false}
                        value = {LoggedInUser.email}
                    />

                    <CustomButton
                    onPress = {updateSingleData}
                    title = "Update"/>



                </View>
            </View>
        </SafeAreaView>
    );
};

export default EditProfileScreen;
