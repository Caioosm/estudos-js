import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import { Home } from './components/home';
import { About } from './components/about';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './components/menu';
import { Post } from './components/post';
import { Redirect } from './components/Redirect';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/post' element={<Post />} />
        <Route path='/redirect' element={<Redirect />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
