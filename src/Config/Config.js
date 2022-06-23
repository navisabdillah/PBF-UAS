import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
apiKey: "AIzaSyAG-pJZL1OrTISOea447Bt3Cf7S27Td3Uc",
  authDomain: "e-commerce-5f529.firebaseapp.com",
  projectId: "e-commerce-5f529",
  storageBucket: "e-commerce-5f529.appspot.com",
  messagingSenderId: "220179946792",
  appId: "1:220179946792:web:5b06fb637810951577441d",
  measurementId: "G-Q4R4ZB1F3D"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }