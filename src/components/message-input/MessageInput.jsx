import React from "react";
import InputBase from "@mui/material/InputBase";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import "./message-input.styles.css";

export const MessageInput = () => {
  return (
    <div className="message-input">
      <div className="attach-icon">
        <IconButton>
          <AttachFileIcon />
        </IconButton>
      </div>
      <div className="input-text">
        <InputBase
          fullWidth={true}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Write a message..."
          //   inputProps={{ "aria-label": "search google maps" }}
        />
      </div>
      <IconButton>
        <SentimentSatisfiedAltIcon />
      </IconButton>
      <IconButton>
        <SendIcon color="primary" />
      </IconButton>
    </div>
  );
};
