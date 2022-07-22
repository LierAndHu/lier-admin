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

const { userlist } = Mock.mock({
  'userlist|10': [
    {
      'id|+1': 1,
      key: '@increment',

      name: '@cname',
      userpwd: /\d{5,10}/,
      address: '@city(true)',
      'tags|1-4': [' @cword(3,5) '],
      date: '@date()',
    },
  ],
})
Mock.mock('/api/user', 'post', () => {
  return {
    status: 200,
    message: '获取数据成功',
    list: userlist,
  }
})
Mock.mock('/api/user/add', 'post', (options) => {
  const body = JSON.parse(options.body).data
  console.log('body', body)
  userlist.push(
    Mock.mock({
      id: '@increment()',
      key: '@increment()',
      name: body.name,
      userpwd: body.userpwd,
      // 'tags|1-4': [' @cword(3,5) '],
      tags: body.tags,
      address: body.address.join(' '),
      // address: '@city(true)',
    })
  )
  console.log('userlist', userlist)
  return {
    status: 200,
    message: '获取数据成功',
    list: userlist,
  }
})
Mock.mock('/api/user/del', 'post', (options) => {
  const body = JSON.parse(options.body)
  const index = userlist.findIndex((item) => {
    return item.id === body.id
  })
  userlist.splice(index, 1)
  console.log('options', index)
  return {
    status: 200,
    message: '获取数据成功',
    list: userlist,
  }
})
Mock.mock('/api/user/update', 'post', (options) => {
  const body = JSON.parse(options.body).data

  // 下面的逻辑需要修改，返回的数据应该是改动后的当前数据，具体你要看mockjs怎么用
  const newData = Mock.mock({
    id: body.id,
    key: body.id,
    name: body.name,
    userpwd: body.userpwd,
    tags: body.tags,
    address: body.address.join(' '),
  })

  console.log('newData', newData)
  userlist[body.id - 1] = newData
  console.log(userlist)
  return {
    status: 200,
    message: '获取数据成功',
    list: userlist,
  }
})
