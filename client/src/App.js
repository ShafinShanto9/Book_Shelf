import { Container } from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate
} from "react-router-dom";
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import PostDetails from './components/PostDetails/PostDetails';



const App = () => {
  return (
    <BrowserRouter>
        <Container maxWidth="xl">
          <NavBar/>
      <Routes>
          <Route index element={<Home/>} />
          <Route path = "/posts" element={<Home/>} />
          <Route path = "/posts/search" element={<Home/>} />
          <Route path = "/posts/:id" element={<PostDetails/>} />
          <Route path="/auth" element={<Auth />} />
      </Routes>
        </Container>
    </BrowserRouter>
  )
}

export default App