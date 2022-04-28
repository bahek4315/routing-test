import React from "react";
import PostsList from "./postsList";
import Post from "./post";
import query from "query-string";
import { useParams } from "react-router-dom";

const Posts = ({ location }) => {
    const params = useParams();
    const posts = [
        { id: "1", label: "post 1" },
        { id: "2", label: "post 2" },
        { id: "3", label: "post 3" },
    ];
    const { postId } = params;
    const search = query.parse(location.search);
    const cropPosts = search.count ? posts.slice(0, search.count) : posts;
    return <>{postId ? <Post id={postId} posts={posts} /> : <PostsList posts={cropPosts} />}</>;
};

export default Posts;
