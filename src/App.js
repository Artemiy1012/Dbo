import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Content} from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
