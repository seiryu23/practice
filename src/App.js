import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';
import React, { useState } from 'react';

function App()
{
  const [display, setDisplay] = useState({
    id: 0,
    username: "",
    mail_address: "",
    belongCode: 0,
    areaCode: 0
  });
  const [dispData, setDispData] = useState([]);
  const [flag, setFlag] = useState(false);

  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Form display={display} setDispData={setDispData} setDisplay={setDisplay} setFlag={setFlag} />
      <List json={display} dispData={dispData} displayFlag={flag}  />
    </div>
  );
}

export default App;
