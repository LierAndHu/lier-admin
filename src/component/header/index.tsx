import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons'
import { Space } from 'antd'
import React, { useState } from 'react'
import AdminBreadcrumb from './breadcrumb'
import './header.less'

export interface AdminHeaderProps {
  collapsed: boolean
  setCollapsed: React.Dispatch<boolean>
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <div className='header-box'>
      <Space>
        {React.createElement(
          collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          }
        )}
        <AdminBreadcrumb />
      </Space>
    </div>
  )
}

export default AdminHeader
