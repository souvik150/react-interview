import React from "react";

//Imports related css
import "./App.css";

//Import the data needed in the project
import { data } from "./data/data";

//Importing the components
import Chat from "./components/chat";

function App() {
  return (
    <div>
      <Chat
        name={data.author.name}
        avatar={data.author.avatar}
        text={data.text}
        replies={data.replies}
      />
        <div className="vl"></div>
    </div>
  );
}

export default App;
