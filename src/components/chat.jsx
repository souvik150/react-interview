import React, { useState } from "react";

function Chat({ name, avatar, text, replies }) {
  // Handles visibility of the comments
  const [visibility, setVisibility] = useState(true);
  const handleClick = () => {
    setVisibility(!visibility);
  };

  console.log(replies);

  return (
    <div>

      <div className="flex flex-row items-center">
        <img
          className="w-10"
          onClick={handleClick}
          src={avatar}
          alt="user-avatar"
        />

        <p className="text-2xl">{name}</p>
      </div>
      {visibility && <p className="pl-10">{text}</p>}
      <div className="ml-10">
        {/*Recusively calls the chat component*/}

        {replies &&
          replies.map((child) => {
            return (
                <>
              <Chat
                name={child.author.name}
                avatar={child.author.avatar}
                text={child.text}
                replies={child.replies}
              />

               </>
            );
          })}
      </div>
    </div>
  );
}

export default Chat;
