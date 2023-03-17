/** @format */

import React, { useState } from "react";
import useStyle from "../style";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";


const Login = () => {

  const classes = useStyle();

  const [email, setEmail] = useState("");
  const [password, setPassword ] = useState("");

  const submitHandler = () => {
    console.log("helo")
    console.log(`${email} ${password}`)
  }

  return (
    <Box className={classes.flexContainer}>
      <Box className={classes.signinProfile}>
        <Avatar
          src='/images/ic_user.svg'
          alt='signinProfile'
          sx={{ height: "100px", width: "100px" }}
        />
      </Box>
      <Box className={classes.heading}>Welcome!</Box>
      <Box className={classes.paragraph}>
        <Typography
          sx={{
            color: "#0B3558",
            opacity: "1",
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: "0px",
            fontSize: "18px",
          }}>
          Let's connect to your workspace.<br></br> Please enter your email to
          continue.
        </Typography>
      </Box>
      <form>
        <TextField
          inputProps={{
            autocomplete: "new-password",
            form: {
              autocomplete: "off",
            },
          }}
          sx={{
            m: 1,
            width: "500px",
            position: "absolute",
            top: "475px",
            left: "670px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
          id='email'
          label='Email'
          type='text'
          value={email}
        />
        <TextField
          sx={{
            m: 1,
            width: "500px",
            position: "absolute",
            top: "550px",
            left: "670px",
          }}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
          variant='outlined'
          id='password'
          type='password'
          label='Password'
          value={password}
        />
        <Typography
          sx={{
            color: "#003FB9",
            opacity: "1",
            fontFamily: "Open Sans, sans-serif",
            letterSpacing: "0px",
            fontSize: "16px",
            position: "absolute",
            top: "623px",
            left: "1040px",
          }}>
          Forgot Password?
        </Typography>
        <Button
          variant='contained'
          type='submit'
          onClick={submitHandler}
          className={classes.submitButton}
          sx={{
            color: "#FFFFFF",
            fontSize: "20px",
            textTransform: "none",
          }}>
          Sign In
        </Button>
      </form>
      <Box
        style={{
          height: "37px",
          width: "1500px",
          position: "absolute",
          top: "800px",
          left: "160px",
          display: "flex",
        }}>
        <Typography sx={{ color: "#728391", marginRight: "10px" }}>
          Powered by
        </Typography>
        <Avatar
          src='/images/b13290d8-b634-4e8d-8eab-c4d420341e3f.png'
          alt='compantLogo'
          sx={{
            height: "23px",
            width: "100px",
            marginRight: "900px",
          }}
        />
        <Typography
          sx={{
            color: "#003FB9",
            marginRight: "25px",
            fontSize: "16px",
            fontFamily: "Open Sans, sans-serif",
          }}>
          Need Help?
        </Typography>
        <Typography
          sx={{
            color: "#003FB9",
            fontSize: "16px",
            fontFamily: "Open Sans, sans-serif",
          }}>
          Privacy Policy and Terms
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
