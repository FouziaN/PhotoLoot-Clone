import {StyleSheet} from 'react-native';
//import constants from '../../../constants/Dimension';
const imageSize = 90;
const cameraSize = imageSize * 0.35;
const cameraImage = cameraSize * 0.6;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    CreatAcc: {
      fontSize: 25,
      fontWeight: '900',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      marginTop: 79,
      marginLeft: 29.5,
    },
    Photo: {
      alignSelf: 'center',
      marginTop: 29,
    },
    Terms: {
      alignSelf: 'center',
      flexDirection: 'row',
      marginTop: 34.5,
      justifyContent: 'space-evenly',
      width: 350,
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
    SignUP: {
      marginTop: 43.5,
      alignSelf: 'center',
      justifyContent: 'center',
      fontWeight: '600',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'right',
      color: '#9d9d9d',
      fontSize: 15,
    },
    Sign: {
      color: 'rgb(255, 152, 3)',
    },
    BackSign: {
      height: 25,
      width: 25,
      marginLeft: 29.5,
    },
  });

export default styles;
