import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { newsData } from '../data/newsData';

const BlogDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  // IDに一致するブログ記事を取得
  const post = newsData.find(item => item.id === parseInt(id));

  // 記事が見つからない場合
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="pt-24 pb-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">記事が見つかりません</h1>
            <button
              onClick={() => navigate('/blog')}
              className="text-cyan-600 hover:underline"
            >
              一覧に戻る
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const translation = post.translations?.[i18n.language];
  const title = translation?.title || post.title;
  const content = translation?.content || post.content;
  const category = translation?.category || post.category;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-5">
          {/* 戻るボタン */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>戻る</span>
          </button>

          {/* 記事詳細 */}
          <article>
            {/* カテゴリ */}
            <span className="inline-block bg-cyan-500 text-white px-3 py-1 rounded text-xs font-medium mb-4">
              {category}
            </span>

            {/* 日付 */}
            <p className="text-sm text-gray-500 mb-4">{post.date}</p>

            {/* タイトル */}
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              {title}
            </h1>

            {/* サムネイル画像 */}
            {post.thumbnail && (
              <div className="mb-8">
                <img
                  src={`${import.meta.env.BASE_URL}${post.thumbnail}`}
                  alt={title}
                  className="w-full max-h-96 object-cover rounded-lg"
                />
              </div>
            )}

            {/* 本文 */}
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-base mb-8">
              {content}
            </div>

            {/* 追加画像（サムネイル以外） */}
            {post.images && post.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {post.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={`${import.meta.env.BASE_URL}${img}`}
                    alt={`${title} - Image ${idx + 1}`}
                    className="w-full h-auto object-cover rounded-lg"
                  />
                ))}
              </div>
            )}
          </article>

          {/* 戻るボタン（下部） */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>戻る</span>
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;
