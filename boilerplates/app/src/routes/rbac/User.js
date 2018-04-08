import React from 'react'
import { connect } from 'dva'

import UserInfo from '../../components/User/UserInfo'


function User ({ dispatch, auth }) {
  const {
    user,
  } = auth

  const userInfoProps = {
    user: user,
    onUpdate (data) {
      dispatch({
        type: 'auth/update',
        payload: data,
      })
    },
  }

  return (
    <div>
      <UserInfo {...userInfoProps} />
    </div>
  )
}


function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(User)
