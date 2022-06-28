import { Button, Checkbox, Form, Input, Modal, Space } from 'antd'
import { ColumnsType } from 'antd/lib/table'
import React, { useState } from 'react'
import { DataType } from '../..'
export interface AdminModalProps {
  isModalVisible: boolean
  setIsModalVisible: React.Dispatch<boolean>
  columns: ColumnsType<DataType>
}

const AdminModal: React.FC<AdminModalProps> = ({
  isModalVisible,
  setIsModalVisible,
}) => {
  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <Modal
      title='Basic Modal'
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form name='basic' labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
        <Form.Item
          label='Username'
          name='username'
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label='Password'
          name='password'
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AdminModal
