import React from 'react'
import PropTypes from 'prop-types'
import { Form, Row, Col, Input, Button } from 'antd'

const FormItem = Form.Item

const UserSearch = ({
  keyword,
  onSearch,
  onReset,
  form: {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    resetFields,
  },
}) => {
  function handleSubmit (e) {
    e.preventDefault()
    validateFields((errors) => {
      if (errors) {
        return
      }
      onSearch(getFieldsValue())
    })
  }

  function handleReset () {
    resetFields()
    onReset()
  }

  const formItemLayout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  }

  const children = [
    <Row key={1}>
      <Col span={8}>
        <FormItem {...formItemLayout} label="关键字">
          {getFieldDecorator('keyword', {
            initialValue: keyword || '',
          })(
            <Input placeholder="请输入关键字查询" maxLength={20} />
          )}
        </FormItem>
      </Col>
    </Row>,
  ]

  const showCount = 1

  return (
    <Form
      layout="horizontal"
      className="ant-advanced-search-form"
      onSubmit={handleSubmit}
    >
      {children.slice(0, showCount)}
      <Row>
        <Col span={8} style={{ textAlign: '' }}>
          <Col span={19} offset={5}>
            <Button type="primary" htmlType="submit">搜索</Button>
            <Button style={{ marginLeft: 8 }} onClick={handleReset}>
              清空
            </Button>
          </Col>
        </Col>
      </Row>
    </Form>
  )
}

UserSearch.propTypes = {
  keyword: PropTypes.string,
  onSearch: PropTypes.func,
  onReset: PropTypes.func,
}

export default Form.create()(UserSearch)
