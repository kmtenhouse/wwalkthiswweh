import React from 'react';
import './App.css';
import TrollianHeader from './components/TrollianHeader';
import Pesterlog from './components/Pesterlog';
import Chumproll from './components/Chumproll';
import Chatbox from './components/Chatbox';
import TrollianContainer from './components/TrollianContainer';
import TrollianWindow from './components/TrollianWindow';


function App() {
  return (
    <div className="App">
      <TrollianHeader />
      <TrollianContainer>
        <Chumproll />
        <TrollianWindow>
          <Pesterlog />
          <Chatbox />
        </TrollianWindow>
      </TrollianContainer>
    </div>
  );
}

export default App;
