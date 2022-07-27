const { description } = require('../../package')

module.exports = {
  title: 'Algorithms and Structures documentation',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Algorithms',
        link: '/algorithms/',
      },
      {
        text: 'Structures',
        link: '/structures/'
      },
    ],
    sidebar: {
      '/algorithms/': [
        {
          title: 'Linear Search',
          collapsable: true, // true by default
          children: [
            'linear_search',
          ]
        },
        {
          title: 'Binary Search',
          children: [
            'binary_search',
          ]
        },
        {
          title: 'Selection Sort',
          children: [
            'selection_sort',
          ]
        },
        {
          title: "Bubble Sort",
          children: [
            "bubble_sort",
          ]
        },
        {
          title: "Quick Sort",
          children: [
            "quick_sort",
          ]
        },
        {
          title: "Graph Breadth First Search",
          children: [
            "graph_breadth_first_search",
          ]
        },
        {
          title: "Dijkstra's algorithm",
          children: [
            "dijkstras_algorithm",
          ]
        },
        {
          title: "Tree Search",
          children: [
            "tree_search",
          ]
        },
        {
          title: "Memorization",
          children: [
            "memorization",
          ]
        }

      ],
      '/structures/': [
        {
          title: 'Linked List',
          children: [
            'linked_list',
          ]
        },
        {
          title: 'Binary Tree',
          children: [
            'binary_tree',
          ]
        },
        {
          title: 'Map',
          children: [
            'map',
          ]
        },
        {
          title: 'Set',
          children: [
            'set',
          ]
        }
      ]
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
