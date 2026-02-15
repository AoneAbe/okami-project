import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const OkamiOmoiSection = () => {
  const { t } = useTranslation();

  return (
    <section
      className="relative min-h-[500px] md:min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}imgs/site/okami-omoi.jpg)`,
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/70" />

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 h-full min-h-[500px] md:min-h-[600px] flex items-center justify-end">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-white text-right py-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed whitespace-pre-line">
            {t('homePage.okamiOmoiSection.title')}
          </h2>
          <p className="text-sm md:text-base leading-loose opacity-90">
            {t('homePage.okamiOmoiSection.description')}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OkamiOmoiSection;
