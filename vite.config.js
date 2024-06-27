import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: "autoUpdate",
            includeAssets: [
                "favicon.svg",
                "favicon.ico",
                "robots.txt",
                "apple-touch-icon.png",
            ],
            manifest: {
                name: "MyShop",
                short_name: "MyShop",
                description: "An e-commerce application",
                theme_color: "#ffffff",
                icons: [
                    {
                        src: "logo192.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "logo512.png",
                        sizes: "512x512",
                        type: "image/png",
                        purpose: "any",
                    },
                    {
                        src: "maskable_icon.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                ],
                start_url: "/",
                display: "standalone",
                background_color: "#ffffff",
            },
        }),
    ],
});
