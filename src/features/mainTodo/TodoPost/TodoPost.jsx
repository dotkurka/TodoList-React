import React from "react";
import "./TodoPost.scss";
import ListItem from "../../../components/ListItem/ListItem";

const TodoPost = ({ toggleTodo, number, post }) => {
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
            <div>
                <input type="checkbox" onChange={() => toggleTodo(post.id)} />
            </div>
        </ListItem>
    );
};

export default TodoPost;
