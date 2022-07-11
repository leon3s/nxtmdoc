module.exports = {
  swc: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
}
