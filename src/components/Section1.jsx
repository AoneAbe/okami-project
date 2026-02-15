import React, { useState, useEffect, useCallback } from 'react';
import { Check, ChevronLeft, ChevronRight, Heart, Globe, Coins, Wallet, BadgeCheck, Banknote, Smartphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PolygonBackground from './PolygonBackground';

// 浮遊アニメーションのスタイル
const floatStyles = `
  @keyframes floatA {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(10px, -15px) rotate(2deg); }
    50% { transform: translate(-5px, -25px) rotate(-1deg); }
    75% { transform: translate(-15px, -10px) rotate(1deg); }
  }
  @keyframes floatB {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(-12px, -20px) rotate(-2deg); }
    50% { transform: translate(8px, -15px) rotate(1deg); }
    75% { transform: translate(15px, -8px) rotate(-1deg); }
  }
  @keyframes floatC {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(18px, -12px) rotate(3deg); }
    66% { transform: translate(-10px, -22px) rotate(-2deg); }
  }
  @keyframes floatD {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    20% { transform: translate(-8px, -18px) rotate(-1deg); }
    40% { transform: translate(12px, -28px) rotate(2deg); }
    60% { transform: translate(5px, -15px) rotate(-1deg); }
    80% { transform: translate(-15px, -8px) rotate(1deg); }
  }
  @keyframes floatE {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    50% { transform: translate(-20px, -20px) rotate(-3deg); }
  }
`;

const Section1 = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // スライドデータ
  const slides = [
    {
      id: 1,
      backgroundType: 'polygon', // 3Dポリゴン背景
      mainImage: `${import.meta.env.BASE_URL}imgs/site/main-visual.png`,
      subtitleKey: 'homePage.section1.subtitle',
      titleKey: 'homePage.section1.title',
      features: ['feature1', 'feature2', 'feature3', 'feature4'],
    },
    {
      id: 2,
      backgroundType: 'image',
      backgroundImage: `${import.meta.env.BASE_URL}imgs/site/slide-2.png`,
      layoutType: 'socialContributionCircle', // 中央テキスト＋周囲に丸い写真
      subtitleKey: 'homePage.section1.slide2.subtitle',
      titleKey: 'homePage.section1.slide2.title',
      descriptionKey: 'homePage.section1.slide2.description',
      highlightKey: 'homePage.section1.slide2.highlight',
      circleImages: [
        `${import.meta.env.BASE_URL}imgs/site/dogcat1.png`,
        `${import.meta.env.BASE_URL}imgs/site/dogcat2.png`,
        `${import.meta.env.BASE_URL}imgs/site/dogcat3.png`,
        `${import.meta.env.BASE_URL}imgs/site/dogcat4.png`,
        `${import.meta.env.BASE_URL}imgs/site/dogcat5.png`,
      ],
    },
    {
      id: 3,
      backgroundType: 'gradient', // 洗練されたグラデーション背景
      layoutType: 'featuresShowcase', // 特徴一覧レイアウト
      subtitleKey: 'homePage.section1.slide4.subtitle',
      titleKey: 'homePage.section1.slide4.title',
      cardImage: `${import.meta.env.BASE_URL}imgs/site/cards2.png`,
      featureIcons: [Globe, Coins, Wallet, BadgeCheck, Banknote, Smartphone],
    },
  ];

  const totalSlides = slides.length;

  // 次のスライドへ
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  // 前のスライドへ
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  }, [isTransitioning, totalSlides]);

  // 特定のスライドへ
  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  // 自動スライド
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center overflow-hidden"
    >
      {/* 浮遊アニメーションのスタイル */}
      <style>{floatStyles}</style>
      {/* 背景レイヤー */}
      {slides.map((slide, index) => (
        <div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {slide.backgroundType === 'polygon' ? (
            // 3Dポリゴン背景
            index === currentSlide && <PolygonBackground />
          ) : slide.backgroundType === 'gradient' ? (
            // 洗練されたグラデーション背景
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
              {/* 装飾的なグラデーションオーバーレイ */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
              {/* 装飾的なライン */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
                <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent" />
              </div>
            </div>
          ) : (
            // 画像背景
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
              />
              {/* 社会貢献スライド用のオーバーレイ */}
              {slide.layoutType === 'socialContribution' && (
                <div className="absolute inset-0 bg-black/40" />
              )}
            </>
          )}
        </div>
      ))}

      {/* 右側：カード画像（トランジション付き）- デスクトップのみ */}
      {slides.map((slide, index) => (
        <div
          key={`img-${slide.id}`}
          className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 h-full items-center justify-end pointer-events-none transition-all duration-500 ${
            index === currentSlide
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          } ${slide.layoutType === 'socialContribution' ? 'lg:hidden' : ''} ${slide.layoutType === 'featuresShowcase' ? 'left-[-18rem] w-[85rem]' : 'right-48 w-[50%]'}`}
        >
          {slide.mainImage && (
            <img
              src={slide.mainImage}
              alt="OKAMICARD"
              className="w-full h-auto max-h-[90vh] object-contain drop-shadow-2xl"
            />
          )}
          {slide.cardImage && (
            <img
              src={slide.cardImage}
              alt="OKAMI CARDS"
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          )}
        </div>
      ))}

      {/* コンテンツ */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 w-full">
        {slides.map((slide, index) => (
          <div
            key={`content-${slide.id}`}
            className={`transition-all duration-500 ${
              index === currentSlide
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4 absolute pointer-events-none'
            }`}
          >
            {index === currentSlide && (
              <>
                {slide.layoutType === 'socialContributionCircle' ? (
                  /* 社会貢献スライド：中央テキスト＋周囲に丸い写真 */
                  <div className="relative flex items-center justify-center min-h-[60vh] lg:min-h-[70vh]">
                    {/* 周囲の丸い写真 - デスクトップ */}
                    <div className="hidden lg:block absolute inset-0">
                      {slide.circleImages?.map((img, imgIndex) => {
                        // 5つの写真を非対称に散らして配置
                        const positions = [
                          { top: '8%', left: '8%' },       // 左上
                          { top: '3%', right: '22%' },     // 右上（少し内側）
                          { top: '40%', left: '2%' },      // 左中やや上
                          { top: '55%', right: '5%' },     // 右中やや下
                          { bottom: '8%', left: '25%' },   // 左下
                        ];
                        // 各写真に異なる浮遊アニメーション
                        const floatAnimations = [
                          'floatA',
                          'floatB',
                          'floatC',
                          'floatD',
                          'floatE',
                        ];
                        const pos = positions[imgIndex] || {};
                        const animName = floatAnimations[imgIndex] || 'floatA';
                        return (
                          <div
                            key={imgIndex}
                            className="absolute w-64 h-64 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl"
                            style={{
                              ...pos,
                              animation: `${animName} ${4 + imgIndex * 0.5}s ease-in-out infinite`,
                              animationDelay: `${imgIndex * 0.3}s`,
                            }}
                          >
                            <img
                              src={img}
                              alt={`Social contribution ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        );
                      })}
                    </div>

                    {/* 中央のテキスト */}
                    <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
                      <p className="text-xs lg:text-sm mb-2 lg:mb-4 opacity-90 tracking-wider text-white">
                        {t(slide.subtitleKey)}
                      </p>
                      <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-4 lg:mb-6 tracking-tight whitespace-pre-line text-white">
                        {t(slide.titleKey)}
                      </h1>
                      <p className="text-xs lg:text-sm leading-relaxed text-white/90 whitespace-pre-line mb-4 lg:mb-6">
                        {t(slide.descriptionKey)}
                      </p>
                      <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 lg:p-4">
                        <Heart className="w-5 h-5 lg:w-6 lg:h-6 text-red-400 flex-shrink-0" fill="currentColor" />
                        <span className="text-white font-medium text-xs lg:text-sm">
                          {t(slide.highlightKey)}
                        </span>
                      </div>

                      {/* モバイル用：写真を横スクロール表示 */}
                      <div className="lg:hidden mt-6 flex gap-3 overflow-x-auto pb-2 justify-center flex-wrap">
                        {slide.circleImages?.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/30 shadow-lg flex-shrink-0"
                          >
                            <img
                              src={img}
                              alt={`Social contribution ${imgIndex + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : slide.layoutType === 'featuresShowcase' ? (
                  /* 特徴一覧スライド：左側に大きなカード画像、右側にタイトル + 特徴グリッド */
                  <div className="lg:ml-auto max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
                    <p className="text-xs lg:text-sm mb-2 lg:mb-3 opacity-90 tracking-widest text-cyan-400 font-medium">
                      {t(slide.subtitleKey)}
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight mb-6 lg:mb-10 tracking-tight whitespace-pre-line text-white">
                      {t(slide.titleKey)}
                    </h1>
                    {/* モバイル用：カード画像 */}
                    {slide.cardImage && (
                      <div className="lg:hidden mb-6">
                        <img
                          src={slide.cardImage}
                          alt="OKAMI CARDS"
                          className="w-full max-w-xs mx-auto h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    )}
                    {/* 6つの特徴グリッド */}
                    <div className="grid grid-cols-2 gap-2 lg:gap-3">
                      {(() => {
                        const features = t('homePage.section1.slide4.features', { returnObjects: true });
                        if (!Array.isArray(features)) return null;
                        return features.map((feature, featureIndex) => {
                          const IconComponent = slide.featureIcons?.[featureIndex];
                          return (
                            <div
                              key={featureIndex}
                              className="bg-white/10 backdrop-blur-sm rounded-lg lg:rounded-xl p-2 lg:p-3 border border-white/10 hover:bg-white/15 transition-all duration-300 group"
                            >
                              <div className="flex items-center gap-1.5 lg:gap-2 mb-1">
                                {IconComponent && (
                                  <div className="w-6 h-6 lg:w-8 lg:h-8 rounded-md lg:rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                                  </div>
                                )}
                                <h3 className="text-white font-bold text-xs lg:text-sm">
                                  {feature.title}
                                </h3>
                              </div>
                              <p className="text-white/70 text-[10px] lg:text-xs leading-relaxed">
                                {feature.description}
                              </p>
                            </div>
                          );
                        });
                      })()}
                    </div>
                  </div>
                ) : (
                  /* 標準スライド：従来のレイアウト */
                  <div className="flex flex-col lg:block">
                    <div className="max-w-lg lg:max-w-xl">
                      <p className="text-xs lg:text-sm mb-3 lg:mb-5 opacity-90 tracking-wider text-white">
                        {t(slide.subtitleKey)}
                      </p>
                      <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 lg:mb-10 tracking-tight whitespace-pre-line text-white">
                        {t(slide.titleKey)}
                      </h1>
                      <ul className="flex flex-col gap-2 lg:gap-4 text-white mb-6 lg:mb-0">
                        {slide.features?.map((key, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 lg:gap-3">
                            <div className="flex-shrink-0 w-5 h-5 lg:w-6 lg:h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                              <Check className="w-3 h-3 lg:w-4 lg:h-4 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-sm lg:text-base leading-relaxed whitespace-pre-line">
                              {t(`homePage.section1.${key}`)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* モバイル用：メインビジュアル画像 */}
                    {slide.mainImage && (
                      <div className="lg:hidden mt-4">
                        <img
                          src={slide.mainImage}
                          alt="OKAMICARD"
                          className="w-full max-w-sm mx-auto h-auto object-contain drop-shadow-2xl"
                        />
                      </div>
                    )}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>

      {/* ナビゲーション矢印 */}
      <button
        onClick={prevSlide}
        className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 lg:w-12 lg:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* ドットインジケーター */}
      <div className="absolute bottom-4 lg:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-6 lg:w-8'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* スライド番号表示 */}
      <div className="absolute bottom-4 lg:bottom-8 right-4 lg:right-8 z-20 text-white/60 text-xs lg:text-sm font-medium">
        <span className="text-white text-sm lg:text-lg">{String(currentSlide + 1).padStart(2, '0')}</span>
        <span className="mx-1 lg:mx-2">/</span>
        <span>{String(totalSlides).padStart(2, '0')}</span>
      </div>
    </section>
  );
};

export default Section1;
