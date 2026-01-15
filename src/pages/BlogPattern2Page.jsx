import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';
import { tweetData } from '../data/tweetData';

const BlogPattern2Page = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // ブログ記事から最初の3件を取得
  const blogPosts = newsData.slice(0, 3);

  // すべてのコンテンツを統合して日付順にソート
  const allContent = useMemo(() => {
    const combined = [
      ...blogPosts.map(post => ({ ...post, type: 'blog' })),
      ...tweetData
    ];

    return combined.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB - dateA;
    });
  }, [blogPosts]);

  const handleCardClick = (item) => {
    if (item.type === 'blog') {
      navigate(`/blog/${item.id}`);
    } else {
      // X投稿の場合は新しいタブで開く
      window.open(item.tweetUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-5">
          {/* ページタイトル */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              パターン2: 完全JSON化方式
            </h1>
            <p className="text-gray-600">
              すべて同じカードデザインで統一表示（X投稿もテキスト・画像表示）
            </p>
          </div>

          {/* コンテンツグリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allContent.map((item) => {
              const translation = item.translations?.[i18n.language];
              const displayTitle = item.type === 'blog'
                ? (translation?.title || item.title)
                : translation?.content?.substring(0, 50) + '...';
              const displayContent = translation?.content || item.content;
              const categoryText = translation?.category || item.category;

              // サムネイル画像の取得
              let thumbnail = '';
              if (item.type === 'blog') {
                thumbnail = item.thumbnail;
              } else if (item.images && item.images.length > 0) {
                thumbnail = item.images[0];
              }

              return (
                <div
                  key={item.id}
                  onClick={() => handleCardClick(item)}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                >
                  {/* サムネイル画像 */}
                  {thumbnail && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={`${import.meta.env.BASE_URL}${thumbnail}`}
                        alt={displayTitle}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className={`${item.type === 'blog' ? 'bg-cyan-500' : 'bg-blue-500'} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                          {categoryText}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* カテゴリ（画像がない場合） */}
                  {!thumbnail && (
                    <div className="p-6 pb-0">
                      <span className={`${item.type === 'blog' ? 'bg-cyan-500' : 'bg-blue-500'} text-white px-3 py-1 rounded-full text-xs font-medium inline-block mb-4`}>
                        {categoryText}
                      </span>
                    </div>
                  )}

                  {/* コンテンツ */}
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>

                    {item.type === 'blog' ? (
                      <>
                        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                          {displayTitle}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {displayContent?.substring(0, 100)}...
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-sm text-gray-700 whitespace-pre-line line-clamp-3">
                          {displayContent}
                        </p>

                        {/* Xで見るリンク */}
                        <div className="mt-3 text-xs text-blue-500 flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                          </svg>
                          Xで見る
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPattern2Page;
