import React from 'react';
import PhotoCardList from "./components/PhotoCardList.js";
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      </header>

      <div className = "main-photos-div">

        <h1>MARS CURIOSITY PHOTOS</h1>

        <PhotoCardList />


      </div>

    </div>
  );
}

export default App;
