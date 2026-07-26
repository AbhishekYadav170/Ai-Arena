// import ReactMarkdown from 'react-markdown'
// import remarkGfm from 'remark-gfm'
// import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
// import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
// import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python'

// // Register common languages
// SyntaxHighlighter.registerLanguage('javascript', js)
// SyntaxHighlighter.registerLanguage('js', js)
// SyntaxHighlighter.registerLanguage('python', python)
// SyntaxHighlighter.registerLanguage('py', python)

// // export default function SolutionCard({ agentNum, score, content }) {
// //   const isAgentOne = agentNum === 1
  
// //   return (
// //     <div className={`flex flex-col bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_4px_20px_0_rgba(43,52,55,0.05)] border ${isAgentOne ? 'border-ai1/10' : 'border-ai2/10'}`}>
// //       {/* Header */}
// //       <div className="flex items-center justify-between px-6 py-4 border-b border-surface-container-low">
// //         <div className="flex items-center gap-3">
// //           <div className={`w-2.5 h-2.5 rounded-full shadow-md animate-pulse ${isAgentOne ? 'bg-ai1 shadow-ai1/50' : 'bg-ai2 shadow-ai2/50'}`}></div>
// //           <span className={`font-semibold tracking-wide text-sm uppercase ${isAgentOne ? 'text-ai1' : 'text-ai2'}`}>
// //             Neural Agent {agentNum}
// //           </span>
// //         </div>
// //         <div className="px-3 py-1 rounded-full bg-surface-container-low/50 text-on-surface-variant text-xs font-bold font-mono">
// //           Score: {score}/10
// //         </div>
// //       </div>
      

// //       {/* Scrollable Content */}
// //       <div className="p-6 max-h-[500px] overflow-y-auto prose prose-sm max-w-none prose-headings:font-bold prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-secondary prose-code:text-primary prose-strong:text-on-surface">
// //         {/* <ReactMarkdown
// //           remarkPlugins={[remarkGfm]}
// //           components={{
// //             code({ node, inline, className, children, ...props }) {
// //               const match = /language-(\w+)/.exec(className || '')
// //               return !inline && match ? (
// //                 <div className="rounded-xl overflow-hidden my-4 border border-outline-variant/20 shadow-sm">
// //                   <SyntaxHighlighter
// //                     style={atomOneDark}
// //                     language={match[1]}
// //                     PreTag="div"
// //                     customStyle={{ margin: 0, padding: '1rem', fontSize: '0.875rem' }}
// //                     {...props}
// //                   >
// //                     {String(children).replace(/\n$/, '')}
// //                   </SyntaxHighlighter>
// //                 </div>
// //               ) : (
// //                 <code className="bg-surface-container-highest/50 text-on-surface px-1.5 py-0.5 rounded text-[0.85em] font-mono" {...props}>
// //                   {children}
// //                 </code>
// //               )
// //             }
// //           }}
// //         >
// //           {content}
// //         </ReactMarkdown> */}

// //         <div className="whitespace-pre-wrap text-on-surface">
// //               {content}
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }



// export default function SolutionCard({ agentNum, score, content }) {
//   return (
//     <div className="border border-gray-300 rounded-xl p-5 bg-white text-black">
//       <h2>Agent {agentNum}</h2>
//       <p>Score: {score}/10</p>

//       <div style={{ whiteSpace: "pre-wrap", marginTop: "10px" }}>
//         {content}
//       </div>
//     </div>
//   );
// }







import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, Check } from "lucide-react";

import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";

SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("js", js);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("py", python);

export default function SolutionCard({ agentNum, score, content }) {
  const [copied, setCopied] = useState(false);

  const isAgentOne = agentNum === 1;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div
      className={`rounded-3xl overflow-hidden border shadow-lg bg-surface-container-lowest transition-all duration-300 hover:shadow-xl ${
        isAgentOne ? "border-ai1/20" : "border-ai2/20"
      }`}
    >
      {/* Header */}

      <div className="flex items-center justify-between px-6 py-4 border-b border-outline-variant/20">

        <div className="flex items-center gap-3">

          <div
            className={`w-3 h-3 rounded-full ${
              isAgentOne ? "bg-ai1" : "bg-ai2"
            }`}
          />

          <div>

            <h3
              className={`font-bold ${
                isAgentOne ? "text-ai1" : "text-ai2"
              }`}
            >
              Agent {agentNum}
            </h3>

            <p className="text-xs text-on-surface-variant">
              AI Solution
            </p>

          </div>
        </div>

        <div className="flex items-center gap-3">

          <span className="px-3 py-1 rounded-full bg-surface-container-high text-sm font-semibold">
            ⭐ {score}/10
          </span>

          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-3 py-2 rounded-xl border hover:bg-surface-container-high transition"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}

            <span className="text-sm">
              {copied ? "Copied" : "Copy"}
            </span>
          </button>

        </div>

      </div>

      {/* Content */}

      <div className="p-6 max-h-[550px] overflow-y-auto">

        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");

              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={atomOneDark}
                  PreTag="div"
                  customStyle={{
                    borderRadius: "14px",
                    padding: "16px",
                    marginTop: "15px",
                    marginBottom: "15px",
                  }}
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code
                  className="bg-gray-100 px-1 py-0.5 rounded"
                  {...props}
                >
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>

      </div>
    </div>
  );
}