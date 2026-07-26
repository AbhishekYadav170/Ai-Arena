
import ChatArea from '../components/ChatArea'
import InputBar from '../components/InputBar'
import Header from '../components/Header'
import { generateBattleResponse } from '../services/battleService'
import { useState, useEffect } from "react";
import AuroraBackground from "../components/AuroraBackground";


function App() {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
     if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
         document.documentElement.classList.remove("dark");
         localStorage.setItem("theme", "light");
      }
    }, [darkMode]);

  const handleNewChat = () => {
    setMessages([])
  }


  const handleSend = async (text) => {
  if (!text.trim() || loading) return;

  const userMsg = {
    role: "user",
    content: text,
    id: Date.now(),
  };

  setMessages((prev) => [...prev, userMsg]);
  setLoading(true);

  try {
    const result = await generateBattleResponse(text);

    console.log("API Result:", result);

    const arenaMsg = {
      role: "arena",
      id: Date.now() + 1,
      problem: text,
      solution_1: result.solution_1,
      solution_2: result.solution_2,
      judge: result.judge,
    };

    console.log("Arena Msg:", arenaMsg);

    setMessages((prev) => {
      const updated = [...prev, arenaMsg];
      console.log("Updated Messages:", updated);
      return updated;
    });
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
       {darkMode && <AuroraBackground /> }
    <div className="relative z-10 flex flex-col h-screen min-h-screen bg-transparent">
      <Header
          onNewChat={handleNewChat} 
          darkMode={darkMode}
          setDarkMode={setDarkMode}
      />
      <div className="flex-1 flex  items-center justify-center p-6 overflow-hidden">
       <div
          className="w-full max-w-7xl h-[90vh] rounded-[32px] flex flex-col overflow-hidden backdrop-blur-2xl"
          style={{
                background: "rgba(15,23,42,0.72)",
                border: "1px solid rgba(139,92,246,0.30)",
                boxShadow: `
                   0 0 30px rgba(139,92,246,.12),
                   0 0 60px rgba(59,130,246,.08),
                   inset 0 1px 0 rgba(255,255,255,.05)
                `,
          }}
      >
          <ChatArea messages={messages} loading={loading} />
          <InputBar onSend={handleSend} loading={loading} />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
