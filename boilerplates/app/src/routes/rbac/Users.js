import React from 'react'
import PropTypes from 'prop-types'
import { routerRedux } from 'dva/router'
import { connect } from 'dva'

import UserList from '../../components/User/UserList'
import UserSearch from '../../components/User/UserSearch'
import UserModalGrant from '../../components/User/UserModalGrant'
import UserModal from '../../components/User/UserModal'

function Users ({ dispatch, users, auth }) {
  const {
    list,
    keyword,
    expand,
    total,
    loading,
    current,
    currentItem,
    modalVisible,
    modalType,
    modalGrantVisible,
  } = users

  const currentUser = auth.user

  const userListProps = {
    total,
    current,
    loading,
    currentUser,
    dataSource: list,
    onPageChange (page) {
      dispatch(
        routerRedux.push({
          pathname: '/user',
          query: { keyword, page },
        }),
      )
    },
    onEdit (user) {
      dispatch({
        type: 'users/showModal',
        payload: {
          modalType: 'update',
          currentItem: user,
        },
      })
    },
    onDeny (id, enable) {
      dispatch({
        type: 'users/deny',
        payload: {
          id: id,
          enable: enable,
        },
      })
    },
    onGrant (item) {
      dispatch({
        type: 'users/showModalGrant',
        payload: {
          currentItem: item,
        },
      })
    },
  }

  const userSearchProps = {
    keyword,
    expand,
    onExpand () {
      dispatch({
        type: 'users/collapseExpand',
        payload: {
          expand: !expand,
        },
      })
    },

    onSearch (fieldsValue) {
      dispatch(
        routerRedux.push({
          pathname: '/user',
          query: { page: 1, ...fieldsValue },
        }),
      )
    },

    onReset () {
      dispatch({
        type: 'users/updateQueryKey',
        payload: {
          keyword: '',
        },
      })
    },
  }

  const userModalProps = {
    item: modalType === 'create' ? {} : currentItem,
    type: modalType,
    visible: modalVisible,
    onOk (data) {
      dispatch({
        type: `users/${modalType}`,
        payload: data,
      })
    },
    onCancel () {
      dispatch({
        type: 'users/hideModal',
      })
    },
  }

  const userModalGrantProps = {
    item: currentItem,
    visible: modalGrantVisible,
    onOk (data) {
      dispatch({
        type: 'users/grant',
        payload: data,
      })
    },

    onCancel () {
      dispatch({
        type: 'users/hideModalGrant',
      })
    },

  }

  const UserModalGen = () =>
    <UserModal {...userModalProps} />

  const UserModalGrantGen = () =>
    <UserModalGrant {...userModalGrantProps} />

  return (
    <div>
      <UserSearch {...userSearchProps} />
      <UserList {...userListProps} />
      <UserModalGen />
      <UserModalGrantGen />
    </div>
  )
}

Users.propTypes = {
  dispatch: PropTypes.func,
  users: PropTypes.object,
}

function mapStateToProps ({ users, auth }) {
  return { users, auth }
}

export default connect(mapStateToProps)(Users)
