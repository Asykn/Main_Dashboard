import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Account_Details from './Components/Account_Details';
import Transaction_History from './Components/Transaction_History';
import Side_Nav from './Components/Side_Nav';
import Top_Nav from './Components/Top_Nav';
import Nickname from './Components/Nickname';

function App() {
  return (
    <>
    <div className="container1">
        <Side_Nav />
        <div className = "conTry">
          <div className="container2">
            <Top_Nav />
          </div>
          <div className="container3">
            <Nickname />
            <div className="container4">
              <Account_Details />
              <Transaction_History />
            </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default App;
