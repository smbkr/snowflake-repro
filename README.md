# Snowflake & Webpack issue repro

This repo serves to demonstrate an issue using the "snowflake-sdk" module with
Webpack.

## Steps

- Install dependencies with `yarn`
- Try to build with `yarn build`

## Expected result

It should build successfully

## Actual result

```
ERROR in ./node_modules/when/lib/env.js
Module not found: Error: Can't resolve 'vertx' in '/Users/stuart.baker/Projects/snowflake-repro/node_modules/when/lib'
 @ ./node_modules/when/lib/env.js 32:14-35
 @ ./node_modules/when/lib/decorators/timed.js
 @ ./node_modules/when/when.js
 @ ./node_modules/requestretry/index.js
 @ ./node_modules/snowflake-sdk/lib/http/node.js
 @ ./node_modules/snowflake-sdk/lib/snowflake.js
 @ ./node_modules/snowflake-sdk/index.js
 @ ./src/index.mjs
error Command failed.
```

## Workaround

This issue can be worked around by ignoring the `vertx` module with the
`IgnorePlugin`:

```patch
--- a/webpack.config.js
+++ b/webpack.config.js
@@ -1,4 +1,5 @@
 const path = require("path");
+const { IgnorePlugin } = require("webpack");

 module.exports = {
   mode: "none",
@@ -13,4 +14,5 @@ module.exports = {
     path: path.join(__dirname, ".webpack"),
     filename: "[name].js",
   },
+  plugins: [new IgnorePlugin({ resourceRegExp: /vertx/ })],
 };
```
