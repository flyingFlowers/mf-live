/**
 * Webpack configuration file
 **/
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const postcssCssNext = require('postcss-cssnext');
const postcssBR = require('postcss-browser-reporter');
const postcssR = require('postcss-reporter');

const isProd = process.env.NODE_ENV === 'production';

function HashBundlePlugin() {}

HashBundlePlugin.prototype.apply = (compiler) => {
  compiler.plugin('done', (statsData) => {
    const stats = statsData.toJson();

    if (!stats.errors.length) {
      const htmlFileName = 'index.html';
      const html = fs.readFileSync(path.join(__dirname, htmlFileName), 'utf8');
      const htmlOutput = html.replace(/\/build\/.?main\.js/, `${'/build/'}${stats.hash}${'.main.js'}`);
      const vendorOutput = htmlOutput.replace(/\/build\/.?vendor\.js/, `${'/build/'}${stats.hash}${'.vendor.js'}`);

      fs.writeFileSync(path.join(__dirname, htmlFileName), vendorOutput);
      // fs.writeFileSync(path.join(__dirname, htmlFileName), vendorOutput);
    }
  });
};

const config = {
  entry: [path.resolve(__dirname, 'src')],
  output: {
    filename: `${isProd ? '[hash].' : ''}[name].js`,
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    chunkFilename: '[chunkhash:8].[name].chunk.js',
  },
  resolve: {
    extensions: ['.jsx', '.js', '.css', '.json', 'scss'],
    modules: [
      path.resolve(__dirname, 'src'),
      path.resolve(__dirname, 'assets'),
      path.resolve(__dirname, 'node_modules'),
    ],
  },
  context: __dirname,
  module: {
    rules: [{
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]!postcss-loader',
      exclude: /node_modules\/c3/,
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader',
      include: /node_modules\/c3/,
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&minetype=application/font-woff&name=[hash].[ext]',
    }, {
      test: /\.(ttf|eot|svg|jpg|gif|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader?name=[hash].[ext]',
    }, {
      test: /\.(js|jsx)$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
    }],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
          // 该配置假定你引入的 vendor 存在于 node_modules 目录中
        return module.context && module.context.indexOf('node_modules') !== -1;
      },
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          postcssImport({
            addDependencyTo: webpack,
          }),
          postcssCssNext(),
          postcssBR(),
          postcssR(),
        ],
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
      API_HOST: JSON.stringify(process.env.API_HOST || 'http://localhost:3000'),
    }),
  ],
  devServer: {
    contentBase: __dirname,
    host: 'localhost',
    port: Number(process.env.PORT) || 8080,
    historyApiFallback: true,
    stats: {
      chunks: false,
    },
  },
};

if (!isProd) {
  config.devtool = 'eval-source-map';
  config.devServer.hot = true;

  config.entry = [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}`,
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve(__dirname, 'src'),
  ];

  config.plugins.push(new webpack.HotModuleReplacementPlugin());
  config.plugins.push(new webpack.NamedModulesPlugin());
} else {
  config.plugins.push(new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
  }));

  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
    sourceMap: false,
  }));

  config.plugins.push(new HashBundlePlugin());
}

module.exports = config;
