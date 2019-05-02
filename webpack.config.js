const path = require("path");

module.exports = {
  mode: "none",
  entry: "./edo-blogcard.lit",
  output: {
    path: path.resolve(".", 'dist'),
    filename: "edo-blogcard.bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.lit$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      browsers: ["safari 11"]
                    }
                  }
                ]
              ]
            }
          },
          {
            loader: "lit-loader"
          }
        ]
      }
    ]
  }
};
