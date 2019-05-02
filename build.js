const fs = require('fs');
const path = require("path");
const {runLoaders} = require("loader-runner");

runLoaders({
  resource: path.resolve(__dirname, "edo-blogcard.lit"),
  loaders: [
    require.resolve('lit-loader')
  ]
}, function(err, result) {
  if(err) throw err;
  fs.writeFileSync("dist/edo-blogcard.js", result.result[0]);
});
