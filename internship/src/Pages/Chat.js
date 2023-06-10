import React from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { deepOrange } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
const Chat = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <p>HappilyEver</p>
      <hr />
      {/* <div>
        <Avatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </Avatar>
        <p>Hello</p>
      </div> */}
      <TextField
        style={{
          position: "absolute",
          bottom: "0",
          width: "80%",
        }}
        fullWidth
        label="Write Message"
        id="fullWidth"
      />
      <Button
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "20%",
          height: "3.5rem",
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </div>
  );
};

export default Chat;
