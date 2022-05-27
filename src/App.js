import React from 'react';
import Home from './components/Home/Home';
import About from './components/About/About';
import Nav from './components/Nav/Nav';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Nav/Nav2';


function App() {


  return (

    <BrowserRouter>
      <Nav></Nav>
      <NavBar></NavBar>
     <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/Dev-Portfolio" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="portfolio" element={<Portfolio />} />

        <Route path="/resume" element={<Resume />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;
//Photo by <a href="https://unsplash.com/@withkaispixels?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Kai Mason</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@sonance?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Viktor Forgacs</a> on <a href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mitchell Luo</a> on <a href="https://unsplash.com/s/photos/wood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
//Photo by <a href="https://unsplash.com/@graphics_cash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Cash Macanaya</a> on <a href="https://unsplash.com/s/photos/arcade?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  