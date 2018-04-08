import React from 'react'
import PropTypes from 'prop-types'
import {
  Form, Row, Col, Input,
  Modal,
} from 'antd'

const FormItem = Form.Item

const RoleModal = ({
  item = {},
  onOk,
  visible,
  onCancel,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  },
}) => {
  function handleOk () {
    validateFields((errors) => {
      if (errors) {
        return
      }
      const data = { ...getFieldsValue() }
      onOk(data)
    })
  }

  const modalOpts = {
    title: '角色',
    visible,
    onOk: handleOk,
    onCancel,
    width: 720,
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 15 },
  }

  const config = {
    rules: [{ type: 'string', required: true, message: '不能为空' }],
  }

  return (
    <Modal {...modalOpts}>
      <Form>
        <Row>
          <Col span={24}>
            <FormItem {...formItemLayout} label="key">
              {getFieldDecorator('key', {
                ...config,
                initialValue: item.key,
              })(
                <Input placeholder="请输入角色 key" disabled={!!item.key} />
              )}
            </FormItem>
          </Col>
          <Col span={24}>
            <FormItem {...formItemLayout} label="名称">
              {getFieldDecorator('name', {
                ...config,
                initialValue: item.name,
              })(
                <Input placeholder="请输入角色名称" />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    </Modal>
  )
}

RoleModal.propsTypes = {
  item: PropTypes.object,
  visible: PropTypes.bool,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Form.create()(RoleModal)
