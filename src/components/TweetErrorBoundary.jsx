import React from 'react';

class TweetErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Tweet loading error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      const { tweetUrl } = this.props;
      return (
        <div className="text-center p-8 bg-gray-100 rounded-lg">
          <p className="text-gray-600 mb-2">X投稿を読み込めませんでした</p>
          <p className="text-xs text-gray-500 mb-4">
            {this.state.error?.message || 'エラーが発生しました'}
          </p>
          <a
            href={tweetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-cyan-600 hover:underline text-sm"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Xで見る
          </a>
        </div>
      );
    }

    return this.props.children;
  }
}

export default TweetErrorBoundary;
