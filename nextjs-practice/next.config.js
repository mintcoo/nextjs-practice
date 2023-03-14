/** @type {import('next').NextConfig} */
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        // 리다이렉트 주소 뒤에*붙이면 id/123123/test/1123 이런식으로해도 자동으로 매칭
        // 리다이렉트는 주소가 바뀌는게 딱 보인다
        source: "/contact/:id*",
        destination: "/new-contact/:id*",
        permanent: false,
      }
    ]
  },
  async rewrites() {
    return [
      {
        // 리라이트는 주소가 바뀌는게 안보이고 리다이렉트해줌
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
      {
        // 디테일 페이지를 위한
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`,
      }
    ]
  }
}

module.exports = nextConfig
