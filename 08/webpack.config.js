module.exports = {
  // エントリーポイント
  entry: './src/main.js',

  // ファイルの出力設定
  output: {
    // path: 'dist',
    filename: "main.js"
  },
  
  // localhost
  devServer: {
    static: "dist",
    open: true
  },

  mode: "development",

  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      }
    ]
  },
  // import 文の拡張子の解決
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  }

};

