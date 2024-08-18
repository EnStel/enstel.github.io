import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';

export default defineUserConfig({
  base: "/",
  

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  plugins: [
    googleAnalyticsPlugin({
      // 配置项
      id: "G-4J93QM1PBG",      // 配置项
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});