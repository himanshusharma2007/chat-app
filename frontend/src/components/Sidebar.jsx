import React from "react";
import { BiLogOut, BiSearch } from "react-icons/bi";
import { IoSearchCircleSharp } from "react-icons/io5";
import { logoutUser } from "../sevices/authServices";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const ConversationItem = ({ name, message, time, typing }) => (
    <div
      className={`flex items-center p-4 rounded-lg  hover:bg-[#5d447f] cursor-pointer  ${
        typing ? "bg-muted" : ""
      }`}
    >
      <div className="relative">
        <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute left-0 top-1/2 transform -translate-y-1/2"></div>
        <img
          src="https://openui.fly.dev/openui/24x24.svg?text=👤"
          alt={`${name}'s Avatar`}
          className="w-10 h-10 rounded-full"
        />
      </div>
      <div className="ml-3 flex-1">
        <div className="flex justify-between">
          <span className="font-semibold">{name}</span>
          <span className="text-sm text-muted">{time}</span>
        </div>
        <span className="text-muted-foreground">{message}</span>
      </div>
    </div>
  );
  return (
    <div className="flex h-[90vh] w-[50%] ">
      <aside className="h-full flex  flex-col w-16 bg-[#35244d] p-4">
        <div className="wraper relative">
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=👑"
            alt="App Icon"
            className=" absolute w-8 h-8 -top-4"
          />
          <img
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            alt={`${name}'s Avatar`}
            className="w-10 h-10 rounded-full"
          />
        </div>
        <div className="mt-auto text-white">
          <button
            onClick={() => {
              logoutUser();
              navigate("/login");
            }}
          >
            <BiLogOut fontSize={30} />
          </button>
        </div>
      </aside>
      <div className="flex flex-col  bg-[#402e58] text-white">
        <div className="flex items-center justify-between p-4 border-b border-border">
          <div className="relative w-full ">
            <input
              type="text"
              placeholder="Search Conversations"
              className="input bg-[#35244d] text-gray-300  p-2 pr-10 rounded-full focus:outline-none focus:ring focus:ring-ring w-full"
            />
            <div className="absolute top-2 right-1">
              <span>
                <BiSearch
                  className="bg-transparent text-gray-300"
                  fontSize={30}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <h2 className="p-4 font-semibold text-muted">Recent</h2>
          <div className="space-y-2">
            <ConversationItem
              name="Art Williams"
              message="Hey man, I wanted to ask..."
              time="Now"
            />
            <ConversationItem
              name="Nick Blanche"
              message="Nice Job!"
              time="Today"
            />
            <ConversationItem
              name="Richard McMasters"
              message="Welcome to the group."
              time="Tuesday"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
