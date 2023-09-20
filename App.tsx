import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import Splash from './src/Splash';
import Create from './src/Create';
import Email from './src/Email';
import Phone from './src/Phone';
import Sms from './src/Sms';
import Vcard from './src/Vcard';
import MeCard from './src/MeCard';
import Location from './src/Location';
import Facebook from './src/Facebook';
import Textt from './src/Textt';
import Twitter from './src/Twitter';
import URL from './src/URL';
import Wifi from './src/Wifi';
import Youtube from './src/Youtube';
import Event from './src/Event';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Create">
      <Drawer.Screen
        name="Create"
        component={Create}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: true }}
        /> */}
         <Stack.Screen
          name="Root"
          component={CustomDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="URL"
          component={URL}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Email"
          component={Email}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Event"
          component={Event}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Facebook"
          component={Facebook}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Location"
          component={Location}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MeCard"
          component={MeCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Vcard"
          component={Vcard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Wifi"
          component={Wifi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Youtube"
          component={Youtube}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Twitter"
          component={Twitter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Textt"
          component={Textt}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sms"
          component={Sms}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone"
          component={Phone}
          options={{headerShown: false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
