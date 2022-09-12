import React, { useState } from "react";
import Button from "../../../components/Button/Button";
import PopUp from "../../../components/PopUp/PopUp";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import ArchiveList from "../ArchiveList/ArchiveList";
import ConfirmDialog from "../../../components/ConfirmDialog/ConfirmDialog";
import Snackbar from "../../../components/Sneckbar/Snackbar";
import Context from "../../../context";
import "./MainTodo.scss";
import Checkbox from "../../../components/Checkbox/Checkbox";
import ToggleSwitch from "../../../components/ToggleSwitch/ToggleSwitch";

const MainTodo = () => {
    const tempPost = [
        {
            id: 1,
            title: "First Post",
            descripton: "description post",
            userName: "Anton",
            complited: false,
            isChecked: false,
        },
        {
            id: 2,
            title: "Last Post",
            descripton: "Kolya loh you know?",
            userName: "Sergiy",
            complited: false,
            isChecked: false,
        },
    ];

    const [posts, setPosts] = useState(tempPost);
    const [archive, setArchive] = useState([]);
    const [selectedRows, setSeletedRows] = useState([]);
    const [showTodo, setShowTodo] = useState(true);
    const [popup, setPopup] = useState(false);
    const [showSnackbar, setShowSnackbar] = useState({
        show: false,
        title: "",
    });

    const [showConfirm, setShowConfirm] = useState({
        show: false,
        message: "",
        onConfirm: null,
        onCancel: null,
    });

    const handleSnackbar = (type) => {
        setShowSnackbar({
            show: true,
            title: type,
        });
    };

    const visiblePopUp = (visible) => {
        setPopup(visible);
    };

    const visibleSnackbar = (visible) => {
        setShowSnackbar(visible);
    };

    const visibleConfirmDialog = (visible) => {
        setShowConfirm(visible);
    };

    const hendleChangePage = () => {
        setShowTodo(!showTodo);
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
        setSeletedRows([]);
    };

    const unarchivePost = () => {
        const newUnarchive = archive.filter((post) => {
            return selectedRows.includes(post.id);
        });

        setPosts((prevPost) => [...prevPost, ...newUnarchive]);

        const filteredPost = archive.filter((post) => {
            return !selectedRows.includes(post.id);
        });

        setArchive(filteredPost);
        setSeletedRows([]);
    };

    const handleDeletePost = (id) => {
        const removeItem = posts.filter((p) => p.id !== id);
        setPosts(removeItem);
    };

    const handleDeleteArchive = (id) => {
        const removeItem = archive.filter((p) => p.id !== id);
        setArchive(removeItem);
    };

    const changeConfirm = ({ message, snackMessage, onConfirm, onCancel }) => {
        const handleConfirm = () => {
            onConfirm?.();
            visibleConfirmDialog(false);

            if (snackMessage) {
                handleSnackbar(snackMessage);
            }
        };

        const handleCencel = () => {
            onCancel?.();
        };

        setShowConfirm({
            show: true,
            message,
            onConfirm: handleConfirm,
            onCancel: handleCencel,
        });
    };

    const disableButton = (func) => {
        if (selectedRows.length !== 0) {
            func();
        } else {
            handleSnackbar("Please select post");
            return false;
        }
    };

    const handleSelectPost = (id) => {
        let selectPost = posts.map((post) =>
            post.id === id ? { ...post, isChecked: !post.isChecked } : post
        );
        setPosts(selectPost);
        slectedPostById(id);
    };

    const handleSelectAllPost = () => {
        let selectPost = posts.map((post) => {
            return { ...post, isChecked: !post.isChecked };
        });
        setPosts(selectPost);
    };

    return (
        <Context.Provider
            value={{
                changeConfirm,
            }}
        >
            <div>
                <Snackbar
                    visible={showSnackbar.show}
                    message={showSnackbar.title}
                    hidden={visibleSnackbar}
                />
                <div className="main-switch">
                    <p>Post</p>
                    <ToggleSwitch onChange={() => hendleChangePage()} />
                    <p>Archive</p>
                </div>

                <div className={showTodo ? "main-todo-post" : "main-todo-post-hidden"}>
                    <PopUp visible={popup} setVisible={visiblePopUp}>
                        <TodoForm
                            visible={visiblePopUp}
                            create={createPost}
                            onConfirm={changeConfirm}
                            snackbar={handleSnackbar}
                        />
                    </PopUp>

                    {posts.length !== 0 ? (
                        <div>
                            <TodoList
                                checkedAll={handleSelectPost}
                                remove={handleDeletePost}
                                archive={archivePost}
                                posts={posts}
                                title="Todo List"
                                toggleTodo={toggleTodo}
                            />
                            <div className="main-button-post">
                                <Button onClick={() => setPopup(true)}>Create todo</Button>
                                <Button
                                    cancel="cancel-button"
                                    onClick={() =>
                                        disableButton(() =>
                                            changeConfirm({
                                                message: "Are you sure you want to achive this items?",
                                                snackMessage: "Succesfully archivated",
                                                onConfirm: archivePost,
                                            })
                                        )
                                    }
                                >
                                    Archive
                                </Button>

                                <Checkbox
                                    checked={posts.filter((post) => post?.isChecked !== true).length < 1}
                                    onChange={() => handleSelectAllPost()}
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="main-empty-post">
                            <div>The list of posts is empty, maybe you want to </div>
                            <Button onClick={() => setPopup(true)}>Create todo</Button>
                        </div>
                    )}
                </div>

                <div className={showTodo ? "main-todo-archive" : ""}>
                    {archive.length !== 0 ? (
                        <div>
                            <ArchiveList
                                remove={handleDeleteArchive}
                                posts={archive}
                                tittle="Archive List"
                                selected={slectedPostById}
                            />
                            <Button
                                onClick={() =>
                                    disableButton(() =>
                                        changeConfirm({
                                            message: "Are you sure you want to achive this items?",
                                            snackMessage: "Succesfully archivated",
                                            onConfirm: unarchivePost,
                                        })
                                    )
                                }
                            >
                                Unarchive
                            </Button>
                        </div>
                    ) : (
                        <div className="main-empty-post">The list of archive is empty</div>
                    )}
                </div>
                <ConfirmDialog
                    onDialog={visibleConfirmDialog}
                    onConfirm={showConfirm.onConfirm}
                    onCancel={showConfirm.onCancel}
                    visible={showConfirm.show}
                    title={showConfirm.message}
                />
            </div>
        </Context.Provider>
    );
};

export default MainTodo;
