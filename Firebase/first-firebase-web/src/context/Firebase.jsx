import { createContext } from "react";
import { initializeApp } from "firebase/app"

const FirebaseContext = createContext(null)

const firebaseConfig = {
    apiKey: "AIzaSyC9NSixXUa4k3DArGvoNcxf3znu-bLX4ZY",
    authDomain: "first-firebase-ca831.firebaseapp.com",
    projectId: "first-firebase-ca831",
    storageBucket: "first-firebase-ca831.appspot.com",
    messagingSenderId: "754744208148",
    appId: "1:754744208148:web:45fa9c901795726f757001"
};

const FirebaseApp = initializeApp(firebaseConfig)


export const FirebaseProvider = (props) => {
    return <FirebaseContext.Provider>
        {props.children}
    </FirebaseContext.Provider>
}