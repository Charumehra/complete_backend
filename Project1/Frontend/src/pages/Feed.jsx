import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/posts')
      .then((response) => {
        setPosts(response.data.post || [])
      })
      .catch((error) => {
        console.error('Failed to load posts', error)
        setPosts([])
      })
  }, [])

  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
    </section>
  )
}

export default Feed