import { useEffect, useRef, useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import Sidebar from "../components/Sidebar";
import { mockMessages } from "../data/mockMessages";

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasRunIntro = useRef(false);
  // === Sequential Intro Animation ===
  useEffect(() => {
  if (hasRunIntro.current) return; // ✅ skip if already ran
  hasRunIntro.current = true;

  let i = 0;
  const showIntro = () => {
    if (i < mockMessages.length) {
      const nextMsg = mockMessages[i];
      if (nextMsg) { // ✅ check exists
        setMessages((prev) => [...prev, nextMsg]);
        i++;
        setTimeout(showIntro, 1500);
      }
    }
  };
  showIntro();
}, []);


  // === Auto Scroll Down ===
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // === Handle Send ===
  const handleSend = (msg: string) => {
  const newMessage = { role: "user" as const, content: msg };
  setMessages((prev) => [...prev, newMessage]); // ✅ now type-safe

  // Simulate bot reply with delay
  setTimeout(() => {
    const reply = { role: "bot" as const, content: `Maaster : ${msg}` };
    setMessages((prev) => [...prev, reply]); // ✅ also type-safe
  }, 1000);
};


  return (
    <div className="flex bg-black   font-mono min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Chat Area */}
      <div className="ml-[20%] flex-1 flex flex-col h-screen">
        {/* Header */}
        <header className="border-b  p-3 flex justify-between items-center">
          <h1 className="text-lg font-bold tracking-widest   flex items-center gap-2">
            DevOps Terminal <span className="">| Chat Mode</span>
          </h1>
        </header>

        {/* Chat Scroll Area */}
        <main
          ref={containerRef}
          className="flex-1 overflow-y-auto px-6 py-6 space-y-5 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-black"
        >
          {messages.map((m, i) => (
            <ChatMessage key={i} role={m.role} content={m.content} />
          ))}
        </main>

        {/* Input */}
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
