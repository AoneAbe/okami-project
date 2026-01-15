import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const MessageSection = () => {
  const { t } = useTranslation();

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="py-32 bg-gradient-to-br from-amber-50 via-stone-50 to-amber-50 relative overflow-hidden">
      {/* 和風背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 border-2 border-amber-200 rounded-full blur-sm" />
        <div className="absolute bottom-0 right-0 w-96 h-96 border-2 border-amber-200 rounded-full blur-sm" />
      </div>

      <div className="max-w-6xl mx-auto px-5 relative z-10">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-3">
              {t('homePage.messageSection.title')}
            </h2>
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
          </div>
        </motion.div>

        {/* メッセージカード */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100"
        >
          <div className="p-10 md:p-16">
            {/* 開始引用符 */}
            <div className="text-6xl md:text-7xl text-amber-600/20 font-serif leading-none mb-6">
              "
            </div>

            {/* メッセージ本文 */}
            <div className="font-serif text-gray-800 text-base md:text-lg leading-loose space-y-6">
              <p>
                {t('homePage.messageSection.message1')}
              </p>
              <p>
                {t('homePage.messageSection.message2')}
              </p>
              <p>
                <Trans
                  i18nKey="homePage.messageSection.message3"
                  components={{
                    accent: <span className="text-red-600 font-bold" />
                  }}
                />
              </p>
            </div>

            {/* 終了引用符と署名 */}
            <div className="flex justify-end items-end mt-8">
              <div className="text-right">
                <div className="text-6xl md:text-7xl text-amber-600/20 font-serif leading-none mb-4">
                  "
                </div>
                <div className="font-serif">
                  <p className="text-sm md:text-base text-gray-600 mb-2">{t('homePage.messageSection.ceo')}</p>
                  <p className="text-xl md:text-2xl font-bold text-gray-900 tracking-wider">
                    {t('homePage.messageSection.ceoName')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 下部装飾ライン */}
          <div className="h-2 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600" />
        </motion.div>

        {/* 装飾要素 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-400" />
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MessageSection;
