import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import api from '../services/api'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit() {
    const response = await api.post('/login', { email, password })

    console.log(response.data) // // // //
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login</h1>

      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-6">
          <div className="card">
            <div className="card-body py-5">
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right text-md-right">
                  <label htmlFor="email" className="col-form-label">email</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="text" id="email" placeholder="your email" className="form-control"
                    onChange={event => setEmail(event.target.value)} value={email}/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right text-md-right">
                  <label htmlFor="password" className="col-form-label">password</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="password" id="password" placeholder="your password" className="form-control"
                    onChange={event => setPassword(event.target.value)} value={password}/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success" onClick={handleSubmit}>Login</button>
              </div>
              <div className="text-center">
                <Link to='/register' className='small'>Don't have an account? Sign-up now.</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
