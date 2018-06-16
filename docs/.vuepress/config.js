module.exports = {
  title: 'vue press demo',
  description: 'Just playing around',
  base: '/vue-press-demo/',
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'page2', link: '/page2' },
      { text: 'google', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: 'Home',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: 'page2',
        collapsable: false,
        children: [
          '/page2'
        ]
      },
    ]
  }
}