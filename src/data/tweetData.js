// X投稿データ
// ここに実際のX投稿情報を記入してください

export const tweetData = [
  {
    type: 'tweet',
    id: 'tweet-1',
    date: '2024.12.18', // ← 実際の投稿日付を記入
    tweetUrl: 'https://x.com/okami_project/status/1869045924812689779', // ← 実際のX投稿URLを記入

    images: [
      // 画像がある場合はここに追加（例: 'imgs/tweet1-1.jpg'）
    ],

    // videoUrl: '', // 動画がある場合はコメントアウトを外してURLを記入

    translations: {
      ja: {
        category: 'X投稿',
        content: 'OKAMI CARD\n\nThe First Decentralized Crypto Card Revolution.\n\n$40M backed decentralized credit card project\n\nPay directly with crypto, no fiat conversion needed\n\nSupported by UAE Royal Family & ex-MUFJ CEO\n\nFirst look at our GTO anime collab coming soon!'
      },
      en: {
        category: 'X Post',
        content: 'Enter English post content here'
      },
      zh: {
        category: 'X帖子',
        content: '在此输入中文帖子内容'
      }
    }
  },

  {
    type: 'tweet',
    id: 'tweet-2',
    date: '2025.03.14',
    tweetUrl: 'https://x.com/okami_project/status/1900463327672934556',

    images: [
      'imgs/x20250314-1.jpeg',
      'imgs/x20250314-2.jpeg',
      'imgs/x20250314-3.jpeg',
      'imgs/x20250314-4.jpeg'
    ],

    translations: {
      ja: {
        category: 'X投稿',
        content: '2025年3月9日オオカミプロジェクトの１周年記念セミナーを開催し、とても盛り上がりました！\n\nOn March 9, we had a seminar to celebrate the first anniversary of the OKAMI Project.\n\nWe invited many guests and had a very exciting time!\n\n#OKMMEXC #okamiproject #オオカミ最高'
      },
      en: {
        category: 'X Post',
        content: ''
      },
      zh: {
        category: 'X帖子',
        content: ''
      }
    }
  },

  {
    type: 'tweet',
    id: 'tweet-3',
    date: '2025.05.02',
    tweetUrl: 'https://x.com/okami_project/status/1918296743604576453',

    images: [
      'imgs/x20250502-1.jpeg',
      'imgs/x20250502-2.jpeg',
      'imgs/x20250502-3.jpeg'
    ],

    translations: {
      ja: {
        category: 'X投稿',
        content: 'ドバイで開催されたTOKEN2049にオオカミプロジェクト出展し大盛況でした！\n\nThe OKAMI Project exhibited at TOKEN2049 in Dubai and was a great success!\n\n#オオカミ最高 #okamiproject #OKMMEXC #TOKEN2049 #Token2049Dubai'
      },
      en: {
        category: 'X Post',
        content: ''
      },
      zh: {
        category: 'X帖子',
        content: ''
      }
    }
  }
];
