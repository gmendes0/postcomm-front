import React from 'react'

export default function Post({ post }) {
  return (
    <>
      <div className="card my-5">
        <div className="card-body">
          <p className="card-text">{post.description}</p>
          <p className="card-text small">by: {post.user.name}</p>
        </div>
      </div>
    </>
  )
}
