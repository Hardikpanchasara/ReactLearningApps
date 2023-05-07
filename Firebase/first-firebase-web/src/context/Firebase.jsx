import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app"
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth"


const FirebaseContext = createContext(null)
export const useFirebase = () => useContext(FirebaseContext)

const firebaseConfig = {
    apiKey: "AIzaSyC9NSixXUa4k3DArGvoNcxf3znu-bLX4ZY",
    authDomain: "first-firebase-ca831.firebaseapp.com",
    projectId: "first-firebase-ca831",
    storageBucket: "first-firebase-ca831.appspot.com",
    messagingSenderId: "754744208148",
    appId: "1:754744208148:web:45fa9c901795726f757001"
};

const FirebaseApp = initializeApp(firebaseConfig)
const FirebaseAuth = getAuth(FirebaseApp)


export const FirebaseProvider = (props) => {

    const signupUserWithEmail = (email , password) => createUserWithEmailAndPassword(FirebaseAuth , email , password)

    return <FirebaseContext.Provider value={{ signupUserWithEmail }}>
        {props.children}
    </FirebaseContext.Provider>
}