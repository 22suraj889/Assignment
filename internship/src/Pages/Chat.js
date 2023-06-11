import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import SendIcon from "@mui/icons-material/Send";
import { deepOrange } from "@mui/material/colors";
import { Button, TextField } from "@mui/material";
import Messages from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { changeCounter } from "../Redux/Actions/CounterAction";
import { addUserMessage } from "../Redux/Actions/MessageAction";

const Chat = () => {
  const [userMsg, setUserMsg] = useState(null);
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const submitMessage = (e) => {
    dispatch(addUserMessage(userMsg, counter));
    dispatch(changeCounter());
    setUserMsg("");
  };
  return (
    <div>
      <p className="text-center text-lg	font-medium">HappilyEver</p>
      <hr />
      <Messages />
      <TextField
        style={{
          position: "absolute",
          bottom: "0",
          width: "80%",
        }}
        fullWidth
        value={userMsg}
        label="Write Message"
        id="fullWidth"
        onChange={(e) => setUserMsg(e.target.value)}
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
        onClick={submitMessage}
      >
        Send
      </Button>
    </div>
  );
};

export default Chat;
