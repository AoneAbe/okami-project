import React, { useEffect, useRef, useState } from 'react';

const XEmbed = ({ tweetUrl }) => {
  const containerRef = useRef(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!tweetUrl) {
      setError(true);
      setLoading(false);
      return;
    }

    const loadTwitterWidget = () => {
      try {
        if (window.twttr && window.twttr.widgets) {
          // スクリプトが既に読み込まれている場合
          window.twttr.widgets.load(containerRef.current)
            .then(() => setLoading(false))
            .catch(() => {
              setError(true);
              setLoading(false);
            });
        } else {
          // スクリプトが未読み込みの場合
          const existingScript = document.querySelector('script[src="https://platform.twitter.com/widgets.js"]');

          if (!existingScript) {
            // 新しくスクリプトを追加
            const script = document.createElement('script');
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.charset = 'utf-8';
            document.body.appendChild(script);

            script.onload = () => {
              if (window.twttr && window.twttr.widgets && containerRef.current) {
                window.twttr.widgets.load(containerRef.current)
                  .then(() => setLoading(false))
                  .catch(() => {
                    setError(true);
                    setLoading(false);
                  });
              }
            };

            script.onerror = () => {
              setError(true);
              setLoading(false);
            };
          } else {
            // スクリプトタグは存在するが、まだ読み込み中の場合
            intervalRef.current = setInterval(() => {
              if (window.twttr && window.twttr.widgets && containerRef.current) {
                clearInterval(intervalRef.current);
                window.twttr.widgets.load(containerRef.current)
                  .then(() => setLoading(false))
                  .catch(() => {
                    setError(true);
                    setLoading(false);
                  });
              }
            }, 100);

            // 10秒でタイムアウト
            timeoutRef.current = setTimeout(() => {
              if (intervalRef.current) {
                clearInterval(intervalRef.current);
              }
              setError(true);
              setLoading(false);
            }, 10000);
          }
        }
      } catch (err) {
        console.error('Twitter widget error:', err);
        setError(true);
        setLoading(false);
      }
    };

    loadTwitterWidget();

    // クリーンアップ
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [tweetUrl]);

  if (error) {
    return (
      <div className="text-center p-8 bg-gray-100 rounded-lg">
        <p className="text-gray-600 mb-2">X投稿を読み込めませんでした</p>
        <a
          href={tweetUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-cyan-600 hover:underline text-sm"
        >
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          Xで見る
        </a>
      </div>
    );
  }

  return (
    <div className="twitter-embed-container">
      {loading && (
        <div className="text-center p-8 bg-gray-100 rounded-lg animate-pulse">
          <p className="text-gray-600">読み込み中...</p>
        </div>
      )}
      <div ref={containerRef}>
        <blockquote className="twitter-tweet" data-theme="light" data-dnt="true">
          <a href={tweetUrl}>Xで見る</a>
        </blockquote>
      </div>
    </div>
  );
};

export default XEmbed;
