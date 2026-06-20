import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const themes = {
    // Deep royal navy & Onyx black premium palettes
    green: { bg: 'bg-[#001015]', accent: 'bg-[#0f766e]', border: 'border-[#14b8a6]', text: 'text-[#0f766e]', gradient: 'from-[#001015] to-[#01222e]' },
    red: { bg: 'bg-[#150000]', accent: 'bg-[#b91c1c]', border: 'border-[#ef4444]', text: 'text-[#b91c1c]', gradient: 'from-[#150000] to-[#2e0101]' },
    blue: { bg: 'bg-[#000615]', accent: 'bg-[#1d4ed8]', border: 'border-[#3b82f6]', text: 'text-[#1d4ed8]', gradient: 'from-[#000615] to-[#01143a]' },
    gold: { bg: 'bg-[#111111]', accent: 'bg-[#b45309]', border: 'border-[#f59e0b]', text: 'text-[#b45309]', gradient: 'from-[#111111] to-[#222222]' },
  }[colorTheme] || { bg: 'bg-[#001015]', accent: 'bg-[#0f766e]', border: 'border-[#14b8a6]', text: 'text-[#0f766e]', gradient: 'from-[#001015] to-[#01222e]' }

  return (
    <div className={`w-full h-full flex flex-col bg-gradient-to-b ${themes.gradient} font-serif relative overflow-hidden select-none`}>
       {/* Background Pattern - Subtle Linen/Grain */}
       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0"></div>
       
       {/* Ambient Glow */}
       <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"></div>

       <div className="flex-1 p-6 lg:p-8 flex flex-col z-10 relative">
            {/* Header / Logo Area */}
            <div className="flex justify-between items-start mb-6">
                 <div className="flex flex-col">
                     <span className="text-white/60 text-[10px] lg:text-xs uppercase tracking-[0.4em] font-sans font-black mb-1">Campaign 2027</span>
                     <div className="h-0.5 w-16 bg-gradient-to-r from-yellow-500 to-transparent"></div>
                 </div>
                 <div className="border border-white/10 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-sm shadow-inner">
                     <span className="text-[9px] text-white/90 font-sans font-black uppercase tracking-[0.3em]">Nasarawa Federal</span>
                 </div>
            </div>

            {/* Main Visuals Row */}
            <div className="flex-1 flex gap-0 relative items-end">
                {/* Candidate */}
                <div className="w-[60%] h-[110%] -mb-[10%] relative z-10">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-20 pointer-events-none"></div>
                     <CandidatePortrait className="w-full h-full object-cover object-top mask-image-gradient brightness-110 contrast-125 grayscale-[10%]" />
                     <div className="absolute bottom-[20%] left-0 z-30 drop-shadow-2xl">
                        <h1 className="text-white font-serif italic font-black text-[clamp(2rem,6vw,4rem)] leading-[0.85] tracking-tight">
                          Hon.<br/>
                          Hassan
                        </h1>
                     </div>
                </div>

                {/* Supporter Photo (Refined dual-stroke metallic border) */}
                <div className="w-[50%] aspect-square rounded-lg bg-black shadow-[0_20px_40px_rgba(0,0,0,0.8)] overflow-hidden relative z-20 -ml-[15%] mb-10 p-1.5 bg-gradient-to-br from-yellow-200 via-yellow-600 to-yellow-800">
                    <div className="w-full h-full border border-white/50 rounded overflow-hidden bg-slate-900 relative">
                      {supporterPhoto ? (
                         <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                      ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-900 text-slate-700">
                              <span className="material-symbols-outlined text-6xl">person</span>
                          </div>
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                    </div>
                 </div>
            </div>
       </div>

       {/* Footer / Message Bar (Elevated styling) */}
       <div className="relative bg-[#fafafa] z-20 pt-6 pb-8 px-8 shadow-[0_-20px_40px_rgba(0,0,0,0.8)] border-t border-white/20">
            <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600`}></div>
            <div className="flex flex-col items-center text-center">
                <p className={`text-[9px] lg:text-[10px] uppercase tracking-[0.3em] font-sans font-black mb-2 text-slate-400`}>Proudly Supported By</p>
                <h2 className={`font-serif font-black text-[clamp(1.2rem,4vw,2.5rem)] leading-none uppercase mb-4 w-full truncate px-4 ${themes.text}`}>
                    {supporterName || 'YOUR FULL NAME'}
                </h2>
                <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-1"></div>
                <p className={`font-sans font-black text-[clamp(0.8rem,2vw,1.1rem)] text-slate-800 uppercase tracking-widest w-full line-clamp-2 px-4 mt-3`}>
                    "{customMessage || 'BUILDING THE FUTURE OF NASSARAWA'}"
                </p>
            </div>
       </div>
    </div>
  )
}
