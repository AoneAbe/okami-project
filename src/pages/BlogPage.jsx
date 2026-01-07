import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SubMV from '../components/SubMV';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';

const BlogPage = () => {
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
    <div className="blog-page">
      <Header />
      <SubMV title="What's NEWS" subtitle="最新ニュース" />

      {/* ニュース記事一覧 */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-5">
          <div className="space-y-16">
            {newsData.map((news, index) => (
              <motion.article
                key={news.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={itemVariants}
                className="border-b border-gray-200 pb-16 last:border-b-0"
              >
                {/* タイトル */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {news.title}
                </h2>

                {/* メタ情報 */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                    {news.category}
                  </span>
                  <span className="text-sm text-gray-500">{news.date}</span>
                </div>

                {/* 画像 */}
                {news.images && news.images.length > 0 && (
                  <div className="mb-6 rounded-xl overflow-hidden shadow-lg">
                    <img
                      src={news.images[0]}
                      alt={news.title}
                      className="w-full h-auto"
                    />
                  </div>
                )}

                {/* 本文 */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {news.content}
                  </p>
                </div>

                {/* 追加画像（2枚目以降） */}
                {news.images && news.images.length > 1 && (
                  <div className="mt-6 grid grid-cols-2 gap-4">
                    {news.images.slice(1).map((image, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden shadow-md">
                        <img
                          src={image}
                          alt={`${news.title} - ${idx + 2}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('/src/imgs/line-join.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10">
              オオカミプロジェクトに<br />
              参加して 一緒に世界を<br />
              変えませんか？
            </h2>
            <a
              href="#"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#06C755] hover:bg-[#05b34a] text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              <span>LINEで問い合わせる</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
