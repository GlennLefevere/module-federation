const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mff1"
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
   new ModuleFederationPlugin({

        // For remotes (please adjust)
        // name: "mff1",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './projects/mff1/src/app/app.component.ts',
        // },

        // For hosts (please adjust)
        remotes: {
             "mff2": "mff2@http://localhost:4202/remoteEntry.js",
        },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true },
          "@angular/common": { singleton: true, strictVersion: true },
          "@angular/common/http": { singleton: true, strictVersion: true },
          "@angular/router": { singleton: true, strictVersion: true },
          "@ngrx/store": { singleton: true, strictVersion: true },
          "@ngrx/effects": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }

    }),
    sharedMappings.getPlugin(),
  ],
};
