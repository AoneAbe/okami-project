import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Youtube } from 'lucide-react';

const Header = ({ disableLanguageSwitcher = false }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    if (!disableLanguageSwitcher) {
      i18n.changeLanguage(lang);
    }
  };

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault();

    // ホームページにいない場合は、まずホームに遷移してからスクロール
    if (window.location.pathname !== import.meta.env.BASE_URL) {
      window.location.href = `${import.meta.env.BASE_URL}#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // ヘッダーの高さ
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center gap-8">
        {/* ロゴ */}
        <Link to="/" className="header-logo flex-shrink-0">
          <img src={`${import.meta.env.BASE_URL}imgs/ookami-logo.png`} alt="OKAMICARD Logo" className="h-10" />
        </Link>

        {/* ナビゲーション */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-8 items-center">
            <li>
              <button
                onClick={(e) => handleScrollToSection(e, 'okami-card')}
                className="group flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <span className="text-xs text-cyan-500 font-medium tracking-wider">CARD</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{t('header.card')}</span>
                <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <button
                onClick={(e) => handleScrollToSection(e, 'card-lineup')}
                className="group flex flex-col items-center gap-1 transition-all cursor-pointer"
              >
                <span className="text-xs text-cyan-500 font-medium tracking-wider">LINEUP</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{t('header.lineup')}</span>
                <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </button>
            </li>
            <li>
              <Link
                to="/blog"
                className="group flex flex-col items-center gap-1 transition-all"
              >
                <span className="text-xs text-cyan-500 font-medium tracking-wider">BLOG</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{t('header.blog')}</span>
                <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </Link>
            </li>
            <li>
              <a
                href="https://lin.ee/jqiiZMo"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-1 transition-all"
              >
                <span className="text-xs text-cyan-500 font-medium tracking-wider">CONTACT</span>
                <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{t('header.contact')}</span>
                <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          </ul>
        </nav>

        {/* SNSアイコンと言語切り替え */}
        <div className="flex items-center gap-4">
          {/* SNSアイコン */}
          <div className="flex items-center gap-2">
            <a
              href="https://x.com/okami_project"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="X (Twitter)"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors fill-current"
                aria-hidden="true"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/okami.pj/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
            </a>
            <a
              href="https://youtube.com/playlist?list=PLixRy6JJ3sO_Zaq6-EsPpul3XBKp8gwJF&si=2YMFAmjjiNXhFg22"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-red-600 hover:to-red-500 transition-all duration-300 hover:scale-110"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 text-gray-700 group-hover:text-white transition-colors" />
            </a>
          </div>

          {/* 区切り線 */}
          <div className="w-px h-8 bg-gray-300" />

          {/* 言語切り替え */}
          <div className="flex items-center bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2 rounded-full gap-3 shadow-lg">
            <button
              onClick={() => changeLanguage('en')}
              disabled={disableLanguageSwitcher}
              className={`text-xs font-medium text-white transition-all whitespace-nowrap ${
                disableLanguageSwitcher
                  ? 'opacity-40 cursor-not-allowed'
                  : i18n.language === 'en'
                    ? 'opacity-100 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('ja')}
              disabled={disableLanguageSwitcher}
              className={`text-xs font-medium text-white transition-all whitespace-nowrap ${
                disableLanguageSwitcher
                  ? 'opacity-40 cursor-not-allowed'
                  : i18n.language === 'ja'
                    ? 'opacity-100 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              日本語
            </button>
            <button
              onClick={() => changeLanguage('zh')}
              disabled={disableLanguageSwitcher}
              className={`text-xs font-medium text-white transition-all whitespace-nowrap ${
                disableLanguageSwitcher
                  ? 'opacity-40 cursor-not-allowed'
                  : i18n.language === 'zh'
                    ? 'opacity-100 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
              }`}
            >
              中文
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
