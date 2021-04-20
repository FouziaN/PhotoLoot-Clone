import React, {useState} from 'react';
import styles from "./style";
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {updateNewPassword} from '../../../modules/ChangePassword/action'

const ResetPassword = (props: any) => {
  const dispatch = useDispatch();
  const ChangePasswordReducer = useSelector((state : any) => {
    return state.ChangePasswordReducer;
  });

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ForgetPassword')}>
        <Image
          style={styles.BackSign}
          source={require('../../../assets/img/backButton.png')}
        />
      </TouchableOpacity>
      <Image
        style={styles.Icon}
        source={require('../../../assets/img/icLogoOrange.png')}
      />
      <Text style={styles.ForgetPassword}>Reset Password</Text>
      <Text style={styles.Text}>Please enter your new password below.</Text>
      <CustomTextInput
        placeholder="New Password"
        value={ChangePasswordReducer.newPass}
        isPasswordEnable="true"
        onChangeText={(passwordNew: string) => dispatch(updateNewPassword(passwordNew))}
      />
      <CustomButton
        onPress={() => props.navigation.navigate('Verification')}
        style={styles.CustomButton}
        title="Reset"
      />
    </SafeAreaView>
  );
};


export default ResetPassword;
