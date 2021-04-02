import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Value } from 'react-native-reanimated';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

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
          source={require('../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.Icon}
        source={require('../../assets/img/icLogoOrange.png')}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50.5,
  },
  ForgetPassword: {
    marginTop: 30,
    marginLeft: 29.5,
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 15.5,
    marginLeft: 29,
    color: 'rgb(96,96,96)',
  },
  CustomButton: {
    marginTop: 25,
  },
  Text1: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgb(96,96,96)',
  },
  Layout: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 49.5,
  },
  Text2: {
    fontSize: 15,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgb(255,152,3)',
  },
  BackSign :{
    height : 25,
    width : 25 ,
    marginLeft : 29.5,
}
});

export default Verification;
