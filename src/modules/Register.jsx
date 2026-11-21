import { Box, TextField, Button, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    console.log("Register component mounting");
    return () => {
      console.log("Register unmounted");
    };
  }, []);
  return (
    <>
      <Typography variant="h4">Register Page</Typography>
      <Box sx={{ mt: 2 }}>
        <TextField label="Username" placeholder="Enter your username" />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField label="Email" placeholder="Enter your email" />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField label="Password" placeholder="Enter your password" />
      </Box>
      <Box sx={{ mt: 2 }}>
        <TextField
          label="Confirm Password"
          placeholder="Enter your confirm password"
        />
      </Box>
      <Box>
        <Button sx={{ mt: 2 }} variant="contained">
          Register
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: " baseline",
        }}
      >
        <Typography variant="body1">If you have account already? </Typography>
        <Button sx={{ mt: 2 }} onClick={() => navigate("/")}>
          Login
        </Button>
      </Box>
    </>
  );
};

export default Register;
