import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Box, Button, TextField, Typography } from "@mui/material";
import Chat from "./components/Chat";

const App = () => {
  const [userName, setUserName] = useState("");
  const [logIn, setLogIn] = useState(false);

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  const handleLogIn = () => {
    setLogIn(true);
  };

  return (
    <div>
      <AppBar position="static">
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            height: "80px",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <Typography variant="h4">Chat App</Typography>
          <Typography>
            {logIn && <Typography variant="h6">Welcome: {userName}</Typography>}
          </Typography>
        </Box>
      </AppBar>

      {/* verification, this ensure user enters their username before entering the chat component  */}
      {!logIn && (
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              marginTop: "3rem",
              width: "300px",
            }}
          >
            <TextField
              onChange={handleChange}
              label="Username"
              variant="outlined"
              required
              fullWidth
            />
            <Button
              onClick={handleLogIn}
              style={{
                display: "block",
                marginTop: "20px",
              }}
              variant="contained"
              fullWidth
            >
              Log In
            </Button>
          </Box>
        </Box>
      )}
      {/*Chat section  */}

      {logIn && <Chat userName={userName} />}
    </div>
  );
};

export default App;
