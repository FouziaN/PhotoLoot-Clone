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
      alignSelf: 'center',
      justifyContent: 'center',
      marginTop: 30,
      color: 'white',
    },
    Image: {
      marginTop: 20,
    },
    Text1: {
      width: 241.5,
      fontSize: 11,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      marginTop: 5,
    },
    Text2: {
      opacity: 0.4,
      fontSize: 12.5,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgba(21, 21, 21, 0.4)',
      marginTop: 5,
    },
    Text3: {
      fontSize: 15,
      fontWeight: '600',
      fontStyle: 'normal',
    },
    EditIcon: {
      marginTop: 16,
      marginRight: 15,
    },
    FollowerCount: {
      fontSize: 11,
      fontWeight: 'normal',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'left',
      color: 'rgb(255, 152 ,3)',
    },
    VotesList: {
      marginLeft: 5,
      fontSize: 11,
      fontWeight: 'normal',
      fontStyle: 'normal',
      color: 'rgb( 162, 161, 161)',
    },
    noPost: {
      fontSize: 25,
      fontWeight: '900',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'center',
      color: '#ffc26b',
      marginTop: 185,
    },
    PhotoText: {
      fontSize: 14,
      fontWeight: '600',
      fontStyle: 'normal',
      letterSpacing: 0,
      textAlign: 'center',
      color: 'rgba(21, 21, 21, 0.6)',
      marginTop: 15,
    },
    Button: {
      width: 145,
      height: 45,
      borderRadius: 10,
      shadowColor: 'rgba(191, 191, 191, 0.5)',
      shadowOffset: {
        width: 0,
        height: 5.5,
      },
      shadowRadius: 18,
      shadowOpacity: 1,
      borderStyle: 'solid',
      borderWidth: 1,
      borderColor: '#ff9803',
      alignSelf : 'center',
      marginTop : 22.5
    },
    ParticipateText : {
      fontSize: 15,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "left",
    color: "#ff9803",
    alignSelf : 'center',
    marginTop : 12
    }
  });
  
export default styles;
