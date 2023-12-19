/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'higden registry',
    description: 'the very non-offcical registry.',
    icon: '/img/4876865.svg',
    listUrl: 'https://higden.github.io/',
    contactUrl: 'https://github.com/higden/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
