// import SolutionCard from './SolutionCard'
// import JudgePanel from './JudgePanel'

// export default function MessageBlock({ data }) {
//   const { solution_1, solution_2, judge } = data

//   // Determine winner label
//   const winnerLabel =
//     judge.solution_1_score > judge.solution_2_score
//       ? 'Agent 1'
//       : judge.solution_2_score > judge.solution_1_score
//       ? 'Agent 2'
//       : 'Tie'

//   return (
//     <div className="flex flex-col gap-8.5 opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
//       {/* Side-by-side solution cards */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
//         <SolutionCard
//           agentNum={1}
//           score={judge.solution_1_score}
//           content={solution_1}
//         />
//         <SolutionCard
//           agentNum={2}
//           score={judge.solution_2_score}
//           content={solution_2}
//         />
//       </div>

//       {/* Judge verdict panel */}
//       <JudgePanel
//         score1={judge.solution_1_score}
//         score2={judge.solution_2_score}
//         reasoning1={judge.solution_1_reasoning}
//         reasoning2={judge.solution_2_reasoning}
//         winner={winnerLabel}
//       />
//     </div>
//   )
// }



// import SolutionCard from "./SolutionCard";
// import JudgePanel from "./JudgePanel";

// export default function MessageBlock({ data }) {
//   console.log("MessageBlock Data:", data);

//   return (
//     <div className="border-4 border-red-500 p-4">
//       <h1>MESSAGE BLOCK</h1>

//       <SolutionCard
//         agentNum={1}
//         score={data.judge.solution_1_score}
//         content={data.solution_1}
//       />

//       <SolutionCard
//         agentNum={2}
//         score={data.judge.solution_2_score}
//         content={data.solution_2}
//       />

//       <JudgePanel
//         score1={data.judge.solution_1_score}
//         score2={data.judge.solution_2_score}
//         reasoning1={data.judge.solution_1_reasoning}
//         reasoning2={data.judge.solution_2_reasoning}
//         winner="Tie"
//       />
//     </div>
//   );
// }




import { useState } from "react";
import { Copy, Check } from "lucide-react";
import SolutionCard from "./SolutionCard";
import JudgePanel from "./JudgePanel";

export default function MessageBlock({ data }) {
  const [copied, setCopied] = useState(false);

  if (!data || !data.judge) return null;

  const winner =
    data.judge.solution_1_score > data.judge.solution_2_score
      ? "Agent 1"
      : data.judge.solution_2_score > data.judge.solution_1_score
      ? "Agent 2"
      : "Tie";

  const handleCopy = async () => {
    const text = `
AI Battle

========================

Agent 1

Score: ${data.judge.solution_1_score}

${data.solution_1}

========================

Agent 2

Score: ${data.judge.solution_2_score}

${data.solution_2}

========================

Winner: ${winner}

Reason For Agent 1:
${data.judge.solution_1_reasoning}

Reason For Agent 2:
${data.judge.solution_2_reasoning}
`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-8 animate-[fadeIn_0.4s_ease]">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-on-surface">
          ⚖ AI Battle Result
        </h2>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-high transition-all"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>

      {/* AI Responses */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <SolutionCard
          agentNum={1}
          score={data.judge.solution_1_score}
          content={data.solution_1}
        />

        <SolutionCard
          agentNum={2}
          score={data.judge.solution_2_score}
          content={data.solution_2}
        />
      </div>

      {/* Judge */}
      <JudgePanel
        score1={data.judge.solution_1_score}
        score2={data.judge.solution_2_score}
        reasoning1={data.judge.solution_1_reasoning}
        reasoning2={data.judge.solution_2_reasoning}
        winner={winner}
      />
    </div>
  );
}