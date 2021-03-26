import React, {useState} from 'react';
import {TextInput, Text, StyleSheet, Dimensions, View} from 'react-native';
import CustomTextInput from './CustomTextInput';

const {width, height} = Dimensions.get('window');

const EmailTextField = ({term, placeholder, onTermChange, onTermSubmit}) => {
  const [error, setError] = useState('');

  isEmailValid = () => {
    let email = term;
    let Pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    Pattern.test(String(email).toLowerCase())
      ? setError('')
      : setError('Invalid Email Address');
  };

  return (
    <View>
      <CustomTextInput
        placeholder={placeholder}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={isEmailValid}
      />
      <Text style={styles.ErrorText}> {error} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  TextField: {
    fontSize: 14,
    flex: 1,
    marginHorizontal: 20,
  },
  ErrorText: {
    fontSize: 12,
    color: 'red',
    marginHorizontal: 20,
    marginLeft: 45,

    marginTop: 10,
  },
});

export default EmailTextField;
