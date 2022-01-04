import React from 'react';
import './style.css'

function Card(props) {
    return (
        <div onClick={props.onClick} className='card-wrapper'>
            <div className='card-title'>{props.title}</div>
            <div className='card-body'>{props.body}</div>
        </div>
    );
}

export default Card;