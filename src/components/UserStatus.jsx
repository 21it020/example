import React from 'react'

const UserStatus = (props) => {
    if(props.isLoggedIn && props.isAdmin) {
        return <h1>Welcome back, Admin!</h1>
    }else{
        return <h1>Welcome back, User!</h1>
    }
}

export default UserStatus