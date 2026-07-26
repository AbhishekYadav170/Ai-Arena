import { motion } from "framer-motion";

export default function AuroraBackground() {

  return (
    <div className="fixed inset-0 -z-0 overflow-hidden">

      {/* Base Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black" />

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -80, 60, 0],
          scale: [1, 1.3, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-10 left-10 w-64 h-64 rounded-full"
        // style={{
        //       background: "#06b6d4",
        //       opacity: 0.6,
        //       filter: "blur(100px)",
        // }}
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -60, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-500/20 blur-[120px] bottom-[-180px] right-[-150px]"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 80, -60, 0],
          y: [0, -60, 90, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[450px] h-[450px] rounded-full bg-purple-500/20 blur-[120px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />

    </div>
  );
}