import { Avatar, Button } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearUserMessage } from "../Redux/Actions/MessageAction";
import { resetCounter } from "../Redux/Actions/CounterAction";
const Profile = () => {
  const message = useSelector((state) => state.allChat);
  const name = message[1]?.user;
  const age = message[2]?.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onExitBtnClick = () => {
    dispatch({ type: "USER_EXIT" });
    // dispatch(resetCounter());
    navigate("/");
  };
  return (
    <div className="flex items-center flex-col mt-8">
      <Avatar
        sx={{ bgcolor: deepOrange[500] }}
        style={{ width: "5rem", height: "5rem" }}
        variant="square"
      >
        {name[0]}
      </Avatar>
      <div className="mt-8 flex items-center flex-col">
        <p className="text-center p-4	text-lg	font-medium	">
          Your name {name} aged {age} has been added to student system. You may
          now exit.
        </p>
        <Button variant="contained" onClick={onExitBtnClick}>
          Exit
        </Button>
      </div>
    </div>
  );
};

export default Profile;
