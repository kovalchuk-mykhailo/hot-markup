import React from "react";

import {
  Grid,
  TextField,
  FormControl,
  Input,
  IconButton
} from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";

import "../../../../sass/components/_textfield.scss";

const styles = {
  whiteColor: {
    color: "white"
  }
};

const CustomInputAdornment = ({ children }) => (
  <>
    <InputAdornment position="start" style={{ minWidth: "30%" }}>
      {children}
    </InputAdornment>
  </>
);

const EmailPassInputs = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  return (
    <Grid container spacing={2} style={{ width: "90%" }}>
      <Grid item xs={12}>
        <TextField
          placeholder="Type your email..."
          id="email"
          type="Email"
          required
          fullWidth
          InputProps={{
            startAdornment: <CustomInputAdornment>Email</CustomInputAdornment>
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl className="class...">
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            placeholder="Create a Password"
            startAdornment={
              <CustomInputAdornment>Password</CustomInputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? (
                    <Visibility style={styles.whiteColor} />
                  ) : (
                    <VisibilityOff style={styles.whiteColor} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText
            id="filled-weight-helper-text"
            style={{
              textAlign: "center",
              fontSize: "0.7rem",
              color: "grey",
              marginTop: "10px"
            }}
          >
            Password must be minimum 8 characters
          </FormHelperText>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default EmailPassInputs;
