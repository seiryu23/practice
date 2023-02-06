import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Header from './components/header/Header';
import Form from './components/form/Form';
import List from './components/list/List';
import React, { useState } from 'react';
import { createRoot } from "react-dom/client";

function App()
{
  const [dispData, setDispData] = useState([]);
  const [flag, setFlag] = useState(false);

  const rootElement = document.getElementById("root");
  const root = createRoot(rootElement);

  return (
    <div className="App">
      <Sidebar />
      <Header />
      <Form display={display} setDispData={setDispData} setFlag={setFlag} />
      <List json={display} displayFlag={flag}  />
    </div>
  );
}

export default App;
