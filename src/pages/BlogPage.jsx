import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import SubMV from '../components/SubMV';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';
import { tweetData } from '../data/tweetData';

const ITEMS_PER_PAGE = 9;

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  // URLからページ番号を取得（デフォルトは1）
  const initialPage = parseInt(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  // newsDataとtweetDataを統合して日付順にソート（新しい順）
  const allContent = useMemo(() => {
    const combined = [
      ...newsData.map(post => ({ ...post, type: 'blog' })),
      ...tweetData
    ];

    return combined.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB - dateA;
    });
  }, []);

  // ページネーション計算
  const totalPages = Math.ceil(allContent.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = allContent.slice(startIndex, endIndex);

  // ページ変更時にURLを更新してトップにスクロール
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSearchParams({ page: page.toString() });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // URLのページパラメータが変わったら同期
  useEffect(() => {
    const pageFromUrl = parseInt(searchParams.get('page')) || 1;
    if (pageFromUrl !== currentPage && pageFromUrl >= 1 && pageFromUrl <= totalPages) {
      setCurrentPage(pageFromUrl);
    }
  }, [searchParams, totalPages]);

  // クリックハンドラー
  const handleCardClick = (item) => {
    if (item.type === 'blog') {
      navigate(`/blog/${item.id}`);
    } else {
      // X投稿の場合は新しいタブで開く
      window.open(item.tweetUrl, '_blank');
    }
  };

  // 多言語対応のテキスト取得関数
  const getLocalizedText = (item, field) => {
    const translation = item.translations?.[i18n.language];
    return translation?.[field] || item[field];
  };

  return (
    <div className="blog-page">
      <Header />
      <SubMV title={t('blogPage.title')} subtitle={t('blogPage.subtitle')} />

      {/* ニュース・X投稿一覧（カードグリッド形式） */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentItems.map((item, index) => {
              const title = getLocalizedText(item, 'title');
              const category = getLocalizedText(item, 'category');
              const content = getLocalizedText(item, 'content');

              // サムネイル画像の取得
              const DEFAULT_TWEET_THUMBNAIL = 'imgs/site/about-img.webp';
              let thumbnail = '';
              if (item.type === 'blog') {
                thumbnail = item.thumbnail;
              } else {
                // X投稿の場合：画像があれば使用、なければデフォルト画像
                thumbnail = (item.images && item.images.length > 0 && item.images[0])
                  ? item.images[0]
                  : DEFAULT_TWEET_THUMBNAIL;
              }

              return (
                <motion.div
                  key={`${item.type}-${item.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: (index % 6) * 0.1 }}
                  onClick={() => handleCardClick(item)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* サムネイル画像 */}
                  {thumbnail && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${thumbnail}`}
                        alt={title || 'X Post'}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`${item.type === 'blog' ? 'bg-cyan-500' : 'bg-black'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {category}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* カテゴリ（画像がない場合） */}
                  {!thumbnail && (
                    <div className="p-6 pb-0">
                      <span className={`${item.type === 'blog' ? 'bg-cyan-500' : 'bg-black'} text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4`}>
                        {category}
                      </span>
                    </div>
                  )}

                  {/* コンテンツ */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>

                    {item.type === 'blog' ? (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                          {title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {content?.substring(0, 100)}...
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-700 whitespace-pre-line line-clamp-4">
                          {content}
                        </p>
                        {/* Xで見るリンク */}
                        <div className="mt-3 text-xs text-gray-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          {t('blogPage.viewOnX', 'Xで見る')}
                        </div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ページネーション */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* 前へボタン */}
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`p-2 rounded-full transition-all ${
                  currentPage === 1
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-cyan-500 hover:text-white'
                }`}
                aria-label={t('blogPage.prevPage', '前のページ')}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* ページ番号 */}
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // 表示するページ番号を制限（現在ページの前後2ページ + 最初と最後）
                  const showPage =
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2);

                  const showEllipsisBefore = page === currentPage - 2 && currentPage > 4;
                  const showEllipsisAfter = page === currentPage + 2 && currentPage < totalPages - 3;

                  if (!showPage && page !== 2 && page !== totalPages - 1) {
                    return null;
                  }

                  if (page === 2 && currentPage > 4) {
                    return (
                      <span key="ellipsis-start" className="px-2 py-1 text-gray-400">
                        ...
                      </span>
                    );
                  }

                  if (page === totalPages - 1 && currentPage < totalPages - 3) {
                    return (
                      <span key="ellipsis-end" className="px-2 py-1 text-gray-400">
                        ...
                      </span>
                    );
                  }

                  if (!showPage) return null;

                  return (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`min-w-[40px] h-10 rounded-full font-medium transition-all ${
                        currentPage === page
                          ? 'bg-cyan-500 text-white shadow-lg'
                          : 'text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}
              </div>

              {/* 次へボタン */}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-full transition-all ${
                  currentPage === totalPages
                    ? 'text-gray-300 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-cyan-500 hover:text-white'
                }`}
                aria-label={t('blogPage.nextPage', '次のページ')}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* ページ情報 */}
          <p className="text-center text-sm text-gray-500 mt-4">
            {t('blogPage.pageInfo', '{{current}} / {{total}} ページ（全{{items}}件）', {
              current: currentPage,
              total: totalPages,
              items: allContent.length
            })}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-32 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}imgs/site/line-join.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-10 whitespace-pre-line">
              {t('section10.title')}
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
              <span>{t('section10.button')}</span>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage;
