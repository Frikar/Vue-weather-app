module.exports = {
  // ...other vue-cli plugin options...
  pwa: {
    name: 'My App',
    themeColor: '#d37a3e',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'src/registerServiceWorker.js'
      // ...other Workbox options...
    },
    manifestOptions: {
      name: 'My App',
      short_name: 'MyApp',
      icons: [
        { src: './img/icons/myicon.png', sizes: '512x512', type: 'image/png' }
      ],
      background_color: '#d3961c'
    }
  }
}
