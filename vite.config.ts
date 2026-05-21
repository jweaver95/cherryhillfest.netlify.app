import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// Skip files that would cause publish failures:
// - macOS " copy" duplicates (filesystem-locked, cause EAGAIN on copyFileSync)
// - Files with URL-unsafe characters: # & * ,
const isUnsafePath = (p: string) => {
  const basename = p.split('/').pop() ?? '';
  return / copy(\.|$)/.test(basename) || /[#&*,]/.test(basename);
};

const _copyFileSync = fs.copyFileSync.bind(fs);
(fs as any).copyFileSync = (src: string, dest: string, flags?: number) => {
  if (typeof src === 'string' && isUnsafePath(src)) return;
  return _copyFileSync(src, dest, flags as number);
};

const _cpSync = (fs as any).cpSync?.bind(fs);
if (_cpSync) {
  (fs as any).cpSync = (src: string, dest: string, opts?: object) => {
    if (typeof src === 'string' && isUnsafePath(src)) return;
    return _cpSync(src, dest, opts);
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
