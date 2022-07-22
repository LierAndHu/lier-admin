import React, { useEffect, useState } from 'react'
import { Button, Form, Space, Table, Tag } from 'antd'
import type { ColumnsType } from 'antd/lib/table'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { SizeType } from 'antd/lib/config-provider/SizeContext'
import Search from 'antd/lib/input/Search'

import axios from 'axios'
import { useForm } from 'antd/lib/form/Form'
import AdminModal from './child/modal/modal'

export interface DataType {
  id: number
  name: string
  key: number
  address: string
  tags: string[]
}

const Page1 = () => {
  const [size, setSize] = useState<SizeType>('large')
  const [isModalVisible, setIsModalVisible] = useState(false as boolean)
  const [data, setData] = useState([] as DataType[])
  const [loading, setLoading] = useState(true as boolean)
  const [title, setTitle] = useState('' as string)
  const [form] = Form.useForm()

  useEffect(() => {
    axios.post('/api/user').then((res) => {
      console.log(res.data)

      let data = res.data.list
      setData(data)
      setLoading(false)
    })
  }, [])
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a>{text}</a>,
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
            onClick={() => {
              // 把原本的字符串通过处理成字符串数组后赋值给address，但是这里是ts语法，直接赋值类型不匹配，所以要通过这种写法
              //  record.address = record.address.split(' ') // 这种写法会报错，字符串数组不能赋值给字符串
              form.setFieldsValue({
                ...record,
                address: record.address.split(' '),
              })
              setIsModalVisible(true)
              setTitle('修改')
            }}
          />
          <Button
            type='primary'
            shape='circle'
            icon={<DeleteOutlined />}
            size={size}
            danger
            onClick={() => {
              console.log(record)
              let id = record.id
              axios.post('/api/user/del', { id }).then((res) => {
                console.log(res)

                let data = res.data.list
                setData(data)
              })
            }}
          />
        </Space>
      ),
    },
  ]

  const showModal = () => {
    form.resetFields()
    setIsModalVisible(true)
    setTitle('添加')
  }
  const handleOk = (val: any) => {
    setIsModalVisible(false)
    axios.post('/api/user/add', { data: val }).then((res) => {
      let data = res.data.list
      setData(data)
    })
  }
  const handleUpdate = (val: any) => {
    setIsModalVisible(false)
    axios.post('/api/user/update', { data: val }).then((res) => {
      let data = res.data.list
      setData(data)
    })
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
        <Button onClick={() => {}}>asd</Button>
        <Search
          placeholder='请输入搜索内容'
          onSearch={() => console.log('搜索成功')}
          enterButton
          size={size}
        />
      </Space>
      <Table
        loading={loading}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 6 }}
      />
      <AdminModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        columns={columns}
        handleOk={handleOk}
        handleUpdate={handleUpdate}
        form={form}
        title={title}
      />
    </div>
  )
}

export default Page1
