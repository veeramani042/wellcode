"use client"

export default function DotBackground() {

  return (
    <>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:18px_18px] animate-slowGlow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:22px_22px] animate-slowerGlow" />
      </div>
      <style jsx>{`
        @keyframes slowGlow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
        @keyframes slowerGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.7; }
        }
        .animate-slowGlow {
          animation: slowGlow 7s ease-in-out infinite;
        }
        .animate-slowerGlow {
          animation: slowerGlow 11s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
