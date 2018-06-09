const stealTools = require("steal-tools");

const buildPromise = stealTools.build({
  config: __dirname + "/package.json!npm"
}, {
  minify: false
});
