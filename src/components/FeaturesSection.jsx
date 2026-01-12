import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CreditCard, Coins, Wallet, CheckCircle, Banknote, Smartphone } from 'lucide-react';

const FeaturesSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      id: 1,
      title: '国際ブランドVISAと提携し世界中で利用可能',
      description: '国際ブランドVISAと提携し世界中で利用可能。VISAとの提携により全世界1億5千万件以上の店舗で飲食やショッピングが可能。',
      icon: CreditCard,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: '全ての暗号通貨で支払いが可能',
      description: 'オオカミカードは、暗号資産で決済ができるクレジットカードです。デビットカードでは対応が難しい家賃や水道光熱費などのサブスクリプション支払いにも対応。ビットコインやイーサリアムをはじめ、今後は主要アルトコインを含むすべての暗号資産に順次対応していく予定です。',
      icon: Coins,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'オオカミウォレットで全てのコインを管理',
      description: 'オオカミウォレットは高性能セキュリティ対応。１つのウォレットで全コインを管理でき、ログイン情報の紛失リスクも避けられる。',
      icon: Wallet,
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: '審査不要で年会費もなし',
      description: '年会費なし、ビットコインなどの暗号通貨が使えるクレジットカード。',
      icon: CheckCircle,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      id: 5,
      title: '世界中のATMで法定通貨の引出可能',
      description: 'いつでもどこでも世界中のATMからその国の通貨を現金で出金することが可能。',
      icon: Banknote,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'カード不要でキャッシュレス決済が可能',
      description: 'カード不要でキャッシュレス決済が可能。',
      icon: Smartphone,
      gradient: 'from-cyan-500 to-teal-500'
    }
  ];

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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
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
            オオカミカードの6つの特徴
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
