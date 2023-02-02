import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';
import React, { useState } from 'react';

const [display, setDisplay] = useState({
  title: "",
  category: "",
  volume: 0,
  story: 0
});
const [flag, setFlag] = useState(false);

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Form display={display} setDisplay={setDisplay} setFlag={setFlag} />
      <List json={display} displayFlag={flag}  />
    </div>
  );
}

export default App;
