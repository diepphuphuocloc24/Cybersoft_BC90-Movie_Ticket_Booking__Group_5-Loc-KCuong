import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchChatBot } from "./slice";

const BotChat = () => {
    const dispatch = useDispatch();
    const dataChatBot = useSelector((state) => state.botChatReducer);
    const { dataBotChat } = dataChatBot;

    const [showChatBot, setShowChatBot] = useState(false);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        dispatch(fetchChatBot());
    }, [dispatch]);

    useEffect(() => {
        if (!showChatBot || messages.length > 0) return;

        const timer = setTimeout(() => {
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

        return () => clearTimeout(timer);
    }, [showChatBot, messages.length]);

    const openBotChat = () => setShowChatBot(true);
    const closeBotChat = () => setShowChatBot(false);

    const sendMessage = () => {
        if (!message.trim()) return;

        setMessages((prev) => [
            ...prev,
            { from: "user", text: message },
            { from: "bot", text: "🎬 Thanks! I’ll get back to you soon." },
        ]);
        setMessage("");
    };

    return (
        <>
            <button
                onClick={openBotChat}
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
            fixed bottom-[40%] lg:bottom-[30%] right-[2.5%]
            w-[85%] sm:w-[60%] md:w-[40%] lg:w-[320px]
            bg-[#111] text-white
            rounded-2xl
            shadow-2xl
            overflow-hidden
            z-50
          "
                >
                    <div className="flex items-center justify-between px-4 py-3 bg-red-500">
                        <span className="font-semibold">FeelDiamondCine Bot</span>
                        <button onClick={closeBotChat} className="cursor-pointer">
                            <i className="fi fi-rr-cross text-sm"></i>
                        </button>
                    </div>

                    <div className="h-60 overflow-y-auto px-3 py-2 space-y-2 text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                <div
                                    className={`px-3 py-2 rounded-xl max-w-[80%] ${msg.from === "user"
                                        ? "bg-red-500 text-white"
                                        : "bg-gray-700 text-gray-100"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 px-3 py-2 bg-[#1a1a1a]">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type your message..."
                            className="
                flex-1 px-3 py-2
                rounded-xl
                bg-[#222] text-white
                text-sm
                outline-none
              "
                        />
                        <button
                            onClick={sendMessage}
                            className="
                px-3 py-2
                bg-red-500 rounded-xl
                hover:bg-red-600
                cursor-pointer
              "
                        >
                            <i className="fi fi-rr-paper-plane"></i>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default BotChat;
