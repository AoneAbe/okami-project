import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 py-5">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* ロゴ */}
        <Link to="/" className="header-logo">
          <img src="/imgs/ookami-logo.png" alt="OKAMICARD Logo" className="h-10" />
        </Link>

        {/* ナビゲーション */}
        <nav className="header-nav">
          <ul className="flex gap-10">
            <li>
              <Link
                to="/"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs text-cyan-500 font-medium">Home</span>
                <span className="text-base font-medium text-gray-800">ホーム</span>
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs text-cyan-500 font-medium">Company</span>
                <span className="text-base font-medium text-gray-800">会社概要</span>
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs text-cyan-500 font-medium">Blog</span>
                <span className="text-base font-medium text-gray-800">ブログ</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* 言語切り替え */}
        <div className="flex items-center bg-black/90 px-5 py-2 rounded-full gap-4">
          <a
            href="#en"
            className="text-sm text-white opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            English
          </a>
          <a
            href="#ja"
            className="text-sm text-white opacity-100 transition-opacity whitespace-nowrap"
          >
            日本語
          </a>
          <a
            href="#zh"
            className="text-sm text-white opacity-60 hover:opacity-100 transition-opacity whitespace-nowrap"
          >
            中文
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
