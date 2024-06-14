import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBF9RYeSb2Qxi2iamp8ZnYloheEiijuA-A",
    authDomain: "user-email-auth-f4dd0.firebaseapp.com",
    projectId: "user-email-auth-f4dd0",
    storageBucket: "user-email-auth-f4dd0.appspot.com",
    messagingSenderId: "470810129541",
    appId: "1:470810129541:web:61d59eb2815a59fa2665ec"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export default auth