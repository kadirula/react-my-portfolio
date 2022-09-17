import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from "react-toastify";


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

const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            toast.error(errorMessage)
        });
}