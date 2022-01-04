import React, { useEffect, useContext } from 'react';
import {  useMatch , useNavigate  } from 'react-router-dom';
import { GET_POSTS } from '../../api';
import Header from '../../components/Header';
import Card from '../../components/PostsCard';
import APP_CONTEXT from '../../store/context';

function PostsPage(props) {

    const location = useMatch('/users/:userId/posts')
    const navigate = useNavigate();
    //console.log(location)
    const appContext = useContext(APP_CONTEXT);
    const {storeData} = appContext
    
    const userId = location?.params?.userId;

    const onPostClick = (id) => {
        navigate(`${location?.pathname}/${id}`)
    }

    useEffect(() => {
        GET_POSTS(userId)
        .then(data => {
            const posts = data?.data;
            storeData({
                users : appContext.users,
                posts: posts,
                theme : appContext.theme,
                post: appContext.post,
                user: appContext.user
            })
        })
        .catch(e => console.warn(e))
    },[])

    return (
        <div className='app-wrapper'>
            {console.log(appContext.posts)}
            <Header title= "BLOGGERS"></Header>
            {appContext.posts.map(post => {
                console.log({post})
                return <Card key={post.id} onClick = {() =>onPostClick(post.id)} title={post.title} body={post.body}></Card>
            })}
        </div>
    );
}

export default PostsPage;