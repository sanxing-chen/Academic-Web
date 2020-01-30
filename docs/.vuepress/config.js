const glob = require('glob');
let markdownFiles = glob.sync('post/*.md').map(f => '/' + f); 

module.exports = {
    base: '/~sc3hn/',
    head: [
      ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
      search: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/post/index/' },
        { text: 'Note', link: '/note/index/' },
        { text: 'GitHub', link: 'https://github.com/STayinloves' },
      ],
      sidebar: {
        '/post/': markdownFiles
      },
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