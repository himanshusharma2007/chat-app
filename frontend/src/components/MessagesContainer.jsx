import React, { useState } from "react";
import { BiLink, BiSend } from "react-icons/bi";
import { BsEmojiSmile, BsLink } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { BsSend } from "react-icons/bs";
import { TiMessages } from "react-icons/ti";

const MessagesContainer = () => {
  const [noMessageSelected, setNoMessageSelected] = useState(false);
  const Message = ({ isUser }) => {
    return (
      <div class={`chat chat-${isUser ? "end" : "start"}`}>
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <div class="chat-header">
          <time class="text-xs opacity-50">12:45</time>
        </div>
        <div
          class={`chat-bubble ${
            isUser ? "bg-purple-500 text-white" : "bg-gray-100 text-zinc-700"
          }  `}
        >
          You were the Chosen One!
        </div>
      </div>
    );
  };

  const NoChatSelected = () => {
    return (
      <div className="bgEmail flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-600 font-semibold flex flex-col items-center gap-2">
          <p>Welcome 👋 Himanshu Sharma ❄</p>
          <p>Select a chat to start messaging</p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    );
  };
  return (
    <div className="w-full flex flex-col justify-between flex-grow-1 p-4 h-[90vh]   text-gray-700">
      {noMessageSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <header>
            <div className="left flex space-x-2  items-center ">
              <img
                src="https://openui.fly.dev/openui/24x24.svg?text=👤"
                alt={`${name}'s Avatar`}
                className="w-10 h-10 rounded-full"
              />
              <div className="title">
                <h1 className="text-lg font-medium">John Doe</h1>
                <div className="relative flex space-x-2 items-center">
                  <p>Online</p>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 absolute right-4 top-1/2 transform -translate-y-1/2"></div>
                </div>
              </div>
            </div>
            <div className="right"></div>
          </header>
          <div className="messages overflow-auto custom-scrollbar">
            <Message isUser />
            <Message />
            <Message isUser />
            <Message />
            <Message isUser />
            <Message />
            <Message isUser />
            <Message />
            <Message isUser />
            <Message />
            <Message isUser />
            <Message />
          </div>
          <div className="message-box flex justify-between space-x-3 p-4 w-full  mt-auto border-[1px] border-zinc-900 rounded-full text-gray-700">
            <button>
              <GrAttachment fontSize={25} />
            </button>

            <input
              type="text"
              className="flex-grow outline-none "
              placeholder="type your message"
            />
            <button>
              <BsEmojiSmile fontSize={25} />
            </button>
            <button>
              <BiSend className="text-purple-500" fontSize={30} />
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MessagesContainer;
