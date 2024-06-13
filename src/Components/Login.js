import { Button, TextField } from '@mui/material'
import React from 'react'

function Login() {
  return (
    <div className='login-container' >
        <div className='image-container'>

        </div>
        <div className='login-box'>
            <p>Login to your account</p>
            <TextField id="standard-basic" label="Enter Username" variant="outlined"/>
            <TextField id="outlined-password-input" label="Enter Password" type="password" autoComplete='current-password' />
            <Button variant="outlined" style={{backgroundColor: "#63d7b0", color: "whitesmoke"}}>Login</Button>
        </div>
      
    </div>
  )
}

export default Login
