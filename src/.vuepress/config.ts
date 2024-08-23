import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { viteBundler } from '@vuepress/bundler-vite'
// 如果 '@vuepress/bundler-vite' 不存在或未安装，应从配置中移除相关的引用

export default defineUserConfig({
  base: "/",
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "谜のHOME",
  description: "一个小家",

  theme,

  plugins: [
    googleAnalyticsPlugin({
      id: "G-4J93QM1PBG",
    }),
  ],

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  
});



