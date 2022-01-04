import React from 'react';
import {BiArrowBack} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import './style.css'

function Back(props) {

    const navigate = useNavigate();

    const onBackClicked = () =>{
        navigate(-1) //use to go one step back
    }

    return (
        <BiArrowBack className='back-arrow' onClick={onBackClicked} />
    );
}

export default Back;