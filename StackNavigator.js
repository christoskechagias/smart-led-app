import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthContext} from './hooks/AuthContext';
import HomeScreen from './screen/HomeScreen';
import ColorScreen from './screen/ColorScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import AccountScreen from './screen/AccountScreen';
import ChangePasswordScreen from './screen/ChangePasswordScreen';
import {Text, TouchableOpacity} from 'react-native';
import {signOut} from 'firebase/auth';
import {auth} from './firebase';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const StackNavigator = () => {
  const {user} = useContext(AuthContext);
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#242526',
          color: 'white',
        },
        headerTintColor: 'white',
        contentStyle: {backgroundColor: '#18191A'},
        headerTitleStyle: {
          color: 'white',
        },
      }}>
      {user ? (
        <Stack.Group>
          <Stack.Screen
            options={{headerShown: false}}
            name="Drawer"
            component={DrawerNavigator}
          />
          <Stack.Screen
            name="Change password"
            component={ChangePasswordScreen}
          />
          <Stack.Screen name="Color" component={ColorScreen} />
        </Stack.Group>
      ) : (
        <>
          <Stack.Group
            screenOptions={{
              headerShown: false,
              contentStyle: {backgroundColor: 'black'},
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </Stack.Group>
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;

const DrawerNavigator = ({navigation}) => {
  const {user} = useContext(AuthContext);

  const logoutHandler = async () => {
    await signOut(auth);
  };
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#242526'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#18191A'},
        drawerContentStyle: {backgroundColor: '#242526', color: 'white'},
        drawerLabelStyle: {color: 'white'},
      }}
      initialRouteName="Home">
      <Drawer.Screen
        options={{
          title: user.email,
          headerRight: () => (
            <TouchableOpacity
              style={{
                padding: 15,
              }}
              onPress={logoutHandler}>
              <Text
                style={{
                  color: 'white',
                  fontSize: 16,
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          ),
        }}
        name="Account"
        component={AccountScreen}
      />
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
