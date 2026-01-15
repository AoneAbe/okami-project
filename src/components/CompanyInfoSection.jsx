import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CompanyInfoSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-5">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('homePage.companyInfoSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 会社情報テーブル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200"
        >
          <table className="w-full">
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
