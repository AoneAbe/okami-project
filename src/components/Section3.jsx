import React from 'react';
import { motion } from 'framer-motion';
import { featuresData } from '../data/featuresData';

const Section3 = () => {
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
    <section
      className="py-24 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/imgs/future-bgimg.png')" }}
    >
      {/* 薄いオーバーレイ */}
      <div className="absolute inset-0 bg-black/5" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-3 drop-shadow-lg">Future</h2>
          <p className="text-lg text-white font-medium drop-shadow-md">
            OKAMI CARD<span className="text-white/90">の特徴</span>
          </p>
          <div className="w-px h-16 bg-white/50 mx-auto mt-8" />
        </motion.div>

        {/* 特徴カード */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {featuresData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* アイコン（丸い画像） */}
              <div className="w-48 h-48 rounded-full overflow-hidden mb-8 shadow-2xl ring-4 ring-white/50">
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* テキストエリア（白背景） */}
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                {/* 見出し */}
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-relaxed">
                  {feature.title}
                </h3>

                {/* 本文 */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
