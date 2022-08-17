import React from "react";
import TodoPost from "../TodoPost/TodoPost";

const TodoList = ({ posts, title, toggleTodo, selected, remove, onConfirm }) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <TodoPost
                    onConfirm={onConfirm}
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
