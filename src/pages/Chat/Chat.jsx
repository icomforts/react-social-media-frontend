import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth } from "../../store/slice/Auth";
import NavIcons from "../../components/NavIcons/NavIcons";
import "./Chat.scss";
import ChatApi from "../../api/ChatApi";
import UserApi from "../../api/UserApi";
import Conversation from "../../components/Conversation/Conversation";
import ChatBox from "../../components/ChatBox/ChatBox";
import { io } from "socket.io-client";
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
  const [userFollowings, setUserFollowings] = useState([]);
  //連線socket
  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL);
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      console.log(users);
      // ChatApi.createChat()
      setOnlineUsers(users);
    });
  }, [user]);
  // 告知socket送出訊息
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  //socket告知收到訊息
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data);
    });
  }, []);

  useEffect(() => {
    const getChats = async () => {
      try {
        const data = await ChatApi.getAllChat(user._id);
        const userFollowings = await UserApi.getAllFollowing(user._id);
        setUserFollowings(userFollowings);
        console.log(userFollowings);
        console.log(data);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };
  return (
    <div className="chat container">
      {/* side menu */}
      <div className="chat__side__menu">
        <NavIcons />
        <div className="chat__side__menu__container">
          <h2>聊天列表</h2>
          <div className="chat__side__menu__container__chat__list">
            {/* {userFollowings.map((following) => (
              <p>{following._id}</p>
            ))} */}
            {chats.map((chat) => (
              <div
                onClick={() => {
                  setCurrentChat(chat);
                }}
                key={chat._id}
              >
                <Conversation
                  chatData={chat}
                  currentUser={user._id}
                  online={checkOnlineStatus(chat)}
                />
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
