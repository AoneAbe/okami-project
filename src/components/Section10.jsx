import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Section10 = () => {
  const { t } = useTranslation();
  return (
    <section
      className="py-32 bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url('${import.meta.env.BASE_URL}imgs/line-join.jpg')` }}
    >
      {/* 暗めのオーバーレイ */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="max-w-4xl mx-auto px-5 relative z-10 text-center">
        {/* メインキャッチコピー */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-10 whitespace-pre-line"
        >
          {t('section10.title')}
        </motion.h2>

        {/* サブテキスト */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base md:text-lg text-white/90 mb-12 leading-relaxed"
        >
          {t('section10.subtitle')}
        </motion.p>

        {/* LINEボタン */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-[#06C755] hover:bg-[#05b34a] text-white font-bold text-lg rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            {/* LINEアイコン */}
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
  );
};

export default Section10;
