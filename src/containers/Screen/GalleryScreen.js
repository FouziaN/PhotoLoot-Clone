import React, {Component} from 'react';
import { ScrollView } from 'react-native';
import {Text, View, Image, StyleSheet, TouchableOpacity , FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CustomGalleryGrid from '../../components/CustomGalleryGrid';

const numColumns = 3
const Data = [
  {GalleryImage: require('../../assets/img/Animal1.jpeg')},
  {GalleryImage: require('../../assets/img/Animal2.jpeg')},
  {GalleryImage: require('../../assets/img/Animal3.jpeg')},
  {GalleryImage: require('../../assets/img/BeachHappy.jpeg')},
  {GalleryImage: require('../../assets/img/asset1.jpeg')},
  {GalleryImage: require('../../assets/img/asset2.jpeg')},
  {GalleryImage: require('../../assets/img/asset3.jpeg')},
  {GalleryImage: require('../../assets/img/asset4.jpeg')},
  {GalleryImage: require('../../assets/img/HikingImage.jpeg')},
  {GalleryImage: require('../../assets/img/Travel1.jpeg')},
  {GalleryImage: require('../../assets/img/Travel2.jpeg')},
  {GalleryImage: require('../../assets/img/Travel3.jpeg')},
  {GalleryImage: require('../../assets/img/Wonder.jpeg')},
  {GalleryImage: require('../../assets/img/Animal3.jpeg')},
  {GalleryImage: require('../../assets/img/BeachHappy.jpeg')},
  {GalleryImage: require('../../assets/img/asset1.jpeg')},
  {GalleryImage: require('../../assets/img/asset2.jpeg')},
  {GalleryImage: require('../../assets/img/asset3.jpeg')},
  {GalleryImage: require('../../assets/img/asset4.jpeg')},
  {GalleryImage: require('../../assets/img/HikingImage.jpeg')},
  {GalleryImage: require('../../assets/img/Animal1.jpeg')},
  
];
const ModalPoup = ({visible, children}) => {
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    toggleModal();
  }, [visible]);
  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={showModal}>
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};


export default class GalleryScreen extends Component {
  
  renderItem = ({item , index}) =>{
    return(
    <View style = {styles.items}>
     <CustomGalleryGrid GalleryImage = {item.GalleryImage}/>
    </View>
    )
  }
  render() {
    return (
     
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>Gallery</Text>
            <TouchableOpacity
              onPress={() => setVisible(true)}
              style={styles.Votes}></TouchableOpacity>
          </View>
          <ScrollView>
          <View style = {styles.GalleryStyles}>
            <FlatList 
            data = {Data}
            renderItem = {this.renderItem}
            numColumns = {numColumns}/>
            
          </View>
          
          <TouchableOpacity style = {styles.SortButton}>
            <Image style = {styles.Icon} source = {require('../../assets/img/icSortBy.png')}/>
          </TouchableOpacity>
          </ScrollView>

          
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
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
  Votes: {
    width: 82,
    height: 30,
    borderRadius: 6,
    backgroundColor: 'white',
    position: 'absolute',
    right: 30,
    top: 28,
  },
  items : {
    alignSelf : 'center',
    justifyContent : 'center',
    height : 100,
    margin : 5,
  },
  GalleryStyles : {
    paddingTop : 10
  },
  SortButton : {
    width: 70,
    height: 60,
    borderRadius: 10,
    backgroundColor : '#ff9803',
    position : 'absolute',
    bottom : 15,
    right : 10
  },
  Icon : {
    justifyContent : 'center',
    alignSelf : 'center',
    margin : 10
  }
});
