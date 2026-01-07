import React from 'react';
import { motion } from 'framer-motion';

const Section7 = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左側：テキストコンテンツ */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white space-y-8"
          >
            {/* メインキャッチ */}
            <h2 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              決算限度額＋<br />引き出し無制限
            </h2>

            {/* サブキャッチ */}
            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              未だベールに包まれている取得方法不明の<br />
              チタンカード【ニホンオオカミカード】
            </p>

            {/* CTA文言 */}
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              プラチナホルダーのみに...<br />
              インビテーションの可能性が!?
            </p>

            {/* CTAボタン（オプション） */}
            <div className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all"
              >
                詳細を確認する
              </motion.button>
            </div>
          </motion.div>

          {/* 右側：カード画像 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src="/src/imgs/ookami-card.png"
              alt="ニホンオオカミカード"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
