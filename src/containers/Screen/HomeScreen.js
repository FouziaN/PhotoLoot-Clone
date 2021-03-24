import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Modal,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

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
const ModalUpdatePoup = ({visible, children}) => {
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
          style={[{...styles.modalContainer , height : 340  }, {transform: [{scale: scaleValue}]}]}>
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

const HomeScreen = props => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Text style={styles.HeaderText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.Votes}></TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('CurrentChallengeScreen')}>
        <View>
          <Image
            style={styles.ImageBack}
            source={require('../../assets/img/CurrentChallanges.jpeg')}
          />

          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.Icon}
              source={require('../../assets/img/icDollar.png')}
            />
            <View>
              <Text style={styles.Text1}>Current Challenges</Text>
              <Text style={styles.Text2}>2 Ongoing</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('UpComingChallengeScreen')}>
          <View>
            <Image
              style={styles.ImageBack}
              source={require('../../assets/img/challengeAccepted.jpeg')}
            />

            <Image
              style={styles.layout1}
              source={require('../../assets/img/icWhiteBase.png')}></Image>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.Icon}
                source={require('../../assets/img/icCalendar.png')}
              />
              <View>
                <Text style={styles.Text1}>Upcoming Challenges</Text>
                <Text style={styles.Text2}>2 Upcoming</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 10}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('HallofFameScreen')}>
          <View>
            <Image
              style={styles.ImageBack}
              source={require('../../assets/img/Trophy.jpeg')}
            />

            <Image
              style={styles.layout1}
              source={require('../../assets/img/icWhiteBase.png')}></Image>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={styles.Icon}
                source={require('../../assets/img/icTrophy.png')}
              />
              <View>
                <Text style={styles.Text1}>Hall Of Fame</Text>
                <Text style={styles.Text2}>View Winners</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ModalUpdatePoup visible={visible}>
        <View>
          <Image
            style={styles.IconImage}
            source={require('../../assets/img/icUpdategraphic.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.VotesText}>New Update Available</Text>
          <Text style={styles.ContentText}>
            Update your app and explore the latest features availabe in
            Photoloot App.
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => setVisible(false)}>
            <Text style={styles.WaitText}>Do it later</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button2}
            onPress={() => setVisible(false)}>
            <Text style={{...styles.WaitText, color: 'white'}}>Update</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}></View>
      </ModalUpdatePoup>
      <ModalPoup visible={visible}>
        <View style={styles.UpperView}>
          <Image
            style={styles.IconImage}
            source={require('../../assets/img/icUpdategraphic.png')}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Text style={styles.VotesText}>Need Votes?</Text>
          <Text style={styles.ContentText}>
            Your votes will replenish every 10m 13s or watch an ad and get all
            the votes right away.{' '}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 20,
          }}>
          <TouchableOpacity
            style={styles.Button1}
            onPress={() => setVisible(false)}>
            <Text style={styles.WaitText}>Update</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.Button2}
            onPress={() => setVisible(false)}>
            <Text style={{...styles.WaitText, color: 'white'}}>Watch Ad</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}></View>
      </ModalPoup>
    </View>
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
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    color: 'white',
  },
  Text: {
    fontSize: 15,
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    marginTop: 15.5,
    marginLeft: 29,
    color: 'rgb(96,96,96)',
  },
  ImageBack: {
    width: 345,
    height: 140,
    marginTop: 15,
    marginLeft: 15,
    borderRadius: 10,
  },
  layout1: {
    position: 'absolute',
    top: 140,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Icon: {
    marginLeft: 89,
    marginTop: 5,
  },
  Text1: {
    fontSize: 15.3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000000',
    marginLeft: 20,
  },
  Text2: {
    fontSize: 11.3,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(77, 77, 77, 0.8)',
    marginLeft: 20,
    marginTop: 5,
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
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 345,
    height: 388.5,
    borderRadius: 10,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  UpperView: {
    width: '100%',
    height: 155.3,
    backgroundColor: 'rgb(255, 240, 221)',
    borderRadius: 10,
  },
  IconImage: {
    width: 89.5,
    height: 89.5,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 35,
  },
  Button1: {
    width: 145,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'white',
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
    marginLeft: 15,
  },
  Button2: {
    width: 145,
    height: 45,
    borderRadius: 10,
    backgroundColor: '#ff9803',
    shadowColor: 'rgba(191, 191, 191, 0.5)',
    shadowOffset: {
      width: 0,
      height: 5.5,
    },
    shadowRadius: 18,
    shadowOpacity: 1,
    marginRight: 15,
  },
  VotesText: {
    fontSize: 25,
    fontWeight: '800',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'center',
  },
  ContentText: {
    fontSize: 14,
    fontWeight: '500',
    fontStyle: 'normal',
    lineHeight: 22,
    letterSpacing: 0,
    textAlign: 'center',
    margin: 15,
  },
  WaitText: {
    fontSize: 15,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#ff9803',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
});

export default HomeScreen;
