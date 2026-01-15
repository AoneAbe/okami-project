// X投稿データの雛型
// このファイルをコピーして tweetData.js として保存し、実際の投稿内容を記入してください

export const tweetData = [
  {
    type: 'tweet',
    id: 'tweet-1',
    date: '2024.05.27', // 投稿日付
    tweetUrl: 'https://twitter.com/okami_project/status/XXXXXXXXXX', // X投稿のURL

    // 画像がある場合（最大4枚）
    images: [
      'imgs/tweet1-1.jpg',
      'imgs/tweet1-2.jpg',
      // 'imgs/tweet1-3.jpg',
      // 'imgs/tweet1-4.jpg',
    ],

    // 動画がある場合（画像と動画は排他的に使用）
    // videoUrl: 'https://video.twimg.com/ext_tw_video/XXXXX/pu/vid/XXXXX.mp4',

    translations: {
      ja: {
        category: 'X投稿',
        content: 'ここにX投稿の本文を記入してください。\n\n改行も反映されます。\n\n#オオカミプロジェクト #OKAMICARD'
      },
      en: {
        category: 'X Post',
        content: 'Enter the X post content here.\n\nLine breaks will be preserved.\n\n#OkamiProject #OKAMICARD'
      },
      zh: {
        category: 'X帖子',
        content: '在此输入X帖子内容。\n\n换行将被保留。\n\n#狼项目 #狼卡'
      }
    }
  },

  {
    type: 'tweet',
    id: 'tweet-2',
    date: '2024.06.10',
    tweetUrl: 'https://twitter.com/okami_project/status/XXXXXXXXXX',

    // 画像なしの投稿例
    images: [],

    translations: {
      ja: {
        category: 'X投稿',
        content: 'テキストのみの投稿例です。'
      },
      en: {
        category: 'X Post',
        content: 'Example of text-only post.'
      },
      zh: {
        category: 'X帖子',
        content: '纯文本帖子示例。'
      }
    }
  },

  {
    type: 'tweet',
    id: 'tweet-3',
    date: '2024.07.15',
    tweetUrl: 'https://twitter.com/okami_project/status/XXXXXXXXXX',

    // 動画付き投稿例
    images: [],
    videoUrl: 'https://video.twimg.com/ext_tw_video/XXXXX/pu/vid/XXXXX.mp4',

    translations: {
      ja: {
        category: 'X投稿',
        content: '動画付き投稿の例です。'
      },
      en: {
        category: 'X Post',
        content: 'Example of post with video.'
      },
      zh: {
        category: 'X帖子',
        content: '带视频的帖子示例。'
      }
    }
  }
];

/*
使い方：
1. このファイルを tweetData.js としてコピー
2. 実際のX投稿のURLを記入
3. 投稿本文をコピーして translations の各言語に記入
4. 画像がある場合は public/imgs/ に保存して、パスを images 配列に追加
5. 動画がある場合は videoUrl に動画URLを記入（X埋め込み用）

注意：
- images と videoUrl は同時に使用しない
- 画像は最大4枚まで
- 日付は '2024.05.27' 形式で統一
- tweetUrl は必須（X埋め込みに使用）
*/
