import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const AdvisorsSection = () => {
  const { t, i18n } = useTranslation();

  const advisors = [
    {
      id: 1,
      image: 'site/komon-mk.jpg',
      nameEn: 'KOUSEI MOCHIZUKI',
      titleJa: 'オオカミプロジェクト代表',
      titleEn: 'OKAMI PROJECT Representative',
      titleZh: '狼計畫代表',
      nameJa: '望月 高清',
      nameZh: '望月高清',
      descJa: '1974年静岡生まれ。大阪芸術大学卒。2006年に起業し20年間に渡り独自の投資家コミュニティを構築。2017年からシンガポール移住を経て2022年よりドバイへ拠点を移し暗号資産や不動産投資を行う。著書6冊。',
      descEn: 'Born in Shizuoka in 1974. Graduated from Osaka University of Arts. Started his own business in 2006 and built a unique investor community over 20 years. Moved to Singapore in 2017, then relocated his base to Dubai in 2022, where he engages in cryptocurrency and real estate investments. Author of six books.',
      descZh: '1974年生於靜岡。畢業於大阪藝術大學。2006年創業，歷經20年打造出獨特的投資者社群。2017年移居新加坡，2022年起將據點轉移至杜拜，從事加密資產與房地產投資。著有六本著作。',
    },
    {
      id: 2,
      image: 'site/komon-ot.jpg',
      nameEn: 'TADACHIYO OSADA',
      titleJa: '顧問',
      titleEn: 'Advisor',
      titleZh: '顾问',
      nameJa: '長田 忠千代',
      nameZh: '长田忠千代',
      descJa: '2010年に日本最大のメガバンク三菱UFJ銀行の常務執行役員となり、2012年同銀行の代表取締役に就任。AI・WEB3.0等先端分野への関心も深く、一般財団法人メタバース推進協議会、一般社団法人生成AI活用普及協会理事等を務める。',
      descEn: 'Became Managing Executive Officer of MUFG Bank, Japan\'s largest megabank, in 2010, and was appointed Representative Director in 2012. Has deep interest in cutting-edge fields such as AI and WEB3.0, serving as director of the Metaverse Promotion Council and the Generative AI Utilization Promotion Association.',
      descZh: '2010年成为日本最大银行三菱UFJ银行的常务执行董事，2012年就任该银行的代表董事。对AI、WEB3.0等前沿领域有深厚兴趣，担任元宇宙推进协会、生成AI活用普及协会理事等职务。',
    },
    {
      id: 3,
      image: 'site/komon-km.jpg',
      nameEn: 'MASATANE KIUCHI',
      titleJa: '顧問',
      titleEn: 'Advisor',
      titleZh: '顾问',
      nameJa: '木内 正胤',
      nameZh: '木内正胤',
      descJa: '日本最大の財閥グループ三菱商事の創始者の岩崎弥太郎の玄孫として産まれ、木内正胤自身も三菱商事に入社。現在も三菱商事の現役幹部として活躍している。日本最初の銀行である"第一国立銀行"の創設者【渋沢栄一】は木内正胤の曾祖父にあたる。',
      descEn: 'Born as the great-great-grandson of Yataro Iwasaki, founder of Mitsubishi Corporation, Japan\'s largest conglomerate. Kiuchi himself also joined Mitsubishi Corporation and currently serves as an active executive. Eiichi Shibusawa, founder of Japan\'s first bank "Dai-Ichi National Bank," is Kiuchi\'s great-grandfather.',
      descZh: '作为日本最大财阀集团三菱商事创始人岩崎弥太郎的玄孙出生，木内正胤本人也加入了三菱商事。目前仍作为三菱商事的现任高管活跃着。日本第一家银行"第一国立银行"的创始人�的泽荣一是木内正胤的曾祖父。',
    },
    {
      id: 4,
      image: 'site/komon-sa.jpg',
      nameEn: 'His Highness Sheikh Salem Khaled\nHumaid Mohamed Al Qasimi',
      titleJa: '顧問',
      titleEn: 'Advisor',
      titleZh: '顾问',
      nameJa: 'シェイク・サレム・カリード・\nフマイド・モハメド・アル・カシミ殿下',
      nameZh: '谢赫·萨勒姆·哈立德·\n胡迈德·穆罕默德·卡西米殿下',
      descJa: 'アラブ首長国連邦カシミ家ロイヤルファミリー・メンバー。高等技術大学ラスアルハイマ-IT専攻、シャルジャ・アメリカン大学-ビジネスマーケティング専攻。現在、アラブ首長国連邦政府内務省警察庁上級警察官として勤務。',
      descEn: 'Member of the Al Qasimi Royal Family of the United Arab Emirates. Studied IT at Higher Colleges of Technology Ras Al Khaimah and Business Marketing at American University of Sharjah. Currently serves as a senior police officer at the UAE Ministry of Interior.',
      descZh: '阿拉伯联合酋长国卡西米王室成员。毕业于拉斯海玛高等技术学院IT专业和沙迦美国大学商业营销专业。目前在阿联酋政府内政部警察局担任高级警官。',
    },
  ];

  const getTitle = (advisor) => {
    if (i18n.language === 'en') return advisor.titleEn;
    if (i18n.language === 'zh') return advisor.titleZh;
    return advisor.titleJa;
  };

  const getName = (advisor) => {
    if (i18n.language === 'en') return advisor.nameEn;
    if (i18n.language === 'zh') return advisor.nameZh;
    return advisor.nameJa;
  };

  const getDesc = (advisor) => {
    if (i18n.language === 'en') return advisor.descEn;
    if (i18n.language === 'zh') return advisor.descZh;
    return advisor.descJa;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: custom * 0.15,
      },
    }),
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-5">
        {/* セクションタイトル */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('homePage.advisorsSection.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* 4カラムグリッド */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advisors.map((advisor, index) => (
            <motion.div
              key={advisor.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 画像 */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}imgs/${advisor.image}`}
                  alt={advisor.nameEn}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* コンテンツ */}
              <div className="p-5">
                {/* 名前（アルファベット） */}
                <h3 className="text-sm font-bold text-cyan-600 tracking-wide whitespace-pre-line leading-tight">
                  {advisor.nameEn}
                </h3>

                {/* 肩書 */}
                <p className="text-xs text-gray-500 mt-1 mb-2">
                  {getTitle(advisor)}
                </p>

                {/* 名前（漢字/英語/中国語） */}
                <p className="text-lg font-bold text-gray-900 mb-3 whitespace-pre-line leading-snug">
                  {getName(advisor)}
                </p>

                {/* 説明 */}
                <p className="text-xs text-gray-600 leading-relaxed">
                  {getDesc(advisor)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvisorsSection;
