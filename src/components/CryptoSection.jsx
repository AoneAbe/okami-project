import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

// TradingViewチャートウィジェット
const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // 既存のスクリプトをクリア
    containerRef.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: 'MEXC:OKMUSDT',
      interval: 'D',
      timezone: 'Asia/Tokyo',
      theme: 'dark',
      style: '1',
      locale: 'ja',
      backgroundColor: 'rgba(15, 23, 42, 0.9)',
      gridColor: 'rgba(255, 255, 255, 0.06)',
      hide_top_toolbar: false,
      hide_legend: false,
      allow_symbol_change: false,
      save_image: false,
      calendar: false,
      hide_volume: false,
      support_host: 'https://www.tradingview.com',
    });

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="tradingview-widget-container h-full min-h-[500px]" ref={containerRef}>
      <div className="tradingview-widget-container__widget h-full" />
    </div>
  );
};

const CryptoSection = () => {
  const { t } = useTranslation();

  const images = [
    { id: 1, src: 'site/mexc-1.png', alt: 'MEXC上場 1' },
    { id: 2, src: 'blog/p20250128.jpeg', alt: 'MEXC上場' }
  ];

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            {t('homePage.cryptoSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 2カラムレイアウト */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左カラム：文章 + 画像2 */}
          <div className="space-y-8">
            {/* 文章 */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20"
            >
              <p className="text-lg text-white/90 leading-relaxed">
                <Trans
                  i18nKey="homePage.cryptoSection.description"
                  components={{
                    accent: <span className="text-red-400 font-bold" />
                  }}
                />
              </p>
            </motion.div>

            {/* 画像2 */}
            <motion.div
              custom={1}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={`${import.meta.env.BASE_URL}imgs/${images[1].src}`}
                alt={images[1].alt}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* 左上のラベル画像 */}
              <div className="absolute top-3 left-3 w-32 h-14 md:w-44 md:h-20 rounded-lg overflow-hidden shadow-lg border-2 border-white/50">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/blog/p20250128-2.jpeg`}
                  alt="MEXC"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* 右カラム：TradingViewチャート */}
          <motion.div
            custom={0}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl shadow-2xl h-full min-h-[500px] bg-slate-900/90 border border-white/10"
          >
            <TradingViewWidget />
            {/* MEXCへのリンクオーバーレイ */}
            <a
              href="https://www.mexc.com/ja-JP/exchange/OKM_USDT"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer z-10"
            >
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold px-8 py-4 rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300 flex items-center gap-3">
                <span>MEXCで取引する</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CryptoSection;
