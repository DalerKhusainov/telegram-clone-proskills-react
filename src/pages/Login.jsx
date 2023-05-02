import React, { useState } from "react";

import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useNavigate } from "react-router-dom";
import { users } from "../data/users";
import "./login.styles.css";

const Login = ({ setUserFullName, setCurrentUser }) => {
  const [name, setName] = useState("");
  const [allUsers, setAllUsers] = useState(users);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [textError, setTextError] = useState("");

  const onClickLoginHandler = () => {
    const currentAccount = allUsers.find((acc) => acc.firstName === name);
    setCurrentUser(currentAccount);
    if (currentAccount?.password === password) {
      setUserFullName(`${currentAccount.firstName} ${currentAccount.lastName}`);
      navigate("/contacts");
      setTextError("");
    } else setTextError("The name or password is not correct");
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  return (
    <section className="login">
      <h5 className="login-text">log in</h5>
      <div className="input-name-field">
        <TextField
          className="input-name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Enter name"
          variant="outlined"
        />
      </div>
      <div className="input-password-field">
        <FormControl
          sx={{ m: 1, width: "35ch" }}
          variant="outlined"
          fullWidth={true}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            onChange={(e) => setPassword(e.target.value)}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </div>
      <div className="btn-login">
        <p className="login-error-text" style={{ color: "red" }}>
          {textError}
        </p>
        <Button onClick={onClickLoginHandler} size="large" variant="contained">
          log in
        </Button>
      </div>
      {/* <div className="register-field">
        <p>Link</p>
      </div> */}
    </section>
  );
};
export default Login;
