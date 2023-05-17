
import React from 'react';

const Post = props => {
    return(
        <div class="mt-6 bg-white rounded-lg sm:bg-yellow-300">
            <h2 class="p-2 text-2xl">{props.name}</h2>
        </div>
    )
}

Post.defaultProps = {
    name: "Full Time Job Here"
}

export default Post;