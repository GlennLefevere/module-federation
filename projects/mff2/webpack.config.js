const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mff2"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      // For remotes (please adjust)
      name: "mff2",
      filename: "remoteEntry.js",
      exposes: {
        './Module': './projects/mff2/src/features/news/news.module.ts',
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mff1": "mff1@http://localhost:4201/remoteEntry.js",

      // },

      shared: {
        "@angular/core": {singleton: true},
        "@angular/cli": {singleton: true},
        "@angular/common": {singleton: true},
        "@angular/common/http": {singleton: true},
        "@angular/router": {singleton: true},
        "@ngrx/store": {singleton: true},
        "@ngrx/effects": {singleton: true},
        "@ngrx/store-devtools": {singleton: true},
        "@liantis-ds/styling": {singleton: true},
        "@liantis-ds/webcomponents": {singleton: true},

        ...sharedMappings.getDescriptors()
      }

    }),
    sharedMappings.getPlugin(),
  ],
};
