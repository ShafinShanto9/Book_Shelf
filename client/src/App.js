import { Container } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';



const App = () => {
  return (
    <BrowserRouter>
        <Container maxWidth="lg">
          <NavBar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
      </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App