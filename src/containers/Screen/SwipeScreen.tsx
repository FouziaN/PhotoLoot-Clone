import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const images = [
   source = require('../../assets/img/asset1.jpeg'),
   
]

const SwipeScreen = (props: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Layout1}>
        <View style={styles.layout2}>
          <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}>
            <View style={styles.layout2}>
              <Image
                style={styles.image}
                source={require('../../assets/img/asset1.jpeg')}></Image>
            </View>
            <View style={styles.layout2}>
              <Image
                style={styles.image}
                source={require('../../assets/img/asset2.jpeg')}></Image>
            </View>
            <View style={styles.layout2}>
              <Image
                style={styles.image}
                source={require('../../assets/img/asset3.jpeg')}></Image>
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={styles.roundRectange}>
       <Text style = {styles.Text2}>Photo Challenges</Text>
       <Text style = {styles.text3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dre magna aliqua dafr grapol. </Text>
        <Text style={styles.dotText}>⬤</Text>
       
      </View>
      <TouchableOpacity style={styles.Text}>
        <Text style={styles.Text1}>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  Layout1: {
    width: 345,
    height: 330,
    backgroundColor: '#ffe7c5',
    borderRadius: 10,
  },
  roundRectange: {
    width: 345,
    height: 223,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 0,
      height: 11.5,
    },
    shadowRadius: 32.5,
    shadowOpacity: 1,
  },
  Text: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  Text1: {
    color: 'rgb(255 ,152 ,3)',
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  layout2: {
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  image: {
    width: 270,
    height: 211.5,
  },
  dotText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 10,
    color: 'white',
  },
  Text2 : {
    fontSize: 17,
  fontWeight: "900",
  fontStyle: "normal",
  justifyContent : 'center',
  alignSelf : 'center',
  marginTop : 40
  },
  text3 : {
    fontSize: 13,
    fontWeight: "normal",
    fontStyle: "normal",
    letterSpacing: 0,
    textAlign: "center",
    marginLeft : 19,
    marginRight : 19,
    marginTop : 16 
  }
});

export default SwipeScreen;
