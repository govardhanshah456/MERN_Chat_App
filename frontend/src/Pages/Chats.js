import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
const Chats = () => {
  const [chats, setchats] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setchats(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </div>
  );
};

export default Chats;
