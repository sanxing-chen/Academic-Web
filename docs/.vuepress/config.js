module.exports = {
    base: '/~sc3hn/',
    head: [
      ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      search: false,
      navbar: false,
      sidebar: false,
      lastUpdated: 'Last Updated'
    },
    plugins: [
      [ 
        '@vuepress/google-analytics',
        {
          'ga': 'UA-76805514-4' // UA-00000000-0
        }
      ]  
    ] 
  }