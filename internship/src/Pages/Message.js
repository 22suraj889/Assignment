import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserMessage, fetchMessage } from "../Redux/Actions/MessageAction";
import { Avatar, Button } from "@mui/material";
import { changeCounter } from "../Redux/Actions/CounterAction";
import { deepOrange, deepPurple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
const Messages = () => {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(5);
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchMessage());
  }, [dispatch, counter]);

  const message = useSelector((state) => state.allChat);
  const filterMessage = [];
  for (let i = 0; i <= counter; i++) {
    filterMessage.push(message[i]);
  }
  console.log("changed");
  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const onBotButtonClick = (text) => {
    console.log(text);
    dispatch(addUserMessage(text, counter));
    dispatch(changeCounter());
  };

  if (counter === 3) {
    const interval = setInterval(() => {
      setCount(count - 1);
      if (count === 0) {
        clearInterval(interval);
        navigate("/profile");
      }
    }, 1000);
  }
  return (
    <div className="w-full h-full flex flex-col justify-end p-4">
      {filterMessage.map((msg, index) => (
        <>
          {" "}
          <div key={msg} className="flex justify-start items-center	mt-3">
            <Avatar sx={{ bgcolor: deepPurple[500] }}>B</Avatar>
            <div className="bg-blue-500 p-4 rounded-lg shadow text-white max-w-2xl">
              {counter === index && loading ? (
                <p>...</p>
              ) : (
                <>
                  <p>{msg.bot}</p>
                  {msg.btn && (
                    <Button
                      variant="contained"
                      style={{
                        marginTop: "10px",
                        backgroundColor: "white",
                        color: "blue",
                      }}
                      onClick={() => onBotButtonClick(msg.btn)}
                    >
                      {msg.btn}
                    </Button>
                  )}
                </>
              )}
            </div>
          </div>
          {msg.user && (
            <div className="flex justify-end items-center	mt-3">
              <div className=" bg-gray-300 p-4 rounded-lg shadow text-gray-700 max-w-2xl">
                <p>{msg.user}</p>
              </div>
              <Avatar sx={{ bgcolor: deepOrange[500] }}>U</Avatar>
            </div>
          )}
        </>
      ))}
      {counter === 3 && (
        <div className="text-center text-lg	font-medium	">{count}</div>
      )}
    </div>
  );
};

export default Messages;
