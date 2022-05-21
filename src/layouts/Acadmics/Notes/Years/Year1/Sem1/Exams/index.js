import React, { useState, useEffect} from 'react'
import { db } from '../../../../../../../components/firebase';
import Posts from "./Posts"

function Exams({unit}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      const unsubscribe = db
        .collection("pastpapers")
        
        .onSnapshot((snap) => setPosts(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() }))));
      return unsubscribe;
    }, []);
    return (
        <div>
        {Array.from(posts).map((post) => (
          <Posts
            key={post.id}
            descriptions={post.data.descriptions}
            pastpaperId={post.id}
            timestamp={post.data.timestamp}
            name={post.data.name}
            type={post.data.type}
            year={post.data.year}
            unit={unit}
          />
        ))}
        </div>
    )
}

export default Exams
