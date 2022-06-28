import React, { Suspense, useEffect, useState } from 'react'
import {
  useRoutes,
  useNavigate,
  Navigate,
  Link,
  useLocation,
  To,
} from 'react-router-dom'

import AdminLayout from './component/layout'
import AdminMenu from './component/menu'
import { MenuConfig } from './config/router.config'
import './App.less'
import Home from './pages/home'
import { PlusCircleOutlined, VideoCameraOutlined } from '@ant-design/icons'
import Page1 from './pages/page1'
import AdminHeader from './component/header'

const App: React.FC = () => {
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const data: MenuConfig[] = [
    {
      label: '首页',
      key: 'home',
      path: '/',
      icon: <PlusCircleOutlined />,
      onClick: (item: any) => navigate('/'),
      element: <Home />,
    },
    {
      label: '角色权限',
      key: 'page1',
      path: '/page1',
      icon: <PlusCircleOutlined />,
      onClick: (item: any) => navigate('/page1'),
      element: <Page1 />,
    },
    {
      label: 'PAGE2',
      key: 'page2',
      path: '/page2',
      icon: <PlusCircleOutlined />,
      onClick: () => navigate('/page2'),
      element: <div>page2</div>,
    },
    {
      label: 'PAGEs',
      key: '/pages',
      path: '/pages',
      icon: <VideoCameraOutlined />,
      children: [
        {
          label: 'PAGE-x',
          key: 'page-x',
          path: '/pages/page-x',
          icon: <PlusCircleOutlined />,
          onClick: () => navigate('/pages/page-x'),
          element: <div>xxx</div>,
        },
      ],
    },
    {
      label: '未知页',
      key: '*',
      path: '*',
      icon: <PlusCircleOutlined />,
      onClick: () => navigate('*'),
      element: <Navigate to='/' />,
    },
  ]
  const Routers = () => {
    return useRoutes(data)
  }
  const content = <Routers />
  return (
    <div className='App'>
      <Suspense fallback={<div>loading....</div>}>
        <AdminLayout
          header={
            <AdminHeader collapsed={collapsed} setCollapsed={setCollapsed} />
          }
          sider={<AdminMenu menuItem={data} />}
          content={content}
          collapsed={collapsed}
        />
      </Suspense>
    </div>
  )
}

export default App
