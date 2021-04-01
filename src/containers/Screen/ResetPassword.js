import React, {useState} from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {updateNewPassword} from '../../modules/ChangePassword/action'

const ResetPassword = props => {
  const dispatch = useDispatch();
  const ChangePasswordReducer = useSelector(state => {
    return state.ChangePasswordReducer;
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgetPassword')}>
        <Image
          style={styles.BackSign}
          source={require('../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.Icon}
        source={require('../../assets/img/icLogoOrange.png')}
      />
      <Text style={styles.ForgetPassword}>Reset Password</Text>
      <Text style={styles.Text}>Please enter your new password below.</Text>
      <CustomTextInput
        placeholder="New Password"
        value={ChangePasswordReducer.newPass}
        isPasswordEnable="true"
        onChangeText={passwordNew => dispatch(updateNewPassword(passwordNew))}
      />
      <CustomButton
        onPress={() => props.navigation.navigate('Verification')}
        style={styles.CustomButton}
        title="Reset"
      />
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
  BackSign: {
    height: 25,
    width: 25,
    marginLeft: 29.5,
  },
});

export default ResetPassword;
