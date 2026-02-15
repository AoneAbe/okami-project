import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import NewsListPage from './pages/NewsListPage';
import CompanyPage from './pages/CompanyPage';
import BlogPattern1Page from './pages/BlogPattern1Page';
import BlogPattern2Page from './pages/BlogPattern2Page';
import ScrollToTop from './components/ScrollToTop';

// 翻訳ローディング中のフォールバック
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-900">
    <div className="text-center">
      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
      <p className="text-white text-sm">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Router basename="/okami-project">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />
          <Route path="/news-list" element={<NewsListPage />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/blog-pattern1" element={<BlogPattern1Page />} />
          <Route path="/blog-pattern2" element={<BlogPattern2Page />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
