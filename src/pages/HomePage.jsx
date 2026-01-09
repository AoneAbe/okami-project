import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Section5 from '../components/Section5';
import Section6 from '../components/Section6';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';
import Section9 from '../components/Section9';
import Section10 from '../components/Section10';
import Footer from '../components/Footer';
import CrossBorderModal from '../components/CrossBorderModal';

const HomePage = () => {
  const { i18n } = useTranslation();
  return (
    <div className="home-page">
      <CrossBorderModal />
      <Header />
      <Section1 />
      {/* Section2（ニュース）は日本語のみ表示 */}
      {i18n.language === 'ja' && <Section2 />}
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
    </div>
  );
};

export default HomePage;
