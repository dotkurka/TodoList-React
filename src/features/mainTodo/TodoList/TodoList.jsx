import React from "react";
import TodoPost from "../TodoPost/TodoPost";

const TodoList = ({ posts, title, toggleTodo, remove, checkedAll }) => {
    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) => (
                <TodoPost
                    checkedAll={checkedAll}
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
