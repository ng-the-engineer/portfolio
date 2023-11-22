/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    HOST: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb://127.0.0.1:27017/portfolio-db",
    DB_URL: "",
  },
};

module.exports = nextConfig;
