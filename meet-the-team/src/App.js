import React from 'react';
import './App.css';
import Gallery from './components/Gallery';
import { Header } from './components/Header';
import teamData from './data/teamData';

function App() {
  return (
    <div className="App">
      <Header title="Index Solutions LLC" />
      <Gallery team={teamData} />
    </div>
  );
}

export default App;
