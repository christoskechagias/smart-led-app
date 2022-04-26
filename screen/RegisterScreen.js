import {createUserWithEmailAndPassword} from 'firebase/auth';
import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {auth} from '../firebase';
const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [rePassword, setRePassword] = useState(null);

  const submitHandler = () => {
    if (password === rePassword) {
      try {
        createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        alert(error);
      }
    } else {
      alert('Password not match!');
    }
  };
  return (
    <View style={{flex: 1}}>
      <Image
        style={{
          width: 250,
          height: 50,
          alignSelf: 'center',
          marginVertical: 100,
        }}
        source={require('../assets/logo2.gif')}
      />

      <View>
        <Input
          value={email}
          inputStyle={{color: 'white'}}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
        />
        <Input
          secureTextEntry
          passwordRules
          inputStyle={{color: 'white'}}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
        />
        <Input
          secureTextEntry
          passwordRules
          inputStyle={{color: 'white'}}
          placeholder="Re-Password"
          onChangeText={text => setRePassword(text)}
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
              Register
            </Text>
          </TouchableOpacity>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{color: 'gray', marginTop: 20}}>
            Already have an account?{' '}
            <Text style={{color: 'white', textDecorationLine: 'underline'}}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
