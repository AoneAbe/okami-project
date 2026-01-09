import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import SubMV from '../components/SubMV';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';

const NewsListPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="blog-page">
      <Header />
      <SubMV title="What's NEWS" subtitle="最新ニュース" />

      {/* ニュース一覧 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsData.map((news) => (
              <motion.article
                key={news.id}
                variants={itemVariants}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow cursor-pointer"
              >
                {/* サムネイル */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}${news.thumbnail}`}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>

                {/* コンテンツ */}
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-3">{news.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {news.content}
                  </p>
                  <a
                    href={`#news-${news.id}`}
                    className="inline-flex items-center text-cyan-600 font-medium text-sm hover:text-cyan-700 transition-colors"
                  >
                    続きを読む
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsListPage;
