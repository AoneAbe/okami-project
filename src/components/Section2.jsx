import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { newsData } from '../data/newsData';

const Section2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 自動スライド（5秒ごと）
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % newsData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + newsData.length) % newsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % newsData.length);
  };

  const getVisibleNews = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % newsData.length;
      visible.push({ ...newsData[index], displayIndex: i });
    }
    return visible;
  };

  const visibleNews = getVisibleNews();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">Pick UP News</h2>
          <p className="text-gray-600">最新ニュース</p>
        </div>

        {/* ニュースカルーセル */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 左側：メインカード（大きい） */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`main-${visibleNews[0].id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl h-[500px]"
              >
                <img
                  src={visibleNews[0].thumbnail}
                  alt={visibleNews[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-xs font-semibold rounded-full mb-3">
                    {visibleNews[0].category}
                  </span>
                  <h3 className="text-2xl font-bold mb-2 line-clamp-2">
                    {visibleNews[0].title}
                  </h3>
                  <p className="text-sm text-gray-300">{visibleNews[0].date}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* 右側：タイトル＋サムネイル */}
            <div className="flex flex-col gap-6">
              {/* 上部：先頭ニュースのタイトル＋詳細 */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${visibleNews[0].id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-6 rounded-xl shadow-lg"
                >
                  <span className="inline-block px-3 py-1 bg-cyan-500 text-white text-xs font-semibold rounded-full mb-3">
                    {visibleNews[0].category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {visibleNews[0].title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                    {visibleNews[0].content.substring(0, 100)}...
                  </p>
                  <p className="text-xs text-gray-400">{visibleNews[0].date}</p>
                </motion.div>
              </AnimatePresence>

              {/* 下部：正方形サムネイル（3つ横並び） */}
              <div className="grid grid-cols-3 gap-4">
                {visibleNews.slice(1, 4).map((news, index) => (
                  <motion.div
                    key={`thumb-${news.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setCurrentIndex((currentIndex + index + 1) % newsData.length)}
                    className="group cursor-pointer"
                  >
                    {/* 画像 */}
                    <div className="relative overflow-hidden rounded-lg shadow-md aspect-square mb-3">
                      <img
                        src={news.thumbnail}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                    </div>

                    {/* テキスト情報 */}
                    <div className="space-y-2">
                      <span className="inline-block px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs font-semibold rounded">
                        {news.category}
                      </span>
                      <h4 className="text-sm font-bold text-gray-800 line-clamp-2 leading-snug">
                        {news.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition-colors"
              aria-label="前のニュース"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-white rounded-full shadow-lg hover:bg-cyan-500 hover:text-white transition-colors"
              aria-label="次のニュース"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center gap-2 mt-6">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-cyan-500'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`ニュース ${index + 1} へ移動`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
