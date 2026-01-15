import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const CardUsageSection = () => {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* 1セクション目：オオカミコインが必要 */}
        <div className="mb-32">
          {/* 見出し */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('homePage.cardUsageSection.section1.title')}
            </h2>
          </motion.div>

          {/* 本文 */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <Trans
                i18nKey="homePage.cardUsageSection.section1.description"
                components={{
                  accent: <span className="text-red-600 font-bold" />
                }}
              />
            </p>
          </motion.div>

          {/* 画像 */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <img
              src={`${import.meta.env.BASE_URL}imgs/okami-coin.png`}
              alt="オオカミコイン"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>

        {/* 2セクション目：手数料 */}
        <div>
          {/* 見出し */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('homePage.cardUsageSection.section2.title')}
            </h2>
          </motion.div>

          {/* 本文 */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              <Trans
                i18nKey="homePage.cardUsageSection.section2.description"
                components={{
                  accent: <span className="text-red-600 font-bold" />
                }}
              />
            </p>
          </motion.div>

          {/* 画像と手数料一覧 */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-10 gap-8 items-center"
          >
            {/* 左側：カード画像（60%） */}
            <div className="lg:col-span-6">
              <img
                src={`${import.meta.env.BASE_URL}imgs/cards.png`}
                alt="オオカミカード"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* 右側：手数料一覧（40%） */}
            <div className="lg:col-span-4 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {t('homePage.cardUsageSection.section2.feeTableTitle')}
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{t('homePage.cardUsageSection.section2.virtualGreenCard')}</span>
                  <span className="text-xl font-bold text-green-600">4.0％</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{t('homePage.cardUsageSection.section2.goldCard')}</span>
                  <span className="text-xl font-bold text-yellow-600">3.0％</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                  <span className="text-gray-700 font-medium">{t('homePage.cardUsageSection.section2.platinumCard')}</span>
                  <span className="text-xl font-bold text-gray-600">2.0％</span>
                </div>
                <div className="flex justify-between items-center pb-3">
                  <span className="text-gray-700 font-medium">{t('homePage.cardUsageSection.section2.blackCard')}</span>
                  <span className="text-xl font-bold text-gray-900">1.0％</span>
                </div>
              </div>
              <p className="text-sm text-red-600 font-bold mt-6 text-center">
                {t('homePage.cardUsageSection.section2.feeNote')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardUsageSection;
