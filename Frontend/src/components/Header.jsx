// import React from 'react';
// import { Moon, Sun } from "lucide-react";

// export default function Header({ onNewChat }) {

  

//   return (
//     <header className="flex items-center justify-between px-8 py-4 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest z-10 sticky top-0">
//       <div className="flex items-center gap-3">
//         <div>
//           <h1 className="text-xl font-bold tracking-tight text-on-surface">Digital Curator</h1>
//           <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">AI Battle Arena</p>
//         </div>
//       </div>
//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(33,197,94,0.6)] animate-pulse"></span>
//           <span className="text-sm font-medium text-on-surface-variant">Systems Online</span>
//         </div>
//         <button
//           onClick={onNewChat}
//           className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-primary hover:bg-surface-container-lowest hover:shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] transition-all font-semibold text-sm"
//         >
//           New Problem
//         </button>
        
//       </div>
//     </header>
//   )
// }






// import React from "react";
// import { Moon, Sun } from "lucide-react";

// export default function Header({
//   onNewChat,
//   darkMode,
//   setDarkMode,
// }) {
//   return (
//     <header className="flex items-center justify-between px-8 py-4 bg-surface/80 backdrop-blur-xl border-b border-surface-container-highest z-10 sticky top-0">
//       <div className="flex items-center gap-3">
//         <div>
//           <h1 className="text-xl font-bold tracking-tight text-on-surface">
//             Digital Curator
//           </h1>
//           <p className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider">
//             AI Battle Arena
//           </p>
//         </div>
//       </div>

//       <div className="flex items-center gap-4">
//         <div className="flex items-center gap-2">
//           <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
//           <span className="text-sm font-medium text-on-surface-variant">
//             Systems Online
//           </span>
//         </div>

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline-variant hover:bg-surface-container-high transition"
//         >
//           {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//           {darkMode ? "Light" : "Dark"}
//         </button>

//         <button
//           onClick={onNewChat}
//           className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest text-primary hover:bg-surface-container-lowest transition-all font-semibold text-sm"
//         >
//           New Problem
//         </button>
//       </div>
//     </header>
//   );
// }


import { Moon, Sun, Sparkles, Plus } from "lucide-react";

export default function Header({
  onNewChat,
  darkMode,
  setDarkMode,
}) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">

      <div className="max-w-7xl mx-auto h-16 px-8 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 via-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <Sparkles size={18} className="text-white" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              Digital Curator
            </h1>

            <p className="text-xs tracking-[0.25em] uppercase text-slate-400">
              AI Battle Arena
            </p>
          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <div className="flex items-center gap-2 text-slate-300">

            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>

            <span className="text-sm">
              Online
            </span>

          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 transition flex items-center justify-center"
          >
            {darkMode ? (
              <Sun size={18} className="text-yellow-400" />
            ) : (
              <Moon size={18} className="text-slate-300" />
            )}
          </button>

          <button
            onClick={onNewChat}
            className="px-5 h-11 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all text-white font-semibold flex items-center gap-2 shadow-lg shadow-blue-500/30"
          >
            <Plus size={18} />
            New Battle
          </button>

        </div>

      </div>

    </header>
  );
}