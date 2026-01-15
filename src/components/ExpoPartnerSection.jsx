import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const ExpoPartnerSection = () => {
  const { t } = useTranslation();

  // 上部画像（1-8）
  const topImages = [
    { id: 1, src: 'osaka-banpaku-op-1.jpg', rotate: 'rotate-3', delay: 0 },
    { id: 2, src: 'osaka-banpaku-op-2.jpg', rotate: '-rotate-2', delay: 0.1 },
    { id: 3, src: 'osaka-banpaku-op-3.jpeg', rotate: 'rotate-6', delay: 0.2 },
    { id: 4, src: 'osaka-banpaku-op-4.JPG', rotate: '-rotate-4', delay: 0.3 },
    { id: 5, src: 'osaka-banpaku-op-5.jpeg', rotate: 'rotate-2', delay: 0.4 },
    { id: 6, src: 'osaka-banpaku-op-6.JPG', rotate: '-rotate-3', delay: 0.5 },
    { id: 7, src: 'osaka-banpaku-op-7.JPG', rotate: 'rotate-4', delay: 0.6 },
    { id: 8, src: 'osaka-banpaku-op-9.JPG', rotate: '-rotate-2', delay: 0.7 }
  ];

  // 下部左側画像（9-10）
  const bottomImages = [
    { id: 9, src: 'osaka-banpaku-op-8.jpg', rotate: 'rotate-2', delay: 0.8 },
    { id: 10, src: 'osaka-banpaku-op-10.png', rotate: '-rotate-3', delay: 0.9 }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.6,
      },
    },
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden min-h-screen flex items-center">
      {/* コンテンツコンテナ */}
      <div className="max-w-7xl mx-auto px-5 w-full">
        {/* 上部画像群（1-8）4列×2行 */}
        <div className="grid grid-cols-4 gap-3 mb-3">
          {topImages.map((image) => (
            <motion.div
              key={image.id}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: image.delay }}
              className={`${image.rotate} hover:scale-105 transition-transform duration-300`}
            >
              <img
                src={`${import.meta.env.BASE_URL}imgs/${image.src}`}
                alt={`大阪万博 ${image.id}`}
                className="w-full h-48 object-cover rounded-xl shadow-xl"
              />
            </motion.div>
          ))}
        </div>

        {/* 下部：左側に9,10の画像、右側にテキスト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* 左側：画像9,10 */}
          <div className="grid grid-cols-2 gap-3 h-full">
            {bottomImages.map((image) => (
              <motion.div
                key={image.id}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: image.delay }}
                className={`${image.rotate} hover:scale-105 transition-transform duration-300 h-full`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}imgs/${image.src}`}
                  alt={`大阪万博 ${image.id}`}
                  className="w-full h-full object-cover rounded-xl shadow-xl"
                />
              </motion.div>
            ))}
          </div>

          {/* 右側：テキストボックス */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white/75 rounded-3xl p-8 shadow-2xl h-full flex flex-col justify-center"
          >
            {/* 見出し */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
              {t('homePage.expoPartnerSection.title')}
            </h2>

            {/* 本文 */}
            <div className="text-base text-gray-700 leading-relaxed">
              <Trans
                i18nKey="homePage.expoPartnerSection.description"
                components={{
                  accent: <span className="text-red-600 font-bold" />
                }}
              />
            </div>

            {/* 装飾ライン */}
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExpoPartnerSection;
