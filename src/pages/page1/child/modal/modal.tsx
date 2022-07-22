import { Cascader, Form, Input, Modal } from 'antd'
import { FormInstance } from 'antd/lib/form/Form'
import { ColumnsType } from 'antd/lib/table'
import React from 'react'
import { Select } from 'antd'
import { DataType } from '../../page1'

export interface AdminModalProps {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<boolean>
  columns: ColumnsType<DataType>
  handleOk: (val: any) => void
  handleUpdate: (val: any) => void
  form: FormInstance<any>
  title: string
}

interface cityOptions {
  value: string
  label: string
  children?: cityOptions[]
}

interface TagsOptions {
  value: string
}
const AdminModal: React.FC<AdminModalProps> = ({
  isModalVisible,
  setIsModalVisible,
  handleOk,
  handleUpdate,
  form,
  title,
}) => {
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  const onChange = (value: any) => {
    console.log(value)
  }
  const handleChange = (value: string[]) => {
    console.log(`selected ${value}`)
  }

  const cityOptions: cityOptions[] = [
    {
      value: '贵州',
      label: '贵州',
      children: [
        {
          value: '贵阳市',
          label: '贵阳市',
        },

        {
          value: '铜仁市',
          label: '铜仁市',
        },
        {
          value: '遵义市',
          label: '遵义市',
        },
      ],
    },
    {
      value: '上海',
      label: '上海',
      children: [
        {
          value: '浦东',
          label: '浦东',
        },
      ],
    },
  ]
  const TagsOptions: TagsOptions[] = [
    { value: 'gold' },
    { value: 'lime' },
    { value: 'green' },
    { value: 'cyan' },
  ]

  return (
    <Modal
      title='Basic Modal'
      visible={isModalVisible}
      onOk={() => {
        form?.validateFields().then((res: any) => {
          title === '添加' ? handleOk(res) : handleUpdate(res)
        })
      }}
      onCancel={handleCancel}
    >
      <Form
        name='basic'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        form={form}
      >
        <Form.Item label='id' name='id' hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label='用户名'
          name='name'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='密码'
          name='userpwd'
          rules={[{ required: true, message: 'Please input your userpwd!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label='城市'
          name='address'
          rules={[{ required: true, message: 'Please input your city!' }]}
        >
          <Cascader
            // defaultValue={[]}
            placeholder='请选择城市'
            options={cityOptions}
            onChange={onChange}
          />
        </Form.Item>
        <Form.Item
          label='标签'
          name='tags'
          rules={[{ required: true, message: 'Please input your Tags!' }]}
        >
          <Select
            mode='multiple'
            allowClear
            style={{ width: '100%' }}
            // defaultValue={[]}
            placeholder='请选择标签'
            onChange={handleChange}
            options={TagsOptions}
          >
            {/* {children} */}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AdminModal
