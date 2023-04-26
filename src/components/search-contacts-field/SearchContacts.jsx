import * as React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import TextField from "@mui/material/TextField";
import "./search-contacts.styles.css";

export default function SearchContacts({ onSearchHandler }) {
  return (
    <div className="search-contacts-field">
      <div className="menu-icon">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="search-input">
        <TextField
          onChange={onSearchHandler}
          id="outlined-basic"
          variant="outlined"
          size="small"
          fullWidth={true}
          placeholder="Search"
        />
      </div>
    </div>
  );
}
