import { User, Bot } from "lucide-react";
import { useTypewriter } from "../hooks/useTypeWriter";

interface ChatMessageProps {
  role: "user" | "bot";
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  // 1️⃣ Always call the hook
const typed = useTypewriter(content, 25);

// 2️⃣ Then decide what to display
const displayed = role === "bot" ? typed : content;

  return (
    <div
      className={`flex items-start gap-3 ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {/* Avatar/Icon */}
      {role === "bot" && (
        <div className="b p-2 rounded-full border-2 border-green-700 shadow-md">
          <Bot size={18}  />
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[70%] p-3 rounded-lg text-sm leading-relaxed shadow-lg ${
          role === "user"
            ? "  border border-green-600"
            : " border border-green-800"
        }`}
      >
        {displayed}
        {role === "bot" && <span className="cursor-block" />}
      </div>

      {/* User Icon */}
      {role === "user" && (
        <div className=" p-2 rounded-full border-2 border-green-700 shadow-md">
          <User size={18} />
        </div>
      )}
    </div>
  );
}
