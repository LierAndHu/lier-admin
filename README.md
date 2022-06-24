# lier-admin

ant-design+react 后台管理系统

```shell
# 安装脚手架
 yarn create react-app antd-demo-ts --template typescript

# 启动
yarn start

# 引入antd
yarn add antd

# 引入打包工具craco
yarn add @craco/craco



```

> 替换 package.json scripts

```json
/* package.json */
"scripts": {
-   "start": "react-scripts start",
-   "build": "react-scripts build",
-   "test": "react-scripts test",
+   "start": "craco start",
+   "build": "craco build",
+   "test": "craco test",
}
```

> 然后在项目根目录创建一个 craco.config.js 用于修改默认配置。

```js
const CracoAntDesignPlugin = require('craco-antd')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          '@primary-color': '#1DA57A',
        },
      },
    },
  ],
}
```

> 路由及菜单配置

```shell
# 安装react-router-dom
yarn add  react-router-dom
```

1. 基础路由配置

```jsx
<HashRouter>
  <Routes>
    <Route path='/' element={<div>home page</div>} />
    <Route path='/page1' element={<div>page1</div>} />
    <Route path='/page2' element={<div>page2</div>} />
    <Route path='/page3' element={<div>page3</div>} />
  </Routes>
</HashRouter>
```

> 布局

```jsx
<Layout>
  <Sider>Sider</Sider>
  <Layout>
    <Header>Header</Header>
    <Content>Content</Content>
    <Footer>Footer</Footer>
  </Layout>
</Layout>
```

> > 布局样式

```less
.Layout {
  height: 100vh;
  width: 100vw;
}
```

> 引入图标库

```shell
yarn add @ant-design/icons
```
