var { initializeApp } = require('firebase/app');
var{ getFirestore, collection, getDocs } = require ('firebase/firestore/lite');
//const functions = require('firebase-functions');


const firebaseConfig = {
    apiKey: "AIzaSyAAvLTRYevEOyle25R2Qg27D2WXWnSmaAE",
    authDomain: "reina-s-base.firebaseapp.com",
    projectId: "reina-s-base",
    storageBucket: "reina-s-base.appspot.com",
    messagingSenderId: "575805687872",
    appId: "1:575805687872:web:c72bd7b5359f4113be77a5",
    measurementId: "G-HQPZSLZ7T3"
  };

const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

async function getList(db) {
    const list = collection(db, 'Reddit');
    listSnap = await getDocs(list);
    const listed = listSnap.docs.map(doc => console.log(doc.data()));
}
 getList(db);
