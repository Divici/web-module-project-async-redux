import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Genshin Impact Best Teams</h1>

      <div className='char-card'>

        <div className='name'>
          <h2>Character Name</h2>
        </div>

        <div className='photo'></div>
        
        <div className='base-info'>
          <p>vision: hydro</p>
          <p>Weapon: Bow</p>
          <p>Nation: Snezhnaya</p>
          <button>more info...</button>
        </div>
      </div>

      <div className='more-info'>
        <p>More information</p>
        <p>No. 11 of The Harbingers, also known as \"Childe\". His name is highly feared on the battlefield.</p>
      </div>
    </div>
  );
}

export default App;