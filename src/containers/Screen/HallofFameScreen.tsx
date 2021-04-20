import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// const ModalPoup = (visible : any, children : any) => {
//   const [showModal, setShowModal] = React.useState(visible);
//   const scaleValue = React.useRef(new Animated.Value(0)).current;
//   React.useEffect(() => {
//     toggleModal();
//   }, [visible]);
//   const toggleModal = () => {
//     if (visible) {
//       setShowModal(true);
//       Animated.spring(scaleValue, {
//         toValue: 1,
//         useNativeDriver: true,
//       }).start();
//     } else {
//       setTimeout(() => setShowModal(false), 200);
//       Animated.timing(scaleValue, {
//         toValue: 0,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };
//   return (
//     <Modal transparent visible={showModal}>
//       <View style={styles.modalBackGround}>
//         <Animated.View
//           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
//           {children}
//         </Animated.View>
//       </View>
//     </Modal>
//   );
// };

const HallofFameScreen = (props : any) => {
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Hall Of Fame</Text>
      </View>

      <View style={{padding: 14}}>
        <View style={styles.layout}>
          <Text style={styles.Month}>January</Text>
          <Text style={styles.challenges}>2 challenges</Text>
        </View>
        <TouchableOpacity>
          <View style={styles.layout2}>
            <View style={styles.ImageLayout}>
              <Image
                style={styles.Images}
                source={require('../../assets/img/Animal1.jpeg')}
              />
              <Image
                style={styles.Images}
                source={require('../../assets/img/Animal2.jpeg')}
              />
              <Image
                style={styles.Images}
                source={require('../../assets/img/Animal3.jpeg')}
              />
            </View>
            <View style={styles.LayoutContent}>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icGoldMedal.png')}
                  />
                  <Text style={styles.winningText}>1st</Text>
                </View>
              </View>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icSilverMedal.png')}
                  />
                  <Text style={styles.winningText}>2nd</Text>
                </View>
              </View>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icBronzeMedal.png')}
                  />
                  <Text style={styles.winningText}>3rd</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={styles.AlignText}>
            <Text style={styles.Name}>Jungle Safari</Text>
            <View style={styles.ClockLayout}>
              <Image
                style={styles.Clock}
                source={require('../../assets/img/clock.png')}
              />
              <Text style={styles.Hours}>1st Jan 2018 - 20th Jan 2018</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{padding: 14, marginTop: 25}}>
        <TouchableOpacity>
          <View style={styles.layout2}>
            <View style={styles.ImageLayout}>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Image
                  style={styles.Images}
                  source={require('../../assets/img/Travel1.jpeg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.Images}
                  source={require('../../assets/img/Travel2.jpeg')}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  style={styles.Images}
                  source={require('../../assets/img/Travel3.jpeg')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.LayoutContent}>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icGoldMedal.png')}
                  />
                  <Text style={styles.winningText}>1st</Text>
                </View>
              </View>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icSilverMedal.png')}
                  />
                  <Text style={styles.winningText}>2nd</Text>
                </View>
              </View>
              <View style={styles.InnerLayout}>
                <View style={styles.WinningLayout}>
                  <Image
                    style={styles.WinningIcon}
                    source={require('../../assets/img/icBronzeMedal.png')}
                  />
                  <Text style={styles.winningText}>3rd</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.layout1}
            source={require('../../assets/img/icWhiteBase.png')}></Image>

          <View style={styles.AlignText}>
            <Text style={styles.Name}>Roads Travelled</Text>
            <View style={styles.ClockLayout}>
              <Image
                style={styles.Clock}
                source={require('../../assets/img/clock.png')}
              />
              <Text style={styles.Hours}>21st Jan 2018 - 10th Feb 2018</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.NextList}>
        <View style={styles.layout}>
          <Text style={styles.Month}>February</Text>
          <Text style={styles.challenges}>5 challenges</Text>
        </View>
      </View>
      <View>
        <View style={{padding: 14}}>
          <TouchableOpacity>
            <View style={styles.layout2}>
              <View style={styles.ImageLayout}>
                <TouchableOpacity>
                  <Image
                    style={styles.Images}
                    source={require('../../assets/img/Animal1.jpeg')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.Images}
                    source={require('../../assets/img/Animal2.jpeg')}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image
                    style={styles.Images}
                    source={require('../../assets/img/Animal3.jpeg')}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.LayoutContent}>
                <View style={styles.InnerLayout}>
                  <View style={styles.WinningLayout}>
                    <Image
                      style={styles.WinningIcon}
                      source={require('../../assets/img/icGoldMedal.png')}
                    />
                    <Text style={styles.winningText}>1st</Text>
                  </View>
                </View>
                <View style={styles.InnerLayout}>
                  <View style={styles.WinningLayout}>
                    <Image
                      style={styles.WinningIcon}
                      source={require('../../assets/img/icSilverMedal.png')}
                    />
                    <Text style={styles.winningText}>2nd</Text>
                  </View>
                </View>
                <View style={styles.InnerLayout}>
                  <View style={styles.WinningLayout}>
                    <Image
                      style={styles.WinningIcon}
                      source={require('../../assets/img/icBronzeMedal.png')}
                    />
                    <Text style={styles.winningText}>3rd</Text>
                  </View>
                </View>
              </View>
            </View>
            <Image
              style={styles.layout1}
              source={require('../../assets/img/icWhiteBase.png')}></Image>

            <View style={styles.AlignText}>
              <Text style={styles.Name}>Jungle Safari</Text>
              <View style={styles.ClockLayout}>
                <Image
                  style={styles.Clock}
                  source={require('../../assets/img/clock.png')}
                />
                <Text style={styles.Hours}>1st Jan 2018 - 20th Jan 2018</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* <ModalPoup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <Image
            style={styles.ImageWidth}
            source={require('../../assets/img/Travel2.jpeg')}
          />
          <TouchableOpacity
            style={styles.CloseIcon}
            onPress={() => setVisible(false)}>
            <View style={styles.CloseImage}>
              <Text style={styles.crossText}>X</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.winngBox}>
          <View style={styles.WinningLayout}>
            <Image
              style={styles.WinningIcon}
              source={require('../../assets/img/icGoldMedal.png')}
            />
            <Text style={styles.winningText}>1st</Text>
          </View>
        </View>
        <Text style={styles.voteCount}>52k Votes</Text>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.ProfileImage}
            source={require('../../assets/img/Person1.jpeg')}
          />
          <Text style={styles.UserName}>Samuel Mathers</Text>
        </View>
        <Text style={styles.ContextText}>
          Roads less traveled, places less visited, memories less reminisced
        </Text>
        <Text style={styles.HashTag}>#travel #mountains #HIKING</Text>
        <View style={styles.SignleLine} />
        <TouchableOpacity style={styles.share}>
          <Image source={require('../../assets/img/share.png')} />
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
      </ModalPoup> */}
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
  Month: {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
  },
  challenges: {
    fontSize: 14,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'right',
    marginTop: 5,
    marginRight: 10,
  },
  layout: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    width: 750,
  },
  layout2: {
    marginTop: 15,
    width: 360,
    height: 190,
    borderRadius: 15,
    backgroundColor: 'rgb(255 ,237, 210)',
    shadowColor: 'rgba(0, 0, 0, 0.24)',
    shadowOffset: {
      width: 0,
      height: 7.5,
    },
    shadowRadius: 25.5,
    shadowOpacity: 1,
  },
  Images: {
    width: 95,
    height: 95,
    borderRadius: 10,
    margin: 12,
  },
  ImageLayout: {
    flexDirection: 'row',
  },
  InnerLayout: {
    width: 70,
    height: 40,
    borderRadius: 15,
    backgroundColor: 'white',
    shadowColor: 'rgba(255, 170, 70, 0.24)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 13.5,
    shadowOpacity: 1,
    margin: 25,
  },
  LayoutContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    top: 70,
  },
  winningText: {
    opacity: 0.4,
    fontSize: 14,
    fontWeight: 'normal',
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 10,
  },
  WinningLayout: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  WinningIcon: {
    marginTop: 8,
    width: 21,
    height: 25,
  },
  layout1: {
    position: 'absolute',
    top: 170,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  Clock: {
    width: 10,
    height: 10,
    backgroundColor: '#9e9e9e',
    marginTop: 3,
  },
  ClockLayout: {
    flexDirection: 'row',
    marginTop: 5,
  },
  Name: {
    fontSize: 15.3,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#000000',
  },
  Hours: {
    fontSize: 11.3,
    fontWeight: 'normal',
    fontStyle: 'normal',

    color: 'rgba(77, 77, 77, 0.8)',
    marginLeft: 5,
  },
  AlignText: {
    position: 'absolute',
    top: 185,
    marginLeft: 85,
  },
  NextList: {
    marginTop: 40,
    marginLeft: 15,
  },
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 315,
    height: 495,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  ImageWidth: {
    width: 315,
    height: 315,
    borderRadius: 20,
  },
  CloseImage: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    backgroundColor: 'white',
  },
  CloseIcon: {
    position: 'absolute',
    top: -10,
    right: -10,
  },
  crossText: {
    color: 'gray',
    alignSelf: 'center',
    margin: 3,
    fontWeight: 'bold',
  },
  winngBox: {
    width: 74,
    height: 40,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'rgba(255, 170, 70, 0.34)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 13.5,
    shadowOpacity: 1,
    position: 'absolute',
    top: 290,
    right: 10,
  },
  voteCount: {
    fontSize: 12.5,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    margin: 10,
  },
  ProfileImage: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    marginLeft: 10,
  },
  UserName: {
    fontSize: 12.5,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 7,
  },
  ContextText: {
    fontSize: 11,
    fontWeight: 'normal',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    margin: 10,
  },
  HashTag: {
    fontSize: 11,
    fontWeight: 'bold',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: '#000000',
    marginLeft: 10,
  },
  SignleLine: {
    width: 315,
    height: 1,
    opacity: 0.1,
    backgroundColor: '#000000',
    marginTop: 20,
  },
  share: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  shareText: {
    fontSize: 12.5,
    fontWeight: '600',
    fontStyle: 'normal',
    letterSpacing: 0,
    textAlign: 'left',
    color: 'gray',
    marginLeft : 5
  },
});

export default HallofFameScreen;
