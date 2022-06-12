import { useEffect } from "react";
import "./App.css";

import Sidebar from "./component/JS/Sidebar";
import Header from "./component/JS/Header";
import RecommeandedVideo from "./component/JS/RecommeandedVideo";
import Login from "./component/JS/Login";
import SearchVideo from "./component/JS/SearchVideo";
import Upload from './component/JS/Upload';

import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Amplify from "aws-amplify";
import { AmplifyChatbot } from "@aws-amplify/ui-react/legacy";
import awsconfig from "./aws-exports";


Amplify.configure(awsconfig);



function App() {

  const handleChatComplete = (event) => {
    const { data, err } = event.detail;
    if (data) console.log("Chat fulfilled!", JSON.stringify(data));
    if (err) console.error("Chat failed:", err);
  };

  // useEffect(() => {
  //   const chatbotElement = document.querySelector("amplify-chatbot");
  //   chatbotElement.addEventListener("chatCompleted", handleChatComplete);
  //   return function cleanup() {
  //     chatbotElement.removeEventListener("chatCompleted", handleChatComplete);
  //   };
  // }, []);

  return (
    <div className="app">
      <Router>
        <Header />

        <Routes>
          <Route
            path="/search/:searchTerm"
            element={
              <div className="app__page">
                <Sidebar />
                <SearchVideo />
              </div>
            }
          />

          <Route
            path="/"
            element={
              <div className="app__page">
                <Sidebar />
                {/* <ChatBot botName="yourBotName" /> */}
                <RecommeandedVideo />
              </div>
            }
          />

          <Route
            path="/login"
            element={
              <div className="app__page">
                <Login />
              </div>
            }
          />

          <Route path="/upload" element=
            {
              <div className="app__page">
                 <Upload/>
                 
                 {/* <h1>upload</h1> */}
              </div>
            }
           />

        </Routes>
        {/* <AmplifyChatbot
                  botName="yourBotName"
                  botTitle="My ChatBot"
                  welcomeMessage="Hello, how can I help you?"
                /> */}
      </Router>
    </div>
  );
}

export default App;
