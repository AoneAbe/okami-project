import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';
import { tweetData } from '../data/tweetData';

const BlogPattern1Page = () => {
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

    // 日付文字列を比較可能な形式に変換してソート（降順）
    return combined.sort((a, b) => {
      const dateA = new Date(a.date.replace(/\./g, '-'));
      const dateB = new Date(b.date.replace(/\./g, '-'));
      return dateB - dateA;
    });
  }, [blogPosts]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          {/* ページタイトル */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              パターン1: 全文表示形式
            </h1>
            <p className="text-gray-600">
              ブログ記事とX投稿を日付順に全文表示
            </p>
          </div>

          {/* コンテンツ一覧 */}
          <div className="space-y-16">
            {allContent.map((item) => {
              const translation = item.translations?.[i18n.language];
              const categoryText = translation?.category || item.category;

              if (item.type === 'blog') {
                // ブログ記事
                return (
                  <article key={item.id} className="border-b border-gray-200 pb-12">
                    {/* カテゴリ */}
                    <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded text-xs font-medium mb-4">
                      {categoryText}
                    </span>

                    {/* 日付 */}
                    <p className="text-sm text-gray-500 mb-4">{item.date}</p>

                    {/* タイトル */}
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                      {translation?.title || item.title}
                    </h2>

                    {/* サムネイル画像 */}
                    {item.thumbnail && (
                      <div className="mb-6">
                        <img
                          src={`${import.meta.env.BASE_URL}${item.thumbnail}`}
                          alt={translation?.title || item.title}
                          className="w-full max-h-96 object-cover rounded-lg"
                        />
                      </div>
                    )}

                    {/* 本文 */}
                    <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
                      {translation?.content || item.content}
                    </div>
                  </article>
                );
              } else {
                // X投稿
                const displayContent = translation?.content;

                return (
                  <article key={item.id} className="border-b border-gray-200 pb-12">
                    {/* カテゴリ */}
                    <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded text-xs font-medium mb-4">
                      {categoryText}
                    </span>

                    {/* 日付 */}
                    <p className="text-sm text-gray-500 mb-4">{item.date}</p>

                    {/* 本文 */}
                    <div className="text-gray-700 whitespace-pre-line leading-relaxed text-base mb-6">
                      {displayContent}
                    </div>

                    {/* 画像（全て表示） */}
                    {item.images && item.images.length > 0 && (
                      <div className={`grid gap-4 mb-6 ${
                        item.images.length === 1 ? 'grid-cols-1' :
                        item.images.length === 2 ? 'grid-cols-2' :
                        item.images.length === 3 ? 'grid-cols-3' :
                        'grid-cols-2'
                      }`}>
                        {item.images.map((img, idx) => (
                          <img
                            key={idx}
                            src={`${import.meta.env.BASE_URL}${img}`}
                            alt={`Image ${idx + 1}`}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        ))}
                      </div>
                    )}

                    {/* 動画URL */}
                    {item.videoUrl && (
                      <div className="mb-4 text-blue-600">
                        <a
                          href={item.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center hover:underline"
                        >
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                          <span className="text-sm">動画を見る</span>
                        </a>
                      </div>
                    )}
                  </article>
                );
              }
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPattern1Page;
