import React, { useState } from "react";
import CustomButton from "../../../components/CustomButton/CustomButton";
import PopUp from "../../../components/PopUp/PopUp";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import PopUpQuestion from "../../../components/PopUpQuestion/PopUpQuestion";
import ArchiveList from "../ArchiveList/ArchiveList";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import Snackbar from "../../../components/Snackbar/Snackbar";

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
        {
            id: 3,
            title: "Bla Post",
            descripton: "Kolya loh you know?",
            userName: "Sergiy",
            complited: false,
        },
    ]);

    const [archive, setArchive] = useState([]);

    const [selectedRows, setSeletedRows] = useState([]);

    const [popup, setPopup] = useState(false);
    const [popupQue, setPopupQue] = useState(false);

    const [showSnackbar, setShowSnackbar] = useState(false);
    const [SnackbarType, setSnackbarType] = useState({
        title: "",
    });

    const [showConfirm, setShowConfirm] = useState({
        show: false,
        message: "",
        onConfirm: null,
    });

    const handleSnackbar = (type) => {
        setSnackbarType({
            title: type,
        });

        setShowSnackbar(true);
        setTimeout(() => {
            setShowSnackbar(false);
        }, 2900);
    };

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

    const slectedPostById = (id) => {
        if (selectedRows.some((post) => post === id)) {
            const fileteredRows = selectedRows.filter((post) => post !== id);

            setSeletedRows(fileteredRows);
            return;
        }
        setSeletedRows([...selectedRows, id]);
    };

    const archivePost = () => {
        const newArchive = posts.filter((post) => {
            return selectedRows.includes(post.id);
        });

        setArchive((prevArhive) => [...prevArhive, ...newArchive]);

        const filteredPost = posts.filter((post) => {
            return !selectedRows.includes(post.id);
        });

        setPosts(filteredPost);
        handleSnackbar("Succesfully archivated");
    };

    const handleDeletePost = (id) => {
        const removeItem = posts.filter((p) => p.id !== id);
        setPosts(removeItem);
    };

    const handleDeleteArchive = (id) => {
        const removeItem = archive.filter((p) => p.id !== id);
        setArchive(removeItem);
    };

    const changeConfirm = (show, message, func) => {
        setShowConfirm({
            show,
            message,
            onConfirm: func,
        });
    };

    const handleConfirm = (message, func) => {
        changeConfirm(true, message, func);
    };

    return (
        <div>
            <Snackbar visible={showSnackbar} message={SnackbarType.title} />

            <PopUp visible={popup} setVisible={setPopup}>
                <TodoForm
                    setVisible={setPopupQue}
                    setModal={setPopup}
                    create={createPost}
                    snackbar={handleSnackbar}
                />
            </PopUp>

            <PopUpQuestion
                visible={popupQue}
                setVisible={setPopupQue}
                setModal={setPopup}
                title={"Are you sure you want to cancel?"}
            />

            <TodoList
                onConfirm={handleConfirm}
                remove={handleDeletePost}
                archive={archivePost}
                posts={posts}
                title="Todo List"
                toggleTodo={toggleTodo}
                selected={slectedPostById}
            />
            <CustomButton onClick={() => setPopup(true)}>Create todo</CustomButton>
            <CustomButton onClick={() => archivePost()}>Archive</CustomButton>

            <ArchiveList remove={handleDeleteArchive} posts={archive} tittle="archive" />

            <ConfirmDialog
                onConfirm={showConfirm.onConfirm}
                onDialog={changeConfirm}
                visible={showConfirm.show}
                title={showConfirm.message}
                snackbar={handleSnackbar}
            />
        </div>
    );
};

export default MainTodo;
