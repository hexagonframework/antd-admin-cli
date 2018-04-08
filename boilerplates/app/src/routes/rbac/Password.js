import React from 'react'
import { connect } from 'dva'

import UserPassword from '../../components/User/UserPassword'


function Password ({ dispatch }) {
  const userPasswordProps = {
    onUpdate (data) {
      dispatch({
        type: 'auth/password',
        payload: data,
      })
    },
  }

  return (
    <div>
      <UserPassword {...userPasswordProps} />
    </div>
  )
}


function mapStateToProps ({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Password)
