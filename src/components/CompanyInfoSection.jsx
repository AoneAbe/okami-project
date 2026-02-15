import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CompanyInfoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 lg:px-5">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 lg:mb-12"
        >
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-3 lg:mb-4">
            {t('homePage.companyInfoSection.title')}
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 会社情報 - モバイル：縦並び、デスクトップ：テーブル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-xl lg:rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          {/* モバイル用：縦並びレイアウト */}
          <div className="lg:hidden">
            {/* 代理店 */}
            <div className="border-b border-gray-200">
              <div className="px-4 py-3 bg-gray-50 font-bold text-sm text-gray-700">
                {t('homePage.companyInfoSection.agent')}
              </div>
              <div className="px-4 py-3 text-sm text-gray-900 font-medium">
                {t('homePage.companyInfoSection.companyName')}
              </div>
            </div>
            {/* 住所 */}
            <div>
              <div className="px-4 py-3 bg-gray-50 font-bold text-sm text-gray-700">
                {t('homePage.companyInfoSection.address')}
              </div>
              <div className="px-4 py-3 text-sm text-gray-900 space-y-1">
                <p>{t('homePage.companyInfoSection.postalCode')}</p>
                <p>{t('homePage.companyInfoSection.addressLine1')}</p>
                <p>{t('homePage.companyInfoSection.addressLine2')}</p>
              </div>
            </div>
          </div>

          {/* デスクトップ用：テーブルレイアウト */}
          <table className="hidden lg:table w-full">
            <tbody>
              <tr className="border-b border-gray-200">
                <th className="p-6 text-left font-bold text-gray-700 bg-gray-50 w-64">
                  {t('homePage.companyInfoSection.agent')}
                </th>
                <td className="p-6 text-gray-900 font-medium">
                  {t('homePage.companyInfoSection.companyName')}
                </td>
              </tr>
              <tr>
                <th className="p-6 text-left font-bold text-gray-700 bg-gray-50">
                  {t('homePage.companyInfoSection.address')}
                </th>
                <td className="p-6 text-gray-900">
                  <div className="space-y-1">
                    <p>{t('homePage.companyInfoSection.postalCode')}</p>
                    <p>{t('homePage.companyInfoSection.addressLine1')}</p>
                    <p>{t('homePage.companyInfoSection.addressLine2')}</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyInfoSection;
