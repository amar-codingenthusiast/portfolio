import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Transform CommonJS require() for static assets to Vite-compatible new URL(...)
function requireTransform() {
	return {
		name: "require-transform",
		enforce: "pre",
		transform(code, id) {
			if (!id.match(/\.jsx$/) || id.includes("node_modules")) {
				return null;
			}
			if (!code.includes("require(")) {
				return null;
			}
			const transformed = code.replace(
				/require\((['"`])(.*?\.(?:png|jpe?g|svg|gif|webp|mp4|webm|ogg|pdf))(['"`])\)/g,
				"new URL($1$2$3, import.meta.url).href"
			);
			return {
				code: transformed,
				map: null,
			};
		},
	};
}

export default defineConfig({
	base: "/portfolio/",
	plugins: [requireTransform(), react()],
	build: {
		outDir: "build",
		emptyOutDir: true,
	},
});
