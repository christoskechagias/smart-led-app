# Smart LED App

This is a mobile app developed using React Native that allows users to control their LED strip using their smartphones. With this app, users can easily turn the LED strip on or off, adjust the brightness, and change the color of the LED strip.

<p align="center"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295732-31f56d2d-ce2d-447e-839c-3822cfd685f1.png" width="270" height="360"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295748-fd656061-1c40-4958-bc78-9ea2a0010f54.png" width="270" height="360"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295761-0b64e4df-d444-426e-b376-3bea16b39899.png" width="270" height="360"> 
</p> 
<p align="center"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295775-3eb8d225-8306-4a31-a237-4eec9f2e1be8.png" width="270" height="360"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295783-20f89634-fa7f-4e91-9fbf-e5c4c49b23e0.png" width="270" height="360"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295791-f9917bea-c4a5-4ac4-b9b9-136f26082bef.png" width="270" height="360"> 
</p>



## Getting Started

To get started with the Smart LED App, follow these steps:

1. Clone the repository by running the following command:
```
git clone https://github.com/kechayias/smart-led-app.git
```
2. Navigate to the cloned repository by running the following command:
```
cd smart-led-app
```
  
3. Install the required dependencies by running the following command:
```
npm install
```

4. Run the app on an Android device or emulator by running the following command:
```
npx react-native run-android
```

Note: Make sure that you have an Android device connected to your computer or an Android emulator installed before running this command.

5. If you encounter issues related to the dgram or net libraries, follow the steps below:

- For dgram, run the following command:

  ```
  npm install --save react-native-udp
  ```

  Then, change the line `const dgram = require('dgram');` to `import dgram from 'react-native-udp';` in the file `node_modules/magic-home/lib/Discovery.js`.

- For net, run the following command:

  ```
  npm install react-native-tcp --save
  ```

  Then, add the following lines to the `package.json` file inside the `magic-home` folder:

  ```
  "browser": {
    "net": "react-native-tcp"
  }
  ```

## Usage

To use the Smart LED App, follow these steps:

1. Make sure that your LED strip is properly connected to a power source and is turned on.

2. Open the Smart LED App on your Android device.

3. Create an account or log in to your existing account to use the app. 

4. Follow the instructions provided in the app to connect to your LED strip. This may involve selecting the LED strip's network and entering the network password.
 
5. Once the app is connected to your LED strip, you can use the app to control the LED strip's settings. You can turn the LED strip on or off, adjust the brightness, and change the color of the LED strip.

## Contributing

If you would like to contribute to the Smart LED App, feel free to fork the repository and submit a pull request. We welcome any contributions, including bug fixes, new features, and improvements to the app's user interface.
