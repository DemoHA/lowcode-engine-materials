/* eslint-env node */
const { defineConfig } = require('@vue/cli-service');
const { defineLowCodePluginOption } = require('@knxcloud/vue-cli-plugin-lowcode');

module.exports = defineConfig({
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  pluginOptions: {
    lowcode: defineLowCodePluginOption({
      assetsConfig: {
        builtinAssets: {
          packages: [
            {
              package: 'iconfont-icons',
              urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
            },
          ],
          components: [],
        },
      },
    }),
  },
});
