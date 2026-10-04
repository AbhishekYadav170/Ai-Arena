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