import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout'; // adjust the path as needed
import PropertiesPage from './pages/PropertiesPage';
import AgentsPage from './pages/AgentsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PropertyDetailPage from './pages/PropertyDetailPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/properties" element={<PropertiesPage/>} />
          <Route path="properties/:id" element={<PropertyDetailPage/>} />
          <Route path="/agents" element={<AgentsPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
