import React from 'react';
import {View, TouchableOpacity, StyleSheet, Text, Image} from 'react-native';
import propTypes from 'prop-types';

const CustomGalleryGrid = props => {
  return (
    <View style={styles.layout}>
      <Image style={styles.Image} source={props.GalleryImage}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  Image: {
    width: 105,
    height: 105,
    marginLeft: 10,
    borderRadius : 10 
  },
  
});


export default CustomGalleryGrid;
