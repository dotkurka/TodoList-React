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
    const [popupRemove, setPopupRemove] = useState(false);

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

    const archivePost = () => {
        const newArchive = posts.filter((post) => {
            if (post.complited) {
                archive.push(post);
                console.log(archive);
                return false;
            }
            return post;
        });

        setPosts(newArchive);
    };

    const removeArchivePost = (post) => {
        const removeItem = archive.filter((p) => p.id !== post.id);

        setArchive(removeItem);
    };

    const removePost = (post) => {
        const removeItem = posts.filter((p) => p.id !== post.id);

        setPosts(removeItem);
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

            <TodoList
                remove={removePost}
                archive={archivePost}
                posts={posts}
                tittle="Todo List"
                toggleTodo={toggleTodo}
            />
            <CustomButton onClick={() => setPopup(true)}>Create todo</CustomButton>
            <CustomButton onClick={() => archivePost()}>Archive </CustomButton>

            <ArchiveList remove={removeArchivePost} posts={archive} tittle="archive" />

            <PopUpQuestion
                visible={popupRemove}
                setVisible={setPopupRemove}
                setModal={removePost}
                title={"Are you sure you want to cancel?"}
            />
        </div>
    );
};

export default MainTodo;
