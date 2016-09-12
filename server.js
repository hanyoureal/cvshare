const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

function webpackInit() {
  const config = require('./webpack.config');
  const PORT = process.env.UI_PORT;
  const DOMAIN = process.env.UI_DOMAIN;

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
  }).listen(PORT, DOMAIN, (err, result) => {
    if (err) {
      console.log(err);
    }

    console.log(`Listening at ${DOMAIN}:${PORT}`);
  });
}

export default webpackInit;
