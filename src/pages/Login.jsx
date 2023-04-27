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
import "./login.styles.css";

const Login = ({ setUser }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   console.log(name);
  //   console.log(password);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const navigate = useNavigate();

  //   const onChangePasswordHandler = (e) => {
  //     console.log(e.target.value);
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !password) return;
    setUser({ name: name, email: password });
    navigate("/dashboard");
  };

  return (
    <section className="login">
      {/* <form className="login-form" onSubmit={handleSubmit}> */}
      <h5 className="login-text">login</h5>
      <div className="input-name-field">
        <TextField
          className="input-name"
          onChange={(e) => setName(e.target.value)}
          fullWidth
          id="outlined-basic"
          label="Enter name or email"
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
        <Button size="large" variant="contained">
          log in
        </Button>
      </div>
      {/* <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          login
        </button> */}
      {/* </form> */}
    </section>
  );
};
export default Login;
