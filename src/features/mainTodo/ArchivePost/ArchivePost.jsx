import React, { useContext } from "react";
import "./ArchivePost.scss";
import ListItem from "../../../components/ListItem/ListItem";
import CloseButton from "../../../components/CloseButton/CloseButton";
import Context from "../../../context";
import Checkbox from "../../../components/Checkbox/Checkbox";

const ArchivePost = ({ number, post, remove, selected }) => {
    const { changeConfirm } = useContext(Context);

    return (
        <ListItem className={`${post.complited ? "toggle-todo" : ""}`}>
            <div className="todo-arhive-number">
                <strong>{number}</strong>
            </div>
            <div>
                <h1>
                    {post.title} from {post.userName}
                </h1>
                <p>{post.descripton}</p>
            </div>
            <div className="todo-arhive-button">
                <CloseButton
                    onClick={() => {
                        changeConfirm({
                            message: "Are you sure you want to remove this item?",
                            snackMessage: "Success removed",
                            onConfirm: () => remove(post.id),
                        });
                    }}
                />
                <Checkbox onChange={() => selected(post.id)} />
            </div>
        </ListItem>
    );
};

export default ArchivePost;
