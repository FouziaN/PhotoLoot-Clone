import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 315,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'rgb(255 ,152 ,3)',
    shadowColor: 'rgba(255 ,152, 3,0.39)',
    shadowOffset: {
      width: 0,
      height: 9.5,
    },
    shadowRadius: 20,
    shadowOpacity: 1,
    alignSelf: 'center',
    marginTop: 20,
  },
  buttonText: {
    alignSelf: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    marginTop: 15,
  },
});

export default CustomButton;
