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
    Header: {
      width: 400,
      height: 64,
      backgroundColor: '#ff9803',
    },
    HeaderText: {
      fontSize: 20,
      fontWeight: '600',
      fontStyle: 'normal',
      marginTop: 25,
      color: 'white',
      marginLeft: 80,
    },
    HeaderStyle: {
      flexDirection: 'row',
    },
    Icon: {
      marginTop: 25,
      height: 25,
      width: 25,
      marginLeft: 15,
    },
  });
  

export default styles;
