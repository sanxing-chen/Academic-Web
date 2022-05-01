const glob = require('glob');
let enMarkdownFiles = glob.sync('post/en/*.md').map(f => '/' + f); 
let zhMarkdownFiles = glob.sync('post/zh/*.md').map(f => '/' + f); 

module.exports = {
    base: '/',
    head: [
      ['link', { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
      ['script', { src: 'https://use.typekit.net/tgy5tlj.js' }],
      ['script', {}, 'try{Typekit.load();}catch(e){console.log(e)}'],
    ],
    themeConfig: {
      search: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Blog', link: '/post/index/' },
        { text: 'GitHub', link: 'https://github.com/sanxing-chen' },
      ],
      sidebar: [
        {
          title: 'EN',
          path: '/post/index/',
          collapsable: false,
          children: enMarkdownFiles
        },
        {
          title: '中文',
          path: '/post/index/',
          children: zhMarkdownFiles
        }
      ],
      lastUpdated: 'Last Updated',
      smoothScroll: true
    },
    plugins: [
      [ 
        '@vuepress/google-analytics',
        {
          'ga': 'UA-76805514-4' // UA-00000000-0
        }
      ]  
    ],
    markdown: {
      extendMarkdown: md => {
        md.use(require("markdown-it-footnote"));
        }
    }
  }