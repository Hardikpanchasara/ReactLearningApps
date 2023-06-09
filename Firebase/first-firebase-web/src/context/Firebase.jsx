import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app"
import {
    createUserWithEmailAndPassword,
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
} from "firebase/auth"
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytes , getDownloadURL } from "firebase/storage"


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
const GoogleProvider = new GoogleAuthProvider()
const Firestore = getFirestore(FirebaseApp)
const storage = getStorage(FirebaseApp)


export const FirebaseProvider = (props) => {

    const [userlogged, setUserlogged] = useState(null)

    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, (user) => {
            if (user) { setUserlogged(user) }
            else { setUserlogged(null) }
        })
    }, [])

    const signupUserWithEmail = (email, password) => createUserWithEmailAndPassword(FirebaseAuth, email, password)

    const signinUserWithEmail = (email, password) => signInWithEmailAndPassword(FirebaseAuth, email, password)

    const signinwithgoogle = () => signInWithPopup(FirebaseAuth, GoogleProvider)
    console.log(userlogged)

    const createNewProduct = async (name, sellername, price, coverpic) => {
        const imageRef = ref(storage, `uploads/images/${Date.now()}-${coverpic}`)
        const uploadres = await uploadBytes(imageRef, coverpic)
        return await addDoc(collection(Firestore, "Products"), {
            name,
            sellername,
            price,
            imgURL: uploadres.ref.fullPath,
            UserID: userlogged.uid,
            UserEmail: userlogged.email,
            UserName: userlogged.displayName,
            UserPhoto: userlogged.photoURL
        })
    }

    const listAllProducts = () => {
        return getDocs(collection(Firestore, "Products"))
    }

    const getImgurl = (path) => {
        return getDownloadURL(ref(storage , path ))
    }

    const isUserLoggedin = userlogged ? true : false


    return <FirebaseContext.Provider value={{ signupUserWithEmail, signinUserWithEmail, signinwithgoogle, isUserLoggedin, createNewProduct, listAllProducts, getImgurl }}>
        {props.children}
    </FirebaseContext.Provider>
}