import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// var serviceAccount = require("./key.json")
const firebaseConfig = {
    apiKey: "AIzaSyBTPsaaxa_NMlVJPSnW7EqML7Ha9L9A1t4",
    authDomain: "fir-nodejs-7a6b9.firebaseapp.com",
    projectId: "fir-nodejs-7a6b9",
    storageBucket: "fir-nodejs-7a6b9.appspot.com",
    messagingSenderId: "1075537886599",
    appId: "1:1075537886599:web:3ed8f099c90a1c8a3d6722",
    measurementId: "G-3QC6S6EXLX"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage


