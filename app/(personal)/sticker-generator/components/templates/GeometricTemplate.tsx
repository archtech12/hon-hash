import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Bauhaus inspired, high contrast primary colors
  const themeColors = {
    green: { bg: '#ffffff', accent1: '#10b981', accent2: '#047857', dark: '#022c22' },
    red: { bg: '#ffffff', accent1: '#ef4444', accent2: '#b91c1c', dark: '#450a0a' },
    blue: { bg: '#ffffff', accent1: '#3b82f6', accent2: '#1d4ed8', dark: '#1e3a8a' },
    gold: { bg: '#ffffff', accent1: '#f59e0b', accent2: '#b45309', dark: '#451a03' },
  }[colorTheme] || { bg: '#ffffff', accent1: '#10b981', accent2: '#047857', dark: '#022c22' }

  return (
    <div className="w-full h-full font-sans overflow-hidden relative select-none" style={{ backgroundColor: themeColors.bg }}>
      
      {/* ── BAUHAUS GEOMETRIC BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
         {/* Huge circle */}
         <div className="absolute -top-[20%] -right-[10%] w-[70%] aspect-square rounded-full mix-blend-multiply opacity-20" style={{ backgroundColor: themeColors.accent1 }} />
         {/* Sharp triangle */}
         <div className="absolute -bottom-[10%] -left-[10%] w-[80%] h-[80%] opacity-10" style={{ backgroundColor: themeColors.accent2, clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
         {/* Structural grid lines */}
         <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_2px,transparent_2px),linear-gradient(90deg,rgba(0,0,0,1)_2px,transparent_2px)] bg-[size:100px_100px]" />
      </div>

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-8`}>
        
        {/* ================= PHOTOS SECTION ================= */}
        <div className={`flex ${isLandscape ? 'w-1/2 h-full flex-col justify-center' : 'h-[55%] w-full flex-row items-end justify-center'} gap-6 relative z-20`}>
          
          {/* Supporter Photo in a strict geometric shape */}
          <div className={`relative ${isLandscape ? 'w-[80%] aspect-square shadow-[15px_15px_0px_rgba(0,0,0,1)]' : 'w-[45%] aspect-square shadow-[10px_10px_0px_rgba(0,0,0,1)]'} bg-white border-4 border-black overflow-hidden z-20`}>
             {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-400">
                 <span className="material-symbols-outlined text-[80px]">person</span>
               </div>
             )}
             <div className="absolute bottom-0 left-0 bg-black text-white font-black px-3 py-1 text-[10px] uppercase tracking-widest">
                Supporter
             </div>
          </div>

          {/* Candidate Photo overlapping */}
          <div className={`relative ${isLandscape ? 'w-[50%] aspect-square absolute bottom-10 -right-4 shadow-[15px_15px_0px_rgba(0,0,0,1)]' : 'w-[45%] aspect-square shadow-[10px_10px_0px_rgba(0,0,0,1)] -ml-10 z-10 mb-4'} bg-white border-4 border-black rounded-full overflow-hidden`}>
             <CandidatePortrait className="w-full h-full object-cover" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[8px] rounded-full pointer-events-none" style={{ borderColor: themeColors.accent1, mixBlendMode: 'multiply' }} />
          </div>

        </div>

        {/* ================= TEXT SECTION ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-1/2 h-full pl-12 justify-center' : 'h-[45%] w-full pt-8 justify-center'} relative z-20`}>
          
          {/* Aesthetic block */}
          <div className="w-16 h-4 mb-6" style={{ backgroundColor: themeColors.accent1 }} />

          <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.9] tracking-tighter text-black mb-4 break-all">
            {supporterName || 'YOUR NAME'}
          </h2>
          
          <div className="bg-black text-white p-4 inline-block self-start mb-6 border-l-8 shadow-[8px_8px_0px_rgba(0,0,0,0.2)]" style={{ borderColor: themeColors.accent1 }}>
            <h3 className="font-bold text-sm lg:text-lg uppercase tracking-widest">
              ENDORSES HON. HASSAN
            </h3>
          </div>

          <p className="font-black italic text-lg lg:text-2xl uppercase tracking-wide leading-tight max-w-md" style={{ color: themeColors.accent2 }}>
            "{customMessage || 'BUILDING THE FUTURE'}"
          </p>

          <div className="mt-auto flex items-center justify-between border-t-4 border-black pt-4">
             <div className="flex gap-2">
               <div className="w-4 h-4 bg-black rounded-full" />
               <div className="w-4 h-4 bg-black" />
               <div className="w-4 h-4 bg-black" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
             </div>
             <p className="font-black text-[12px] uppercase tracking-[0.3em] text-black">2027 CAMPAIGN</p>
          </div>
        </div>

      </div>

      {/* Frame border */}
      <div className="absolute inset-0 border-[16px] border-black pointer-events-none z-50" />
    </div>
  )
}
