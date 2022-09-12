import React from "react";
import "./ListItem.scss";

const ListItem = ({ children, className }) => {
    return <div className={`todo-post ${className || ""}`}>{children}</div>;
};

export default ListItem;
