import React, { useEffect, useState } from 'react';
import styles from "./style";
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import EmailTextField from '../../../components/EmailTextField';
import PasswordTextField from '../../../components/PasswordTextField';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmail, updatePassword } from '../../../modules/Auth/action';
import { LoginManager, } from 'react-native-fbsdk';



const SignInScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({})

  const dispatch = useDispatch();
  const authReducer = useSelector((state: any) => {
    return state.AuthReducer
  });


  async function loginfacebook() {
    try {
      let result = await LoginManager.logInWithPermissions(['public_profile','email'])
      if (result.isCancelled) {
        Alert.alert('login is cancelled');
      }
      else {
        Alert.alert('login was successful with permission : ' +
          result.grantedPermissions?.toString());
      }
    }
    catch (error) {
      Alert.alert("login failed with error :" + error);
    }

  }
  
return (
  <SafeAreaView style={styles.container}>
    <Image
      style={styles.logo}
      source={require('../../../assets/img/icLogoOrange.png')}
    />
    <Text style={styles.SignIN}>Sign In</Text>
    <EmailTextField
      term={authReducer.email}
      placeholder="Email Address"
      onTermChange={(newEmail: string) => dispatch(updateEmail(newEmail))}
    />
    <PasswordTextField
      term={authReducer.password}
      placeHolder="Password"
      onTermChange={(newPassword: string) => dispatch(updatePassword(newPassword))}
    />
    <TouchableOpacity
      onPress={() => props.navigation.navigate('ForgetPassword')}>
      <Text style={styles.forgotPassword}>Forget Password?</Text>
    </TouchableOpacity>
    <CustomButton
      title="Submit"
      onPress={() => props.navigation.navigate('HomeScreen')}
    />
    <Text style={styles.connect}>Or Connect With</Text>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
      }}>
      <TouchableOpacity style={styles.socialMedia}
        onPress={loginfacebook}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginLeft: 10,
            width: 120,
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/img/icFb.png')}
          ></Image>
          <Text style={styles.facebook}>Facebook</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialMedia}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginLeft: 10,
            width: 120,
            marginTop: 10,
          }}>
          <Image
            source={require('../../../assets/img/icInstagram.png')}/>
          <Text style={styles.facebook}>Instagram</Text>
        </View>
      </TouchableOpacity> 
    

    </View>
    <View
      style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 43.5 }}>
      <Text style={styles.SignUP}>Don’t have an account?</Text>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignUpScreen')}>
        <Text style={styles.Sign}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);
};



export default SignInScreen;
