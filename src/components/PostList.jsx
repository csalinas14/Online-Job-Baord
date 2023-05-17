import Post from './Post.jsx';

import React from 'react';

const PostList = props => {
    const posts = props.posts;
    return (
        <u1>
            {posts.map((post) =>
              <Post key={post.id}
                    name={post.title}
                    />
            )}
        </u1>
    );

}


export default PostList;