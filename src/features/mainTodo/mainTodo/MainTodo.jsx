import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import PopUp from "../../../components/PopUp/PopUp";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import PopUpQuestion from "../../../components/PopUpQuestion/PopUpQuestion";
import ArchiveList from "../ArchiveList/ArchiveList";

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
            title: "Last Post",
            descripton: "Kolya loh you know?",
            userName: "Sergiy",
            complited: false,
        },
    ]);

    const [popup, setPopup] = useState(false);
    const [popupQue, setPopupQue] = useState(false);

    const [archive, setArchive] = useState([]);

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

    const archivePost = (post) => {
        const newArchive = posts.filter((p) => {
            if (p.id === post.id) {
                archive.push(post);
                console.log(archive);
                return false;
            }
            return post;
        });

        setPosts(newArchive);
    };

    const removePost = (post) => {
        const removeItem = archive.filter((p) => p.id !== post.id);

        setArchive(removeItem);
    };

    return (
        <div>
            <PopUp visible={popup} setVisible={setPopup}>
                <TodoForm setVisible={setPopupQue} setModal={setPopup} create={createPost} />
            </PopUp>
            <PopUpQuestion
                visible={popupQue}
                setVisible={setPopupQue}
                setModal={setPopup}
                title={"Are you sure you want to cancel?"}
            />

            <TodoList archive={archivePost} posts={posts} tittle="Todo List" toggleTodo={toggleTodo} />
            <CustomButton onClick={() => setPopup(true)}>Create todo</CustomButton>

            <ArchiveList remove={removePost} posts={archive} tittle="archive" />
        </div>
    );
};

export default MainTodo;
