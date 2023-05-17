import Post from './Post.jsx';

import React from 'react';
import Search_Bar from './Search_Bar.jsx';
import PostList from './PostList.jsx';


const Body = props =>{

  const posts= [
    {id: 1, title: 'Hello'},
    {id: 2, title: 'Goodbye'}
  ];

    return(
    <div class="px-8 py-12">
      <Search_Bar />
      <Post />
      <PostList posts={posts} />
    </div>
    )
}



export default Body;