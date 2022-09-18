import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, setDoc, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useDispatch } from 'react-redux';
import { toast } from "react-toastify";
import { login  } from './reducers/authReducer';



const firebaseConfig = {
    apiKey: "AIzaSyBJd-swK5fS2bq1P0oEoIYURGPLG7g-gEY",
    authDomain: "my-portfolio-e9656.firebaseapp.com",
    projectId: "my-portfolio-e9656",
    storageBucket: "my-portfolio-e9656.appspot.com",
    messagingSenderId: "929005869479",
    appId: "1:929005869479:web:728489c7486fab40a37e82"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export const getAllCategory = async () => {
    const querySnapshot = await getDocs(collection(db, "category"));

    const categories = [];

    querySnapshot.forEach((doc) => {
        categories.push({ id: doc.id, title: doc.data().title });
    });

    return categories;
}

export const addBlog = async (data) => {

    // console.log(data);
    const result = await addDoc(collection(db, "post"), data);

    console.log(result);

    // console.log(result);
}


export { app, auth }