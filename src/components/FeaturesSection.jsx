import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: '国際ブランドVISAと提携し世界中で利用可能',
      description: '国際ブランドVISAと提携し世界中で利用可能。VISAとの提携により全世界1億5千万件以上の店舗で飲食やショッピングが可能。',
      icon: '💳'
    },
    {
      id: 2,
      title: '全ての暗号通貨で支払いが可能',
      description: 'オオカミカードは、暗号資産で決済ができるクレジットカードです。デビットカードでは対応が難しい家賃や水道光熱費などのサブスクリプション支払いにも対応。ビットコインやイーサリアムをはじめ、今後は主要アルトコインを含むすべての暗号資産に順次対応していく予定です。',
      icon: '🪙'
    },
    {
      id: 3,
      title: 'オオカミウォレットで全てのコインを管理',
      description: 'オオカミウォレットは高性能セキュリティ対応。１つのウォレットで全コインを管理でき、ログイン情報の紛失リスクも避けられる。',
      icon: '👛'
    },
    {
      id: 4,
      title: '審査不要で年会費もなし',
      description: '年会費なし、ビットコインなどの暗号通貨が使えるクレジットカード。',
      icon: '✅'
    },
    {
      id: 5,
      title: '世界中のATMで法定通貨の引出可能',
      description: 'いつでもどこでも世界中のATMからその国の通貨を現金で出金することが可能。',
      icon: '🏧'
    },
    {
      id: 6,
      title: 'カード不要でキャッシュレス決済が可能',
      description: 'カード不要でキャッシュレス決済が可能。',
      icon: '📱'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section className="py-24 bg-gradient-to-br from-cyan-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            オオカミカードの6つの特徴
          </h2>
        </motion.div>

        {/* 特徴グリッド */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {/* ヘッダー部分（青背景） */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-900 px-6 py-4">
                <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
                  {feature.title}
                </h3>
              </div>

              {/* 本文部分（白背景） */}
              <div className="p-6 flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">
                  {feature.icon}
                </div>
                <p className="text-base text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
