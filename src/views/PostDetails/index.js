import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GET_COMMENTS, GET_POST } from '../../api';
import Comment from '../../components/Comments';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Loading from '../../components/Loading';

function PostDetails(props) {

    const [showLoader , setShowLoader] = useState(true);
    const [post , setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [showComments , setShowComments] = useState(false)
    const params = useParams();
    
    const onCommentsClick = () =>{
        setShowComments(!showComments)
    }

    useEffect(() =>{
        GET_POST(params?.postId)
        .then(resp => {
            setPost(resp?.data)
            setShowLoader(false)
        })

        GET_COMMENTS(params?.userId)
        .then(resp => {
            setComments(resp?.data);
        })


    },[])
    if(showLoader) return <Loading />
    return (
        <div className='app-wrapper'>
            <Header title="BLOGGERS"></Header>
            <Post post = {post} />
            <div
            onClick={onCommentsClick}
            style={{
                fontSize : "24px",
                fontWeight : "bold" , 
                cursor : "pointer",
                margin: "3% 0% 1% 3%",
            }}>Comments 💬</div>

            {showComments && comments.map(comment => <Comment comment={comment}/>)}
        </div>
    );
}

export default PostDetails;