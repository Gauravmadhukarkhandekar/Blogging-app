import React from 'react';
import './style.css'

function Post({post}) {
    console.log(post)
    return (
        <div className='post-wrapper'>
            <div className='post-title'>{post.title}</div>
            <div className='post-body'>{post.body}</div>
        </div>
    );
}

export default Post;