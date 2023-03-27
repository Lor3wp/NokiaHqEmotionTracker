import './App.css';
import React from 'react';
import Piechart from './Piechart';
import Barchart from './Barchart'

function StatWindow() {
  return (
    <div className="StatWindow">
      <header className="App-header">
        <div>
          <Piechart />
        </div>
        <div style={{paddingTop:'100px'}}>
          <Barchart />
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default StatWindow;
