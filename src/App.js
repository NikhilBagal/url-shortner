import React from 'react';
import Header from './components/Header'
import Body from './components/body'
import Footer from './components/Footer'
import './App.css';

function App() {
    return(
      <div className="container">
          <Header />
          <Body />
          <Footer />
      </div>
    )
  }

export default App;
