import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import PopUp from "../../../components/PopUp/PopUp";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";

const MainTodo = () => {
    const [posts, setPosts] = useState([
        {
            id: 1,
            title: "First Post",
            descripton: "description post",
            userName: "Anton",
            complited: false,
        },
        {
            id: 2,
            title: "First Post",
            descripton: "description post",
            userName: "Anton",
            complited: false,
        },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setPopup(false);
    };

    const toggleTodo = (id) => {
        const mappedPost = posts.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complited: !todo.complited };
            }
            return todo;
        });
        setPosts(mappedPost);
    };

    const [popup, setPopup] = useState(false);

    return (
        <div>
            <CustomButton onClick={() => setPopup(true)}>Create todo</CustomButton>
            <PopUp visible={popup} setVisible={setPopup}>
                <TodoForm create={createPost} />
            </PopUp>

            <TodoList posts={posts} tittle="Todo List" toggleTodo={toggleTodo} />
        </div>
    );
};

export default MainTodo;
