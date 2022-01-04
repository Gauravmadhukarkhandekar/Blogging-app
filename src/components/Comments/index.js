import React from 'react';
import './style.css'

function Comment({ comment }) {
    return (
       
            <div className='comment-card'>
                <div className='comment-name'>{comment?.name}</div>
                <div className='comment-body'>{comment?.body}</div>
            </div>
    
    );
}

export default Comment;