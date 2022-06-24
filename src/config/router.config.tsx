import { PlusCircleOutlined } from '@ant-design/icons'
import { createHashHistory } from 'history'

export interface MenuConfig {
  label: string
  key: string
  path: string

  icon?: any
  children?: MenuConfig[]
  element?: any
  onClick?: () => void
}

export default [
  {
    label: 'PAGE1',
    key: '/page1',
    path: '/page1',
    icon: <PlusCircleOutlined />,
    onClick: () => createHashHistory().push('/page1'),
    element: (
      <div onClick={() => createHashHistory().push('/page2')}>page1</div>
    ),
  },
  {
    label: 'PAGE2',
    key: '/page2',
    path: '/page2',
    icon: <PlusCircleOutlined />,
    onClick: () => createHashHistory().push('/page2'),
    element: (
      <div onClick={() => createHashHistory().push('/page1')}>page2</div>
    ),
  },
  {
    label: 'PAGEs',
    key: '/pages',
    icon: <PlusCircleOutlined />,
    children: [
      {
        label: 'PAGE-x',
        key: '/page-x',
        path: '/page-x',
        element: <div>xxx</div>,
        icon: <PlusCircleOutlined />,
        onClick: () => createHashHistory().push('/page-x'),
      },
    ],
  },
] as MenuConfig[]
