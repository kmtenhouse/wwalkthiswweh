import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import TrollianHeader from './components/TrollianHeader';
import ChumpRoll from './components/ChumpRoll';
import TrollianChat from './components/TrollianChat';
import Divider from "./components/Divider";

function App() {
  return (
    <Container height="100vh" display="flex" flexDirection="column">
      <TrollianHeader />
      <Container flex="1" display="flex" justifyContent="space-between">
        <TrollianChat />
        <ChumpRoll />
      </Container>
      <Divider direction="horizontal" bodyColor="#ff5f84" borderColor="#c2c2c2" suppressBorder="lr" />
    </Container>
  );
}

export default App;
