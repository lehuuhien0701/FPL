import React, { Suspense, lazy } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const News = lazy(() => import('./pages/News'));

function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home</h2>
      <p><Link to="/news">Go to News</Link></p>
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </Suspense>
  );
}
