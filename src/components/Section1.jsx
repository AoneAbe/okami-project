import React from 'react';
import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Section1 = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-20 flex items-center"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}imgs/mv-bgimg.png')` }}
    >
      <div className="max-w-7xl mx-auto px-5 py-16 w-full">
        <div className="flex justify-between items-center gap-16 flex-wrap lg:flex-nowrap">
          {/* 左側：テキストコンテンツ */}
          <div className="flex-1 text-white">
            <p className="text-sm mb-5 opacity-90 tracking-wider">
              {t('homePage.section1.subtitle')}
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-10 tracking-tight whitespace-pre-line">
              {t('homePage.section1.title')}
            </h1>
            <ul className="flex flex-col gap-4">
              {['feature1', 'feature2', 'feature3'].map((key, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-base leading-relaxed whitespace-pre-line">
                    {t(`homePage.section1.${key}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：カード画像 */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={`${import.meta.env.BASE_URL}imgs/ookami-card.png`}
              alt="OKAMICARD"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
