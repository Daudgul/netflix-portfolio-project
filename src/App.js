import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

function App() {

  const user = null;
  return (
    <div className="app">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <HomeScreen/> : <LoginScreen/>} />
            <Route path="/about" element={ <h2>Hey what up Daud</h2>} />
          </Routes>          
      </BrowserRouter>
     
    </div>
  );
}

export default App;
