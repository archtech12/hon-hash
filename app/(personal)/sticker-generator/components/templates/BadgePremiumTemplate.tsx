import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgePremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Platinum / Gold / Diamond VIP aesthetics
  const themeColors = {
    green: { bg: 'bg-[#0f172a]', foil: 'from-emerald-300 via-white to-emerald-400', accent: '#10b981', ring: 'ring-emerald-500/30', glow: 'shadow-emerald-500/20' },
    red:   { bg: 'bg-[#1a0505]', foil: 'from-rose-300 via-white to-rose-400', accent: '#ef4444', ring: 'ring-rose-500/30', glow: 'shadow-rose-500/20' },
    blue:  { bg: 'bg-[#030b1e]', foil: 'from-blue-300 via-white to-blue-400', accent: '#3b82f6', ring: 'ring-blue-500/30', glow: 'shadow-blue-500/20' },
    gold:  { bg: 'bg-[#120f06]', foil: 'from-amber-200 via-yellow-100 to-amber-500', accent: '#f59e0b', ring: 'ring-amber-500/30', glow: 'shadow-amber-500/20' },
  }[colorTheme] || { bg: 'bg-[#0f172a]', foil: 'from-emerald-300 via-white to-emerald-400', accent: '#10b981', ring: 'ring-emerald-500/30', glow: 'shadow-emerald-500/20' }

  return (
    <div className={`w-full h-full flex items-center justify-center p-4 lg:p-8 ${themeColors.bg} relative overflow-hidden select-none font-sans`}>
      
      {/* ── CINEMATIC AMBIENT LIGHTING ── */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-white/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= THE GLASSMORPHIC PLATINUM CARD ================= */}
      <div className={`relative z-10 w-full h-full max-w-[1000px] mx-auto rounded-[2rem] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 shadow-[0_40px_80px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.4)] overflow-hidden flex ${isLandscape ? 'flex-row' : 'flex-col'} ${themeColors.ring} ring-1`}>
        
        {/* Holographic Gloss Overlay */}
        <div className="absolute top-0 left-0 w-[200%] h-[200%] bg-[linear-gradient(115deg,transparent_20%,rgba(255,255,255,0.1)_25%,transparent_30%)] -translate-x-full pointer-events-none transform -skew-x-12 mix-blend-overlay" />
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] pointer-events-none" />

        {/* ── VERTICAL/TOP HOLOGRAM STRIP ── */}
        <div className={`flex items-center justify-between p-6 lg:p-8 ${isLandscape ? 'w-[25%] flex-col border-r border-white/10 bg-black/20 relative' : 'w-full h-[18%] border-b border-white/10 bg-black/20 relative'}`}>
           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:4px_4px] pointer-events-none" />
           
           <div className={`flex items-center gap-4 relative z-10 ${isLandscape ? 'flex-col text-center w-full justify-center h-full' : 'w-full justify-between'}`}>
             
             {/* Security Chip / Hologram */}
             <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-600 p-[1px] shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                <div className="w-full h-full rounded-md bg-[linear-gradient(135deg,rgba(255,255,255,0.5)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)] flex items-center justify-center border border-amber-500/50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
                   <span className="material-symbols-outlined text-amber-900/80 text-xl relative z-10">fingerprint</span>
                </div>
             </div>

             <div className={`${isLandscape ? 'mt-4' : 'flex-1 text-right'}`}>
               <h1 className={`font-serif italic text-3xl lg:text-4xl tracking-widest leading-none drop-shadow-lg font-black bg-clip-text text-transparent bg-gradient-to-br ${themeColors.foil}`}>
                 VIP
               </h1>
               <p className="text-white/60 text-[7px] lg:text-[8px] font-black tracking-[0.5em] uppercase mt-2">Global Access 2027</p>
             </div>
             
           </div>
        </div>

        {/* ── MAIN CREDENTIAL BODY ── */}
        <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative`}>
          
          {/* Subtle Watermark Seal */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none z-0">
            <span className="material-symbols-outlined text-[400px]">security</span>
          </div>

          {/* LEFT: Precise Geometric Photo Frames */}
          <div className={`flex items-center justify-center p-8 lg:p-12 ${isLandscape ? 'w-[45%] border-r border-white/10' : 'w-full border-b border-white/10'} relative z-10 bg-white/5`}>
             <div className="flex flex-col gap-6 w-full max-w-[280px] h-auto items-center justify-center relative">
                
                {/* Supporter Photo (Primary Focus) */}
                <div className="w-full aspect-[4/5] bg-black p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-lg relative border border-white/20">
                   <div className="w-full h-full overflow-hidden rounded relative bg-zinc-900">
                     {supporterPhoto ? (
                       <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[15%] contrast-110" />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-white/20">
                         <span className="material-symbols-outlined text-[80px]">person</span>
                       </div>
                     )}
                     {/* Gloss Overlay */}
                     <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/80 pointer-events-none" />
                     <p className="absolute bottom-3 left-3 text-[9px] font-black tracking-[0.3em] text-white/90 uppercase drop-shadow-md">Supporter</p>
                   </div>
                   
                   {/* Verification Badge */}
                   <div className={`absolute -bottom-5 -right-5 w-14 h-14 rounded-full bg-gradient-to-br ${themeColors.foil} p-0.5 shadow-[0_10px_20px_rgba(0,0,0,0.5)] z-20`}>
                     <div className="w-full h-full bg-black/20 backdrop-blur-md rounded-full border border-white/50 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-xl drop-shadow">done_all</span>
                     </div>
                   </div>
                </div>

                {/* Candidate Photo (Secondary Anchor) */}
                <div className="w-[60%] aspect-[4/5] bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.4)] rounded-lg relative border border-white/10 absolute -bottom-8 -left-8 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                   <div className="w-full h-full overflow-hidden rounded relative">
                     <CandidatePortrait className="w-full h-full object-cover grayscale-[40%] contrast-125" />
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/90 pointer-events-none" />
                     <p className="absolute bottom-2 left-2 text-[7px] font-black tracking-widest text-white/70 uppercase">Hon. Hassan</p>
                   </div>
                </div>

             </div>
          </div>

          {/* RIGHT: High-End Typography & Data */}
          <div className={`flex-1 flex flex-col p-8 lg:p-12 relative z-10`}>
             
             {/* Name & Title */}
             <div className="mb-10">
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full shadow-[0_0_8px_#34d399] animate-pulse" />
                 <p className="text-[9px] uppercase tracking-[0.4em] font-black text-white/60">Verified Endorsement</p>
               </div>
               <h2 className={`font-serif text-[clamp(2rem,4vw,3.5rem)] uppercase tracking-tight leading-[0.9] break-words font-black bg-clip-text text-transparent bg-gradient-to-br from-white to-white/70 drop-shadow-lg`}>
                 {supporterName || 'YOUR FULL NAME'}
               </h2>
               <div className={`w-16 h-[2px] mt-6 bg-gradient-to-r ${themeColors.foil} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
             </div>

             {/* Engraved Message */}
             <div className="flex-1 relative mb-8">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
                <p className="font-sans font-bold text-[clamp(1rem,2vw,1.3rem)] text-white/80 tracking-wide leading-relaxed uppercase">
                  "{customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY'}"
                </p>
             </div>

             {/* Footer / Machine Readable Zone */}
             <div className="mt-auto flex justify-between items-end bg-black/20 p-4 rounded-lg border border-white/5 backdrop-blur-sm">
               <div className="flex flex-col">
                 <p className="font-mono text-[8px] text-white/40 uppercase tracking-[0.2em] mb-1">Machine Readable Data</p>
                 <div className="h-8 w-48 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat invert" />
               </div>
               <div className="text-right flex flex-col items-end">
                 <span className="material-symbols-outlined text-white/50 text-2xl mb-1">qr_code_2</span>
                 <p className="font-black text-[7px] text-white/50 uppercase tracking-[0.3em]">HSH-2027</p>
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  )
}
