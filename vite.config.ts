import dtsPlugin from "vite-plugin-dts";
import reactPlugin from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactPlugin(), dtsPlugin({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "plankton",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          "react": "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
