import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const YouthTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className="w-full h-full bg-[#064e3b] font-sans relative overflow-hidden flex flex-col select-none">
      
      {/* Dynamic diagonal background (Mint/Light Green) */}
      <div className="absolute inset-0 bg-[#10b981]" style={{ clipPath: isLandscape ? 'polygon(0 0, 45% 0, 65% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 45%, 0 85%)' }}></div>
      
      {/* ── DIVIDER SEAM (Accent Divider Line) ── */}
      <div className="absolute inset-0 bg-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.5)]" style={{ 
        clipPath: isLandscape 
          ? 'polygon(45% 0, calc(45% + 4px) 0, calc(65% + 4px) 100%, 65% 100%)' 
          : 'polygon(0 85%, 100% 45%, 100% calc(45% + 4px), 0 calc(85% + 4px))' 
      }}></div>
      
      {/* Candidate - Cutout effect */}
      <div className={`absolute ${isLandscape ? 'top-0 right-0 w-[55%] h-full' : 'top-0 right-0 w-[60%] h-[60%]'} z-10`}>
        <div className="w-full h-full relative overflow-hidden" style={{ clipPath: isLandscape ? 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' : 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}>
          <CandidatePortrait className="w-full h-full object-cover grayscale-[10%] brightness-110" />
          <div className="absolute inset-0 bg-[#064e3b] mix-blend-overlay opacity-30"></div>
        </div>
      </div>

      {/* Supporter - Circle overlapping with GLOW & INNER SHADOW */}
      <div className={`absolute ${isLandscape ? 'top-1/2 left-[10%] -translate-y-1/2 w-[35%]' : 'top-[30%] left-[5%] w-[45%]'} z-20 flex flex-col items-center`}>
         <div className="relative w-full aspect-square rounded-full border-[8px] border-white bg-[#022c22] overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.8),0_20px_40px_rgba(0,0,0,0.5)] group">
            
            {/* Solid inner shadow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_10px_25px_rgba(0,0,0,0.6)] z-20 pointer-events-none" />

            {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover relative z-10" />
            ) : (
               <div className="w-full h-full flex items-center justify-center bg-[#064e3b] text-white relative z-10">
                  <span className="font-black text-2xl">YOU</span>
               </div>
            )}
         </div>
         <div className="mt-4 bg-white text-[#064e3b] px-5 py-2 rounded-full font-black uppercase text-[clamp(0.6rem,2vw,1.2rem)] whitespace-nowrap border-2 border-[#10b981] shadow-xl relative z-20">
            {supporterName || 'Supporter'}
         </div>
      </div>

      {/* Big Text Bottom */}
      <div className={`relative ${isLandscape ? 'mt-auto w-[65%] h-[40%]' : 'mt-auto h-[40%]'} flex flex-col justify-end px-6 pb-6 z-30 overflow-hidden pointer-events-none`}>
         <h1 className="text-white font-black text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.85] tracking-tighter uppercase italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] truncate">
            TEAM<br/>
            <span className="text-[#6ee7b7] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Hon. HASH</span>
         </h1>
         <p className="text-[#a7f3d0] font-black uppercase mt-2 tracking-widest text-[clamp(0.8rem,2vw,1.4rem)] drop-shadow-md truncate w-full">
            {customMessage || 'YOUTH MANDATE 2027'}
         </p>
       </div>

      {/* Floating Elements */}
      <div className="absolute top-6 left-6 z-30">
        <span className="inline-block px-3 py-1.5 bg-[#fbbf24] text-[#451a03] font-black text-sm -rotate-6 shadow-[4px_4px_0_rgba(0,0,0,0.2)] border-2 border-white">
          #2027
        </span>
      </div>
    </div>
  )
}
