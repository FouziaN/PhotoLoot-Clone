import {StyleSheet} from 'react-native';
//import constants from '../../../constants/Dimension';
const imageSize = 90;
const cameraSize = imageSize * 0.35;
const cameraImage = cameraSize * 0.6;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(255,255,255)',
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
    TextInput: {
      height: 50,
      backgroundColor: 'rgb(248, 248, 248)',
      borderColor: 'gray',
      marginTop: 10,
      paddingVertical: 15,
      paddingHorizontal: 15,
      width: 315,
      borderRadius: 10,
      alignSelf : 'center'
      },
      panel: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 20,
        width: '100%',
      },
      header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
      panelHeader: {
        alignItems: 'center',
      },
      panelHandle: {
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
      },
      panelTitle: {
        fontSize: 27,
        height: 35,
      },
      panelSubtitle: {
        fontSize: 14,
        color: 'gray',
        height: 30,
        marginBottom: 10,
      },
      panelButton: {
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#2e64e5',
        alignItems: 'center',
        marginVertical: 7,
      },
      panelButtonTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
      },
    
  });
  
export default styles;
