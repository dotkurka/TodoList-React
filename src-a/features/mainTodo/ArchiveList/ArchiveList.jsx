import React from "react";
import ArchivePost from "../ArchivePost/ArchivePost";

const ArchiveList = ({ posts, tittle, remove }) => {
    return (
        <div>
            <h1>{tittle}</h1>
            {posts.map((post, index) => (
                <ArchivePost remove={remove} post={post} key={post.id} number={index + 1} />
            ))}
        </div>
    );
};

export default ArchiveList;
