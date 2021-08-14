import React from "react";
import { auth, firestore, signInWithGoogle } from "./firebase";
import { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";


import { userContext } from "./App";

function Login(props) {

  let value = useContext(userContext);


  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      //here user is login and user is getting data form firebase
      //if user login - show user info
      //if user  is logout - dont show user info

      if (user) {
        
        let { displayName, email, uid } = user;
        let docRef = firestore.collection("users").doc(uid);
        let document = await docRef.get();
        if (!document.exists) {
          docRef.set({
            displayName,
            email,
            posts: [],
          });
        }

        
        
        props.handleUser({ displayName, email });

      } else {
        props.handleUser(user);
      }


    });
  }, [] );

  return (
    <div>

    <h1>Reels</h1>
      {value ? <Redirect to="/home" /> : ""}

      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur
        adipisicing elit.
      </p>

      <button onClick={signInWithGoogle}> Login With Google </button>
    </div>
  );
}

export default Login;
