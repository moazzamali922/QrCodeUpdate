import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  Modal,
  Button,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Components/Header';
import {useNavigation} from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';
import ColorPicker, {
  Panel1,
  Swatches,
  Preview,
  OpacitySlider,
  HueSlider,
} from 'reanimated-color-picker';

const URL = () => {
  const [url, setUrl] = useState('');
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#000');
  const [showUrlView, setShowUrlView] = useState(false);
  const [showSelectColor, setshowSelectColor] = useState(false);
  const [showLogo, setshowLogo] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(0);

  const toggleUrlView = () => {
    setShowUrlView(!showUrlView);
  };

  const toggleSelectColorView = () => {
    setshowSelectColor(!showSelectColor);
  };
  const toggleSelectLogoView = () => {
    setshowLogo(!showLogo);
  };

  const onSelectColor = ({hex}) => {
    console.log('Selected Color:', hex);
    setSelectedColor(hex);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <SafeAreaView style={styles.Container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView>
            {/* Header */}
            <View style={{width: '100%', height: 55}}>
              <Header
                title="URL QrCreate"
                LeftIcon={require('./assets/back.png')}
                onPres={() => navigation.goBack()}
              />
            </View>

            {/* Main Container */}
            <View style={styles.mainContainer}>
              {/* QrCode */}
              <View style={styles.QRCode}>
                <QRCode size={200} logo={40} color={selectedColor} />
              </View>

              <TouchableOpacity
                onPress={toggleUrlView}
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: 50,
                  borderWidth: 1,
                  marginVertical: 10,
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}>
                <Text
                  style={{marginHorizontal: 10, color: '#000', fontSize: 15}}>
                  Enter Content
                </Text>
              </TouchableOpacity>
              {showUrlView && (
                <View>
                  <TouchableOpacity style={styles.button}>
                    <Image
                      style={styles.IconButton}
                      source={require('./assets/url.png')}
                    />
                    <Text style={styles.buttonText}>URL</Text>
                  </TouchableOpacity>
                  <View style={styles.searchView}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <TextInput
                        value={url}
                        onChangeText={text => {
                          setUrl(text);
                        }}
                        placeholder="https://www.google.com"
                        style={styles.input}
                      />
                    </View>
                    {url.length > 0 && (
                      <TouchableOpacity
                        style={[
                          styles.icon,
                          {justifyContent: 'center', alignItems: 'center'},
                        ]}
                        onPress={() => {
                          setUrl('');
                        }}>
                        <Image
                          source={require('./assets/clear.png')}
                          style={[styles.icon, {width: 16, height: 16}]}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              )}

              <TouchableOpacity
                onPress={toggleSelectColorView}
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: 50,
                  // marginTop:17,
                  marginVertical: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}>
                <Text
                  style={{marginHorizontal: 10, color: '#000', fontSize: 15}}>
                  Select Color
                </Text>
              </TouchableOpacity>
              {showSelectColor && (
                <View>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMethod(0);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={
                        selectedMethod == 0
                          ? require('./assets/radio_2.png')
                          : require('./assets/radio_1.png')
                      }
                    />
                    <Text style={{marginHorizontal: 10, fontSize: 17}}>
                      Single Color
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMethod(1);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={
                        selectedMethod == 1
                          ? require('./assets/radio_2.png')
                          : require('./assets/radio_1.png')
                      }
                    />
                    <Text style={{marginHorizontal: 10, fontSize: 17}}>
                      Color Gradient
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMethod(2);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={
                        selectedMethod == 2
                          ? require('./assets/radio_2.png')
                          : require('./assets/radio_1.png')
                      }
                    />
                    <Text style={{marginHorizontal: 10, fontSize: 17}}>
                      Custom Eye Color
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedMethod(3);
                    }}
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 5,
                    }}>
                    <Image
                      style={{width: 20, height: 20}}
                      source={
                        selectedMethod == 3
                          ? require('./assets/radio_2.png')
                          : require('./assets/radio_1.png')
                      }
                    />
                    <Text style={{marginHorizontal: 10, fontSize: 17}}>
                      Background Color
                    </Text>
                  </TouchableOpacity>
                  {/* <TouchableOpacity
                    style={{
                      alignSelf: 'center',
                      borderWidth: 2,
                      padding: 15,
                      marginVertical: 20,
                      borderRadius: 10,
                    }}
                    onPress={() => setShowModal(true)}>
                    <Text style={{fontSize: 18}}>Select Color</Text>
                  </TouchableOpacity> */}
                  {/* <Modal
                    visible={showModal}
                    animationType="slide"
                    transparent={true}>
                    <View style={styles.modalContainer}>
                      <View style={styles.colorPickerContainer}>
                        <ColorPicker
                          style={{
                            width: '90%',
                            height: 300, 
                            alignSelf: 'center',
                            justifyContent: 'center',
                          }}
                          value={selectedColor}
                          onComplete={onSelectColor}>
                          <Preview />
                          <Panel1 />
                          <HueSlider />
                        </ColorPicker>
                        <Button title="Close" onPress={closeModal} />
                      </View>
                    </View>
                  </Modal> */}
                </View>
              )}

              <TouchableOpacity
                onPress={toggleSelectLogoView}
                style={{
                  backgroundColor: '#fff',
                  width: '100%',
                  height: 50,
                  marginVertical: 10,
                  borderWidth: 1,
                  justifyContent: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 3,
                  },
                  shadowOpacity: 0.29,
                  shadowRadius: 4.65,
                  elevation: 7,
                }}>
                <Text
                  style={{marginHorizontal: 10, color: '#000', fontSize: 15}}>
                  Select Logo
                </Text>
              </TouchableOpacity>
              {showLogo && (
                <View style={{width: '100%', flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/1.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/2.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/3.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/4.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/5.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/6.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/7.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/8.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/9.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/10.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/11.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/12.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/13.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/14.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/15.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/16.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/17.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/18.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/19.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/20.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/21.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/22.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/23.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/24.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 25, height: 25}}
                      source={require('./assets/25.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{width: 20, height: 20}}
                      source={require('./assets/26.png')}
                    />
                  </TouchableOpacity>

                </View>
              )}

              {/* Buttons  */}
              {/* <View style={styles.GenerateDownloadButton}>
        

                <TouchableOpacity
                  style={styles.GenerateButton}
                  onPress={generateQRCode}>
                  <Text style={{textAlign: 'center', fontSize: 17}}>
                    Generate Button
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.DownloadButton}>
                  <Text style={{textAlign: 'center', fontSize: 17}}>
                    Download Button
                  </Text>
                </TouchableOpacity>
              </View> */}
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default URL;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    marginHorizontal: 20,
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
  IconButton: {
    width: 20,
    height: 20,
  },
  // input: {
  //   borderWidth: 1,
  //   borderColor: '#abb8c3',
  //   borderRadius: 15,
  //   padding: 10,
  //   color: '#000',
  // },
  searchView: {
    width: '97%',
    height: 50,
    borderRadius: 15,
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'center',
  },
  input: {
    width: '80%',
    marginLeft: 10,
  },
  QRCode: {
    alignSelf: 'center',
    marginVertical: 20,
  },
  GenerateDownloadButton: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  GenerateButton: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BC34A',
    borderRadius: 25,
  },
  DownloadButton: {
    width: '40%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03A9F4',
    borderRadius: 25,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  colorPickerContainer: {
    backgroundColor: '#fff',
    borderRadius: 15,
    width: '90%',
    height: 400, // Increase the height to accommodate color picker and close button
    alignSelf: 'center',
    padding: 20,
    alignItems: 'center',
  },
});
