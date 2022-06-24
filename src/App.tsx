import React, { lazy, Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Routes, useRoutes } from 'react-router-dom'

import AdminLayout from './component/layout'
import AdminMenu from './component/menu'
import routerConfig from './config/router.config'
import './App.less'

const App: React.FC = () => {
  const Routers = () => {
    return useRoutes(routerConfig)
  }

  const content = (
    <HashRouter>
      <Routes>
        <Route path='/' element={<div>home page</div>} />
      </Routes>
      <Routers />
    </HashRouter>
  )
  return (
    <div className='App'>
      <Suspense fallback={<div>loading....</div>}>
        <AdminLayout
          sider={<AdminMenu menuItem={routerConfig} />}
          content={content}
        />
      </Suspense>
    </div>
  )
}

export default App
