import React from "react";
import Arrow from "../assests/Icons/down.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p className="text-center font-bold text-4xl mt-8">
        Enter into Student Info System
      </p>
      <img
        className="w-12 h-12 inline absolute top-56 left-1/2 animate-bounce	"
        src={Arrow}
        alt="arrow"
      />
      <Button
        style={{ position: "absolute", top: "45%", left: "41%" }}
        color="secondary"
        variant="contained"
        onClick={() => navigate("/chat")}
      >
        Enroll Now!
      </Button>
    </div>
  );
};

export default Home;
