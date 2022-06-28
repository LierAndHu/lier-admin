import React, { useState } from 'react'
import { Button, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import Search from 'antd/lib/input/Search'
import AdminModal from './child/modal'
import axios from 'axios'

export interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
}

const Page1 = () => {
  const [size, setSize] = useState<SizeType>('large')
  const [isModalVisible, setIsModalVisible] = useState(false as boolean)

  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      ),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button
            type='primary'
            shape='circle'
            icon={<EditOutlined />}
            size={size}
          />
          <Button
            type='primary'
            shape='circle'
            icon={<DeleteOutlined />}
            size={size}
            danger
          />
        </Space>
      ),
    },
  ]

  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ]
  const showModal = () => {
    setIsModalVisible(true)
  }

  return (
    <div>
      <h1>page1</h1>

      <Space wrap>
        <Button
          type='primary'
          icon={<EditOutlined />}
          size={size}
          onClick={showModal}
        >
          添加
        </Button>
        <Button
          onClick={() => {
            axios.get('/api/user').then((res) => {
              console.log(res.data)
            })
          }}
        >
          asd
        </Button>
        <Search
          placeholder='请输入搜索内容'
          onSearch={() => console.log('搜索成功')}
          enterButton
          size={size}
        />
      </Space>
      <Table columns={columns} dataSource={data} />
      <AdminModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        columns={columns}
      />
    </div>
  )
}

export default Page1
