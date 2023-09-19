import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  const [user, setuser] = useState();
  const [selectedChat, setSelectedChat] = useState();
  const [chats, setChats] = useState([]);

  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userinfo"));
    setuser(user);

    if (!user) history.push("/");
  }, [history]);

  return (
    <ChatContext.Provider
      value={{ user, setuser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
