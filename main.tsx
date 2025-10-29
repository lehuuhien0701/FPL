import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import App from './app'
import NewsList from './News/page'
import NewsSingle from './News/single/page'
import Services from './Services/page'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/news/single" element={<NewsSingle />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
)