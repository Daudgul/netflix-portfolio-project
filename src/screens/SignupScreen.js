import React, { useRef, useState } from 'react'
import "./SignupScreen.css"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [passwordError, setPasswordError] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [loader, setLoader ] = useState(false)

    const validateName = (value) => {
        if (!value) {
          return '*Password is required';
        }
        return null;
      };
    
      const validateEmail = (value) => {
        if (!value) {
          return 'Email is required';
        }
        if (!/\S+@\S+\.\S+/.test(value)) {
          return '*Invalid email format';
        }
        return null;
      };


    const register = (e) => {
      e.preventDefault();
      setLoader(true)

        const passwordValidationError = validateName(passwordRef.current.value);
        const emailValidationError = validateEmail(emailRef.current.value);
    
        if (passwordValidationError || emailValidationError) {
          setPasswordError(passwordValidationError);
          setEmailError(emailValidationError);
          return;
        }

        createUserWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        }).finally(() => {
          setLoader(false)
        })
    }
    const signIn = (e) => {
        e.preventDefault();
        setLoader(true)

        const passwordValidationError = validateName(passwordRef.current.value);
        const emailValidationError = validateEmail(emailRef.current.value);
    
        if (passwordValidationError || emailValidationError) {
          setPasswordError(passwordValidationError);
          setEmailError(emailValidationError);
          return;
        }

        signInWithEmailAndPassword(
            auth,
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser)
        }).catch((error) => {
            alert(error.message)
        }).finally(() => {
          setLoader(false)
        })
    }
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign In</h1>
            {emailError && <span className={`error-message ${emailError ? 'visible' : ''}`}>{emailError}</span>}
            <input ref={emailRef} type="email" placeholder='Email' />
            {passwordError && <span className={`error-message ${passwordError ? 'visible' : ''}`}>{passwordError}</span>}
            <input type="password" ref={passwordRef} placeholder='Password' />
            <button type='submit' onClick={signIn} style={{ backgroundColor: loader && 'gray' }} disabled={loader}>Sign In</button>
            <h4>
                <span className='signupScreen__gray'>New to Netflix? </span>
                <span className='signupScreen__link' onClick={register}>Sign Up now.</span>
            </h4>
        </form>
    </div>
  )
}

export default SignupScreen