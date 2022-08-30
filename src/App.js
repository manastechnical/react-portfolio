import './App.css';
import HeadersComponent from './components/Headers/HeadersComponent';
import AboutMe from './components/BodyComponents/AboutMe';
import PortFolio from './components/BodyComponents/PortFolio';
import ContactMe from './components/BodyComponents/ContactMe';
import Footer from './components/BodyComponents/Footer';
import React from 'react';

function App() {
  return ( 
    // <h1>App works well</h1>
    <div>
      <HeadersComponent/>
      <AboutMe/>
      <PortFolio/>
      <ContactMe/>
      <Footer /> 
    </div>
  );
}

export default App;
