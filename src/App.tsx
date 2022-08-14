import React from 'react';
import './App.less'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StarPage from './components/pages/StartPage/StartPage';
import Register from './components/pages/Register/Register';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Login from './components/pages/Login/Loging';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="wrapper">
        <Header/>
        <Routes>
          <Route path="/" element={<StarPage/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
