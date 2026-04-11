import React, {useState} from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id: "1",
            image: "https://ik.imagekit.io/3c1hykdnu/image_Jai0JS196.jpg",
            caption: "Sample caption 1"
        }
    ])
  return (
    <section className='feed-section'>
        {
            posts.length>0 ? (
                posts.map((post)=>(
                    <div key={post._id} className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) :(
                <p>No posts available.</p>
            )
        }
    </section>
  )
}

export default Feed