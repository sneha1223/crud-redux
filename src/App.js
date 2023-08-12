import React from 'react';
import './App.css';
import Create from './Components/Create/Create';
import Topbar from './Components/Navbar/Topbar';
import { Routes, Route } from 'react-router-dom';
import Read from './Components/Read/Read';
import Update from './Components/Update/Update';

function App() {
  return (
    <div className="App">

      <Topbar />
      
        <Routes>
          <Route exact path='/' element={<Create />} />
          <Route exact path='/read' element={<Read />} />
          <Route exact path='/edit/:id' element={<Update />} />
        </Routes>
    
    </div>
  );
}

export default App;
