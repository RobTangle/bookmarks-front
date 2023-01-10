import React from "react";
import { useState } from "react";
import { NAME_ACCESS_TOKEN } from "../../helpers/constants";
import { signInFormMX, signUpFormMX } from "../../helpers/swals";
import { SigninModal } from "../signinModal/SigninModal";

export function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [token, setToken] = useState(false);

  React.useEffect(() => {
    if (!token) {
      console.log("primer useEffect. !token");
      setToken(localStorage.getItem(NAME_ACCESS_TOKEN));
    }
  }, []);

  React.useEffect(() => {
    console.log("Navbar renderizada. useEffect");
    // if (!token) {
    //   setToken(localStorage.getItem(NAME_ACCESS_TOKEN));
    // }
  }, [token]);

  const handleSignin = (e) => {
    e.preventDefault();
    signInFormMX(setToken, setIsLoggedIn).fire();
  };

  function handleSignup(e) {
    e.preventDefault();
    signUpFormMX.fire();
  }

  function handleLogOut(e) {
    e.preventDefault();
    localStorage.removeItem(NAME_ACCESS_TOKEN);
    setToken(false);
    setIsLoggedIn(false);
  }

  return (
    <div className="navbar">
      {isLoggedIn ? (
        <>
          <h3>Welcome! </h3>
          <button onClick={handleLogOut}>Log out</button>
        </>
      ) : (
        <>
          <SigninModal />
          <button onClick={handleSignin}>Sign In</button>
          <button onClick={handleSignup}>Sign Up</button>
        </>
      )}
      {/* <button onClick={handleSignin}>Sign In</button>
      <button onClick={handleSignup}>Sign Up</button> */}
    </div>
  );
}
