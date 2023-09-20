import { 
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({title,LeftIcon,onPres}) => {
  const navigation = useNavigation();

  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };


  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 55,
          marginVertical: 0,
          paddingHorizontal: 16,
          backgroundColor: '#00bfff',
        }}>
        <TouchableOpacity onPress={onPres}>
          <Image
            style={{width: 25, height: 25, tintColor: '#fff'}}
            source={LeftIcon}
          />
        </TouchableOpacity>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={{fontSize: 20, color: '#fff'}}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({});
