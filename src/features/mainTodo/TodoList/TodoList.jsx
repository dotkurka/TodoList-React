import React from "react";
import TodoPost from "../TodoPost/TodoPost";

const TodoList = ({ posts, tittle, toggleTodo, selected, remove }) => {
    return (
        <div>
            <h1>{tittle}</h1>
            {posts.map((post, index) => (
                <TodoPost
                    selected={selected}
                    remove={remove}
                    post={post}
                    key={post.id}
                    number={index + 1}
                    toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );
};

export default TodoList;
