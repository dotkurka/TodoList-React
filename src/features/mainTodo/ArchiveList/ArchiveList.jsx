import React from "react";
import ArchivePost from "../ArchivePost/ArchivePost";

const ArchiveList = ({ posts, tittle, remove, selected }) => {
    return (
        <div>
            <h1>{tittle}</h1>
            {posts.map((post, index) => (
                <ArchivePost
                    selected={selected}
                    remove={remove}
                    post={post}
                    key={post.id}
                    number={index + 1}
                />
            ))}
        </div>
    );
};

export default ArchiveList;
