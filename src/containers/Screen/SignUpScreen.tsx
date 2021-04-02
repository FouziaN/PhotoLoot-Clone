import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import EmailTextField from '../../components/EmailTextField';
import NameTextField from '../../components/NameTextField';
import PasswordTextField from '../../components/PasswordTextField';
import UserNameTextField from '../../components/UserNameTextField';

const SignUpScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [UserName, setUserName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignInScreen')}>
        <Image
          style={styles.BackSign}
          source={require('../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Text style={styles.CreatAcc}>Create Account</Text>
      <Image
        style={styles.Photo}
        source={require('../../assets/img/icProfilePlaceholder.png')}></Image>

      <NameTextField placeHolder="Full Name"/>

      <UserNameTextField
        term={UserName}
        placeholder=" User Name"
        onTermChange={(newUserName : any) => setUserName(newUserName)}
      />

      <EmailTextField
        term={email}
        placeholder="Email Address"
        onTermChange={(newEmail : any) => setEmail(newEmail)}
      />
      <PasswordTextField
        term={password}
        placeHolder="Create Password"
        onTermChange={(newPassword : any) => setPassword(newPassword)}
      />
      <View style={styles.Terms}>
        <Image source={require('../../assets/img/icCheckSelected.png')} />
        <Text>I agree to the Terms & Conditions of PhotoLoot</Text>
      </View>
      <CustomButton title="Submit" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  CreatAcc: {
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 79,
    marginLeft: 29.5,
  },
  Photo: {
    alignSelf: 'center',
    marginTop: 29,
  },
  Terms: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 34.5,
    justifyContent: 'space-evenly',
    width: 350,
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
    marginTop: 43.5,
    alignSelf: 'center',
    justifyContent: 'center',
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
  BackSign: {
    height: 25,
    width: 25,
    marginLeft: 29.5,
  },
});

export default SignUpScreen;
