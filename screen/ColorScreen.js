import React, {useState, useEffect} from 'react';
import {View, LogBox} from 'react-native';
import ColorPicker from 'react-native-wheel-color-picker';
import hexRgb from 'hex-rgb';
import rgbHex from 'rgb-hex';

LogBox.ignoreLogs(['new NativeEventEmitter']);
global.Buffer = global.Buffer || require('buffer').Buffer;

const ColorScreen = ({route}) => {
  const {light} = route.params;
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {
    if (light) {
      light.queryState().then(doc => {
        setColor(rgbHex(doc.color.red, doc.color.green, doc.color.blue));
      });
    }
  }, []);

  const colorHandler = color => {
    setColor(color);
    light
      .setColor(hexRgb(color).red, hexRgb(color).green, hexRgb(color).blue)
      .catch(error => {});
  };

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        marginBottom: 100,
      }}>
      <ColorPicker
        color={color}
        onColorChangeComplete={color => colorHandler(color)}
        thumbSize={20}
        sliderSize={30}
        autoResetSlider={true}
      />
    </View>
  );
};

export default ColorScreen;
