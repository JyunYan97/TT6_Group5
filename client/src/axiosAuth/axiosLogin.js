import React from 'react'
import { useRef, useState, useEffect, useContext } from 'react'
import AuthContext from './context/AuthProvider'
// npm i axios
import axios from './api/axios'
const LOGIN_URL = '/auth'

const axiosLogin = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef()
  const errRef = useRef()

  const [user,setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const [success, setSuccess] = useState(false) 

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrMsg('')
  }, [user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post(LOGIN_URL, 
            JSON.stringify({user, pwd}),
            {
                headers: { 'Content-Type': 'application/json'},
                withCredentials: true
            })
        console.log(JSON.stringify(response?.data))
        const accessToken = response?.data?.accessToken
        const roles = response?.data?.roles
        setAuth({user, pwd, roles, accessToken})
        setUser('')
        setPwd('')
        setSuccess(true)
    } catch (err) {
        if (!err?.response) {
            setErrMsg('no server response')
        } else if (err.response?.status === 400) {
            setErrMsg('missing username or pwd')
        } else if (err.response?.status === 401) {
            setErrMsg('unauthorised')
        } else {
            setErrMsg('login failed')
        }
    }
  }

  return (
    <section>
        <p>error message ternary</p>
        <form onSubmit={handleSubmit}>labels and inputs
            <input ref={userRef} onChange={(e)=>setUser(e.target.value)} value={user}/>
        </form>

    </section>
  )
}

export default axiosLogin