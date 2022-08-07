import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../store/slice/Auth";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.scss";
import ChatApi from "../../api/ChatApi";
import Conversation from "../../components/Conversation/Conversation";
import ChatBox from "../../components/ChatBox/ChatBox";
const Chat = () => {
  const dispatch = useDispatch();
  const socket = useRef();
  const { authData } = useSelector(selectAuth);
  const { user } = authData;

  const [chats, setChats] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  useEffect(() => {
    const getChats = async () => {
      try {
        const data = await ChatApi.getAllChat(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);
  return (
    <div className="chat container">
      {/* side menu */}
      <div className="chat__side__menu">
        <NavIcons />
        <div className="chat__side__menu__container">
          <h2>聊天列表</h2>
          <div className="chat__side__menu__container__chat__list">
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
                key={chat._id}
              >
                <Conversation chatData={chat} currentUser={user._id} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* chat room side */}
      <div className="chat__room__side">
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
