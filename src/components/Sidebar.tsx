import { useState } from "react";
import {
  PlusCircle,
  Trash2,
  Settings,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Bot,
} from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen border-r border-green-700 font-mono transition-all duration-300 ${
        collapsed ? "w-[70px]" : "w-1/5"
      } flex flex-col`}
    >
      {/* === Header / Logo === */}
      <div className="relative border-b border-green-700 p-4 flex items-center justify-between">
        <div className={`flex items-center gap-2 ${collapsed ? "hidden" : ""}`}>
          <Bot  size={22} />
          <div>
            <h1 className="text-2xl! font-extrabold tracking-widest">
              DevOps Chatbot
            </h1>
            <p className="text-xs">v1.0</p>
            <p className="text-xs">For Engineers By Engineers</p>
          </div>
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-9 border-2 border-green-500 bg-black rounded-full p-1 hover:bg-green-500 transition"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      {/* === Recent Chats === */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        <div className={`${collapsed ? "hidden" : "block"}`}>

          <button className="flex items-center gap-2 hover:text-green-200 transition border-2 rounded-3xl w-full justify-center py-2 mb-4">
            <PlusCircle size={18} />
            {!collapsed && <span>New Chat</span>}
          </button>

          <h2 className=" font-bold tracking-widest mb-2">
            Recent Chats
          </h2>
          <ul className="space-y-2 text-sm">
            {["Server Deployment", "Docker Configs", "CI/CD Pipeline"].map(
              (chat, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 hover:bg-green-800 hover:text-green-100 p-2 rounded cursor-pointer transition"
                >
                  <MessageSquare size={16} />
                  {!collapsed && <span>{chat}</span>}
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      {/* === Actions === */}
      <div className="border-t border-green-700 p-4 space-y-3">
        <button className="flex items-center gap-2 hover:text-green-200 transition">
          <Trash2 size={18} />
          {!collapsed && <span>Clear History</span>}
        </button>

        <button className="flex items-center gap-2 hover:text-green-200 transition">
          <Settings size={18} />
          {!collapsed && <span>Settings</span>}
        </button>
      </div>
    </aside>
  );
}
