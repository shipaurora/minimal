import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';
import { existsSync } from 'node:fs';

// The Minimal theme, prebuilt (resources/dist/theme.css): run `npm run build:aurora` from
// the app root after changing its CSS. Sites that install it use it as it is.
const resources = fileURLToPath(new URL('./resources', import.meta.url));

// After every build (also each rebuild while watching), copy it to public/ the way
// `php artisan filament:assets` does, so the admin uses it straight away.
const publish = {
    name: 'minimal-publish-theme',
    closeBundle() {
        if (existsSync('artisan')) {
            execSync('php artisan filament:assets', { stdio: 'inherit' });
        }
    },
};

export default defineConfig({
    plugins: [tailwindcss(), publish],
    publicDir: false,
    build: {
        outDir: `${resources}/dist`,
        emptyOutDir: true,
        rollupOptions: {
            input: { theme: `${resources}/css/theme.css` },
            output: { assetFileNames: '[name][extname]' },
        },
    },
});
