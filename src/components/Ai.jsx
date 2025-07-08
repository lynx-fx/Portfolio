"use client";

import { useState, useRef, useEffect } from "react";
import "../styles/ai.css";
import { GoogleGenerativeAI } from "@google/generative-ai";

// Simple icon components
const MessageCircleIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
);

const XIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SendIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
    />
  </svg>
);

const BotIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
);

const UserIcon = () => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="icon">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    // Add a dummy user message first
    {
      id: "0",
      content: "Hello",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "1",
      content: "Hi! I'm Sudarshan's personal assistant. How may I assist you? ",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

function stripMarkdown(text) {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')         // **bold**
    .replace(/\*(.*?)\*/g, '$1')             // *italic*
    .replace(/__(.*?)__/g, '$1')             // __bold__
    .replace(/_(.*?)_/g, '$1')               // _italic_
    .replace(/`([^`]+)`/g, '$1')             // `inline code`
    .replace(/\[(.*?)\]\((.*?)\)/g, '$1 ($2)') // [text](url)
    .replace(/^#+\s+(.*)/gm, '$1')           // # headings
    .replace(/^\s*>+\s?/gm, '')              // > blockquotes
    .replace(/!\[.*?\]\(.*?\)/g, '')         // ![images](url)
    .replace(/^\s*[-*+]\s+/gm, '')           // unordered lists
    .replace(/^\d+\.\s+/gm, '')              // ordered lists
    .trim();
}



  // TODO: Use env here later on
  // const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "YOUR_API_KEY_HERE");
  const genAI = new GoogleGenerativeAI(
    "AIzaSyAdarrEURQN-vo9rO0_liYkDCwM0cGEPno"
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToGemini = async (userMessageContent) => {
    setIsTyping(true);

    try {
      // Get the generative model
      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash",
        generationConfig: {
          maxOutputTokens: 1000,
        },
        systemInstruction: {
          role: "system",
          content: `
You are the interactive assistant built into Sudarshan's developer portfolio website. Your role is to assist *visitors* of the site by answering questions about Sudarshan (also known as Lynx), his projects, skills, and background.

Speak in a friendly, professional tone — helpful but concise. Always refer to Sudarshan in the third person, like "Sudarshan is a full-stack developer based in Nepal."

The site showcases 3 projects:
1. **CardKeeper** – A web app to store and manage digital cards (built with React, Express, Node, MongoDB).
2. **TimeNest** – An app to store children's pictures and let them access when they are 18, for better memory collection(React, Node, Express, MongoDB).
3. **WiFi DeAuther** – A bash script tool for network testing via deauthentication attacks.

Sudarshan works with:
- JavaScript
- React
- Node.js
- Express
- MongoDB
- MySQL
- Tailwind CSS
- Git & GitHub

If users ask about a project, describe it briefly and optionally include the URL. If they ask about his skills, work experience, or location, respond accordingly. Do not refer to yourself as Sudarshan's assistant — instead, act like a part of his portfolio designed to help users explore.

Avoid long intros. Keep answers user-focused.

You are responding to visitors in sudarshan's portfolio so response accordingly to provide sudarshan's details to the visitors.

Your purpose is not to assist sudarshan but his visitors, you are to provide sudarshan details to the visitors.
    `,
        },
      });

      // Format chat history
      const chatHistory = messages.map((msg) => ({
        role: msg.sender === "user" ? "user" : "model",
        parts: [{ text: msg.content }],
      }));

      // Start chat session
      const chat = model.startChat({
        history: chatHistory,
      });

      // Send message and get response
      const result = await chat.sendMessage(userMessageContent);
      const cleanResponse = await stripMarkdown(result.response.text());

      // Create assistant message
      const assistantMessage = {
        id: (Date.now() + 1).toString(),
        content: cleanResponse,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);

      const errorMessage = {
        id: (Date.now() + 1).toString(),
        content:
          "Sorry, I encountered an error processing your request. Please try again later.",
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Create user message
    const userMessage = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    // Add user message immediately
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Call Gemini API with the user's message
    await sendToGemini(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="ai-assistant-container">
      {/* Chat Widget */}
      {isOpen && (
        <div className="chat-widget">
          <div className="chat-header">
            <div className="chat-title">
              <BotIcon />
              AI Assistant
            </div>
            <button className="close-button" onClick={() => setIsOpen(false)}>
              <XIcon />
            </button>
          </div>
          <div className="chat-content">
            {/* Messages Area */}
            <div className="messages-area">
              <div className="messages-container">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message-row ${message.sender}`}
                  >
                    {message.sender === "assistant" && (
                      <div className="avatar assistant">
                        <BotIcon />
                      </div>
                    )}
                    <div className={`message-bubble ${message.sender}`}>
                      {message.content}
                    </div>
                    {message.sender === "user" && (
                      <div className="avatar user">
                        <UserIcon />
                      </div>
                    )}
                  </div>
                ))}
                {isTyping && (
                  <div className="message-row assistant">
                    <div className="avatar assistant">
                      <BotIcon />
                    </div>
                    <div className="message-bubble assistant">
                      <div className="typing-indicator">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Area */}
            <div className="input-area">
              <div className="input-container">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about this portfolio..."
                  className="message-input"
                  disabled={isTyping}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="send-button"
                >
                  <SendIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="toggle-button"
        style={{
          position: "fixed",
          bottom: "16px",
          right: isOpen ? "352px" : "16px", // Move button to the left when chat is open
          zIndex: 51,
          transition: "right 0.3s ease-out",
        }}
      >
        {isOpen ? <XIcon /> : <MessageCircleIcon />}
      </button>
    </div>
  );
}
