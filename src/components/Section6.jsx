import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { reasonsData } from '../data/reasonsData';

const Section6 = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">REASON WHY</h2>
          <p className="text-xl text-gray-700 font-medium">
            OKAMI CARD<span className="text-cyan-600">だから出来る5つのポイント</span>
          </p>
        </motion.div>

        {/* 理由リスト */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-20"
        >
          {reasonsData.map((reason, index) => (
            <motion.div
              key={reason.id}
              variants={itemVariants}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
            >
              {/* 左側：画像 */}
              <div className="flex justify-center lg:justify-start">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full max-w-md h-auto rounded-2xl shadow-lg"
                />
              </div>

              {/* 右側：テキスト */}
              <div className="space-y-6">
                {/* 小見出し */}
                <h3 className="text-3xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                  {reason.title}
                </h3>

                {/* 本文 */}
                <p className="text-base text-gray-700 leading-relaxed">
                  {reason.description}
                </p>

                {/* チェック項目（ある場合のみ） */}
                {reason.features && (
                  <ul className="space-y-3 mt-6">
                    {reason.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" strokeWidth={3} />
                        </div>
                        <span className="text-base text-gray-800">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* カードバリエーション画像 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 flex justify-center"
        >
          <img
            src="/src/imgs/card-variation.png"
            alt="OKAMICARD バリエーション"
            className="w-full max-w-5xl h-auto rounded-2xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Section6;
