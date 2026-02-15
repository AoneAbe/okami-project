import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const CardUsageSection = () => {
  const { t, i18n } = useTranslation();

  // 言語に応じた画像パスを取得
  const getCardUsageImage = () => {
    const imageMap = {
      ja: 'imgs/site/card-usage-jp.png',
      en: 'imgs/site/card-usage-en.png',
      zh: 'imgs/site/card-usage-zh.png'
    };
    return imageMap[i18n.language] || imageMap.ja;
  };

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

          {/* 本文（左にロゴ、右にテキスト） */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
              {/* 左側：ロゴ画像 */}
              <div className="flex-shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/site/okami-coin-logo.png`}
                  alt="オオカミコインロゴ"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
              {/* 右側：テキスト */}
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                <Trans
                  i18nKey="homePage.cardUsageSection.section1.description"
                  components={{
                    accent: <span className="text-red-600 font-bold" />
                  }}
                />
              </p>
            </div>
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
              src={`${import.meta.env.BASE_URL}imgs/site/okami-coin.png`}
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

          {/* カード利用画像（言語別） */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <img
              src={`${import.meta.env.BASE_URL}${getCardUsageImage()}`}
              alt={t('homePage.cardUsageSection.section2.title')}
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CardUsageSection;
