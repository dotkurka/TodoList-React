import React, { useContext } from "react";
import "./TodoPost.scss";
import ListItem from "../../../components/ListItem/ListItem";
import CloseButton from "../../../components/CloseButton/CloseButton";
import Checkbox from "../../../components/Checkbox/Checkbox";
import Context from "../../../context";

const TodoPost = ({ toggleTodo, number, post, remove, checkedAll }) => {
    const { changeConfirm } = useContext(Context);

    return (
        <ListItem className={`${post.complited ? "toggle-todo" : ""}`}>
            <div className="todo-post-number">
                <strong>{number}</strong>
            </div>
            <div className="todo-post-content">
                <h1>
                    {post.title} from {post.userName}
                </h1>
                <p>{post.descripton}</p>
            </div>
            <div className="todo-post-button">
                <CloseButton
                    onClick={() => {
                        changeConfirm({
                            message: "Are you sure you want to remove this item?",
                            snackMessage: "Success removed",
                            onConfirm: () => remove(post.id),
                        });
                    }}
                />
                <Checkbox onChange={() => toggleTodo(post.id)} />
                <Checkbox checked={post?.isChecked || false} onChange={() => checkedAll(post.id)} />
            </div>
        </ListItem>
    );
};

export default TodoPost;
