import React from 'react';
import styles from './style';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Value } from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';

const Verification = (props: any) => {

  const otpRegex = /^\s*\d{6}(?:\s*,\s*\d{6})*\s*$/; 

  const onOtpVerification = (number : any ) => {
    const isValid = otpRegex.test(number);
    console.log(isValid);
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
      <Image
        style={styles.Icon}
        source={require('../../../assets/img/icLogoOrange.png')}
      />
      <Text style={styles.ForgetPassword}>Verification</Text>
      <Text style={styles.Text}>
        To verify it’s you please enter the OTP sent to {'\n'}
        your registered email ID.
      </Text>
      <CustomTextInput placeholder="Enter OTP"
      onChangeText = {onOtpVerification} 
      maxLength = {6}/>
      <CustomButton onPress={() => props.navigation.navigate('SwipeScreen')} style={styles.CustomButton} title="Submit" />
      <View style={styles.Layout}>
        <Text style={styles.Text1}>Didn’t receive OTP? </Text>
        <TouchableOpacity >
          <Text style={styles.Text2}>Resend</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default Verification;
