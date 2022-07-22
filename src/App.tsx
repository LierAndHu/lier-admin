import React, { Suspense, useState } from 'react'
import { useRoutes, useNavigate, Navigate } from 'react-router-dom'

import AdminLayout from './component/layout'
import AdminMenu from './component/menu'
import { MenuConfig } from './config/router.config'
import Home from './pages/home'
import Map from './pages/PAGEs/map'
import './App.less'
import {
  AntDesignOutlined,
  PlusCircleOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import Page1 from './pages/page1/page1'
import AdminHeader from './component/header'
import Page2 from './pages/page2'

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
      element: <Page2 />,
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
        {
          label: '地图可视化',
          key: 'map',
          path: '/pages/map',
          icon: <PlusCircleOutlined />,
          onClick: () => navigate('/pages/map'),
          element: <Map />,
        },
      ],
    },
    {
      label: 'antd 组件',
      key: 'antd_components',
      icon: <AntDesignOutlined />,
      children: [
        {
          label: 'Button',
          key: 'Button',
          path: '/antd',
          onClick: () => navigate('/antd'),
        },
        {
          label: 'Icon',
          key: 'Icon',
          path: '/icon',
          onClick: () => navigate('/icon'),
        },
        {
          label: 'Table',
          key: 'Table',
          path: '/table',
          onClick: () => navigate('/table'),
        },
        {
          label: 'Form',
          key: 'Form',
          path: '/form',
          onClick: () => navigate('/form'),
        },
        {
          label: 'Input',
          key: 'Input',
          path: '/input',
          onClick: () => navigate('/input'),
        },
      ],
    },
    {
      label: '未知页',
      key: 'wqgey',
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
