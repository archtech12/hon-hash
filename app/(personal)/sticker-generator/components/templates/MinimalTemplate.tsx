import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const MinimalTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className="w-full h-full bg-white font-sans flex flex-col p-8 lg:p-12 relative select-none">
      
      {/* ── TRUE MINIMALISM (SWISS GALLERY AESTHETIC) ── */}
      {/* Pure white, black text, geometric precision, zero gradients/shadows. */}

      <div className="absolute top-8 right-8 border border-black px-3 py-1">
         <span className="text-black font-bold uppercase tracking-widest text-[8px]">01 / 2027</span>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} w-full relative z-10 pt-10`}>
        
        {/* Left/Top: Pure Typography */}
        <div className={`flex flex-col justify-between ${isLandscape ? 'w-1/2 pr-12 border-r border-black' : 'h-1/2 pb-8 border-b border-black'}`}>
           
           <div>
             <div className="w-8 h-1 bg-black mb-6"></div>
             <h2 className="text-black font-black text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.9] uppercase tracking-tighter">
                HASSAN<br/>
                SHEHU
             </h2>
             <p className="text-black font-medium mt-4 tracking-[0.2em] uppercase text-xs">
                Official Endorsement
             </p>
           </div>

           <div className="mt-8">
              <p className="text-black font-serif italic text-[clamp(1rem,3vw,1.5rem)] leading-snug max-w-sm">
                "{customMessage || 'SERVICE ABOVE POLITICS'}"
              </p>
           </div>

        </div>

        {/* Right/Bottom: Raw Geometric Photos */}
        <div className={`flex ${isLandscape ? 'w-1/2 pl-12 flex-col justify-center' : 'h-1/2 pt-8 flex-row items-end'} gap-6`}>
           
           {/* Supporter Photo */}
           <div className={`relative ${isLandscape ? 'w-[70%]' : 'w-1/2'} aspect-square bg-slate-100 overflow-hidden`}>
              {supporterPhoto ? (
                <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale" />
              ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-300">
                     <span className="material-symbols-outlined text-[60px]">person</span>
                 </div>
              )}
              <div className="absolute bottom-4 left-4 bg-white px-2 py-1">
                 <span className="text-black font-bold uppercase tracking-widest text-[8px]">
                    {supporterName || 'SUPPORTER'}
                 </span>
              </div>
           </div>

           {/* Candidate Photo */}
           <div className={`relative ${isLandscape ? 'w-[40%] self-end -mt-12 border-4 border-white' : 'w-[40%] mb-4'} aspect-square bg-slate-100 overflow-hidden`}>
              <CandidatePortrait className="w-full h-full object-cover grayscale" />
              <div className="absolute bottom-2 left-2 bg-black px-2 py-1">
                 <span className="text-white font-bold uppercase tracking-widest text-[8px]">CANDIDATE</span>
              </div>
           </div>

        </div>
      </div>

       {/* Bottom Footer Line */}
       <div className="w-full flex justify-between items-center pt-6 mt-6 border-t border-black">
            <span className="text-black font-black uppercase tracking-[0.4em] text-[10px]">Nasarawa Federal</span>
            <div className="w-3 h-3 bg-black rounded-full"></div>
       </div>
    </div>
  )
}
