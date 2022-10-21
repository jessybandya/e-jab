import React, { useState, useEffect} from 'react'
import { db } from '../../../../../../../../components/firebase';
import Posts from "./Posts"
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Exams({unit}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const unsubscribe = db
        .collection("pastpapers")
        
        .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
      return unsubscribe;
    }, []);
    return (
        <div className="containerGrid">
        {posts?.length > 0 ?(
          <>
          {Array.from(posts).map((post) => (
            <Posts
              key={post.id}
              postId={post.id}
              descriptions={post.data.descriptions}
              pastpaperId={post.id}
              timestamp={post.data.timestamp}
              name={post.data.name}
              type={post.data.type}
              file={post.data.file}
              year={post.data.year}
              unit={unit}
            />
          ))}
          </>
        ):(
          <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "30vh", width: "100vw" }}>
          <CircularProgress sx={{color:"#0d6efd"}}/>
          <span style={{ justifyContent: "center", position: "fixed", top: "55%" }}>Loading...please wait</span>
      </div>
        )}
        </div>

    )
}

export default Exams
