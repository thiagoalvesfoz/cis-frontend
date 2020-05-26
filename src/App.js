import React from 'react';

// css geral
import './Assets/style.css';
// components
import Header from './Components/Header/Header'
import Footer from './Components/footer/footer'
import Routes from './Router';


function App() {
  return (
    <div className="App">
        <Header />
        <Routes />
        <Footer />
    </div>
  );
}

export default App;
