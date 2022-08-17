import React from "react";
import "./ListItem.scss";

const ListItem = ({ children, className }) => {
    return <div className={`Todo-Post ${className || ""}`}>{children}</div>;
};

export default ListItem;
