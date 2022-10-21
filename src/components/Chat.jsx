import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import "./style.css";

const Chat = ({ userName }) => {
  const [message, setMessage] = useState("");
  const [sendChat, setSendChat] = useState(false);
  const [chatMessage, setChatMessage] = useState([]);
  const [index, setIndex] = useState(10);
  const [isCompleted, setIsCompleted] = useState(false);

  const initialPosts = chatMessage.slice(0, index);

  console.log(initialPosts);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendChat = () => {
    if (message === "") {
      alert("Please Enter a message!!");
      return;
    }

    setSendChat(true);
    if (!localStorage.getItem(userName)) {
      localStorage.setItem(userName, JSON.stringify([]));
    }

    const chatHistory = JSON.parse(localStorage.getItem(userName));
    chatHistory.push(message);
    localStorage.setItem(userName, JSON.stringify(chatHistory));
    setChatMessage(chatHistory);
  };

  //   chat history
  const chatHistory = () => {
    setSendChat(true);
    if (!localStorage.getItem(userName)) {
      localStorage.setItem(userName, JSON.stringify([]));
    }

    const chatHistory = JSON.parse(localStorage.getItem(userName));
    chatHistory.push(message);
    localStorage.setItem(userName, JSON.stringify(chatHistory));
    setChatMessage(chatHistory);
  };

  //load more chats
  const loadMore = () => {
    setIndex(index + 5);
    console.log(index);
    if (index >= chatMessage.length) {
      setIsCompleted(true);
    } else {
      setIsCompleted(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="chat_container">
        {sendChat && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            className="chat_text"
          >
            {initialPosts.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                  key={item.index}
                >
                  <Typography
                    style={{
                      background: "blue",
                      color: "white",
                      margin: "0 20px",
                      textTransform: "uppercase",
                      borderRadius: "50%",
                      width: "50px",
                      height: "50px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variant="h5"
                  >
                    {userName.charAt(0)}
                  </Typography>
                  <div
                    className=""
                    key={item.index}
                    style={{
                      height: "auto",
                      background: "white",
                      padding: "10px 20px",
                      margin: "20px 0",
                      width: "200px",
                    }}
                  >
                    {item}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: "0",
          zIndex: "2",
        }}
        className="chat_text_box"
      >
        <Box
          style={{
            display: "flex",
            padding: "10px 20px",
          }}
        >
          <input
            type="text"
            className="chat_box_input"
            onChange={handleMessageChange}
          />
          <IconButton
            variant="contained"
            style={{
              color: "white",
            }}
            onClick={handleSendChat}
          >
            <SendIcon />
          </IconButton>
          {isCompleted ? (
            <Button onClick={loadMore} variant="contained">
              That's It
            </Button>
          ) : (
            <Button onClick={loadMore} variant="contained">
              Load More
            </Button>
          )}
          <Button onClick={chatHistory} variant="contained">
            History
          </Button>
        </Box>
      </div>
    </div>
  );
};

export default Chat;
