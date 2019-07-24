import React from 'react';
import './App.css';
import TrollianHeader from './components/TrollianHeader';
import Pesterlog from './components/Pesterlog';
import Chumproll from './components/Chumproll';
import Chatbox from './components/Chatbox';
import TrollianContainer from './components/TrollianContainer';
import TrollianWindow from './components/TrollianWindow';
import TrollianBody from './components/TrollianBody';


function App() {
  return (
    <div className="App">
      <TrollianContainer>
        <TrollianHeader />
        <TrollianBody>
          <TrollianWindow>
            <Pesterlog />
            <Chatbox />
          </TrollianWindow>
          <Chumproll />
        </TrollianBody>
      </TrollianContainer>
    </div>
  );
}

export default App;
