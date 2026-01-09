import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { flowData } from '../data/flowData';

const Section8 = () => {
  const { t } = useTranslation();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-3">{t('section8.title')}</h2>
          <p className="text-lg text-gray-700 font-medium">{t('section8.subtitle')}</p>
          <div className="w-px h-16 bg-gray-300 mx-auto mt-8" />
        </motion.div>

        {/* フローステップ */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row items-center justify-center gap-8"
        >
          {flowData.map((flow, index) => (
            <React.Fragment key={flow.id}>
              {/* フローカード */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col items-center text-center max-w-xs"
              >
                {/* 画像 */}
                <div className="w-64 h-64 rounded-full overflow-hidden mb-6 shadow-xl">
                  <img
                    src={`${import.meta.env.BASE_URL}${flow.image}`}
                    alt={t(`flow.step${flow.id}.title`)}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* ステップ番号 */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-500 text-white text-xl font-bold rounded-full shadow-md mb-4">
                  {index + 1}
                </div>

                {/* 小見出し */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t(`flow.step${flow.id}.title`)}
                </h3>

                {/* 本文 */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {t(`flow.step${flow.id}.description`)}
                </p>
              </motion.div>

              {/* 矢印（最後のアイテムの後には表示しない） */}
              {index < flowData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  className="hidden md:block flex-shrink-0"
                >
                  <ArrowRight className="w-10 h-10 text-cyan-500" strokeWidth={2} />
                </motion.div>
              )}

              {/* モバイル用矢印（縦向き） */}
              {index < flowData.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                  className="md:hidden"
                >
                  <ArrowRight className="w-8 h-8 text-cyan-500 rotate-90" strokeWidth={2} />
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* 注意書き */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 max-w-2xl">
            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-line">
              {t('section8.notice')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section8;
