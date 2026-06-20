import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const PrintTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col font-sans border-[16px] border-[#065f46] relative select-none">
      
      {/* ── HIGH-GRADE PRINT TEXTURE ── */}
      {/* Subtle geometric mesh / grid to eliminate dead white space */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none z-0" />

      {/* Header */}
      <div className="h-[12%] flex items-center justify-between px-6 border-b-4 border-[#065f46] bg-[#ecfdf5] relative z-10 shadow-sm">
         <div className="flex flex-col">
            <span className="text-[#064e3b] font-black text-[clamp(1rem,3vw,1.5rem)] leading-none uppercase tracking-widest drop-shadow-sm">APC</span>
            <span className="text-[#059669] font-bold text-[clamp(0.4rem,1.5vw,0.6rem)] uppercase tracking-[0.2em]">All Progressives Congress</span>
         </div>
         <div className="text-right flex flex-col items-end">
             <span className="block text-[#022c22] font-black uppercase text-[0.7rem] leading-tight tracking-[0.3em] px-2 py-1 bg-white border border-[#059669]/20 shadow-sm">Nasarawa Federal</span>
         </div>
      </div>

      <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative z-10`}>
         
         {/* Left: Supporter */}
         <div className={`${isLandscape ? 'w-1/2 border-r-2' : 'h-1/2 border-b-2'} p-6 lg:p-8 flex flex-col items-center justify-center border-dashed border-[#059669]/30 bg-white/60 backdrop-blur-sm`}>
            <div className="w-full max-w-[240px] aspect-[4/5] bg-white border-2 border-slate-200 flex items-center justify-center mb-6 p-2 shadow-lg relative">
               <div className="w-full h-full bg-slate-100 overflow-hidden relative">
                 {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                       <span className="material-symbols-outlined text-[80px]">person</span>
                    </div>
                 )}
               </div>
            </div>
            <h3 className="text-[#022c22] font-black text-[clamp(1.5rem,4vw,2rem)] leading-tight text-center uppercase border-b-4 border-[#059669] pb-2 mb-2 break-all">
               {supporterName || 'FULL NAME'}
            </h3>
            <p className="text-[#059669] text-[0.8rem] font-black uppercase tracking-[0.4em]">Official Endorsement</p>
         </div>

         {/* Right: Candidate */}
         <div className={`${isLandscape ? 'w-1/2' : 'h-1/2'} p-6 lg:p-8 flex flex-col items-center justify-center text-center bg-[#064e3b] text-white shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]`}>
            
            <div className="w-full max-w-[200px] aspect-square rounded-full border-[8px] border-white overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] mb-6 bg-slate-100 flex items-center justify-center relative group">
               <CandidatePortrait className="w-full h-full object-cover grayscale-[10%]" />
            </div>
            
            <h2 className="font-black text-[clamp(2rem,6vw,3rem)] leading-[0.9] uppercase tracking-tighter mb-4 drop-shadow-md">
               Hon. HASH<br/><span className="text-[clamp(1rem,3vw,1.5rem)] tracking-wide font-bold text-[#6ee7b7]">(Hassan Shehu)</span>
            </h2>
            
            <div className="bg-[#022c22] border-l-4 border-[#10b981] p-3 shadow-md w-full max-w-[300px]">
              <p className="text-white italic font-black text-[clamp(0.9rem,2.5vw,1.2rem)] tracking-wide">
                "{customMessage || 'SERVICE ABOVE POLITICS'}"
              </p>
            </div>
         </div>
      </div>

      {/* Footer */}
      <div className="h-[8%] bg-[#022c22] text-[#a7f3d0] flex items-center justify-between px-6 border-t-2 border-[#10b981] relative z-10">
         <p className="text-[0.6rem] lg:text-[0.7rem] uppercase tracking-[0.4em] font-black">Authorized Campaign Material</p>
         <div className="flex gap-1">
           <div className="w-2 h-2 bg-[#10b981]" />
           <div className="w-2 h-2 bg-[#10b981]" />
           <div className="w-2 h-2 bg-[#34d399]" />
         </div>
      </div>
    </div>
  )
}
