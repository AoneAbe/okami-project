import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import Header from '../components/Header';
import SubMV from '../components/SubMV';
import Footer from '../components/Footer';

const CompanyPage = () => {
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
      <SubMV title="COMPANY" subtitle="会社情報" />

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
            <h2 className="text-5xl font-bold text-gray-900 mb-3">WHO WE ARE</h2>
            <p className="text-lg text-gray-700">私たちについて</p>
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
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                笑顔が溢れ<br />好きなことで生きていく<br />あたりまえの世の中に
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                私たちは情熱を持って毎日を過ごすことで、自己現実と社会貢献を両立することができると信じています。
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                誰もが自分らしく働けるあたりまえの世の中を目指して、私たちは日々挑戦を続けています。
              </p>
            </div>

            {/* 右：画像 */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/imgs/we-are.jpg"
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
                src="/imgs/okami.jpg"
                alt="社会活動と国際貢献"
                className="w-full h-auto"
              />
            </div>

            {/* 右：テキスト */}
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                社会活動と国際貢献
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                オオカミプロジェクトを通じて、年間11,000頭いると言われている殺処分される動物たちを救う基金を設立、もしくは動物保護団体と連携し支援することでより良い社会の実現をお手伝いします。
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                具体的には、オオカミカード利用時にトランザクションとして利用されるオオカミコインの一部を社会貢献活動に活用します。
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
            <h2 className="text-5xl font-bold text-gray-900 mb-3">OKAMI PROJECTS</h2>
            <p className="text-lg text-gray-700">オオカミプロジェクト</p>
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
              src="/imgs/project.png"
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
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              OKAMI PROJECTを通して<br />みんなが幸せになる
            </h3>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              つまりあなたがカードを利用し、<br />またオオカミコインを保有すること自体が<br />社会貢献の一助を担っていることを意味します。
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
            <h2 className="text-5xl font-bold text-gray-900 mb-3">MEMBER</h2>
            <p className="text-lg text-gray-700">メンバー紹介</p>
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
                  src="/imgs/osada-tadachiyo.jpg"
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
              <p className="text-xl text-gray-600 font-medium">長田 忠千代</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                1956年10月生まれ
2010年に日本最大のメガバンク三菱UFJ銀行の常務執行役員となり、2012年同銀行の代表取締役に就任。
 三菱UFJ銀行のみならず、MUFGグループ全体のリテール業務のヘッドとして、グループ会社の三菱UFJニコス等のクレジットカード業務を含むコンシューマーファイナンス事業も統括。
 また、AI・WEB3.0等先端分野への関心も深く、一般財団法人メタバース推進協議会、一般社団法人生成AI活用普及協会理事等を務める。
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
                  src="/imgs/kiuchi-masatane.jpg"
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
              <p className="text-xl text-gray-600 font-medium">木内 正胤</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                1964年10月生まれ 日本最大の財閥グループ三菱商事の創始者の岩崎弥太郎の玄孫として産まれ、木内正胤自身も三菱商事に入社。
 現在も三菱商事の現役幹部として活躍している。 日本最初の銀行である"第一国立銀行"の創設者【渋沢栄一】は木内正胤の曾祖父にあたる。
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
                  src="/imgs/mochizuki-kousei.jpg"
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
              <p className="text-xl text-gray-600 font-medium">望月 こうせい</p>
              <p className="text-base text-gray-700 leading-relaxed whitespace-pre-line">
                1974年8月生まれ。 ドバイ在住、オオカミ財団代表
 借金600万円の貧乏サラリーマンから一転、たった1人で年収3億円稼ぐ独自メソッドを構築。
2022年にシンガポールからドバイへ拠点を移し暗号資産や不動産投資を行う。著書6冊を出版。
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
