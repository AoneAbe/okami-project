import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AboutSection = () => {
  const { t } = useTranslation();

  const renderTextWithAccent = (text) => {
    if (!text) return null;
    const parts = text.split(/<accent>|<\/accent>/);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return (
          <span key={index} className="text-red-600 font-semibold">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-400/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent">
            {t('homePage.aboutSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左カラム - 画像 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}imgs/site/about-img.webp`}
                alt="OKAMI PROJECT"
                className="w-full h-auto object-cover"
              />
              {/* 画像のオーバーレイグラデーション */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* 装飾的な要素 */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-3xl -z-10" />
          </motion.div>

          {/* 右カラム - テキスト */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* メインテキスト */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {renderTextWithAccent(t('homePage.aboutSection.description'))}
            </p>

            {/* 特筆すべき内容のボックス */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-lg">
                {/* 装飾的なアイコンまたはマーク */}
                <div className="absolute -top-4 left-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed pt-2">
                  {t('homePage.aboutSection.highlight')}
                </p>
                {/* 右下のオオカミコインロゴ */}
                <div className="absolute -bottom-[44px] -right-6 md:-bottom-[52px] md:-right-8">
                  <img
                    src={`${import.meta.env.BASE_URL}imgs/site/okami-coin-logo.png`}
                    alt="オオカミコイン"
                    className="w-20 h-20 md:w-28 md:h-28 object-contain drop-shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
