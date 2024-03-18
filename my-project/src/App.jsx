import { useState } from 'react'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Header from './components/Header';
import RecipeDetails from './components/RecipeDetails';

function App() {

  return (
    <>
      <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
