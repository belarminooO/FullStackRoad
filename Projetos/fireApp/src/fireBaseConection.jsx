import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


// configuracao da app no firebase
const firebaseConfig = {
  apiKey: "AIzaSyA1xL-jy9uUbsl4ymara6dGIIKdYWMrlAM",
  authDomain: "curso-d9bd0.firebaseapp.com",
  projectId: "curso-d9bd0",
  storageBucket: "curso-d9bd0.firebasestorage.app",
  messagingSenderId: "1063431501136",
  appId: "1:1063431501136:web:543da55ee1c138d4c06855",
  measurementId: "G-TN9C0YE2KC"
};

//inicializacao da app, passando as configs
const firebaseApp = initializeApp(firebaseConfig);


//estabelecendo ligacao a base de dados
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

//exportacao da base de dados para que outros arquivos possam a usar
export { db, auth };
