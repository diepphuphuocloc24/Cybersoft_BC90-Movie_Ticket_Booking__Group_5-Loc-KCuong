import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchChatBot } from "./slice";

const BotChat = () => {
    const dispatch = useDispatch();

    const [showChatBot, setShowChatBot] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        dispatch(fetchChatBot());
    }, [dispatch]);

    useEffect(() => {
        if (!showChatBot || messages.length > 0) return;

        setTimeout(() => {
            setMessages([{ from: "bot", text: "Hi 👋" }]);

            setTimeout(() => {
                setMessages((prev) => [
                    ...prev,
                    {
                        from: "bot",
                        text: "I’m your movie assistant. I can help you book tickets, check schedules, or movie info 🎬",
                    },
                ]);
            }, 1000);
        }, 1000);
    }, [showChatBot, messages.length]);

    const getBotReply = (userMessage) => {
        const msg = userMessage.toLowerCase().trim();

        if (msg === "hi" || msg === "hello") {
            return "Hello! How can I help you today? 😊";
        }

        if (
            msg.includes("book") ||
            msg.includes("ticket") ||
            msg.includes("booking")
        ) {
            return `🎬 Yay! Let’s book your movie ticket together 💖

First, choose the movie you’re excited to watch and pick a showtime that fits your schedule.  
Then, make sure you’re logged in as a member 🔐 so you can select your favorite seats and add some snacks or drinks if you’d like 🍿🥤  
Finally, complete the payment and your e-ticket will be ready instantly 🎟️✨  

All set! Just head to the cinema and enjoy the show. I’m here if you need anything 🤗`;
        }

        if (msg === "thanks" || msg === "thank you") {
            return "You're very welcome! I'm happy to help you 😊";
        }

        return "Sorry, I didn’t quite understand that. Could you rephrase? 🤔";
    };

    const sendMessage = () => {
        if (!message.trim()) return;

        const userText = message;

        setMessages((prev) => [...prev, { from: "user", text: userText }]);
        setMessage("");

        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { from: "bot", text: getBotReply(userText) },
            ]);
        }, 800);
    };

    return (
        <>
            <button
                onClick={() => setShowChatBot(true)}
                className="
          fixed bottom-[30%] lg:bottom-[15%] right-[2.5%]
          w-12 h-12 lg:w-14 lg:h-14
          bg-red-500 text-white
          flex items-center justify-center
          rounded-xl
          shadow-lg shadow-red-500/40
          hover:bg-red-600 hover:scale-110
          transition-all duration-300
          cursor-pointer
          z-50
        "
            >
                <i className="fi fi-rr-chatbot-speech-bubble text-2xl cursor-pointer"></i>
            </button>

            {showChatBot && (
                <div
                    className="
            fixed bottom-[40%] lg:bottom-[25%] right-[2.5%]
            w-[85%] sm:w-[60%] md:w-[40%]
            bg-[#111]
            rounded-2xl
            shadow-2xl
            overflow-hidden
            z-50
          "
                >
                    <div className="flex items-center justify-between px-4 py-3 bg-red-500 text-white">
                        <span className="font-semibold select-none">FeelDiamondCine Bot</span>
                        <button
                            onClick={() => setShowChatBot(false)}
                            className="cursor-pointer"
                        >
                            <i className="fi fi-rr-cross text-sm cursor-pointer"></i>
                        </button>
                    </div>

                    <div className="h-64 overflow-y-auto px-3 py-3 space-y-3 text-sm bg-[#111]">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.from === "user"
                                    ? "justify-end"
                                    : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`px-4 py-2 rounded-2xl max-w-[80%] leading-relaxed ${msg.from === "user"
                                        ? "bg-red-500 text-white"
                                        : "bg-[#2a2a2a] text-gray-100"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 px-3 py-3 bg-[#1a1a1a]">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type your message..."
                            className="
                flex-1 px-4 py-2
                rounded-xl
                bg-[#222] text-white
                text-sm
                outline-none
              "
                        />
                        <button
                            onClick={sendMessage}
                            className="
                px-4 py-2
                bg-red-500 rounded-xl
                hover:bg-red-600
                transition
                cursor-pointer
              "
                        >
                            <i className="fi fi-rr-paper-plane cursor-pointer"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BotChat;
