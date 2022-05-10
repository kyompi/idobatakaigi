import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD3Q2ZXmiJUo3UBMQvdl6lylqzt5g-5VAY",
  authDomain: "idobatakaigi-with-ham-8aae4.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-8aae4",
  storageBucket: "idobatakaigi-with-ham-8aae4.appspot.com",
  messagingSenderId: "795213586798",
  appId: "1:795213586798:web:8dd93e15ec9e208d28617f"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
const messagesRef = database.ref('messages')

export const pushMessage = ({name, text}) => {
  messagesRef.push({name, text})
}
