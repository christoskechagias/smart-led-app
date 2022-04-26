import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyAr0NagUAf82czjbDnapU98v52xq-QQJqk',
  authDomain: 'smart-led-app.firebaseapp.com',
  projectId: 'smart-led-app',
  storageBucket: 'smart-led-app.appspot.com',
  messagingSenderId: '267809833947',
  appId: '1:267809833947:web:5500680d18c38b09c6ddfe',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
