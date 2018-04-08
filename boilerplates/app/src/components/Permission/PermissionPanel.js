import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

const PermissionPanel = ({
  onAdd,
}) => {
  return (
    <Button
      type="primary"
      onClick={onAdd}
      size="large"
      style={{ marginBottom: '15px' }}
    >
      创建权限
    </Button>
  )
}

PermissionPanel.propTypes = {
  onAdd: PropTypes.func,
}

export default PermissionPanel
