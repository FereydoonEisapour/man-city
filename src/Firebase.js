import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
    apiKey: "AIzaSyByzMxdWD6Fah0fV7dYYipEocXeU9bfRWw",
    authDomain: "man-city-8e98a.firebaseapp.com",
    databaseURL: "https://man-city-8e98a-default-rtdb.firebaseio.com",
    projectId: "man-city-8e98a",
    storageBucket: "man-city-8e98a.appspot.com",
    messagingSenderId: "558757553763",
    appId: "1:558757553763:web:4c9be7b98a83daaffc7a56",
    measurementId: "G-B0LBLY5086"
};
firebase.initializeApp(firebaseConfig)

const firebaseDB = firebase.database()
const firebaseMatches = firebaseDB.ref('matches')
const firebasePromotions=firebaseDB.ref('promotions')

export {
    firebase,
    firebaseMatches,
    firebasePromotions
}