import {
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  signOut,
} from 'firebase/auth';
import React from 'react';
import {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import {auth} from '../firebase';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState(null);

  const [newPassword, setNewPassword] = useState(null);
  const [newRePassword, setNewRePassword] = useState(null);
  const {currentUser} = auth;
  const {email} = currentUser;
  const credential = EmailAuthProvider.credential(email, currentPassword);

  const submitHandler = async () => {
    if (newPassword === newRePassword && newPassword != null) {
      try {
        await reauthenticateWithCredential(currentUser, credential);
        try {
          await updatePassword(currentUser, newPassword).then(() => {
            signOut(auth);
          });
        } catch (error) {
          alert('Error', error);
        }
      } catch (error) {
        alert('Error', error);
      }
    }
  };
  return (
    <View style={{marginTop: 20}}>
      <Input
        secureTextEntry
        placeholder="Current Password"
        onChangeText={text => setCurrentPassword(text)}
        inputStyle={{
          color: 'white',
          paddingHorizontal: 10,
        }}
      />
      <Input
        secureTextEntry
        placeholder="New Password"
        onChangeText={text => setNewPassword(text)}
        inputStyle={{
          color: 'white',
          paddingHorizontal: 10,
        }}
      />

      <Input
        onChangeText={text => setNewRePassword(text)}
        inputStyle={{
          color: 'white',
          paddingHorizontal: 10,
        }}
        secureTextEntry
        placeholder="New Re-Password"
      />
      <TouchableOpacity
        onPress={submitHandler}
        style={{
          borderRadius: 20,
          borderColor: 'white',
          borderWidth: 2,
          height: 50,
          width: 200,
          borderRadius: 10,
          alignSelf: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
            fontWeight: '600',
          }}>
          Change
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePasswordScreen;

const styles = StyleSheet.create({});
