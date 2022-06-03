import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion/Accordion";

function App() {
  return (
    <div>
      <AppTitle/>
      <Rating value={3}/>
      <Accordion/>
      <Rating value={4}/>
    </div>
  );
}

function AppTitle() {
  return(
      <div>This is APP component </div>
  )
}

export default App;
