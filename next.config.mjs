/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",

  // Отключаем только если уверены — лучше чинить ошибки
  eslint: {
    ignoreDuringBuilds: true, // ⚠️ временно, для CI лучше включить
  },
  typescript: {
    ignoreBuildErrors: true, // ⚠️ то же самое
  },

  experimental: {
    optimizePackageImports: [
      'lucide-react',
      'class-variance-authority',
      'clsx',
      'tailwind-merge'
    ],
    // "loose" — ок для лендинга (1–2 CSS-файла)
    cssChunking: false,
  },

  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Убираем nodemailer из клиента (если используется только на сервере)
      config.externals = {
        ...config.externals,
        'nodemailer': 'nodemailer',
      };

      // 🔥 КЛЮЧЕВОЕ: НЕ объединяем всё в один чанк!
      // Сохраняем код-сплиттинг для dynamic-секций
      config.optimization = {
        ...config.optimization,
        runtimeChunk: 'single', // ← выносим runtime в отдельный маленький файл
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            // Группа для node_modules — редко меняется → лучше кэшируется
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
            // Остальное (твой код) — в main или по dynamic-чанкам
            default: {
              minChunks: 2,
              priority: -10,
              reuseExistingChunk: true,
            },
          },
        },
        minimize: true,
        concatenateModules: true,
      };
    }
    return config;
  },

  // Эти настройки не влияют при output: "export", но оставим
  compress: true,
  poweredByHeader: false,
  generateEtags: false,

  // Для лендинга — можно включить Strict Mode (не влияет на прод)
  reactStrictMode: true,

  images: {
    unoptimized: true, // обязательно при export
  },

  trailingSlash: true,
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
