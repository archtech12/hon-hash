import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgePremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Bright & Vibrant VIP aesthetics
  const themeColors = {
    green: { bg: 'bg-emerald-500', foil: 'from-emerald-100 via-white to-emerald-200', accent: '#10b981', ring: 'ring-white/40', glow: 'shadow-white/20' },
    red:   { bg: 'bg-rose-500', foil: 'from-rose-100 via-white to-rose-200', accent: '#ef4444', ring: 'ring-white/40', glow: 'shadow-white/20' },
    blue:  { bg: 'bg-blue-500', foil: 'from-blue-100 via-white to-blue-200', accent: '#3b82f6', ring: 'ring-white/40', glow: 'shadow-white/20' },
    gold:  { bg: 'bg-amber-500', foil: 'from-amber-100 via-white to-amber-200', accent: '#f59e0b', ring: 'ring-white/40', glow: 'shadow-white/20' },
  }[colorTheme] || { bg: 'bg-emerald-500', foil: 'from-emerald-100 via-white to-emerald-200', accent: '#10b981', ring: 'ring-white/40', glow: 'shadow-white/20' }

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
        <div className={`flex items-center justify-between p-6 lg:p-8 ${isLandscape ? 'w-[25%] flex-col border-r border-white/10 bg-gradient-to-b from-white/10 to-black/20 relative shadow-[10px_0_20px_rgba(0,0,0,0.2)]' : 'w-full h-[18%] border-b border-white/10 bg-gradient-to-r from-white/10 to-black/20 relative shadow-[0_10px_20px_rgba(0,0,0,0.2)]'}`}>
           <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:4px_4px] pointer-events-none" />
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-10 pointer-events-none mix-blend-overlay" />
           
           <div className={`flex items-center gap-4 relative z-10 ${isLandscape ? 'flex-col text-center w-full justify-center h-full' : 'w-full justify-between'}`}>
             
             {/* Security Chip / Hologram */}
             <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-yellow-100 via-amber-300 to-yellow-600 p-[1px] shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                <div className="w-full h-full rounded-md bg-[linear-gradient(135deg,rgba(255,255,255,0.6)_0%,transparent_50%,rgba(0,0,0,0.3)_100%)] flex items-center justify-center border border-amber-500/50 relative overflow-hidden">
                   <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(0,0,0,0.1)_2px,rgba(0,0,0,0.1)_4px)]" />
                   <span className="material-symbols-outlined text-amber-900/80 text-2xl relative z-10 drop-shadow-sm">fingerprint</span>
                </div>
             </div>

             <div className={`${isLandscape ? 'mt-4' : 'flex-1 text-right'}`}>
               <h1 className={`font-serif italic text-[36px] tracking-widest leading-none font-black text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]`}>
                 VIP
               </h1>
               <p className="text-white text-[13px] font-black tracking-[0.4em] uppercase mt-2 drop-shadow-md">Global Access</p>
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
                <div className="w-full aspect-[4/5] bg-black p-1.5 shadow-[0_20px_40px_rgba(0,0,0,0.6)] rounded-xl relative border-2 border-white/20">
                   <div className="w-full h-full overflow-hidden rounded-lg relative bg-gradient-to-br from-zinc-800 to-black backdrop-blur-md">
                     {supporterPhoto ? (
                       <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                     ) : (
                       <div className="w-full h-full flex flex-col items-center justify-center text-white/30 gap-2">
                         <span className="material-symbols-outlined text-[60px] drop-shadow-md">account_circle</span>
                         <span className="font-sans text-[10px] font-bold tracking-widest uppercase">Tap to add</span>
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
                <div className="w-[60%] aspect-[4/5] bg-black p-1 shadow-[0_15px_35px_rgba(0,0,0,0.5)] rounded-lg relative border-2 border-white/20 absolute -bottom-8 -left-8 z-10 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                   <div className="w-full h-full overflow-hidden rounded relative">
                     <CandidatePortrait className="w-full h-full object-cover" />
                     {/* Subtle glass reflection overlay */}
                     <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/90 pointer-events-none" />
                     <p className="absolute bottom-2 left-2 text-[7px] font-black tracking-widest text-white/70 uppercase">Hon. Hassan</p>
                   </div>
                </div>

             </div>
          </div>

          {/* RIGHT: High-End Typography & Data */}
          <div className={`flex-1 flex flex-col p-8 lg:p-12 relative z-10`}>
             
             {/* Name & Title */}
             <div className="mb-8 relative">
               {/* Subtle background frosted glass to improve contrast without removing global texture */}
               <div className="absolute -inset-4 bg-white/5 backdrop-blur-[2px] rounded-2xl -z-10" />
               
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_#34d399] animate-pulse" />
                 <p className="text-[12px] uppercase tracking-[0.4em] font-black text-white drop-shadow-md">Verified Endorsement</p>
               </div>
               
               {/* High contrast bright text instead of charcoal */}
               <h2 className="font-serif text-[clamp(3rem,5vw,4rem)] uppercase tracking-tight leading-[0.9] break-words font-black text-white" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.3), 0 10px 25px rgba(0,0,0,0.2)' }}>
                 {supporterName || 'YOUR FULL NAME'}
               </h2>
               <div className={`w-16 h-[2px] mt-6 bg-gradient-to-r ${themeColors.foil} shadow-[0_0_10px_rgba(255,255,255,0.3)]`} />
             </div>

             {/* Engraved Message */}
             <div className="flex-1 relative mb-8">
                <div className="absolute -left-4 top-0 bottom-0 w-1 bg-white/5 rounded-full" />
                <p className="font-sans font-black text-[clamp(1.125rem,2vw,1.375rem)] text-white tracking-wide leading-relaxed uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  "{customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY'}"
                </p>
             </div>

             {/* Footer / Machine Readable Zone */}
             <div className="mt-auto flex justify-between items-end bg-black/20 p-5 rounded-xl border border-white/20 backdrop-blur-md shadow-[inset_0_2px_4px_rgba(255,255,255,0.1),0_4px_10px_rgba(0,0,0,0.3)]">
               <div className="flex flex-col">
                 <p className="font-mono text-[11px] text-white uppercase tracking-[0.2em] mb-2 font-black drop-shadow-md">Machine Readable Data</p>
                 <div className="h-8 w-48 opacity-100 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat invert mix-blend-screen drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
               </div>
               <div className="text-right flex flex-col items-end">
                 <span className="material-symbols-outlined text-white text-[32px] mb-1 drop-shadow-md">qr_code_2</span>
                 <p className="font-black text-[11px] text-white uppercase tracking-[0.3em] drop-shadow-md">HSH-2027</p>
               </div>
             </div>

          </div>
        </div>
      </div>
    </div>
  )
}
