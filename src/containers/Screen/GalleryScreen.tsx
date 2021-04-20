import React, {Component} from 'react';
import { ActivityIndicator, Animated, Modal, ScrollView } from 'react-native';
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

export default class GalleryScreen extends Component {
  constructor(props : any){
    super (props);
    this.state = {
         isLoading : true,
         dataSource : null,
    }
  }

   componentDidMount () {

    return fetch ('https://jsonplaceholder.typicode.com/photos')
          .then ((response) => response.json() )
          .then ((responseJson) => {

            this.setState({
              isLoading : false,
              dataSource : responseJson.albumId,
            })

          })
        .catch((error) => {
            console.log(error)
        })
  
   }
  // renderItem = (item : any) =>{
  //   return(
  //   <View style = {styles.items}>
  //    <CustomGalleryGrid GalleryImage = {item.GalleryImage}/>
  //   </View>
  //   )
  // }
  render() {
    const { dataSource, isLoading } = this.state;

    if (isLoading){
       return(
         <View style = {styles.container}>
           <ActivityIndicator/>
         </View>
       )
    } else {

      let albumId = this.state.dataSource.map((val,key) => {
        return <View></View>
      })
    return (
     
        <View style={styles.container}>
          <View style={styles.Header}>
            <Text style={styles.HeaderText}>Gallery</Text>
            <TouchableOpacity
              style={styles.Votes}></TouchableOpacity>
          </View>
           <Text>Content Loading</Text>
          {/* <View style = {styles.GalleryStyles}>
            <FlatList 
            data = {Data}
            renderItem = {this.renderItem}
            numColumns = {numColumns}/>
            
          </View>
           */}
          <TouchableOpacity style = {styles.SortButton}>
            <Image style = {styles.Icon} source = {require('../../assets/img/icSortBy.png')}/>
          </TouchableOpacity>
          

          
        </View>
    
    );
  }
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
