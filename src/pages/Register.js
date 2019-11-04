import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [warning, setWarning] = useState('')

  function comparePassword(password, confirm) {
    return password === confirm
  }

  async function handleSubmit() {
    try {
      if (!comparePassword(password, confirm)) {
        setWarning(`the passwords don't match`)
      } else if (!name || !email || !password || !confirm) {
        setWarning(`please, fill all fields`)
      } else {
        const response = await api.post('/register', { name, email, password })

        console.log(response.data) // // // // //
      }
    } catch (error) {
      console.log(error) // // // // //
    }
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Register</h1>

      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-8">
          <div className="card">
            <div className="card-body py-5">
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right text-md-right">
                  <label htmlFor="name" className="col-form-label">name</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="name" placeholder="your complete name" className="form-control"
                    onChange={event => setName(event.target.value)} value={name}/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="email" className="col-form-label">email</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="email" id="email" placeholder="your best email"className="form-control"
                    onChange={event => setEmail(event.target.value)} value={email}/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="password" className="col-form-label">password</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="password" id="password" placeholder="password" className="form-control"
                    onChange={event => setPassword(event.target.value)} value={password}/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="confirm_password" className="col-form-label">confirm password</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="password" id="confirm_password" placeholder="confirm password" className="form-control"
                    onChange={event => setConfirm(event.target.value)} value={confirm}/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success" onClick={handleSubmit}>Register</button>
              </div>
              <div className="text-center">
                <Link to='/login' className='small'>Already have an account? Sign-in now.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
