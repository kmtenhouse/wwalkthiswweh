import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';
import TrollianHeader from './components/TrollianHeader';
import ChumpRoll from './components/ChumpRoll';
import TrollianChat from './components/TrollianChat';

function App() {
  return (
    <Container>
      <TrollianHeader />
      <Container display="flex" justifyContent="space-between">
        <TrollianChat />
        <ChumpRoll />
      </Container>
    </Container>
  );
}

export default App;
