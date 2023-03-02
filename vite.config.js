import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { getThemeVariables } from "antd/dist/theme";
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({ 
      libList: [ 
        { 
          libName: "antd-mobile", 
          libDirectory: "es/components", 
          style:(name) => `antd-mobile/es/components/${name}`, 
        }, 
        { 
          libName: "antd", 
          libDirectory: "es", 
          style: (name) => `antd/es/${name}/style`, 
        }, 
      ], 
    }),
    // vitePluginImp({
    //   libList: [
    //     {
    //       libName: "antd",
    //       style: (name) => `antd/es/${name}/style`,
    //     },
    //     {
    //       libName: "antd-mobile",
    //       style: (name) => `antd-mobile/es/components/${name}`,
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: [
      // { find: '@', replacement: path.resolve(__dirname, 'src') },
      // fix less import by: @import ~
      // https://github.com/vitejs/vite/issues/2185#issuecomment-784637827
      { find: /^~/, replacement: "" },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: { 'primary-color': '#13c2c2' },
        modifyVars: getThemeVariables({
          // dark: true,
          compact: true,
        }),
        javascriptEnabled: true,
      },
    },
  },
});
