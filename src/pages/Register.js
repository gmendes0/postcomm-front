import React, { useState } from 'react'

import api from '../services/api'

export default function Register() {
  

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
                  <input type="text" id="name" placeholder="your complete name" className="form-control"/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="email" className="col-form-label">email</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="email" id="email" placeholder="your best email" className="form-control"/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="password" className="col-form-label">password</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="password" id="password" placeholder="password" className="form-control"/>
                </div>
              </div>
              <div className="row my-3">
                <div className="col-12 col-md-4 text-md-right">
                  <label htmlFor="confirm_password" className="col-form-label">confirm password</label>
                </div>
                <div className="col-12 col-md-6">
                  <input type="confirm password" id="confirm_password" placeholder="confirm password" className="form-control"/>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-success">Register</button>
              </div>
              <div className="text-center">
                <a href="" className="small">Already have an account? Sign-in now.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
