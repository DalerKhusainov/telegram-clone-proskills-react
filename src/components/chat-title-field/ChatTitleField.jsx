import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TableChartIcon from "@mui/icons-material/TableChart";
import IconButton from "@mui/material/IconButton";
import "./chat-title.field.styles.css";

export const ChatTitleField = () => {
  return (
    <div className="chat-field">
      <div className="chat-info">
        <p className="chat-title">Chat Title</p>
        <p className="chat-status">Status</p>
      </div>
      <div className="chat-field__icons">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <IconButton>
          <TableChartIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
};
