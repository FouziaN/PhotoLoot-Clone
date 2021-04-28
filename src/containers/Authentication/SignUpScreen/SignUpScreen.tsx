import React, { useState } from 'react';
import styles from './style';
import { Text, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import EmailTextField from '../../../components/EmailTextField';
import PasswordTextField from '../../../components/PasswordTextField';
import UserNameTextField from '../../../components/UserNameTextField';
import auth from '@react-native-firebase/auth';

const SignUpScreen = (props: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [UserName, setUserName] = useState('');


  const register = async() => {
    setShowLoading(true);
    try {
        const doRegister = await auth().createUserWithEmailAndPassword(email, password);
        setShowLoading(false);
        if(doRegister.user) {
            props.navigation.navigate('HomeScreen');
        }
    } catch (e) {
        setShowLoading(false);
        Alert.alert(
            e.message
        );
    }
};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('SignInScreen')}>
        <Image
          style={styles.BackSign}
          source={require('../../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Text style={styles.CreatAcc}>Create Account</Text>
      <Image
        style={styles.Photo}
        source={require('../../../assets/img/icProfilePlaceholder.png')}></Image>

      {/* <NameTextField placeHolder="Full Name"/> */}

      <UserNameTextField
        term={UserName}
        placeholder="User Name"
        onTermChange={(newUserName: any) => setUserName(newUserName)}
      />

      <EmailTextField
        term={email}
        placeholder="Email Address"
        onTermChange={(newEmail: any) => setEmail(newEmail)}
      />
      <PasswordTextField
        term={password}
        placeholder="Create Password"
        onTermChange={(newPassword: any) => setPassword(newPassword)}
      />
      <View style={styles.Terms}>
        <Image source={require('../../../assets/img/icCheckSelected.png')} />
        <Text>I agree to the Terms & Conditions of PhotoLoot</Text>
      </View>
      <CustomButton title="Submit" onPress={() => register()} />
    </SafeAreaView>
  );
};


export default SignUpScreen;
