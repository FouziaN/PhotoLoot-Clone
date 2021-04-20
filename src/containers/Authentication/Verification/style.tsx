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
    Text1: {
      fontSize: 15,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgb(96,96,96)',
    },
    Layout: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 49.5,
    },
    Text2: {
      fontSize: 15,
      fontWeight: 'bold',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgb(255,152,3)',
    },
    BackSign :{
      height : 25,
      width : 25 ,
      marginLeft : 29.5,
  }
  });

export default styles;
