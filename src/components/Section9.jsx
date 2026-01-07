import React from 'react';
import { motion } from 'framer-motion';

const Section9 = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* メイン画像 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <img
            src="/src/imgs/social-activity.png"
            alt="社会活動と国際貢献"
            className="w-full h-auto rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* テキストコンテンツ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* 左側：タイトル */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-sm text-cyan-600 font-semibold tracking-widest uppercase">
              SOCIAL ACTIVITY
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              社会活動と国際貢献
            </h2>
          </motion.div>

          {/* 右側：本文 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              オオカミプロジェクトを通じて、年間11,000頭いると言われている殺処分される動物たちを救う基金を設立、もしくは動物保護団体と連携し支援することでより良い社会の実現をお手伝いします。
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section9;
