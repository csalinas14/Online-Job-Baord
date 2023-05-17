import Background from './images/redBG.jpg';
import './App.css';

import Body from './components/Body.jsx'

import React from 'react';

function App() {
  return (
   /**
      <div className="App" style={{
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: 'center',
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: 'no-repeat'
      }}>
        **/
      <div>
        {/*this is inline CSS for background img*/}
    
        <Body />
      

      </div>


  );
}

export default App;
