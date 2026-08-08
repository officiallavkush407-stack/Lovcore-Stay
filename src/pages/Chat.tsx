import { ArrowLeft, Search, Send } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

function Chat() {
    const [searchParams] = useSearchParams();

const ownerId = searchParams.get("owner");
const roomId = searchParams.get("room");

console.log("Owner ID:", ownerId);
console.log("Room ID:", roomId);
console.log(
  "Chat URL:",
  window.location.href
);
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* Header */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100">
        <div className="flex items-center gap-3 px-4 py-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
            <ArrowLeft size={20} />
          </button>

          <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
            LS
          </div>

          <div className="flex-1">
            <h1 className="font-bold text-gray-900">
              Lovcore Stay
            </h1>

            <p className="text-xs text-green-600">
              Online
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="px-4 pb-4">
          <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-4 py-3">
            <Search size={18} className="text-gray-400" />

            <input
              type="text"
              placeholder="Search messages..."
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-col items-center justify-center px-6 pt-28 text-center">

        <div className="w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center">
          <span className="text-2xl font-bold text-blue-600">
            💬
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-gray-900">
          Start a conversation
        </h2>

        <p className="mt-2 text-sm text-gray-500 max-w-xs">
          Contact room owners, ask questions and find your perfect room.
        </p>

      </div>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-3 py-3">

        <div className="flex items-center gap-2 bg-gray-100 rounded-2xl p-2">

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
            placeholder="Type a message..."
            className="flex-1 bg-transparent outline-none px-2 text-sm"
          />

          <button
            onClick={sendMessage}
            className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center active:scale-95 transition"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}

export default Chat;