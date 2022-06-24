import { Menu } from 'antd'
import { ItemType } from 'antd/lib/menu/hooks/useItems'
import React from 'react'

import './menu.less'

export interface AdminMenuProps {
  menuItem?: ItemType[]
}
const AdminMenu: React.FC<AdminMenuProps> = ({ menuItem }) => {
  return <Menu items={menuItem} mode='inline' className='AdminMenu' />
}

export default AdminMenu
