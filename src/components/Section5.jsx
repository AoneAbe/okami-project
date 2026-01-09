import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section5 = () => {
  const { t } = useTranslation();
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-6">{t('section5.title')}</h2>
          <p className="text-2xl font-bold text-gray-800 mb-4">
            {t('section5.subtitle')}
          </p>
          <p className="text-lg text-cyan-600 font-medium">
            {t('section5.description')}
          </p>
        </motion.div>

        {/* メイン画像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}imgs/merit.png`}
            alt="OKAMICARD メリット"
            className="w-full max-w-4xl h-auto shadow-2xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
