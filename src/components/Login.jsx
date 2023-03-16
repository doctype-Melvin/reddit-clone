import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import "../styles/login.css";

export default function Login(props) {
  const [regEmail, setRegEmail] = useState("");
  const [regPass, setRegPass] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const toggleLogin = () => props.setIsLogin((prevState) => !prevState);
  const loginState = () => props.setLoggedIn((prevState) => !prevState);

  const provider = new GoogleAuthProvider();

  const signInGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        props.setUser(result);
        loginState();
        toggleLogin();
      })
      .catch((error) => console.log(error.message));
  };

  const registerUser = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regEmail,
        regPass
      );
      props.setUser(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginUser = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        userEmail,
        userPassword
      );
      props.setUser(user);
      loginState();
      toggleLogin();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section className="auth__container">
      {/* Sign up form Start */}
      <form className="form">
        <span className="sign__up">Sign Up </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="loginInput"
          autoComplete="new-password"
          onChange={(e) => setRegEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="loginInput"
          autoComplete="new-password"
          onChange={(e) => setRegPass(e.target.value)}
        />
        <button type="button" className="auth__button" onClick={registerUser}>
          Sign Up
        </button>
      </form>
      {/* Sign up form End */}
      <hr className="divider"></hr>
      {/* Sign in form Start */}
      <form className="form">
        <span className="sign__in">Sign In </span>
        <input
          type="email"
          name="email"
          placeholder="Email"
          autoComplete="new-password"
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          autoComplete="new-password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
        <button type="button" className="auth__button" onClick={loginUser}>
          Sign In
        </button>
      </form>
      {/* Sign in form End */}
      <hr className="divider"></hr>
      <button
        type="button"
        className="auth__button Google"
        onClick={signInGoogle}
      >
        Google
      </button>
    </section>
  );
}
