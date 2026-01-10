import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Header = ({ disableLanguageSwitcher = false }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    if (!disableLanguageSwitcher) {
      i18n.changeLanguage(lang);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 shadow-md z-50 py-5">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
        {/* ロゴ */}
        <Link to="/" className="header-logo">
          <img src={`${import.meta.env.BASE_URL}imgs/ookami-logo.png`} alt="OKAMICARD Logo" className="h-10" />
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
                <span className="text-base font-medium text-gray-800">{t('header.home')}</span>
              </Link>
            </li>
            <li>
              <Link
                to="/company"
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <span className="text-xs text-cyan-500 font-medium">Company</span>
                <span className="text-base font-medium text-gray-800">{t('header.company')}</span>
              </Link>
            </li>
            {/* ブログは日本語のみ表示 */}
            {i18n.language === 'ja' && (
              <li>
                <Link
                  to="/blog"
                  className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
                >
                  <span className="text-xs text-cyan-500 font-medium">Blog</span>
                  <span className="text-base font-medium text-gray-800">ブログ</span>
                </Link>
              </li>
            )}
          </ul>
        </nav>

        {/* 言語切り替え */}
        <div className="flex items-center bg-black/90 px-5 py-2 rounded-full gap-4">
          <button
            onClick={() => changeLanguage('en')}
            disabled={disableLanguageSwitcher}
            className={`text-sm text-white transition-opacity whitespace-nowrap ${
              disableLanguageSwitcher
                ? 'opacity-40 cursor-not-allowed'
                : i18n.language === 'en' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('ja')}
            disabled={disableLanguageSwitcher}
            className={`text-sm text-white transition-opacity whitespace-nowrap ${
              disableLanguageSwitcher
                ? 'opacity-40 cursor-not-allowed'
                : i18n.language === 'ja' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            日本語
          </button>
          <button
            onClick={() => changeLanguage('zh')}
            disabled={disableLanguageSwitcher}
            className={`text-sm text-white transition-opacity whitespace-nowrap ${
              disableLanguageSwitcher
                ? 'opacity-40 cursor-not-allowed'
                : i18n.language === 'zh' ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
          >
            中文
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
