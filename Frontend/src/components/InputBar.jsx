import { useState, useRef, useEffect } from 'react'

export default function InputBar({ onSend, loading }) {
  const [value, setValue] = useState('')
  const textareaRef = useRef(null)

  // Auto-resize textarea
  useEffect(() => {
    const ta = textareaRef.current
    if (!ta) return
    ta.style.height = 'auto'
    ta.style.height = Math.min(ta.scrollHeight, 120) + 'px'
  }, [value])

  const handleSubmit = () => {
    const trimmed = value.trim()
    if (!trimmed || loading) return
    onSend(trimmed)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // return (
  //   <div className="relative z-10 px-8 py-6 pb-8 from-surface/0 via-surface/80 to-surface bg-gradient-to-b w-full">
  //     <div className="relative flex items-end gap-3 bg-surface-container-lowest shadow-[0_4px_31px_rgba(43,52,55,0.06)] border border-outline-variant/15 rounded-full px-5 py-3 transition-colors focus-within:border-secondary/40 focus-within:shadow-[0_8px_30px_rgba(68,86,186,0.1)]">
  //       <textarea
  //         id="chat-input"
  //         ref={textareaRef}
  //         className="flex-1 bg-transparent border-none outline-none text-on-surface font-inter text-base resize-none py-1.5 px-2 placeholder:text-on-surface-variant/60"
  //         placeholder="Describe your highly complex problem..."
  //         value={value}
  //         onChange={(e) => setValue(e.target.value)}
  //         onKeyDown={handleKeyDown}
  //         rows={1}
  //         disabled={loading}
  //         aria-label="Chat input"
  //       />
  //       <button
  //         id="send-btn"
  //         className="flex items-center justify-center w-10 h-10 min-w-10 rounded-full bg-secondary text-white shadow-md disabled:opacity-40 disabled:shadow-none hover:bg-secondary/90 transition-transform active:scale-95"
  //         onClick={handleSubmit}
  //         disabled={!value.trim() || loading}
  //         aria-label="Send message"
  //       >
  //         {loading ? (
  //           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-spin">
  //             <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  //           </svg>
  //         ) : (
  //           <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative left-[1px]">
  //             <line x1="22" y1="2" x2="11" y2="13" />
  //             <polygon points="22 2 15 22 11 13 2 9 22 2" />
  //           </svg>
  //         )}
  //       </button>
  //     </div>
  //     <p className="text-center text-xs font-medium text-on-surface-variant mt-4">
  //       Press <kbd className="bg-surface-container-low px-1.5 py-0.5 rounded text-[0.7rem] border border-outline-variant/20 mx-1">Enter</kbd> to execute &middot; <kbd className="bg-surface-container-low px-1.5 py-0.5 rounded text-[0.7rem] border border-outline-variant/20 mx-1">Shift + Enter</kbd> for new line
  //     </p>
  //   </div>
  // )



   return (
  <div className="sticky bottom-0 w-full px-8 py-6 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent backdrop-blur-xl">

    <div className="relative flex items-end rounded-3xl border border-slate-700 bg-slate-900/90 backdrop-blur-xl shadow-2xl transition-all duration-300 focus-within:border-blue-500 focus-within:shadow-blue-500/20">

      <textarea
        id="chat-input"
        ref={textareaRef}
        value={value}
        rows={1}
        disabled={loading}
        placeholder="Ask any programming question..."
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent resize-none outline-none border-none text-slate-100 placeholder:text-slate-500 text-base px-6 py-5 max-h-40"
      />

      <button
        onClick={handleSubmit}
        disabled={!value.trim() || loading}
        className="
        m-3
        w-12
        h-12
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-cyan-500
        flex
        items-center
        justify-center
        shadow-lg
        shadow-blue-500/30
        hover:scale-105
        active:scale-95
        transition-all
        disabled:opacity-40
        disabled:hover:scale-100
        "
      >
        {loading ? (
          <svg
            className="animate-spin"
            width="22"
            height="22"
            fill="none"
            stroke="white"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M21 12a9 9 0 1 1-6.2-8.5" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        )}
      </button>

    </div>

    <p className="text-center text-slate-500 text-xs mt-3">
      Press <b>Enter</b> to send • <b>Shift + Enter</b> for a new line
    </p>

  </div>
);


}
