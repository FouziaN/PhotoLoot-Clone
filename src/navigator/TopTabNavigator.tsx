import  React from 'react'
import {Text , View, StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import HomeScreen from '../containers/Screen/HomeScreen';
import SettingScreen from '../containers/Screen/SettingScreen';



const Tab = createMaterialTopTabNavigator();

function GalleryTabs() {
    return (
        <Tab.Navigator initialRouteName = "Gallery">
            <Tab.Screen name = "Home" component = {HomeScreen}/>
            <Tab.Screen name = "Settings" component = {SettingScreen}/>
        </Tab.Navigator>
    )
    
}

export default function TopTabNavigator() {
    return (
        <NavigationContainer>
            <GalleryTabs/>
        </NavigationContainer>
    )
    
}