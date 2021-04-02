import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const NotificationScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Notifications</Text>
      </View>
      <View>
        <Image
          style={styles.Icon}
          source={require('../../assets/img/icGraphicNoChallenges.png')}></Image>
        <Text style={styles.Text1}>No Notifications</Text>
        <Text style={styles.Text2}>
          Sorry there are no notifications {'\n'}
    for you right now..
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Header: {
    width: 400,
    height: 64,
    backgroundColor: '#ff9803',
  },
  HeaderText: {
    fontSize: 20,
    fontWeight: '600',
    fontStyle: 'normal',
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: 'white',
  },
  Icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  Text1: {
    fontSize: 25,
    fontWeight: '900',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
    color: '#ffc26b',
    marginTop: 55,
    
  },
  Text2: {
    opacity: 0.6,
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    color: 'rgba(21, 21, 21, 0.6)',
    marginTop : 15,
   
    alignSelf : 'center',
    width: 241,
  height: 60,
  },
});

export default NotificationScreen;
