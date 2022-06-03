import React from 'react';
import './App.css';
import Rating from "./components/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/onOff/OnOff";

function App() {
  return (
    <div>
      <AppTitle/>
        <Accordion titleValue={'Menu'} collapsed ={true}/>
        <Accordion titleValue={'User'} collapsed ={false}/>
      <Rating value={0}/>
      <Rating value={1}/>
      <Rating value={2}/>
      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={5}/>

        <OnOff checked={true}/>
        <OnOff checked={false}/>

    </div>
  );
}

function AppTitle() {
  return(
      <div>This is APP component </div>
  )
}

export default App;
