import React from "react";
import "../TodoPost/TodoPost.scss";
import ListItem from "../../../components/ListItem/ListItem";
import CloseButton from "../../../components/CloseButton/CloseButton";
import CustomCheckbox from "../../../components/CustomCheckbox/CustomCheckbox";

const ArchivePost = ({ number, post, remove }) => {
    return (
        <ListItem className={`${post.complited ? "Toggle-Todo" : ""}`}>
            <div className="Todo-Post-Number">
                <strong>{number}</strong>
            </div>
            <div className="Todo-Post-Content">
                <h1>
                    {post.title} from {post.userName}
                </h1>
                <p>{post.descripton}</p>
            </div>
            <div className="Todo-Post-Button">
                <CloseButton onClick={() => remove(post)} />
                <CustomCheckbox />
            </div>
        </ListItem>
    );
};

export default ArchivePost;
