import React from 'react';
import { Check } from 'lucide-react';

const Section1 = () => {
  const features = [
    '全ての仮想通貨を格納できる',
    '専用ウォレットと連動',
    '法定通貨に交換することなく\nそのまま決済することが可能',
  ];

  return (
    <section
      id="home"
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-20 flex items-center"
      style={{ backgroundImage: "url('/imgs/mv-bgimg.png')" }}
    >
      <div className="max-w-7xl mx-auto px-5 py-16 w-full">
        <div className="flex justify-between items-center gap-16 flex-wrap lg:flex-nowrap">
          {/* 左側：テキストコンテンツ */}
          <div className="flex-1 text-white">
            <p className="text-sm mb-5 opacity-90 tracking-wider">
              仮想通貨対応　OKAMICARD
            </p>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-10 tracking-tight">
              世界最高峰の<br />
              プライベート<br />
              セキュリティカード
            </h1>
            <ul className="flex flex-col gap-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-base leading-relaxed whitespace-pre-line">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 右側：カード画像 */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src="/imgs/ookami-card.png"
              alt="OKAMICARD"
              className="w-full max-w-md lg:max-w-lg drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
