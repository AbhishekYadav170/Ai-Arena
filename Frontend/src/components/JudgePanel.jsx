// export default function JudgePanel({ score1, score2, reasoning1, reasoning2, winner }) {
//   return (
//     <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-[0_4px_30px_0_rgba(43,52,55,0.05)] border border-judge/20 mt-8">
//       {/* Header */}
//       <div className="flex items-center justify-between px-8 py-5 bg-judge/5 border-b border-judge/10">
//         <div className="flex items-center gap-3">
//           <div className="w-3 h-3 rounded-full bg-judge shadow-[0_0_8px_rgba(245,158,11,0.6)]"></div>
//           <h3 className="font-bold text-judge text-lg tracking-tight">Judge Verdict</h3>
//         </div>
//         <div className="flex items-center gap-2">
//           <span className="text-sm font-semibold text-on-surface-variant">Recommended:</span>
//           <span className="px-3 py-1 rounded-full bg-judge/10 text-judge font-bold uppercase tracking-wider text-xs border border-judge/20">
//             {winner}
//           </span>
//         </div>
//       </div>
      
//       {/* Reasoning Body */}
//       <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-surface-container-high bg-surface-container-lowest">
        
//         {/* Agent 1 Reason */}
//         <div className="p-8">
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-xs font-bold uppercase tracking-widest text-ai1">Agent 1 Feedback</span>
//             <span className="text-2xl font-black text-ai1 font-mono">{score1}/10</span>
//           </div>
//           <p className="text-on-surface-variant text-sm leading-relaxed">
//             {reasoning1}
//           </p>
//         </div>
        
//         {/* Agent 2 Reason */}
//         <div className="p-8 bg-surface-container-low/30">
//           <div className="flex items-center justify-between mb-4">
//             <span className="text-xs font-bold uppercase tracking-widest text-ai2">Agent 2 Feedback</span>
//             <span className="text-2xl font-black text-ai2 font-mono">{score2}/10</span>
//           </div>
//           <p className="text-on-surface-variant text-sm leading-relaxed">
//             {reasoning2}
//           </p>
//         </div>

//       </div>
//     </div>
//   )
// }



export default function JudgePanel({
  score1,
  score2,
  reasoning1,
  reasoning2,
  winner,
}) {
  const maxScore = Math.max(score1, score2, 10);

  return (
    <div className="mt-8 rounded-3xl overflow-hidden bg-surface-container-lowest border border-judge/20 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">

      {/* Header */}
      <div className="px-8 py-6 bg-gradient-to-r from-judge/10 to-judge/5 border-b border-judge/20">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-2xl font-bold text-judge flex items-center gap-2">
              🏆 Judge Verdict
            </h2>

            <p className="text-sm text-on-surface-variant mt-1">
              Independent evaluation of both AI agents.
            </p>
          </div>

          <div className="px-5 py-2 rounded-full bg-judge text-white font-bold shadow-lg">
            Winner: {winner}
          </div>

        </div>

      </div>

      {/* Score Comparison */}

      <div className="grid md:grid-cols-2 gap-8 p-8">

        {/* Agent 1 */}

        <div className="space-y-4">

          <div className="flex justify-between items-center">

            <h3 className="font-bold text-ai1">
              🤖 Agent 1
            </h3>

            <span className="font-bold text-ai1">
              {score1}/10
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden">

            <div
              className="h-full bg-ai1 rounded-full transition-all duration-700"
              style={{
                width: `${(score1 / maxScore) * 100}%`,
              }}
            />

          </div>

          <div className="rounded-2xl bg-surface-container-low p-5">

            <h4 className="font-semibold mb-2">
              Feedback
            </h4>

            <p className="text-sm text-on-surface-variant leading-7">
              {reasoning1}
            </p>

          </div>

        </div>

        {/* Agent 2 */}

        <div className="space-y-4">

          <div className="flex justify-between items-center">

            <h3 className="font-bold text-ai2">
              🧠 Agent 2
            </h3>

            <span className="font-bold text-ai2">
              {score2}/10
            </span>

          </div>

          <div className="w-full h-3 rounded-full bg-surface-container-high overflow-hidden">

            <div
              className="h-full bg-ai2 rounded-full transition-all duration-700"
              style={{
                width: `${(score2 / maxScore) * 100}%`,
              }}
            />

          </div>

          <div className="rounded-2xl bg-surface-container-low p-5">

            <h4 className="font-semibold mb-2">
              Feedback
            </h4>

            <p className="text-sm text-on-surface-variant leading-7">
              {reasoning2}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}