// U36432650

import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import teamData from './data/teamData';
import { Header } from './components/Gallery';

function App() {
  return (
    <div className="App">
      <Header title="Index Solutions LLC" />
      <Gallery team={teamData} />
    </div>
  );
}

export default App;
