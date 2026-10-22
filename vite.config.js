import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';

// The Minimal theme, prebuilt (resources/dist/theme.css): after changing its CSS, run
// `npm run build` (with `composer install` done) and commit the result. Sites that install it
// use it as it is.
const resources = fileURLToPath(new URL('./resources', import.meta.url));

export default defineConfig({
    plugins: [tailwindcss()],
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
