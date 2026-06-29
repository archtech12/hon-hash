import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const themes = {
    green: { bg: 'bg-brand-950', accent: 'bg-brand-700', border: 'border-brand-500', text: 'text-brand-700', gradient: 'from-brand-950 to-charcoal' },
    red: { bg: 'bg-[#150000]', accent: 'bg-[#b91c1c]', border: 'border-[#ef4444]', text: 'text-[#b91c1c]', gradient: 'from-[#150000] to-[#2e0101]' },
    blue: { bg: 'bg-[#000615]', accent: 'bg-[#1d4ed8]', border: 'border-[#3b82f6]', text: 'text-[#1d4ed8]', gradient: 'from-[#000615] to-[#01143a]' },
    gold: { bg: 'bg-charcoal', accent: 'bg-gold-600', border: 'border-gold-500', text: 'text-gold-600', gradient: 'from-charcoal to-black' },
  }[colorTheme] || { bg: 'bg-brand-950', accent: 'bg-brand-700', border: 'border-brand-500', text: 'text-brand-700', gradient: 'from-brand-950 to-charcoal' }

  return (
    <div className={`w-full h-full flex flex-col ${themes.bg} bg-gradient-to-b ${themes.gradient} font-serif relative overflow-hidden select-none`} style={{ containerType: 'inline-size' }}>
       {/* Background Pattern - Subtle Linen/Grain */}
       <div className="absolute inset-0 opacity-[0.1] bg-hero-pattern z-0 mix-blend-overlay pointer-events-none"></div>
       
       {/* Ambient Glow */}
       <div className="absolute top-0 right-0 w-[80cqw] h-[80cqw] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none mix-blend-screen"></div>

       <div className="flex-1 p-6 lg:p-10 flex flex-col z-10 relative overflow-hidden">
            {/* Header / Logo Area */}
            <div className="flex justify-between items-start mb-4 sm:mb-8 shrink-0">
                 <div className="flex flex-col">
                     <span className="text-white/60 text-[0.74cqw] sm:text-[0.93cqw] lg:text-[1.11cqw] uppercase tracking-[0.4em] sm:tracking-[0.5em] font-sans font-black mb-1.5 sm:mb-2 drop-shadow-md">Campaign 2027</span>
                     <div className="h-0.5 w-12 sm:w-20 bg-gradient-to-r from-gold-500 to-transparent shadow-glow-gold"></div>
                 </div>
                 <div className="border border-white/20 bg-black/60 backdrop-blur-xl px-3 sm:px-5 py-1.5 sm:py-2 rounded-sm shadow-glass">
                     <span className="text-[0.65cqw] sm:text-[0.93cqw] text-white/90 font-sans font-black uppercase tracking-[0.3em] sm:tracking-[0.4em]">Nasarawa Federal</span>
                 </div>
            </div>

            {/* Main Visuals Row */}
            <div className="flex-1 flex gap-0 relative items-end min-h-0">
                {/* Candidate */}
                <div className="w-[60%] h-[115%] -mb-[10%] relative z-10 shrink-0">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent z-20 pointer-events-none"></div>
                     <CandidatePortrait className="w-full h-full object-cover object-top " />
                     <div className="absolute bottom-[22%] left-2 sm:left-4 z-30 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
                        <h1 className="text-white font-serif italic font-black leading-[0.85] tracking-tighter" style={{ fontSize: '10cqw' }}>
                          Hon.<br/>
                          Hassan
                        </h1>
                     </div>
                </div>

                {/* Supporter Photo */}
                <div className="w-[45%] aspect-square rounded-[0.5rem] sm:rounded-xl bg-black shadow-[0_20px_40px_rgba(0,0,0,0.9)] overflow-hidden relative z-20 -ml-[10%] mb-[8%] p-[2px] sm:p-[3px] bg-gradient-to-br from-gold-300 via-gold-600 to-gold-800 shrink-0">
                    <div className="w-full h-full border border-white/20 rounded-md sm:rounded-lg overflow-hidden bg-[#0a0a0a] relative">
                      {supporterPhoto ? (
                         <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                      ) : (
                          <div className="w-full h-full flex items-center justify-center bg-[#0a0a0a] text-white/20">
                              <span className="material-symbols-outlined text-[3.33cqw] sm:text-[5.56cqw] font-light">person</span>
                          </div>
                      )}
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/90 to-transparent pointer-events-none" />
                    </div>
                 </div>
            </div>
       </div>

       {/* Footer / Message Bar */}
       <div className="relative bg-offwhite z-20 pt-5 pb-6 sm:pt-8 sm:pb-10 px-5 sm:px-10 shadow-[0_-20px_40px_rgba(0,0,0,0.9)] border-t-[1.5px] sm:border-t-2 border-gold-600 shrink-0 flex flex-col items-center justify-center min-h-[25%]">
            <div className="absolute top-0 left-0 w-full h-1.5 sm:h-2 bg-gradient-to-r from-gold-700 via-gold-400 to-gold-700"></div>
            <div className="flex flex-col items-center text-center w-full">
                <p className="text-[0.74cqw] sm:text-[0.93cqw] lg:text-[1.11cqw] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-sans font-black mb-2 sm:mb-3 text-gray-400 shrink-0">Proudly Supported By</p>
                <h2 className={`font-serif font-black leading-tight uppercase mb-3 sm:mb-5 w-full break-words px-2 sm:px-4 ${themes.text} drop-shadow-sm shrink-0`} style={{ fontSize: '7cqw' }}>
                    {supporterName || 'YOUR FULL NAME'}
                </h2>
                <div className="w-3/4 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-1 sm:my-2 shrink-0"></div>
                <p className="font-sans font-black text-charcoal uppercase tracking-widest w-full px-2 sm:px-4 mt-2 sm:mt-4 leading-snug break-words shrink-0" style={{ fontSize: '4cqw' }}>
                    "{customMessage || 'BUILDING THE FUTURE OF NASSARAWA'}"
                </p>
            </div>
       </div>
    </div>
  )
}
