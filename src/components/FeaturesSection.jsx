import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CreditCard, Coins, Wallet, CheckCircle, Banknote, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const icons = [CreditCard, Coins, Wallet, CheckCircle, Banknote, Smartphone];
  const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-cyan-500 to-teal-500'
  ];

  const featuresData = t('homePage.featuresSection.features', { returnObjects: true });
  const features = Array.isArray(featuresData)
    ? featuresData.map((feature, index) => ({
        ...feature,
        id: index + 1,
        icon: icons[index],
        gradient: gradients[index]
      }))
    : [];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="okami-card" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-5 relative z-10">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-cyan-800 to-blue-900 bg-clip-text text-transparent">
            {t('homePage.featuresSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 特徴グリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative"
              >
                {/* カード本体 */}
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                  {/* グラデーションアイコン背景 */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <IconComponent className="w-full h-full text-white" strokeWidth={2} />
                  </div>

                  {/* タイトル */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-cyan-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* 説明文 */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* 装飾用のグラデーションライン */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
