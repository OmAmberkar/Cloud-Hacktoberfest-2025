import React, { useState } from "react";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSend: (msg: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [msg, setMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    onSend(msg);
    setMsg("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-full border-t  p-3"
    >
      <input
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type your command..."
        className="flex-1  placeholder-green-400 focus:outline-none p-2 rounded border "
      />
      <button
        type="submit"
        className="ml-3 p-2 rounded bg-green-700 text-black hover:bg-green-500 transition"
      >
        <Send size={18} />
      </button>
    </form>
  );
}
