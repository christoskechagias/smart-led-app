import {async} from '@firebase/util';
import {signInWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const submitHandler = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: 300,
          height: 60,
          alignSelf: 'center',
          marginVertical: 100,
        }}
        source={require('../assets/logo2.gif')}
      />

      <View>
        <Input
          focusable
          value={email}
          placeholderTextColor="gray"
          inputContainerStyle={{borderBottomColor: 'gray'}}
          placeholder="Username"
          onChangeText={text => setEmail(text)}
          inputStyle={{
            color: 'white',
          }}
        />
        <Input
          value={password}
          secureTextEntry
          passwordRules
          inputStyle={{color: 'white'}}
          placeholderTextColor="gray"
          inputContainerStyle={{borderBottomColor: 'gray'}}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={submitHandler}
            style={{
              padding: 15,
              borderRadius: 20,
              borderWidth: 2,
              borderColor: 'white',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '600',
              }}>
              Login
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{color: 'gray', marginTop: 20}}>
            Dont have an account?{' '}
            <Text style={{color: 'white', textDecorationLine: 'underline'}}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
