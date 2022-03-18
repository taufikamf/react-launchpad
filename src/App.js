import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Section/>
    </div>
  );
}

export default App;
