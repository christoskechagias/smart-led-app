import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {Control} from 'magic-home';

const HomeScreen = ({navigation}) => {
  const [powerLed, setPowerLed] = useState(false);
  const [color, setColor] = useState('#ffffff');

  let light = new Control('192.168.1.12');

  useEffect(() => {
    light
      .queryState()
      .then(doc => {
        setPower(doc.on);
        setPowerLed(rgbHex(doc.color.red, doc.color.green, doc.color.blue));
      })
      .catch(error => error);
  }, []);

  const powerHandler = power => {
    setPowerLed(!powerLed);
    light.setPower(power).catch(error => error);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Color', {light})}
        style={{
          padding: 15,
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
          marginTop: 10,
        }}>
        <Text style={{color: 'white', fontSize: 20}}>Smart led</Text>
        {powerLed ? (
          <Icon
            onPress={() => powerHandler(false)}
            name="lightbulb-on"
            type="material-community"
            color={color}
            size={30}
          />
        ) : (
          <Icon
            onPress={() => powerHandler(true)}
            name="lightbulb-off"
            type="material-community"
            color="white"
            size={30}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
