import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Modal,
  Animated,
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

const SettingScreen = (props: any) => {
  const [visible, setVisible] = React.useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Settings</Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('ChangePasswordScreen')}
        style={styles.Layout}>
        <Image source={require('../../assets/img/icChangPass.png')} />
        <Text style={styles.Text1}>Change Password</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('TermsConditionScreen')}
        style={styles.Layout}>
        <Image source={require('../../assets/img/icTermsCon.png')} />
        <Text style={styles.Text1}>Terms & Conditions</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('PrivacyPolicyScreen')}
        style={styles.Layout}>
        <Image source={require('../../assets/img/icPivacyPolicy.png')} />
        <Text style={styles.Text1}>Privacy Policy</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Layout}>
        <Image source={require('../../assets/img/icFaq.png')} />
        <Text style={styles.Text1}>FAQ’s</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('AboutUsScreen')}
        style={styles.Layout}>
        <Image source={require('../../assets/img/icChangPass.png')} />
        <Text style={styles.Text1}>About Us</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => props.navigation.navigate('HelpSupportScreen')}
        style={styles.Layout}>
        <Image source={require('../../assets/img/icHelpNSupport.png')} />
        <Text style={styles.Text1}>Help & Support</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Layout}>
        <Image source={require('../../assets/img/icInvite.png')} />
        <Text style={styles.Text1}>Invite Contact</Text>
        <TouchableOpacity style={styles.Arrow}>
          <Image source={require('../../assets/img/icArrow.png')}></Image>
        </TouchableOpacity>
      </TouchableOpacity>

      <View style={styles.Layout}>
        <Image source={require('../../assets/img/icNotif.png')} />
        <Text style={styles.Text1}>Notification</Text>
        <View style={styles.Arrow}>
          <Switch
            trackColor={{false: 'gray', true: '#5ed177'}}
            thumbColor={isEnabled ? 'white' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>

      <TouchableOpacity onPress={() => setVisible(true)} style={styles.Layout}>
        <Image source={require('../../assets/img/icClearSearch.png')} />
        <Text style={styles.Text1}>Clear Search History</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Layout}>
        <Image source={require('../../assets/img/icDeactivate.png')} />
        <Text style={styles.Text1}>Deactivae Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Layout}>
        <Image source={require('../../assets/img/icSignOut.png')} />
        <Text style={styles.Text1}>Sign Out</Text>
      </TouchableOpacity>
      <ModalPoup visible={visible}>
        <View style={{flexDirection : 'row' , justifyContent : 'space-between' ,alignSelf : 'center', width : 350}}>
          <Text style = {styles.Clear}>Clear Search History?</Text>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Text style = {styles.Clear}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row' , marginTop : 15}}>
          <Image
            style={styles.NoIcon}
            source={require('../../assets/img/icNo.png')}
          />
          <TouchableOpacity>
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 5}}>NO</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row' , marginTop : 20}}>
          <Image
            style={styles.NoIcon}
            source={require('../../assets/img/icYes.png')}
          />
          <TouchableOpacity>
          <Text style={{fontSize: 15, marginLeft: 10, marginTop: 5}}>YES</Text>
          </TouchableOpacity>
        </View>
      </ModalPoup>
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
    shadowColor: 'rgba(32, 169, 149, 0.38)',
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
  Layout: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 24,
  },
  Text1: {
    fontWeight: '700',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'rgba(21, 21, 21, 0.8)',
    marginTop: 10,
    marginLeft: 10,
    opacity: 0.8,
  },
  Arrow: {
    position: 'absolute',
    right: 15,
    marginTop: 10,
  },
  NoIcon: {
    width: 26,
    height: 26,
  },
  TextAlignmnt: {
    flexDirection: 'row',
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    height: 170,
    width: 400,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  Clear : {
    fontSize: 15,
  fontWeight: "bold",
  fontStyle: "normal",
  letterSpacing: 0,
  textAlign: "left",
  color: "#000000"
  }
});

export default SettingScreen;
