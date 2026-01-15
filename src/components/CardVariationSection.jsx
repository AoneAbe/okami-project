import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const CardVariationSection = () => {
  const { i18n } = useTranslation();

  const cards = [
    {
      id: 1,
      name: 'GREEN',
      type: 'プラスチックカード',
      typeEn: 'Plastic Card',
      typeZh: '塑料卡',
      cardImage: 'green_omote.png',
      bgGradient: 'linear-gradient(to bottom, #6BC99E 0%, #FFFFFF 100%)',
      annualFee: '0',
      monthlyLimit: '30万円',
      monthlyLimitEn: '300,000 JPY',
      monthlyLimitZh: '30万日元',
      cashingLimit: '10万円',
      cashingLimitEn: '100,000 JPY',
      cashingLimitZh: '10万日元',
      services: 'ー',
      servicesEn: '-',
      servicesZh: '-'
    },
    {
      id: 2,
      name: 'GOLD',
      type: 'プラスチックカード',
      typeEn: 'Plastic Card',
      typeZh: '塑料卡',
      cardImage: 'gold_omote.png',
      bgGradient: 'linear-gradient(to bottom, #D6AF09 0%, #FFFFFF 100%)',
      annualFee: '500',
      monthlyLimit: '100万円',
      monthlyLimitEn: '1,000,000 JPY',
      monthlyLimitZh: '100万日元',
      cashingLimit: '30万円',
      cashingLimitEn: '300,000 JPY',
      cashingLimitZh: '30万日元',
      services: 'ー',
      servicesEn: '-',
      servicesZh: '-'
    },
    {
      id: 3,
      name: 'PLATINUM',
      type: 'プラスチックカード',
      typeEn: 'Plastic Card',
      typeZh: '塑料卡',
      cardImage: 'platinum_omote.png',
      bgGradient: 'linear-gradient(to bottom, #5D5D5D 0%, #FFFFFF 100%)',
      annualFee: '15,000',
      monthlyLimit: '500万円',
      monthlyLimitEn: '5,000,000 JPY',
      monthlyLimitZh: '500万日元',
      cashingLimit: '250万円',
      cashingLimitEn: '2,500,000 JPY',
      cashingLimitZh: '250万日元',
      services: 'VIPコミュニティ',
      servicesEn: 'VIP Community',
      servicesZh: 'VIP社区'
    },
    {
      id: 4,
      name: 'BLACK',
      type: 'メタルカード',
      typeEn: 'Metal Card',
      typeZh: '金属卡',
      cardImage: 'black_omote.png',
      bgGradient: 'linear-gradient(to bottom, #BCBCBC 0%, #FFFFFF 100%)',
      annualFee: '15,000',
      monthlyLimit: '無制限',
      monthlyLimitEn: 'Unlimited',
      monthlyLimitZh: '无限制',
      cashingLimit: '無制限',
      cashingLimitEn: 'Unlimited',
      cashingLimitZh: '无限制',
      services: 'コンシェルジュデスク',
      servicesEn: 'Concierge Desk',
      servicesZh: '礼宾服务台'
    }
  ];

  const rows = [
    {
      label: 'キャッシュレス対応',
      labelEn: 'Cashless Support',
      labelZh: '无现金支持'
    },
    {
      label: 'カードタイプ',
      labelEn: 'Card Type',
      labelZh: '卡片类型'
    },
    {
      label: '月額決済可能額',
      labelEn: 'Monthly Payment Limit',
      labelZh: '月度支付限额'
    },
    {
      label: '月間キャッシング額',
      labelEn: 'Monthly Cashing Limit',
      labelZh: '月度现金额度'
    },
    {
      label: '付帯サービス',
      labelEn: 'Additional Services',
      labelZh: '附加服务'
    }
  ];

  const getLabel = (row) => {
    if (i18n.language === 'en') return row.labelEn;
    if (i18n.language === 'zh') return row.labelZh;
    return row.label;
  };

  const getCardType = (card) => {
    if (i18n.language === 'en') return card.typeEn;
    if (i18n.language === 'zh') return card.typeZh;
    return card.type;
  };

  const getMonthlyLimit = (card) => {
    if (i18n.language === 'en') return card.monthlyLimitEn;
    if (i18n.language === 'zh') return card.monthlyLimitZh;
    return card.monthlyLimit;
  };

  const getCashingLimit = (card) => {
    if (i18n.language === 'en') return card.cashingLimitEn;
    if (i18n.language === 'zh') return card.cashingLimitZh;
    return card.cashingLimit;
  };

  const getServices = (card) => {
    if (i18n.language === 'en') return card.servicesEn;
    if (i18n.language === 'zh') return card.servicesZh;
    return card.services;
  };

  // 列全体のグラデーション用のスタイルを生成
  const getColumnGradientStyle = (card, rowIndex) => {
    // 列全体の高さを想定（ヘッダー + 5行）
    const totalHeight = 1000; // 列全体の想定高さ（px）
    const headerHeight = 250; // ヘッダーの高さ
    const rowHeight = 150; // 各行の高さ

    // 各セルの位置に応じて背景位置を調整
    let yPosition = 0;
    if (rowIndex === 'header') {
      yPosition = 0;
    } else {
      yPosition = -(headerHeight + (rowIndex * rowHeight));
    }

    return {
      background: card.bgGradient,
      backgroundSize: `100% ${totalHeight}px`,
      backgroundPosition: `0 ${yPosition}px`,
      backgroundRepeat: 'no-repeat'
    };
  };

  return (
    <section id="card-lineup" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* タイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4 tracking-widest">
            CARD LINEUP
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
        </motion.div>

        {/* カードバリエーションテーブル */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white shadow-2xl overflow-hidden border border-white"
        >
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-6 text-left font-bold text-gray-900 border-b border-r border-white w-56">
                    {/* 空白セル */}
                  </th>
                  {cards.map((card, index) => (
                    <th
                      key={card.id}
                      className={`p-6 text-center border-b border-white ${
                        index < cards.length - 1 ? 'border-r' : ''
                      }`}
                      style={getColumnGradientStyle(card, 'header')}
                    >
                      {/* カード画像 */}
                      <div>
                        <img
                          src={`${import.meta.env.BASE_URL}imgs/${card.cardImage}`}
                          alt={`${card.name} Card`}
                          className="w-48 h-auto mx-auto shadow-xl"
                        />
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* 1行目: キャッシュレス対応 */}
                <tr className="border-b border-white">
                  <td className="p-6 font-bold text-gray-900 bg-gray-100 border-r border-white">
                    {getLabel(rows[0])}
                  </td>
                  {cards.map((card, index) => (
                    <td
                      key={card.id}
                      className={`p-6 text-center ${
                        index < cards.length - 1 ? 'border-r border-white' : ''
                      }`}
                      style={getColumnGradientStyle(card, 0)}
                    >
                      <div className="flex justify-center">
                        <img
                          src={`${import.meta.env.BASE_URL}imgs/pay-type.png`}
                          alt="Apple Pay & Google Pay"
                          className="h-6"
                        />
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 2行目: カードタイプ */}
                <tr className="border-b border-white">
                  <td className="p-6 font-bold text-gray-900 bg-gray-100 border-r border-white">
                    {getLabel(rows[1])}
                  </td>
                  {cards.map((card, index) => (
                    <td
                      key={card.id}
                      className={`p-6 text-center ${
                        index < cards.length - 1 ? 'border-r border-white' : ''
                      }`}
                      style={getColumnGradientStyle(card, 1)}
                    >
                      <span className="text-xl font-black text-gray-900">
                        {getCardType(card)}
                      </span>
                    </td>
                  ))}
                </tr>

                {/* 3行目: 月額決済可能額 */}
                <tr className="border-b border-white">
                  <td className="p-6 font-bold text-gray-900 bg-gray-100 border-r border-white">
                    {getLabel(rows[2])}
                  </td>
                  {cards.map((card, index) => (
                    <td
                      key={card.id}
                      className={`p-6 text-center ${
                        index < cards.length - 1 ? 'border-r border-white' : ''
                      }`}
                      style={getColumnGradientStyle(card, 2)}
                    >
                      <div className="text-xl font-black text-gray-900">
                        {getMonthlyLimit(card)}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 4行目: 月間キャッシング額 */}
                <tr className="border-b border-white">
                  <td className="p-6 font-bold text-gray-900 bg-gray-100 border-r border-white">
                    {getLabel(rows[3])}
                  </td>
                  {cards.map((card, index) => (
                    <td
                      key={card.id}
                      className={`p-6 text-center ${
                        index < cards.length - 1 ? 'border-r border-white' : ''
                      }`}
                      style={getColumnGradientStyle(card, 3)}
                    >
                      <div className="text-xl font-black text-gray-900">
                        {getCashingLimit(card)}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* 5行目: 付帯サービス */}
                <tr>
                  <td className="p-6 font-bold text-gray-900 bg-gray-100 border-r border-white">
                    {getLabel(rows[4])}
                  </td>
                  {cards.map((card, index) => (
                    <td
                      key={card.id}
                      className={`p-6 text-center ${
                        index < cards.length - 1 ? 'border-r border-white' : ''
                      }`}
                      style={getColumnGradientStyle(card, 4)}
                    >
                      <span className="text-xl font-black text-gray-900">
                        {getServices(card)}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CardVariationSection;
