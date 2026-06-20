import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const colors = {
    green: { gradient: 'from-emerald-500/20', glow: 'bg-emerald-500/30', accent: 'bg-emerald-400', border: 'border-emerald-500', bottom: 'from-emerald-600 to-emerald-800' },
    red: { gradient: 'from-rose-500/20', glow: 'bg-rose-500/30', accent: 'bg-rose-400', border: 'border-rose-500', bottom: 'from-rose-600 to-rose-900' },
    blue: { gradient: 'from-blue-500/20', glow: 'bg-blue-500/30', accent: 'bg-blue-400', border: 'border-blue-500', bottom: 'from-blue-600 to-blue-900' },
    gold: { gradient: 'from-amber-500/20', glow: 'bg-amber-500/30', accent: 'bg-amber-400', border: 'border-amber-500', bottom: 'from-amber-600 to-amber-900' },
  }[colorTheme] || { gradient: 'from-emerald-500/20', glow: 'bg-emerald-500/30', accent: 'bg-emerald-400', border: 'border-emerald-500', bottom: 'from-emerald-600 to-emerald-800' }

  return (
    <div className="w-full h-full flex flex-col items-center bg-zinc-950 font-sans relative overflow-hidden select-none">
      {/* Background Graphic - Premium Gradient & Noise */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${colors.gradient} via-zinc-950 to-black z-0`}></div>
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 mix-blend-overlay"></div>
      
      {/* Abstract Glows */}
      <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] ${colors.glow} rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-3000`}></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Main Content Card - Floating Glass */}
      <div className="absolute inset-4 md:inset-5 rounded-[1.5rem] bg-white/5 backdrop-blur-3xl border border-white/10 z-10 flex flex-col overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-white/5">
        
        {/* Top: Branding */}
        <div className="h-[14%] flex items-center justify-between px-6 border-b border-white/10 bg-gradient-to-r from-white/10 to-transparent shadow-inner">
             <div className="flex items-center gap-3">
                 <div className={`w-2.5 h-2.5 rounded-full ${colors.accent} shadow-[0_0_15px_rgba(255,255,255,0.8)]`}></div>
                 <span className="text-white/90 font-black tracking-[0.3em] text-[10px] uppercase">Official Endorsement</span>
             </div>
             <span className="text-white/50 font-mono text-[10px] tracking-widest font-black">2027</span>
        </div>

        {/* Middle: Photos - Softened corners */}
        <div className="flex-1 flex p-5 gap-5 relative items-center justify-center">
          
          <div className="flex-1 aspect-[4/5] max-h-full relative rounded-xl overflow-hidden shadow-2xl group border border-white/10">
             <CandidatePortrait className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90"></div>
             <div className={`absolute bottom-4 left-4 border-l-2 ${colors.border} pl-3`}>
                <span className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-1">Vote For</span>
                <span className="text-white text-[clamp(0.9rem,2vw,1.3rem)] font-black uppercase leading-none block tracking-wide">Hon. HASH</span>
             </div>
          </div>
          
          <div className="flex-1 aspect-[4/5] max-h-full relative rounded-xl overflow-hidden shadow-2xl bg-zinc-900 group border border-white/10">
             {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" />
             ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-white/20 bg-zinc-900">
                    <span className="text-4xl mb-2">+</span>
                    <span className="text-[10px] uppercase tracking-widest">Photo</span>
                </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90 pointer-events-none"></div>
             <div className={`absolute bottom-4 left-4 border-l-2 ${colors.border} pl-3`}>
                <span className="text-gray-400 text-[9px] font-black uppercase tracking-[0.2em] block mb-1">Endorsed By</span>
                <span className="text-white text-[clamp(0.9rem,2vw,1.3rem)] font-black uppercase leading-none block truncate w-full tracking-wide">{supporterName || 'Your Name'}</span>
             </div>
          </div>
        </div>

        {/* Bottom: Message - Metallic / Glassmorphism Sheen */}
        <div className={`h-[24%] bg-gradient-to-br ${colors.bottom} flex flex-col items-center justify-center p-5 text-center relative overflow-hidden shadow-[inset_0_20px_40px_rgba(255,255,255,0.1)] border-t border-white/20`}>
            {/* Subtle Metallic Sheen / Gloss Overlay */}
            <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-white/30 to-transparent mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <h2 className="relative z-10 text-white font-black uppercase text-[clamp(1.3rem,4vw,2.5rem)] leading-[1.1] drop-shadow-2xl italic tracking-tight">
                "{customMessage || 'FORWARD TOGETHER'}"
            </h2>
        </div>
      </div>
    </div>
  )
}
