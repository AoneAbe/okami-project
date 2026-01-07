import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Section4 = () => {
  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-100">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
          {/* 左側：中央集権型 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="bg-white rounded-3xl shadow-xl p-10 text-center"
          >
            <p className="text-lg text-gray-700 mb-4">これまでの</p>
            <div className="bg-cyan-500 text-white text-3xl font-bold py-6 px-8 rounded-2xl mb-8">
              中央債権型
            </div>
            <p className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">
              銀行がお金を<br />コントロール
            </p>
            <div className="flex justify-center">
              <img
                src="/imgs/system1.png"
                alt="中央集権型システム"
                className="w-48 h-auto"
              />
            </div>
          </motion.div>

          {/* 真ん中：矢印 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden lg:flex justify-center items-center"
          >
            <ArrowRight className="w-16 h-16 text-cyan-600" strokeWidth={3} />
          </motion.div>

          {/* モバイル用矢印（縦向き） */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:hidden flex justify-center items-center py-4"
          >
            <ArrowRight className="w-12 h-12 text-cyan-600 rotate-90" strokeWidth={3} />
          </motion.div>

          {/* 右側：非中央集権型 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariantsRight}
            className="bg-white rounded-3xl shadow-xl p-10 text-center"
          >
            <p className="text-lg text-gray-700 mb-4">これからの</p>
            <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-3xl font-bold py-6 px-8 rounded-2xl mb-8">
              非中央債権型
            </div>
            <p className="text-xl font-bold text-gray-800 mb-8 leading-relaxed">
              ブロックチェーン技術<br />により分散型へ
            </p>
            <div className="flex justify-center">
              <img
                src="/imgs/system2.png"
                alt="分散型システム"
                className="w-48 h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
