import { Layout } from 'antd'
import React from 'react'

import './Layout.less'

const { Header, Footer, Sider, Content } = Layout

export interface AdminLayoutProps {
  sider?: React.ReactElement
  header?: React.ReactElement
  content?: React.ReactElement | any
  footer?: React.ReactElement
  className?: string
  style?: React.CSSProperties
  collapsed: boolean
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  sider,
  header,
  content,
  footer,
  className,
  style,
  collapsed,
}) => {
  return (
    <Layout className={`Layout ${className}`} style={style}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        {sider}
      </Sider>
      <Layout>
        <Header>{header}</Header>
        <Content className='content'>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
