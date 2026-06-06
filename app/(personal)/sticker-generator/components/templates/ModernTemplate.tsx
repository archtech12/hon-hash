import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ModernTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const colors = {
    green: { gradient: 'from-green-500/20', glow: 'bg-green-500/30', accent: 'bg-green-400', border: 'border-green-500', bottom: 'from-green-600 to-green-800' },
    red: { gradient: 'from-red-500/20', glow: 'bg-red-500/30', accent: 'bg-red-400', border: 'border-red-500', bottom: 'from-red-600 to-red-900' },
    blue: { gradient: 'from-blue-500/20', glow: 'bg-blue-500/30', accent: 'bg-blue-400', border: 'border-blue-500', bottom: 'from-blue-600 to-blue-900' },
    gold: { gradient: 'from-yellow-500/20', glow: 'bg-yellow-500/30', accent: 'bg-yellow-400', border: 'border-yellow-500', bottom: 'from-yellow-600 to-yellow-900' },
  }[colorTheme] || { gradient: 'from-green-500/20', glow: 'bg-green-500/30', accent: 'bg-green-400', border: 'border-green-500', bottom: 'from-green-600 to-green-800' }

  return (
    <div className="w-full h-full flex flex-col items-center bg-zinc-900 font-sans relative overflow-hidden">
      {/* Background Graphic - Premium Gradient & Noise */}
      <div className={`absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] ${colors.gradient} via-zinc-900 to-black z-0`}></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 mix-blend-overlay"></div>
      
      {/* Abstract Glows */}
      <div className={`absolute top-[-20%] right-[-10%] w-[70%] h-[70%] ${colors.glow} rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-3000`}></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>

      {/* Main Content Card - Floating Glass */}
      <div className="absolute inset-4 md:inset-6 rounded-[2rem] bg-white/5 backdrop-blur-2xl border border-white/10 z-10 flex flex-col overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] ring-1 ring-white/5">
        
        {/* Top: Branding */}
        <div className="h-[14%] flex items-center justify-between px-6 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
             <div className="flex items-center gap-2">
                 <div className={`w-2 h-2 rounded-full ${colors.accent} shadow-[0_0_10px_rgba(255,255,255,0.5)]`}></div>
                 <span className="text-white/80 font-bold tracking-[0.2em] text-[10px] uppercase">Official Endorsement</span>
             </div>
             <span className="text-white/40 font-mono text-[10px]">2027</span>
        </div>

        {/* Middle: Photos */}
        <div className="flex-1 flex p-5 gap-4 relative">
          <div className="flex-1 h-full relative rounded-2xl overflow-hidden shadow-2xl group">
             <CandidatePortrait className="w-full h-full transform transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
             <div className={`absolute bottom-3 left-3 border-l-2 ${colors.border} pl-3`}>
                <span className="text-gray-300 text-[10px] font-bold uppercase tracking-wider block mb-0.5">Vote For</span>
                <span className="text-white text-[clamp(0.8rem,2vw,1.2rem)] font-black uppercase leading-none block">Hon. HASH</span>
             </div>
          </div>
          
          <div className="flex-1 h-full relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-800 group border border-white/5">
             {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" />
             ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-white/10">
                    <span className="text-4xl mb-2">+</span>
                    <span className="text-[10px] uppercase tracking-widest">Photo</span>
                </div>
             )}
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
             <div className="absolute bottom-3 left-3 border-l-2 border-white/50 pl-3">
                <span className="text-gray-300 text-[10px] font-bold uppercase tracking-wider block mb-0.5">Endorsed By</span>
                <span className="text-white text-[clamp(0.8rem,2vw,1.2rem)] font-black uppercase leading-none block truncate w-full">{supporterName || 'Your Name'}</span>
             </div>
          </div>
        </div>

        {/* Bottom: Message */}
        <div className={`h-[22%] bg-gradient-to-r ${colors.bottom} flex flex-col items-center justify-center p-4 text-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute -left-10 top-0 w-20 h-full bg-white/20 skew-x-[20deg] blur-md"></div>
            
            <h2 className="relative z-10 text-white font-black uppercase text-[clamp(1.2rem,3.5vw,2.2rem)] leading-none drop-shadow-lg italic tracking-tight">
                "{customMessage}"
            </h2>
        </div>
      </div>
    </div>
  )
}
