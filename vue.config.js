// vue.config.js
module.exports = {
    pwa: {
        name: 'My App',
        themeColor: '#4DBA87',
        msTileColor: '#000000',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'black',
    
        // 配置 workbox 插件
        // workboxPluginMode: 'InjectManifest',
        workboxOptions: {
          skipWaiting: true,
          clientsClaim: true,
          // InjectManifest 模式下 swSrc 是必填的。
          // swSrc: 'dev/sw.js',
          // ...其它 Workbox 选项...
        }
    }
}