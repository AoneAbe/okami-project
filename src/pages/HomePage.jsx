import React, { useEffect } from 'react';
import Header from '../components/Header';
import Section1 from '../components/Section1';
import Section2 from '../components/Section2';
import AboutSection from '../components/AboutSection';
import FeaturesSection from '../components/FeaturesSection';
import CardVariationSection from '../components/CardVariationSection';
import SocialContributionSection from '../components/SocialContributionSection';
import ExpoPartnerSection from '../components/ExpoPartnerSection';
import CryptoSection from '../components/CryptoSection';
import CardUsageSection from '../components/CardUsageSection';
import ScratchSection from '../components/ScratchSection';
import GoodsSection from '../components/GoodsSection';
import OkamiOmoiSection from '../components/OkamiOmoiSection';
import AdvisorsSection from '../components/AdvisorsSection';
import MessageSection from '../components/MessageSection';
import Section7 from '../components/Section7';
import Section8 from '../components/Section8';
import Section10 from '../components/Section10';
import LineCtaSection from '../components/LineCtaSection';
import CompanyInfoSection from '../components/CompanyInfoSection';
import Footer from '../components/Footer';
import CrossBorderModal from '../components/CrossBorderModal';

const HomePage = () => {
  useEffect(() => {
    // URLハッシュがある場合、該当セクションにスクロール
    const hash = window.location.hash.substring(1); // '#'を除去
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100); // DOMが完全にレンダリングされるまで少し待つ
    }
  }, []);

  return (
    <div className="home-page overflow-x-hidden">
      <CrossBorderModal />
      <Header />
      <Section1 />
      <LineCtaSection />
      <Section2 />
      <AboutSection />
      <FeaturesSection />
      <SocialContributionSection />
      <ExpoPartnerSection />
      <CryptoSection />
      <CardUsageSection />
      <ScratchSection />
      <GoodsSection />
      <CardVariationSection />
      <OkamiOmoiSection />
      <AdvisorsSection />
      <MessageSection />
      <Section8 />
      <LineCtaSection />
      <CompanyInfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;
