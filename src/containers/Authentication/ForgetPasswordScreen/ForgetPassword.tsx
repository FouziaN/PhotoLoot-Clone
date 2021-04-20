import React, {useState} from 'react';
import styles from "./style";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import EmailTextField from '../../../components/EmailTextField';
import {useDispatch, useSelector} from 'react-redux';
import { forgetPasswordEmail } from '../../../modules/Auth/action';


const ForgetPassword = (props : any) => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const authReducer = useSelector((state : any)=>{
    return state.AuthReducer
  });
  

  return (
    <SafeAreaView style={styles.container}>
         <TouchableOpacity
        onPress={() => props.navigation.navigate('SignInScreen')}>
        <Image
          style={styles.BackSign}
          source={require('../../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.Icon}
        source={require('../../../assets/img/icLogoOrange.png')}
      />
      <Text style={styles.ForgetPassword}>Forgot Password?</Text>
      <Text style={styles.Text}>
        Don’t worry! enter your registered email ID in {'\n'} 
        order to receive reset password instructions.
      </Text>
      <EmailTextField
        term={authReducer.forgetPassword}
        placeholder="Email Address"
        onTermChange={(forgetEmail: string) => dispatch(forgetPasswordEmail(forgetEmail))}
      />
      <CustomButton onPress={() => props.navigation.navigate('ResetPassword')} style = {styles.CustomButton} title="Submit" />
    </SafeAreaView>
  );
};


export default ForgetPassword;
