import FireBase from '../node_modules/firebase'

var config = {
  apiKey: "AIzaSyCkUE1PgJz5MCa5TDoSZXS8biCXIqv8lnA",
  authDomain: "pincharoma.firebaseapp.com",
  databaseURL: "https://pincharoma.firebaseio.com",
  projectId: "pincharoma",
  storageBucket: "pincharoma.appspot.com",
  messagingSenderId: "22019652863"
};

let app = FireBase.initializeApp(config);
export const db = app.database();
console.log(db.ref("Products"));
