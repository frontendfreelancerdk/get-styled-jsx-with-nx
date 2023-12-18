const {composePlugins, withNx} = require('@nx/webpack');
const {withReact} = require('@nx/react');
const {merge} = require("webpack-merge");
// Nx plugins for webpack.
module.exports = composePlugins(
  withNx(),
  withReact({
    stylePreprocessorOptions: ["get-styled-jsx/src/"]
    , extractCss: true
  }), (config) => {

    // Update the webpack config as needed here.
    // e.g. `config.plugins.push(new MyPlugin())`
    config.module.rules = config.module.rules.filter(item => {
      console.log(item);
      if (item.test && ".scss".match(item.test)) {
        return false
      }
      return true;
    })

    return merge(config, {
      module: {
        rules: [
          {
            test: /\.jsx.scss/,
            use: ["babel-loader"],
            exclude: /node_modules/,
          },
          {
            test: /\.jsx\.scss$/,
            use: [

              {
                loader: require("styled-jsx/webpack").loader,
                options: {
                  type: "scoped",
                },
              },
            ],
          }
        ]
      }
    });
  });
