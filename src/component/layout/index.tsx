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
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  sider,
  header,
  content,
  footer,
  className,
  style,
}) => {
  return (
    <Layout className={`Layout ${className}`} style={style}>
      <Sider>{sider}</Sider>
      <Layout>
        <Header>{header}</Header>
        <Content>{content}</Content>
        <Footer>{footer}</Footer>
      </Layout>
    </Layout>
  )
}

export default AdminLayout
