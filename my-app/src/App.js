import logo from './logo.svg';
import Header from "./component/Header";
import Container from './component/Container';
import Footer from "./component/Footer";
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <Container/>
      <Footer/>
     
    </React.Fragment>
  );
}

export default App;
