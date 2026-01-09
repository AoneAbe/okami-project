import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './CrossBorderModal.css';

const CrossBorderModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const hasAccepted = localStorage.getItem('crossBorderAccepted');
    if (!hasAccepted) {
      setShowModal(true);
    }
  }, []);

  const handleContinue = () => {
    localStorage.setItem('crossBorderAccepted', 'true');
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
