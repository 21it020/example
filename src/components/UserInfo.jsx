import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
// import { useEffect } from 'react'

const UserInfo = () => {
  const {user} = useContext(UserContext)
  return (
    <div>
        <h1>User Info</h1>
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserInfo