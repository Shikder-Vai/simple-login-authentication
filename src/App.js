import "./App.css";
import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "./firebase.init";
import { useState } from "react";

const auth = getAuth(app);

function App() {
  const [users, setUsers] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleLoginHandler = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  const handleSignOutBtn = () => {
    signOut(auth)
      .then(() => {
        setUsers({});
      })
      .catch((error) => {
        alert("Logout Faild", error);
      });
  };
  const handleGithubLogin = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        console.log(user);
      })
      .catch((error) => {
        console.error("error", error);
      });
  };
  return (
    <div className="App">
      {users.displayName ? (
        <button onClick={handleSignOutBtn}>Sign out</button>
      ) : (
        <>
          <button onClick={googleLoginHandler}>Google log in</button>
          <button onClick={handleGithubLogin}>Github Login</button>
        </>
      )}
      <h1>Name: {users.displayName}</h1>
      <h3>Email: {users.email}</h3>
      <img src={users.photoURL} alt="" />
    </div>
  );
}

export default App;
