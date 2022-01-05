import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import {GET_USERS} from "../../api/index"
import Header from '../../components/Header';
import Table from '../../components/Table';
import APP_CONTEXT from '../../store/context';

function HomePage(props) {

    const [showLoader , setShowLoader] = useState(true);
    const appContext = useContext(APP_CONTEXT);
    const navigate = useNavigate();
    console.log({appContext});
    const {storeData} = appContext

    const onPostsClick = (userId) => {
        navigate(`/users/${userId}/posts`)
    }

    useEffect(() =>{
        {GET_USERS()
            .then(data => {
                const userData = data?.data;
                storeData({
                    users : userData,
                    theme : appContext.theme,
                    post: appContext.post,
                    user: appContext.user,
                    posts: appContext.posts
                })
                setShowLoader(false)
            })
            .catch(e => console.warn(e))}
    },[])
    if(showLoader) return <Loading />
    return (
        <div className='app-wrapper'>
            <Header showBack={false} title= "BLOGGERS"></Header>
            <Table onClick={onPostsClick} data = {appContext.users} ></Table>
        </div>
    );
}

export default HomePage;