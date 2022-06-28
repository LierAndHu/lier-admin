import { Breadcrumb } from 'antd'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const AdminBreadcrumb: React.FC = () => {
  const breadcrumbNameMap: Record<string, string> = {
    '/': '首页',
    '/page1': '角色权限',
    '/page2': 'PAGE2',
    '/pages': '订单管理',
    '/pages/page-x': '订单列表',
  }
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    )
  })
  const breadcrumbItems = [
    <Breadcrumb.Item key='home'>
      <Link to='/'>首页</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems)
  return (
    <Breadcrumb style={{ backgroundColor: '#fff' }} separator='/'>
      {breadcrumbItems}
    </Breadcrumb>
  )
}

export default AdminBreadcrumb
