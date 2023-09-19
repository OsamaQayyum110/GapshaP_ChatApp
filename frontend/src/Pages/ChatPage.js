import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";
import { Box } from "@chakra-ui/layout";
import { useState } from "react";

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
//this earlier work
// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// const ChatPage = () => {
//   const [chats, setChats] = useState([]);

//   const fetchChats = async () => {
//     const { data } = await axios.get("/api/chatpage");

//     setChats(data);
//   };
//   useEffect(() => {
//     fetchChats();
//   }, []);
// return (
//   <div>
//     {/* this is earlier work */}
//     {/* {chats.map((chat) => (
//         <div key={chat._id}>{chat.chatName}</div>
//       ))} */}
//   </div>
// );}
