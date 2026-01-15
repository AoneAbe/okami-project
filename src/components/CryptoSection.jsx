import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const CryptoSection = () => {
  const { t } = useTranslation();

  const images = [
    { id: 1, src: 'mexc-1.png', alt: 'MEXC上場 1' },
    { id: 2, src: 'mexc-2.png', alt: 'MEXC上場 2' }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('homePage.cryptoSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左カラム：文章 + 画像2 */}
          <div className="space-y-8">
            {/* 文章 */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20"
            >
              <p className="text-lg text-white/90 leading-relaxed">
                <Trans
                  i18nKey="homePage.cryptoSection.description"
                  components={{
                    accent: <span className="text-red-400 font-bold" />
                  }}
                />
              </p>
            </motion.div>

            {/* 画像2 */}
            <motion.div
              custom={1}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={`${import.meta.env.BASE_URL}imgs/${images[1].src}`}
                alt={images[1].alt}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </div>

          {/* 右カラム：画像1 */}
          <motion.div
            custom={0}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl h-full"
          >
            <img
              src={`${import.meta.env.BASE_URL}imgs/${images[0].src}`}
              alt={images[0].alt}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
