import React, {useState} from 'react';
import styles from './style';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import EmailTextField from '../../../components/EmailTextField';
import NameTextField from '../../../components/NameTextField';
import PasswordTextField from '../../../components/PasswordTextField';
import UserNameTextField from '../../../components/UserNameTextField';

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
        <Image source={require('../../../assets/img/icCheckSelected.png')} />
        <Text>I agree to the Terms & Conditions of PhotoLoot</Text>
      </View>
      <CustomButton title="Submit" />
    </SafeAreaView>
  );
};



export default SignUpScreen;
