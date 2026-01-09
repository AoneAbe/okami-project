import React from 'react';
import { motion } from 'framer-motion';

const SubMV = ({ title, subtitle }) => {
  return (
    <section
      className="relative h-96 bg-cover bg-top bg-no-repeat pt-20"
      style={{
        backgroundImage: `url('${import.meta.env.BASE_URL}imgs/mv-bgimg.png')`,
        backgroundPosition: 'center top'
      }}
    >
      {/* オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/70" />

      {/* コンテンツ */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-5 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SubMV;
