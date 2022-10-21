import React, { useEffect, useState } from 'react'
import { db } from "../../../../../../../../../../components/firebase"
import Post from './Post';

function Comments({postId}) {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        db.collection('pastpapers').doc(`${postId}`).collection("comments").onSnapshot(snapshot => {
          setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                post: doc.data(),
            })));
        })
    }, []);
  return (
    <div>
    {
        posts.map(({id, post}) => (
          <Post 
          key={id} 
          postId={id}
          comment={post?.comment}
          fromId={post?.fromId}
          timestamp={post?.timestamp}
          count={post?.count}
          read={post?.read}
          />
        ) )
      }
    </div>
  )
}

export default Comments