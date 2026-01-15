import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation, Trans } from 'react-i18next';

const SocialContributionSection = () => {
  const { t } = useTranslation();

  const images = [
    { id: 1, src: 'social-contribution-1.JPG', alt: '動物保護活動 1' },
    { id: 2, src: 'social-contribution-2.jpeg', alt: '動物保護活動 2' },
    { id: 3, src: 'social-contribution-3.jpg', alt: '動物保護活動 3' }
  ];

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (custom) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.2,
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        delay: 0.4,
      },
    },
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 左カラム */}
          <div className="space-y-8">
            {/* 第1象限：画像1 */}
            <motion.div
              custom={0}
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-2xl h-[680px]"
            >
              <img
                src={`${import.meta.env.BASE_URL}imgs/${images[0].src}`}
                alt={images[0].alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* 右カラム */}
          <div className="space-y-8">
            {/* 第2象限：見出しと本文 */}
            <motion.div
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* 見出し */}
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {t('homePage.socialContributionSection.title')}
              </h2>

              {/* 本文 */}
              <div className="text-base text-gray-700 leading-relaxed">
                <Trans
                  i18nKey="homePage.socialContributionSection.description"
                  components={{
                    accent: <span className="text-red-600 font-bold" />
                  }}
                />
              </div>

              {/* 装飾ライン */}
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
            </motion.div>

            {/* 第4象限：画像2と3を横並び */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                custom={1}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl shadow-lg h-[250px]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}imgs/${images[1].src}`}
                  alt={images[1].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              <motion.div
                custom={2}
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="overflow-hidden rounded-2xl shadow-lg h-[250px]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}imgs/${images[2].src}`}
                  alt={images[2].alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialContributionSection;
