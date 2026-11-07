import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Automatically redirect /portfolio to /portfolio/ in dev server
function redirectTrailingSlash() {
	return {
		name: "redirect-trailing-slash",
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				const url = req.url || "";
				const [pathname, search] = url.split("?");
				if (pathname === "/portfolio") {
					res.writeHead(301, {
						Location: "/portfolio/" + (search ? `?${search}` : ""),
					});
					res.end();
					return;
				}
				next();
			});
		},
	};
}

export default defineConfig({
	base: "/portfolio/",
	plugins: [redirectTrailingSlash(), react()],
	build: {
		outDir: "build",
		emptyOutDir: true,
	},
});
