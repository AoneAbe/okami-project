import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import SubMV from '../components/SubMV';
import Footer from '../components/Footer';

const CompanyPage = () => {
  const { t, i18n } = useTranslation();
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <div className="company-page">
      <Header />
      <SubMV title="COMPANY" subtitle={t('companyPage.subtitle')} />

      {/* About Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* セクションタイトル */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-3">{t('companyPage.whoWeAre.title')}</h2>
            <p className="text-lg text-gray-700">{t('companyPage.whoWeAre.subtitle')}</p>
            <div className="w-px h-16 bg-gray-300 mx-auto mt-8" />
          </motion.div>

          {/* 1行目：左テキスト、右画像 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
          >
            {/* 左：テキスト */}
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                {t('companyPage.whoWeAre.heading1')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('companyPage.whoWeAre.paragraph1')}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('companyPage.whoWeAre.paragraph2')}
              </p>
            </div>

            {/* 右：画像 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={`${import.meta.env.BASE_URL}imgs/we-are.jpg`}
                alt="私たちについて"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* 2行目：左画像、右テキスト */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* 左：画像 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <img
                src={`${import.meta.env.BASE_URL}imgs/okami.jpg`}
                alt="社会活動と国際貢献"
                className="w-full h-auto"
              />
            </div>

            {/* 右：テキスト */}
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                {t('companyPage.whoWeAre.heading2')}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('companyPage.whoWeAre.paragraph3')}
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                {t('companyPage.whoWeAre.paragraph4')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* OKAMI PROJECTS Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5">
          {/* セクションタイトル */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-3">{t('companyPage.projects.title')}</h2>
            <p className="text-lg text-gray-700">{t('companyPage.projects.subtitle')}</p>
            <div className="w-px h-16 bg-gray-300 mx-auto mt-8" />
          </motion.div>

          {/* プロジェクト画像 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center mb-12"
          >
            <img
              src={`${import.meta.env.BASE_URL}imgs/project-${i18n.language}.png?v=2`}
              alt="OKAMI PROJECTS"
              className="w-full max-w-4xl h-auto"
            />
          </motion.div>

          {/* 下矢印 */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <ArrowDown className="w-12 h-12 text-gray-400" />
          </motion.div>

          {/* メインコンテンツ */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 whitespace-pre-line">
              {t('companyPage.projects.heading')}
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-line">
              {t('companyPage.projects.paragraph')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Member Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-5">
          {/* セクションタイトル */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-3">{t('companyPage.members.title')}</h2>
            <p className="text-lg text-gray-700">{t('companyPage.members.subtitle')}</p>
            <div className="w-px h-16 bg-gray-300 mx-auto mt-8" />
          </motion.div>

          {/* メンバー1：長田忠千代 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-20"
          >
            {/* 左：画像（40%） */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/osada-tadachiyo.jpg`}
                  alt="長田 忠千代"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 右：プロフィール（60%） */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                TADACHIYO OSADA
              </h3>
              <p className="text-xl text-gray-600 font-medium">{t('companyPage.members.osada.name')}</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {t('companyPage.members.osada.bio')}
              </p>
            </div>
          </motion.div>

          {/* メンバー2：木内正胤 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center mb-20"
          >
            {/* 左：画像（40%） */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/kiuchi-masatane.jpg`}
                  alt="木内 正胤"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 右：プロフィール（60%） */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                MASATANE KIUCHI
              </h3>
              <p className="text-xl text-gray-600 font-medium">{t('companyPage.members.kiuchi.name')}</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {t('companyPage.members.kiuchi.bio')}
              </p>
            </div>
          </motion.div>

          {/* メンバー3：望月こうせい */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={sectionVariants}
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center"
          >
            {/* 左：画像（40%） */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/mochizuki-kousei.jpg`}
                  alt="望月 こうせい"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* 右：プロフィール（60%） */}
            <div className="lg:col-span-3 space-y-4">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
                KOUSEI MOCHIZUKI
              </h3>
              <p className="text-xl text-gray-600 font-medium">{t('companyPage.members.mochizuki.name')}</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                {t('companyPage.members.mochizuki.bio')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompanyPage;
