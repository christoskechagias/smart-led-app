# smart-led-app
<p float="left"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295732-31f56d2d-ce2d-447e-839c-3822cfd685f1.png" width=270 height=360> 
  <img src="https://user-images.githubusercontent.com/70820055/165295748-fd656061-1c40-4958-bc78-9ea2a0010f54.png" width=270 height=360> 
  <img src="https://user-images.githubusercontent.com/70820055/165295761-0b64e4df-d444-426e-b376-3bea16b39899.png" width=270 height=360> 
</p> <p float="left"> 
  <img src="https://user-images.githubusercontent.com/70820055/165295775-3eb8d225-8306-4a31-a237-4eec9f2e1be8.png" width=270 height=360> 
  <img src="https://user-images.githubusercontent.com/70820055/165295783-20f89634-fa7f-4e91-9fbf-e5c4c49b23e0.png" width=270 height=360> 
  <img src="https://user-images.githubusercontent.com/70820055/165295791-f9917bea-c4a5-4ac4-b9b9-136f26082bef.png" width=270 height=360> 
</p>

## Run
### <b> 1. Clone repo </b> <br/>
<pre>
$ git clone https://github.com/kechayias/smart-led-app.git
$ cd smart-led-app
</pre>
  
### <b> 2. Run App </b> <br/>
<pre>
$ npm install
$ npx react-native run-android
</pre>


### <b> 3. Sos </b> <br/>
<pre>
-for dgram lib need to install:<br/>
npm install --save react-native-udp and change 
change <const dgram = require('dgram');> to <import dgram from 'react-native-udp'> <br/>
in node_modules/magic-home/lib/Discovery.js

-for net lib need to:
npm install react-native-tcp --save <br/>
and go to package.json inside magic-home and add <br/>
"browser": {
 "net": "react-native-tcp"
}
</pre>


