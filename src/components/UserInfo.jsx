import React from 'react'

const UserInfo = ({id,name,age}) => {
  return (
    <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
    </div>
  )
}

export default UserInfo