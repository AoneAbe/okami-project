import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const ScratchSection = () => {
  const { t } = useTranslation();

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左カラム：テキスト */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 見出し */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {t('homePage.scratchSection.title')}
            </h2>

            {/* 本文 */}
            <div className="text-lg text-gray-700 leading-relaxed">
              <Trans
                i18nKey="homePage.scratchSection.description"
                components={{
                  accent: <span className="text-red-600 font-bold" />
                }}
              />
            </div>

            {/* 装飾ライン */}
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
          </motion.div>

          {/* 右カラム：画像 */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}imgs/okami-scrach.jpg`}
                alt="オオカミスクラッチ"
                className="w-full h-auto"
              />
              {/* グラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ScratchSection;
