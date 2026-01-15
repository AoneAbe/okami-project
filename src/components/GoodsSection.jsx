import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const GoodsSection = () => {
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

  return (
    <section className="relative py-32 overflow-hidden">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}imgs/goods.png`}
          alt="オオカミグッズ"
          className="w-full h-full object-cover"
        />
        {/* 左側にグラデーションオーバーレイ（テキストを読みやすくする） */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* コンテンツ */}
      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* 見出し */}
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              {t('homePage.goodsSection.title')}
            </h2>

            {/* 本文 */}
            <div className="text-lg text-white/95 leading-relaxed">
              <Trans
                i18nKey="homePage.goodsSection.description"
                components={{
                  accent: <span className="text-red-400 font-bold" />
                }}
              />
            </div>

            {/* 装飾ライン */}
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-orange-500 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GoodsSection;
