import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './CrossBorderModal.css';

const CrossBorderModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { t, i18n } = useTranslation();
  const prevLanguageRef = useRef(i18n.language);

  // 言語変更を監視してモーダル表示を制御
  useEffect(() => {
    const currentLang = i18n.language;
    const prevLang = prevLanguageRef.current;

    // 日本語の場合は表示しない
    if (currentLang === 'ja') {
      setShowModal(false);
      prevLanguageRef.current = currentLang;
      return;
    }

    // 日本語以外への初回アクセス（sessionStorageにフラグがない場合）
    const hasAccepted = sessionStorage.getItem('crossBorderAccepted');
    if (!hasAccepted) {
      setShowModal(true);
      prevLanguageRef.current = currentLang;
      return;
    }

    // 言語が変更された場合（日本語以外への切り替え時は全て表示）
    if (prevLang !== currentLang) {
      setShowModal(true);
    }

    prevLanguageRef.current = currentLang;
  }, [i18n.language]);

  const handleContinue = () => {
    sessionStorage.setItem('crossBorderAccepted', 'true');
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div className="cross-border-modal-overlay">
      <div className="cross-border-modal-content">
        <h2 className="cross-border-modal-title">{t('crossBorderModal.title')}</h2>

        <div className="cross-border-modal-text">
          <p>{t('crossBorderModal.paragraph1')}</p>
          <p>{t('crossBorderModal.paragraph2')}</p>
          <p>{t('crossBorderModal.paragraph3')}</p>
        </div>

        <button className="cross-border-modal-button" onClick={handleContinue}>
          {t('crossBorderModal.continueButton')}
        </button>
      </div>
    </div>
  );
};

export default CrossBorderModal;
