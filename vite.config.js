import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
                'resources/css/filament/admin/theme.css',
            ],
            refresh: [
                'resources/views/**',
                'app/Filament/**',
                'routes/**',
            ],
        }),
    ],
    build: {
        outDir: 'public/build',
        emptyOutDir: true,
        manifest: true,
        sourcemap: false,
    },
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
    },
});
