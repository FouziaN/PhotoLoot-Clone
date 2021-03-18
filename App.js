import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from './src/containers/Screen/SignInScreen';
import SignUpScreen from './src/containers/Screen/SignUpScreen';
import ForgetPassword from './src/containers/Screen/ForgetPassword';
import ResetPassword from './src/containers/Screen/ResetPassword';
import Verification from './src/containers/Screen/Verification'


const Stack = createStackNavigator();

function splashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('SignInScreen') //stack name
  }, 3000);
  return(
    <SafeAreaView>
     <View>
       <ImageBackground style={styles.ImageBackground} source={require('./src/assets/img/bottomGraphic.png')}>
       <View style = {styles.icon}>
           <Image source = {require('./src/assets/img/icLogoOrange.png')}/>
       </View>
       </ImageBackground>
     </View>
    </SafeAreaView>
  )
 }




 class App extends Component{
  render(){
  return (
    <NavigationContainer>
     <Stack.Navigator initialRouteName = "Splash Screen"  headerMode = "none">
       <Stack.Screen name = "SplashScreen" component = {splashScreen}
       options = {{
         headerShown : false
       }}/>
       <Stack.Screen name = "SignInScreen" component = {SignInScreen}/>
       <Stack.Screen name = "SignUpScreen" component = {SignUpScreen}/>
       <Stack.Screen name = "ForgetPassword" component = {ForgetPassword}/>
       <Stack.Screen name = "ResetPassword" component = {ResetPassword}/>
       <Stack.Screen name = "Verification" component = {Verification}/>
       </Stack.Navigator>
   </NavigationContainer>
  );
}};

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  icon: {
    alignSelf : 'center',
    justifyContent : 'center',
    position : 'absolute',
    top : 200,

  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
