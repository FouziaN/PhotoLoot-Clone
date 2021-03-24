import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignInScreen from './src/containers/Screen/SignInScreen';
import SignUpScreen from './src/containers/Screen/SignUpScreen';
import ForgetPassword from './src/containers/Screen/ForgetPassword';
import ResetPassword from './src/containers/Screen/ResetPassword';
import Verification from './src/containers/Screen/Verification';
import SwipeScreen from './src/containers/Screen/SwipeScreen';
import HomeScreen from './src/containers/Screen/HomeScreen';
import ProfileScreen from './src/containers/Screen/ProfileScreen';
import NotificationScreen from './src/containers/Screen/NotificationScreen';
import SettingScreen from './src/containers/Screen/SettingScreen';
import SearchScreen from './src/containers/Screen/SearchScreen';
import TermsConditionScreen from './src/containers/Screen/TermsConditionScreen';
import ChangePasswordScreen from './src/containers/Screen/ChangePasswordScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChallengeScreen from './src/containers/Screen/ChallengeScreen';
import PrivacyPolicyScreen from './src/containers/Screen/PrivacyPolicyScreen';
import HelpSupportScreen from './src/containers/Screen/HelpSupportScreen';
import AboutUsScreen from './src/containers/Screen/AboutUsScreen';
import UpComingChallengeScreen from './src/containers/Screen/UpComingChallengeScreen';
import GalleryScreen from './src/containers/Screen/GalleryScreen';
import HallofFameScreen from './src/containers/Screen/HallofFameScreen';
import CurrentChallengeScreen from './src/containers/Screen/CurrentChallengeScreen';
import Images from './src/constants/Images'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

function splashScreen({navigation}) {
  setTimeout(() => {
    navigation.navigate('SignInScreen'); //stack name
  }, 3000);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          style={styles.ImageBackground}
          source={require('./src/assets/img/bottomGraphic.png')}>
          <View style={styles.icon}>
            <Image source={require('./src/assets/img/icLogoOrange.png')} />
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
}

const HomeTabNavigator = () => (
  <Tab.Navigator tabBarOptions={{barStyle: styles.TabBarBase}}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      title = "Home"
      options={{
        tabBarIcon: ({focused}) => (
            <Image style = {{height : 25 , width : 25}}
              source={
                focused
                  ? Images.home_selected
                  : Images.home_unselected
              }
              resizeMode="contain"
            /> 
        ),
      }}
    />

    

    <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarIcon: ({focused}) => (
            <Image style = {{height : 25 , width : 25}}
              source={
                focused
                  ? Images.search_selected
                  : Images.search_unselected
              }
              resizeMode="contain"
            /> 
        ),
      }}
    />

    <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarIcon: ({focused}) => (
            <Image style = {{height : 25 , width : 25}}
              source={
                focused
                  ? Images.profile_selected
                  : Images.profile_unselected 
              }
              resizeMode="contain"
            /> 
        ),
      }}
    /> 
    <Tab.Screen name="Notification" component={NotificationScreen} options={{
        tabBarIcon: ({focused}) => (
            <Image style = {{height : 25 , width : 25}}
              source={
                focused
                  ? Images.notification_selected
                  : Images.notification_unselected
              }
              resizeMode="contain"
            /> 
        ),
      }}
    />
    <Tab.Screen name="Settings" component={SettingScreen} options={{
        tabBarIcon: ({focused}) => (
            <Image style = {{height : 25 , width : 25}}
              source={
                focused
                  ? Images.setting_selected
                  : Images.setting_unselected
              }
              resizeMode="contain"
            /> 
        ),
      }}
   />
  </Tab.Navigator>
);

const GalleryTabs = () => (
      <Tab.Navigator initialRouteName = "Gallery">
          <Tab.Screen name = "Gallery" component = {GalleryScreen}/>
          <Tab.Screen name = "Settings" component = {SettingScreen}/>
      </Tab.Navigator>
  )
  


class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splash Screen"
          headerMode="none"
          options={{title: 'Home'}}>
          <Stack.Screen
            name="SplashScreen"
            component={splashScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{
              headerShown: true,
            }}  />
          <Stack.Screen name="HomeScreen" component={HomeTabNavigator} />
          <Stack.Screen name = "GallerScreen" component = {GalleryTabs} />
          <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="SwipeScreen" component={SwipeScreen} />
          <Stack.Screen name = "HallofFameScreen" component= {HallofFameScreen}/>
          <Stack.Screen name="AboutUsScreen" component={AboutUsScreen} />
          <Stack.Screen name = "SettingScreen" component = {SettingScreen}/>
          <Stack.Screen name = "GalleryScreen" component = {GalleryScreen}/>
          <Stack.Screen name = "CurrentChallengeScreen" component = {CurrentChallengeScreen}/>
         <Stack.Screen name = "UpComingChallengeScreen" component = {UpComingChallengeScreen}/>
          <Stack.Screen
            name="PrivacyPolicyScreen"
            component={PrivacyPolicyScreen}
          />
          <Stack.Screen
            name="HelpSupportScreen"
            component={HelpSupportScreen}
          />
          <Stack.Screen
            name="TermsConditionScreen"
            component={TermsConditionScreen}
          />
          <Stack.Screen
            name="ChangePasswordScreen"
            component={ChangePasswordScreen}
          />
          <Stack.Screen
            name="ChallengeScreen"
            component={ChallengeScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  icon: {
    alignSelf: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 200,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  TabBarBase: {
    backgroundColor: 'yellow',
    shadowColor: 'rgba(0, 0, 0, 0.08)',
    shadowOffset: {
      width: 0,
      height: -7.5,
    },
    shadowRadius: 12,
    shadowOpacity: 1,
  },
});

export default App;
