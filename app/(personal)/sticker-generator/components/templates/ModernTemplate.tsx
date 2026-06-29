import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const colors = {
    green: { gradient: 'from-brand-600/30', glow: 'bg-brand-500/40', accent: 'bg-brand-400', border: 'border-brand-500', bottom: 'from-brand-800 to-charcoal' },
    red: { gradient: 'from-rose-600/30', glow: 'bg-rose-500/40', accent: 'bg-rose-400', border: 'border-rose-500', bottom: 'from-rose-900 to-charcoal' },
    blue: { gradient: 'from-blue-600/30', glow: 'bg-blue-500/40', accent: 'bg-blue-400', border: 'border-blue-500', bottom: 'from-blue-900 to-charcoal' },
    gold: { gradient: 'from-gold-600/30', glow: 'bg-gold-500/40', accent: 'bg-gold-400', border: 'border-gold-500', bottom: 'from-gold-800 to-charcoal' },
  }[colorTheme] || { gradient: 'from-brand-600/30', glow: 'bg-brand-500/40', accent: 'bg-brand-400', border: 'border-brand-500', bottom: 'from-brand-800 to-charcoal' }

  return (
    <div className="w-full h-full flex flex-col items-center bg-charcoal font-sans relative overflow-hidden select-none" style={{ containerType: 'inline-size' }}>
      {/* Background Graphic - Premium Gradient & Noise */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${colors.gradient} via-charcoal to-black z-0`}></div>
      <div className="absolute inset-0 opacity-10 bg-hero-pattern z-0"></div>
      
      {/* Abstract Glows */}
      <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] ${colors.glow} rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-3000`}></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Main Content Card - Floating Glass */}
      <div className="absolute inset-4 md:inset-5 rounded-[2rem] bg-white/5 backdrop-blur-3xl border border-white/10 z-10 flex flex-col overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
        
        {/* Top: Branding */}
        <div className="h-auto py-5 flex items-center justify-between px-6 sm:px-8 border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent shadow-inner shrink-0">
             <div className="flex items-center gap-3 sm:gap-4">
                 <div className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${colors.accent} shadow-[0_0_15px_rgba(255,255,255,0.8)]`}></div>
                 <span className="text-white/90 font-black tracking-[0.3em] sm:tracking-[0.4em] text-[0.74cqw] sm:text-[0.93cqw] md:text-[1.11cqw] uppercase drop-shadow-md">Official Endorsement</span>
             </div>
             <span className="text-white/50 font-mono text-[0.83cqw] sm:text-[0.93cqw] md:text-[1.11cqw] tracking-widest font-black">2027</span>
        </div>

        {/* Middle: Photos - Softened corners */}
        <div className="flex-1 flex p-4 sm:p-6 gap-4 sm:gap-6 relative items-stretch justify-center h-full min-h-0">
          
          <div className="flex-1 min-w-0 h-full relative rounded-[1rem] sm:rounded-2xl overflow-hidden shadow-2xl group border border-white/10 bg-black">
             <CandidatePortrait className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
             <div className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 border-l-[3px] ${colors.border} pl-3 sm:pl-4 max-w-[90%]`}>
                <span className="text-white/60 text-[0.74cqw] sm:text-[0.93cqw] font-black uppercase tracking-[0.3em] block mb-0.5 sm:mb-1 drop-shadow-md">Vote For</span>
                <span className="text-white font-black uppercase leading-tight block tracking-tight drop-shadow-lg" style={{ fontSize: '6cqw' }}>Hon. HASH</span>
             </div>
          </div>
          
          <div className="flex-1 min-w-0 h-full relative rounded-[1rem] sm:rounded-2xl overflow-hidden shadow-2xl bg-[#0a0a0a] group border border-white/10">
             {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-105" />
             ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-white/10 bg-[#0a0a0a]">
                    <span className="text-[3.33cqw] sm:text-[5.56cqw] mb-1 sm:mb-2 font-light">+</span>
                    <span className="text-[0.74cqw] sm:text-[0.93cqw] uppercase tracking-widest font-bold">Photo</span>
                </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 pointer-events-none"></div>
             <div className={`absolute bottom-4 sm:bottom-6 left-4 sm:left-6 border-l-[3px] ${colors.border} pl-3 sm:pl-4 w-[85%]`}>
                <span className="text-white/60 text-[0.74cqw] sm:text-[0.93cqw] font-black uppercase tracking-[0.3em] block mb-0.5 sm:mb-1 drop-shadow-md">Endorsed By</span>
                <span className="text-white font-black uppercase leading-[1.1] block w-full tracking-tight drop-shadow-lg pr-2 break-words" style={{ fontSize: '5cqw' }}>
                    {supporterName || 'Your Name'}
                </span>
             </div>
          </div>
        </div>

        {/* Bottom: Message - Metallic / Glassmorphism Sheen */}
        <div className={`h-auto min-h-[90px] py-6 sm:py-8 bg-gradient-to-br ${colors.bottom} flex flex-col items-center justify-center px-6 text-center relative overflow-hidden shadow-[inset_0_20px_40px_rgba(255,255,255,0.05)] border-t border-white/10 shrink-0`}>
            {/* Subtle Metallic Sheen / Gloss Overlay */}
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-hero-pattern opacity-10 pointer-events-none"></div>
            
            <h2 className="relative z-10 text-white font-black uppercase leading-[1.1] drop-shadow-2xl italic tracking-tight px-2 break-words w-full" style={{ fontSize: '7cqw' }}>
                "{customMessage || 'FORWARD TOGETHER'}"
            </h2>
        </div>
      </div>
    </div>
  )
}
