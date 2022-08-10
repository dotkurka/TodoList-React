import React, { useState, useRef } from "react";
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

    const isPosts = useRef();
    const [archive, setArchive] = useState([]);
    const [selectedRows, setSeletedRows] = useState([]);
    const [popup, setPopup] = useState(false);
    const [popupQue, setPopupQue] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [dialogConfirm, setDialogConfirm] = useState({
        message: "",
        isLoading: false,
    });
    const [SnackbarType, setSnackbarType] = useState({
        title: "",
    });

    const handleDialogConfirm = (message, isLoading) => {
        setDialogConfirm({
            message,
            isLoading,
        });
    };

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
        const filteredArchive = posts.filter((post) => {
            if (selectedRows.some((p) => p === post.id)) {
                setArchive((prevArhive) => [...prevArhive, post]);
                return false;
            }
            return post;
        });

        setPosts(filteredArchive);
        handleSnackbar("Succesfully archivated");
    };

    console.log(archive);

    const handleDelete = (id) => {
        handleDialogConfirm("Are you sure you want to remove this item?", true);
        isPosts.current = id;
    };

    const areUShureDelete = (choose) => {
        if (choose) {
            handleDialogConfirm("", false);
            const removeItem = posts.filter((p) => p.id !== isPosts.current);
            setPosts(removeItem);
        } else {
            handleDialogConfirm("", false);
        }
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
                remove={handleDelete}
                archive={archivePost}
                posts={posts}
                tittle="Todo List"
                toggleTodo={toggleTodo}
                selected={slectedPostById}
            />
            <CustomButton onClick={() => setPopup(true)}>Create todo</CustomButton>
            <CustomButton onClick={() => archivePost()}>Archive </CustomButton>

            <ArchiveList remove={handleDelete} posts={archive} tittle="archive" />

            {dialogConfirm.isLoading && (
                <ConfirmDialog
                    onDialog={areUShureDelete}
                    title={dialogConfirm.message}
                    snackbar={handleSnackbar}
                />
            )}
        </div>
    );
};

export default MainTodo;
