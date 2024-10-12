import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BathroomDetail from './BathroomDetail';
import Home from './Home';
import Reviews from './Reviews';

export default function AppRouter() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main>
          <Routes>
            <Route path="/" element={<Home />} /> {/* แสดง Home เมื่ออยู่ที่ '/' */}
            <Route path="/bathroom/:id" element={<BathroomDetail />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        {/* Footer สามารถใส่ที่นี่ได้ */}
      </div>
    </Router>
  );
}
