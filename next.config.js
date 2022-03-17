/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  distDir: 'src',
 
} 
module.exports = nextConfig,

{
  "presets": ["next/babel"],
    "plugins": [["styled-components", { "ssr": true }]]
}



// const withTM = require('next-transpile-modules')([
//   '@mui/material',
//   '@mui/system',
//   '@mui/icons-material', // If @mui/icons-material is being used
// ])

// module.exports = withTM({
//   webpack: (config) => {
//     config.resolve.alias = {
//       ...config.resolve.alias,
//       '@mui/styled-engine': '@mui/styled-engine-sc',
//     };
//     return config;
//   }

// })
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};