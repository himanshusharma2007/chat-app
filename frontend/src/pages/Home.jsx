import React from "react";
import Sidebar from "../components/Sidebar";
import MessagesContainer from "../components/MessagesContainer";

const Home = () => {
  return (
    <div className="w-[80vw] h-full bg-white flex   rounded-md">
      <Sidebar />
      <MessagesContainer />
    </div>
  );
};

export default Home;
