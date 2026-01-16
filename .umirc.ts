import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'pnpm',
  // mako: {}
  utoopack: {
    module: {
      rules: {
        '*.mp4': {
          loaders: [
            {
              loader: require.resolve('@umijs/bundler-webpack/compiled/url-loader'),
            }
          ],
          as: '*.js'
        }
      }
    }
  }
});
