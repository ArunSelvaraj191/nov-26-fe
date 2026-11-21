import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();

  // const [count, setCount] = useState(5);
  // const [disable, setDisable] = useState(false);

  // useEffect(() => {
  //   console.log("Login component updating", count);
  //   if (count == 10) {
  //     setDisable(true);
  //   }
  // }, [count]);
  useEffect(() => {
    console.log("Login component mounting");
    return () => {
      console.log("Login unmounted");
    };
  }, []);

  return (
    <>
      <Typography variant="h4">Login Page</Typography>

      <Box sx={{ mt: 2 }}>
        <TextField label="Email" placeholder="Enter your email" />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField label="Password" placeholder="Enter your password" />
      </Box>
      <Box>
        <Button sx={{ mt: 2 }} variant="contained">
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: " baseline",
        }}
      >
        <Typography variant="body1">If you don't have account? </Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/register")}>
          Register
        </Button>
      </Box>
    </>
  );
};

export default Login;
