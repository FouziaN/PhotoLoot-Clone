import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const SignUpScreen = (props) => {
  return (
    <SafeAreaView style={styles.container}>
        <Text style = {styles.CreatAcc}>Create Account</Text>
        <Image style = {styles.Photo} source = {require('../../assets/img/icProfilePlaceholder.png')}></Image>
        <CustomTextInput placeholder = "Name"/>
        <CustomTextInput placeholder = "Userame"/>
        <CustomTextInput placeholder = "Email"/>
        <CustomTextInput placeholder = "Create Password" isPasswordEnable = "true"/>
        <View style = {styles.Terms}>
            <Image source = {require('../../assets/img/icCheckSelected.png')}/>
            <Text>I agree to the Terms & Conditions of PhotoLoot</Text>
        </View>
        <CustomButton title = "Submit"/>

     
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  CreatAcc : {
    fontSize: 25,
    fontWeight: "900",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    marginTop : 79,
    marginLeft : 29.5
  },
  Photo: {
    alignSelf : 'center',
    marginTop : 29
  },
   Terms: {
    alignSelf : 'center',
    flexDirection : 'row',
    marginTop : 34.5,
    justifyContent : 'space-evenly',
    width : 350

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
  SignUP : {
      marginTop : 43.5,
      alignSelf : 'center',
      justifyContent : 'center',
      fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    color: '#9d9d9d',
    fontSize : 15,
  },
  Sign : {
      color : 'rgb(255, 152, 3)'
  }
});

export default SignUpScreen;
