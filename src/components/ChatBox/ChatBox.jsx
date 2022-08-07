import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserApi from "../../api/UserApi";
import MessageApi from "../../api/MessageApi";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import "./ChatBox.scss";
const ChatBox = ({ chat, currentUser, setSendMessage, receivedMessage }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    const userId = chat?.members?.find((id) => id !== currentUser);

    const getUserData = async () => {
      try {
        const { user } = await UserApi.get(userId);
        setUserData(user);
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    };
    if (chat !== null) getUserData();
  }, [chat, currentUser]);
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await MessageApi.getMessages(chat._id);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    if (chat !== null) fetchMessages();
  }, [chat]);
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };
  const handleSendMessage = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUser,
      text: newMessage,
      chatId: chat._id,
    };
    const receiverId = chat.members.find((id) => id !== currentUser);
    // send message to socket server
    setSendMessage({ ...message, receiverId });
    // send message to database
    try {
      const { data } = await MessageApi.addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch {
      console.log("error");
    }
  };
  return (
    <div className="chatBox">
      {chat ? (
        <>
          <div className="chatBox__header">
            <div className="chatBox__header__user">
              <img
                className="chatBox__header__user__image"
                src={
                  userData?.profileImage
                    ? process.env.REACT_APP_PUBLIC_FOLDER +
                      userData.profileImage
                    : process.env.REACT_APP_PUBLIC_FOLDER + "defaultProfile.png"
                }
                alt="Profile"
              />
              <div className="chatBox__header__user__info">
                <span>
                  {userData?.firstname} {userData?.lastname}
                </span>
              </div>
            </div>
            <hr />
          </div>
          <div className="chatBox__content">
            {messages.map((message) => (
              <div
                className={
                  message.senderId === currentUser
                    ? "chatBox__content__message chatBox__content__message__owner"
                    : "chatBox__content__message"
                }
                key={message._id}
              >
                <span>{message.text}</span>
                <span>{format(message.createdAt)}</span>
              </div>
            ))}
          </div>
          <div className="chatBox__send">
            <div className="chatBox__send__upload">+</div>
            <InputEmoji value={newMessage} onChange={handleChange} />
            <button
              className="chatBox__send__button iButton"
              onClick={handleSendMessage}
            >
              送出
            </button>
          </div>
        </>
      ) : (
        <div className="chatBox__empty">
          <h2>開始聊天吧</h2>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
