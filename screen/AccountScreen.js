import React, {useContext} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Avatar, Icon} from 'react-native-elements';
import {AuthContext} from '../hooks/AuthContext';

const AccountScreen = ({navigation}) => {
  const {user} = useContext(AuthContext);

  return (
    <View>
      {user.photoUrl ? (
        <Avatar rounded source={{uri: user.photoUrl}} />
      ) : (
        <Icon
          style={{
            borderRadius: 100,
            borderColor: 'white',
            borderWidth: 2,
            width: 120,
            height: 120,
            alignSelf: 'center',
            marginTop: 20,
          }}
          name="person"
          type="ionicon"
          size={100}
          color="white"
        />
      )}
      <View style={{margin: 10}}>
        <TouchableOpacity
          style={{
            borderWidth: 2,
            borderColor: 'white',
            borderRadius: 10,
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
          onPress={() => navigation.navigate('Change password')}>
          <Text style={{color: 'white', fontSize: 20}}>Change password</Text>
          <Icon name="chevron-forward" type="ionicon" color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
