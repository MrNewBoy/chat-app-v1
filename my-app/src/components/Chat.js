import React, { useState } from "react";
import Vote from "./Vote";

const Chat = () => {
  const [input, setInput] = useState();
  const [display, setDisplay] = useState([]);
  const sendData = (input) => {};
  const handleInput = (e) => {
    e.preventDefault();
    setDisplay((prev) => [...prev, input]);
    sendData(input);
  };
  return (
    <div className="h-full border border-black rounded-lg overflow-hidden">
      <div className="h-4/6 ">
        {display.map((item, index) => {
          return (
            <div className="bg-teal-100 p-1 m-1 rounded-lg" key={index}>
              <p className="width-full bg-slate-100 text-black font-medium p-1 m-1 rounded-md">
                {item}
              </p>
              <Vote />
            </div>
          );
        })}
      </div>
      <div className="h-2/6">
        <form className="p-2">
          <input
            className="border rounded-md border-black p-2 m-1"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message.."
          ></input>
          <button
            className="rounded-md border-black p-2 bg-blue-600 text-white"
            type="submit"
            onClick={handleInput}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
