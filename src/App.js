import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from '@firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfilleScreen from './screens/ProfilleScreen';


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch()

  useEffect(() => {
  const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
        // ...
      } else {
        dispatch(logout)
      }
    });
    return unsubscribe;
  },[])

  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <HomeScreen/> : <LoginScreen/>} />
            <Route path="/about" element={ <h2>Hey what up Daud</h2>} />
            <Route path="/profile" element={ <ProfilleScreen/>} />
          </Routes>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;
