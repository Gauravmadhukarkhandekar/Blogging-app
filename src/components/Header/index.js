import React from 'react';
import Back from '../BackButton';
import './style.css'

function Header({title , showBack = true}) {
    
    return (
        <div className='header'>
            {showBack && <Back />}
            <h2>{title}</h2>
        </div>
    );
}

export default Header;