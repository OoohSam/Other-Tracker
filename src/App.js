import { GlobalProvider } from './Context/GlobalState';
import React from 'react';
import './App.css';
import { Dashboard } from './Components/Dashboard';
import { Body } from './Body';


function App() {
  return (
  <GlobalProvider>
    <Dashboard/>
    <Body/>
  </GlobalProvider>
  );
}

export default App;
