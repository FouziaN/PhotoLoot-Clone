import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from "./style";
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {useDispatch, useSelector} from 'react-redux';
import {updateCurrentPassword , updateConfirmNewPassword} from '../../../modules/ChangePassword/action';

const ChangePasswordScreen = (props: any) => {
  const dispatch = useDispatch();
  const ChangePasswordReducer = useSelector((state: any)=> {
    return state.ChangePasswordReducer;
  });
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <View style={styles.HeaderStyle}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('SettingScreen')}>
            <Image
              style={styles.Icon}
              source={require('../../../assets/img/arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.HeaderText}>Change Password</Text>
        </View>
      </View>
      <View>
        <CustomTextInput
          placeholder="Old Password"
          value={ChangePasswordReducer.currentPass}
          onChangeText={(currentPassword: string) => dispatch(updateCurrentPassword(currentPassword))}
        />
        <CustomTextInput
          placeholder="New Password"
          isPasswordEnable="true"
          value={ChangePasswordReducer.confirmPass}
          onChangeText={(confirmPassword: string) => dispatch(updateConfirmNewPassword(confirmPassword))}
        />
        <CustomButton title="Update" />
      </View>
    </SafeAreaView>
  );
};

export default ChangePasswordScreen;
