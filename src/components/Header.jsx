import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Instagram, Youtube, ChevronDown, Globe, Menu, X } from 'lucide-react';

const Header = ({ disableLanguageSwitcher = false }) => {
  const { t, i18n } = useTranslation();
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileDropdownRef = useRef(null);
  const desktopDropdownRef = useRef(null);

  const languages = [
    { code: 'ja', label: '日本語' },
    { code: 'en', label: 'English' },
    { code: 'zh', label: '中文' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lang) => {
    if (!disableLanguageSwitcher) {
      i18n.changeLanguage(lang);
      setIsLangDropdownOpen(false);
    }
  };

  // クリック外でドロップダウンを閉じる
  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideMobile = mobileDropdownRef.current && !mobileDropdownRef.current.contains(event.target);
      const isOutsideDesktop = desktopDropdownRef.current && !desktopDropdownRef.current.contains(event.target);
      if (isOutsideMobile && isOutsideDesktop) {
        setIsLangDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

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

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (e, sectionId) => {
    handleScrollToSection(e, sectionId);
    closeMobileMenu();
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center gap-4 lg:gap-8">
          {/* ロゴ */}
          <Link to="/" className="header-logo flex-shrink-0">
            <img src={`${import.meta.env.BASE_URL}imgs/site/ookami-logo.png`} alt="OKAMICARD Logo" className="h-8 lg:h-10" />
          </Link>

          {/* モバイル用：言語切り替え（中央） */}
          <div className="lg:hidden flex-1 flex justify-center" ref={mobileDropdownRef}>
            <div className="relative z-[60]">
              <button
                onClick={() => !disableLanguageSwitcher && setIsLangDropdownOpen(!isLangDropdownOpen)}
                disabled={disableLanguageSwitcher}
                className={`flex items-center gap-1.5 bg-gradient-to-r from-gray-900 to-gray-800 px-3 py-1.5 rounded-full shadow-lg transition-all ${
                  disableLanguageSwitcher ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-white" />
                <span className="text-xs font-medium text-white whitespace-nowrap">
                  {currentLanguage.label}
                </span>
                <ChevronDown className={`w-3.5 h-3.5 text-white transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* ドロップダウンメニュー */}
              {isLangDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-28 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-[60]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={(e) => {
                        e.stopPropagation();
                        changeLanguage(lang.code);
                      }}
                      className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-cyan-50 text-cyan-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* モバイル用：ハンバーガーメニューボタン */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="メニュー"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>

          {/* デスクトップ用：ナビゲーション */}
          <nav className="hidden lg:flex flex-1 justify-center">
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
                <button
                  onClick={(e) => handleScrollToSection(e, 'contact')}
                  className="group flex flex-col items-center gap-1 transition-all cursor-pointer"
                >
                  <span className="text-xs text-cyan-500 font-medium tracking-wider">APPLY&CONTACT</span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-cyan-600 transition-colors">{t('header.contact')}</span>
                  <div className="h-0.5 w-0 bg-cyan-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            </ul>
          </nav>

          {/* デスクトップ用：SNSアイコンと言語切り替え */}
          <div className="hidden lg:flex items-center gap-4">
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

            {/* 言語切り替え（プルダウン） */}
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => !disableLanguageSwitcher && setIsLangDropdownOpen(!isLangDropdownOpen)}
                disabled={disableLanguageSwitcher}
                className={`flex items-center gap-2 bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-2 rounded-full shadow-lg transition-all ${
                  disableLanguageSwitcher ? 'opacity-40 cursor-not-allowed' : 'hover:shadow-xl'
                }`}
              >
                <Globe className="w-4 h-4 text-white" />
                <span className="text-xs font-medium text-white whitespace-nowrap">
                  {currentLanguage.label}
                </span>
                <ChevronDown className={`w-4 h-4 text-white transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* ドロップダウンメニュー */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-200 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                        i18n.language === lang.code
                          ? 'bg-cyan-50 text-cyan-600 font-medium'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* モバイルメニューオーバーレイ */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* 背景オーバーレイ */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={closeMobileMenu}
          />
          {/* メニューパネル */}
          <div className="absolute top-0 right-0 w-72 h-full bg-white shadow-xl overflow-y-auto">
            <div className="pt-20 pb-8 px-6">
              {/* ナビゲーションリンク */}
              <nav className="space-y-2">
                <button
                  onClick={(e) => handleMobileNavClick(e, 'okami-card')}
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xs text-cyan-500 font-medium tracking-wider block">CARD</span>
                  <span className="text-base font-medium text-gray-800">{t('header.card')}</span>
                </button>
                <button
                  onClick={(e) => handleMobileNavClick(e, 'card-lineup')}
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xs text-cyan-500 font-medium tracking-wider block">LINEUP</span>
                  <span className="text-base font-medium text-gray-800">{t('header.lineup')}</span>
                </button>
                <Link
                  to="/blog"
                  onClick={closeMobileMenu}
                  className="block py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xs text-cyan-500 font-medium tracking-wider block">BLOG</span>
                  <span className="text-base font-medium text-gray-800">{t('header.blog')}</span>
                </Link>
                <button
                  onClick={(e) => handleMobileNavClick(e, 'contact')}
                  className="w-full text-left py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <span className="text-xs text-cyan-500 font-medium tracking-wider block">APPLY&CONTACT</span>
                  <span className="text-base font-medium text-gray-800">{t('header.contact')}</span>
                </button>
              </nav>

              {/* 区切り線 */}
              <div className="my-6 border-t border-gray-200" />

              {/* SNSアイコン */}
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://x.com/okami_project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-900 transition-colors group"
                  aria-label="X (Twitter)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors fill-current"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/okami.pj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 transition-colors group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="https://youtube.com/playlist?list=PLixRy6JJ3sO_Zaq6-EsPpul3XBKp8gwJF&si=2YMFAmjjiNXhFg22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-600 transition-colors group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-gray-700 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
