import React, { useEffect } from 'react'

export default function Home({ history }) {
  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      history.push('/login')
    }

  }, [])

  return (
    <div className="container mt-5">
      <h1 className="text-center">Home</h1>
    </div>
  )
}
