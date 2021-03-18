import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  TextInput,
} from 'react-native';
import propTypes from 'prop-types';

const CustomTextInput = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TextInput
        style={styles.inputStyle}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChangeText={props.onChangeText}
      />
      {props.isPasswordEnable ? (
        <TouchableOpacity
          onPress={() => props.onPasswordPress()}
          style={{position: 'absolute', right: 50}}>
          <Image style = {{marginTop : 20}}
            source={
              props.showPassword
                ? require('../assets/img/icEyeActive.png')
                : require('../assets/img/icEyeInactive.png')
            }
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    backgroundColor: 'rgb(245, 245, 245)',
    borderColor: 'white',
    marginTop: 25,
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 315,
    height: 45,
    borderRadius: 10,
  },
  containerStyle: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10,
  },
});

// CustomDetail.propTypes = {
//     EmployeeName : propTypes.string.isRequired,
//     EmployeeShift : propTypes.string,
//     EmployeeImage :  propTypes.any,
// }

// CustomDetail.defaultProps = {

//     EmployeeName: 'AppIn',
//     EmployeeShift: "GeeksforGeeks",

// }

export default CustomTextInput;
