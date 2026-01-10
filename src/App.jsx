import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import NewsListPage from './pages/NewsListPage';
import CompanyPage from './pages/CompanyPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router basename="/okami-project">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/news-list" element={<NewsListPage />} />
        <Route path="/company" element={<CompanyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
