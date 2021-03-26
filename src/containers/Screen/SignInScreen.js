import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import EmailTextField from '../../components/EmailTextField';
import PasswordTextField from '../../components/PasswordTextField';

const SignInScreen = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../assets/img/icLogoOrange.png')}
      />
      <Text style={styles.SignIN}>Sign In</Text>
      <EmailTextField
        term={email}
        placeholder="Email Address"
        onTermChange={newEmail => setEmail(newEmail)}
      />
      <PasswordTextField
        term={password}
        placeHolder="Password"
        onTermChange={newPassword => setPassword(newPassword)}
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
              source={require('../../assets/img/icFb.png')}
              style={styles.icFB}></Image>
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
              source={require('../../assets/img/icInstagram.png')}
              style={styles.icFB}></Image>
            <Text style={styles.facebook}>Instagram</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View
        style={{flexDirection: 'row', alignSelf: 'center', marginTop: 43.5}}>
        <Text style={styles.SignUP}>Don’t have an account?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SignUpScreen')}>
          <Text style={styles.Sign}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    marginTop: 40,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  socialMedia: {
    width: 145,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(191, 191, 191, 0.5)',
    shadowOffset: {
      width: 0,
      height: 5.5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
  },
  SignIN: {
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'normal',
    marginTop: 28.5,
    marginLeft: 20,
  },
  forgotPassword: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#9d9d9d',
    marginRight: 40,
    marginTop: 20,
  },
  connect: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#919191',
    marginTop: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  facebook: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
  },
  Inputs: {
    marginTop: 25,
  },
  SignUP: {
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#9d9d9d',
    fontSize: 15,
  },
  Sign: {
    color: 'rgb(255, 152, 3)',
  },
});

export default SignInScreen;
