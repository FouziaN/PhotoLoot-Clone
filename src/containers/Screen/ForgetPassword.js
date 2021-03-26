import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import EmailTextField from '../../components/EmailTextField';


const ForgetPassword = (props) => {
  const [email, setEmail] = useState('');
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
      <Text style={styles.ForgetPassword}>Forgot Password?</Text>
      <Text style={styles.Text}>
        Don’t worry! enter your registered email ID in {'\n'} 
        order to receive reset password instructions.
      </Text>
      <EmailTextField
        term={email}
        placeholder="Email Address"
        onTermChange={newEmail => setEmail(newEmail)}
      />
      <CustomButton onPress={() => props.navigation.navigate('ResetPassword')} style = {styles.CustomButton} title="Submit" />
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
    color : 'rgb(96,96,96)'
  },
  CustomButton : {
      marginTop : 25
  },
  BackSign :{
    height : 25,
    width : 25 ,
    marginLeft : 29.5,
}
});

export default ForgetPassword;
