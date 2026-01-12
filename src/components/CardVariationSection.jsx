import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CardVariationSection = () => {
  const { i18n } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* カードバリエーション画像（言語別） */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <img
            src={`${import.meta.env.BASE_URL}imgs/card-variation-${i18n.language}.png`}
            alt="OKAMICARD バリエーション"
            className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CardVariationSection;
