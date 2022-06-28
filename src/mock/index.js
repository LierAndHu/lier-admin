var Mock = require('mockjs')

Mock.setup({
  timeout: 1000,
})

Mock.mock('/api/banner', {
  username: 'jeff',
  userpwd: '123',
  sex: '男',
  special: '帅',
  date: '@datetime',
  'score|1-800': 800,
  'rank|1-100': 100,
  name: '@cname',
  'list|1-10': [
    {
      'id|+1': 10,
      'num|20-30': 30,
    },
  ],
  address: '@url',
  img: '@image',
  email: '@email',
  text: Mock.Random.cword(5, 20),
})

Mock.mock('/api/user', {
  'list|10': [
    {
      'id|+1': 0,

      username: '@cname',
      userpwd: /\d{5,10}/,
      address: '@address',
      tags: '@string @string',
    },
  ],
})
