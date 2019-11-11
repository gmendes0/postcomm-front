import React, { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import Post from '../components/Post'

import api from '../services/api'

export default function Home({ history }) {
  const [description, setDescription] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    if (!sessionStorage.getItem('token')) {
      history.push('/login')
    } else {
      getAllPosts()
    }

  }, [])

  async function getAllPosts() {
    try {
      const response = await api.get('/posts', { headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }})

      if (response.data) setPosts(response.data.posts)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit() {
    try {
      const response = await api.post('/posts', { description }, { headers: {
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }})
  
      getAllPosts()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Navbar user={{name: "Gabriel Mendes"}}/>
      <div className="container mt-5">
        <h1 className="text-center mb-5">Home</h1>

        <div className="input-group mb-5">
          <input type="text" className="form-control" placeholder="Envie algo..."
            onChange={event => setDescription(event.target.value)} value={description}/>
          <div className="input-group-append">
            <button className="btn btn-md btn-success m-0 z-depth-0 waves-effect" type="button" onClick={handleSubmit}>
              enviar
            </button>
          </div>
        </div>

        {posts.map((post, i) => (
          <Post post={post} />
        ))}
      </div>
    </>
  )
}
