import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dirs: ['src/components'],
      // 组件名称包含目录 防止同名组件冲突
      directoryAsNamespace: true,
      // 指定类型声明，为true时 在根目录创建
      dts: 'components.d.ts',
    }),
    ElementPlus(),
    createSvgIconsPlugin({
      // 指定要缓存的图标文件夹
      iconDirs: [path.resolve(process.cwd(), 'src/icons/svg')],
      // 执行icon name的格式
      symbolId: 'icon-[dir]-[name]',
    }),
    viteCompression({
      //gzip压缩
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.', 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/style/index.scss";',
      },
    },
  },
  build: {
    sourcemap: false,
    minify: 'terser',
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 1500,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
        manualChunks(id) {
          //静态资源分拆打包
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    port: 8080,
    cors: true,
    open: false,
    fs: {
      strict: false,
      allow: [],
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
