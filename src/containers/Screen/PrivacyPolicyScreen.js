import React from 'react';
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomButton from '../../components/CustomButton';
import CustomTextInput from '../../components/CustomTextInput';

const PrivacyPolicyScreen = props => {
  return (  <SafeAreaView style={styles.container}>
    <View style={styles.Header}>
      <View style={styles.HeaderStyle}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('SettingScreen')}>
          <Image
            style={styles.Icon}
            source={require('../../assets/img/arrow.png')}
          />
        </TouchableOpacity>
        <Text style={styles.HeaderText}>About Us</Text>
      </View>
    </View>
    <View style={styles.Padding}>
      <Text style={styles.Text1}>Privacy Policy</Text>
      <Text style={styles.Text2}>Your Account Information</Text>
      <Text style={styles.Content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis
        commodo odio aenean sed adipiscing diam donec. Vulputate odio ut enim
        blandit volutpat maecenas volutpat. Quisque egestas diam in
        arcu.Cursus euismod quis viverra. Fames ac turpis egestas maecenas
        pharetra convallis posuere morbi. Consequat interdum varius sit amet
        mattis vulputate. Vel facilisis volutpat est velit egestas dui id.
        Purus non enim praesent elementum facilisis leo vel. {'\n'} {'\n`'} Sed felis eget
        velit aliquet.Posuere lorem ipsum dolor sit amet consectetur
        adipiscing elit duis. Vitae semper quis lectus nulla. Consequat id
        porta nibh venenatis cras sed felis. Sed pulvinar proin gravida
        hendrerit lectus a. Turpis egestas maecenas pharetra convallis. t
        elementum facilisis leo vel. Sed felis eget velit aliquet.
      </Text>
      <Text style={styles.Text2}>Your Content</Text>
      <Text style={styles.Content}>
        Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Morbi quis commodo odio aenean sed
        adipiscing diam donec. Vulputate odio ut enim blandit volutpat
        maecenas volutpat. Quisque egestas diam in arcu.Cursus euismod quis
        viverra. Fames ac turpis egestas maecenas pharetra convallis posuere
        morbi. Consequat interdum varius sit amet. {'\n'} {'\n`'}Rulit egestas dui id. Purus
        non enim praesent elementum facilisis leo vel. Sed felis eget velit
        aliquet.Posuere lorem ipsum dolor sit amet consectetur iscing elit
        duis. Vitae semper quis lectus nulla. Consequat id porta nibh
        venenatis cras sed feli. Sed pulvinar proin gravida hendrerit lectus
        a. Turpis egestas maecenas pharetra convallis.
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
  Padding : {
    padding : 15
  },
  Text1 : {
    marginTop : 15,
    fontSize: 15,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#ff9803"
  },
  Text2 : {
    fontSize: 14,
  fontWeight: "bold",
  fontStyle: "normal",
   marginTop : 20
  },
  Content : {
    
  fontSize: 12.5,
  fontWeight: "normal",
  fontStyle: "normal",
  letterSpacing: 0,
  color: "rgba(21, 21, 21, 0.5)",
  marginTop : 13.5
  }
});

export default PrivacyPolicyScreen;

