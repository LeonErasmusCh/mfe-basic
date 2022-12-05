'use strict';

/* eslint-disable no-unused-vars */
module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack config
  // Important: return the modified config

  config.plugins.push(
    new options.webpack.container.ModuleFederationPlugin({
      name:"strapi",
      filename: "remoteEntry.js", // remote file name which will used later
      remoteType: "var",
      exposes: { // expose all component here.
        "./Strapi" : "packages/core/admin/admin/src/index.js"
      },
      remotes: {
        remote_app: "remote_app@http://localhost:8080/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    })
  )
  return config
};
