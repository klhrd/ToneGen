import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './', // <--- 務必加入這行，確保資源路徑正確
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
    plugins: [react()],
    // 既然沒用到 API，下方的 define 區塊可以保留也可以刪除
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
  };
});
