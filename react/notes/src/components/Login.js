import React, { useState, useEffect } from 'react'
import APIService from '../APIService'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [isLogin, setLogin] = useState(true)
    let history = useNavigate()
    useEffect(() => {
        if (token['mytoken']) {
            history('/articles')
        }
    }, [token])


    const loginBtn = () => {
        APIService.LoginUser({ username, password }).then(resp => setToken('mytoken', resp.token)).catch(er => console.log(er))
    }

    const registerBtn = () => {
        APIService.RegisterUser({ username, password }).then(resp => loginBtn()).catch(err => console.log(err))
    }
    return (
        <div className='App'>
            <br />
            <br />
            {
                isLogin ? <h1> Please Login </h1> : <h1> Please Register </h1>
            }


            <br />
            <br />
            <div className='mb-3'>

                <label htmlFor="username" className='form-label'>Username</label>
                <input type='text' className='form-control' id='username' placeholder='Please Enter username'
                    value={username} onChange={e => setUsername(e.target.value)}
                />

            </div>
            <br />
            <br />

            <div className='mb-3'>

                <label htmlFor="password" className='form-label'>Username</label>
                <input type='password' className='form-control' id='password' placeholder='Please Enter password'
                    value={password} onChange={e => setPassword(e.target.value)}

                />

            </div>
            {
                isLogin ?
                    <button onClick={loginBtn} className='btn btn-primary'>Login</button>
                    :

                    <button onClick={registerBtn} className='btn btn-primary'>Register</button>

            }
            <div className='mb-3'>
                <br />
                {
                    isLogin ? <h5>
                        if you dont have acc, please <button className='btn btn-primary' onClick={() => setLogin(false)}> Register</button> here
                    </h5> :
                        <h5> if you have account, please <button className='btn btn-primary' onClick={() => setLogin(true)}> Login</button></h5>
                }
            </div>
        </div>
    )
}

export default Login