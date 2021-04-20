import {StyleSheet} from 'react-native';
//import constants from '../../../constants/Dimension';
const imageSize = 90;
const cameraSize = imageSize * 0.35;
const cameraImage = cameraSize * 0.6;

const styles = StyleSheet.create({
    logo: {
      marginTop: 40,
      alignSelf: 'center',
      justifyContent: 'center',
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    socialMedia: {
      width: 145,
      height: 45,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: 'rgba(191, 191, 191, 0.5)',
      shadowOffset: {
        width: 0,
        height: 5.5,
      },
      shadowRadius: 18,
      shadowOpacity: 1,
    },
    SignIN: {
      fontSize: 25,
      fontWeight: '900',
      fontStyle: 'normal',
      marginTop: 28.5,
      marginLeft: 20,
    },
    forgotPassword: {
      fontSize: 15,
      fontWeight: '600',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'right',
      color: '#9d9d9d',
      marginRight: 40,
      marginTop: 20,
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
  });
  
export default styles;
