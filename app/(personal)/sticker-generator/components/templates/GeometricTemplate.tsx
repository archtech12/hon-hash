import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Bauhaus inspired, pure vibrant colors
  const themeColors = {
    green: { bg: '#10b981', accent1: '#fcd34d', accent2: '#34d399', dark: '#ffffff' },
    red:   { bg: '#ef4444', accent1: '#fcd34d', accent2: '#f87171', dark: '#ffffff' },
    blue:  { bg: '#3b82f6', accent1: '#fcd34d', accent2: '#60a5fa', dark: '#ffffff' },
    gold:  { bg: '#f59e0b', accent1: '#fde047', accent2: '#fbbf24', dark: '#ffffff' },
  }[colorTheme] || { bg: '#10b981', accent1: '#fcd34d', accent2: '#34d399', dark: '#ffffff' }

  return (
    <div className="w-full h-full font-sans overflow-hidden relative select-none" style={{ backgroundColor: themeColors.bg, containerType: 'inline-size' }}>
      
      {/* ── BAUHAUS GEOMETRIC BACKGROUND ── */}
      <div className="absolute inset-0 z-0">
         {/* Huge circle */}
         <div className="absolute -top-[20%] -right-[10%] w-[70%] aspect-square rounded-full mix-blend-overlay opacity-50" style={{ backgroundColor: themeColors.accent1 }} />
         {/* Sharp triangle */}
         <div className="absolute -bottom-[10%] -left-[10%] w-[80%] h-[80%] opacity-30 mix-blend-overlay" style={{ backgroundColor: themeColors.accent2, clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }} />
         {/* Structural grid lines */}
         <div className="absolute inset-0 opacity-[0.2]" style={{ backgroundImage: `linear-gradient(${themeColors.dark} 2px, transparent 2px), linear-gradient(90deg, ${themeColors.dark} 2px, transparent 2px)`, backgroundSize: '100px 100px' }} />
      </div>

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-6 sm:p-8 min-h-0`}>
        
        {/* ================= PHOTOS SECTION ================= */}
        <div className={`flex ${isLandscape ? 'w-1/2 h-full flex-col justify-center' : 'h-[55%] w-full flex-row items-end justify-center'} gap-4 sm:gap-6 relative z-20 min-h-0 shrink-0`}>
          
          {/* Supporter Photo in a strict geometric shape */}
          <div className={`relative ${isLandscape ? 'w-[80%] aspect-square shadow-[4px_4px_0px_rgba(255,255,255,1),0_15px_30px_rgba(0,0,0,0.15)] sm:shadow-[6px_6px_0px_rgba(255,255,255,1),0_20px_40px_rgba(0,0,0,0.15)]' : 'w-[45%] aspect-square shadow-[3px_3px_0px_rgba(255,255,255,1),0_10px_20px_rgba(0,0,0,0.15)] sm:shadow-[4px_4px_0px_rgba(255,255,255,1),0_15px_30px_rgba(0,0,0,0.15)]'} bg-white border-2 sm:border-4 border-white overflow-hidden z-20 shrink-0`}>
             {supporterPhoto ? (
               <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
             ) : (
               <div className="w-full h-full flex flex-col gap-1 items-center justify-center bg-gradient-to-br from-white/30 to-white/5 backdrop-blur-sm text-white">
                 <span className="material-symbols-outlined text-[5cqw] sm:text-[7cqw] drop-shadow-sm">account_circle</span>
                 <span className="font-sans text-[1.5cqw] font-bold tracking-widest uppercase opacity-80">Photo</span>
               </div>
             )}
             <div className="absolute bottom-0 left-0 bg-white font-black px-3 py-1.5 text-[0.8cqw] sm:text-[1cqw] uppercase tracking-widest shadow-[2px_2px_10px_rgba(0,0,0,0.1)]" style={{ color: themeColors.bg }}>
                Supporter
             </div>
          </div>

          {/* Candidate Photo overlapping */}
          <div className={`relative ${isLandscape ? 'w-[50%] aspect-square absolute bottom-4 sm:bottom-10 -right-2 sm:-right-4 shadow-[4px_4px_0px_rgba(255,255,255,1),0_15px_35px_rgba(0,0,0,0.2)] sm:shadow-[6px_6px_0px_rgba(255,255,255,1),0_20px_45px_rgba(0,0,0,0.2)]' : 'w-[45%] aspect-square shadow-[3px_3px_0px_rgba(255,255,255,1),0_10px_25px_rgba(0,0,0,0.2)] sm:shadow-[4px_4px_0px_rgba(255,255,255,1),0_15px_35px_rgba(0,0,0,0.2)] -ml-6 sm:-ml-10 z-10 mb-2 sm:mb-4'} bg-white border-2 sm:border-[5px] border-white rounded-full overflow-hidden shrink-0`}>
             <CandidatePortrait className="w-full h-full object-cover" />
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border-[4px] sm:border-[8px] rounded-full pointer-events-none" style={{ borderColor: themeColors.accent1, mixBlendMode: 'overlay' }} />
          </div>

        </div>

        {/* ================= TEXT SECTION ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-1/2 h-full pl-6 sm:pl-12 justify-center' : 'h-[45%] w-full pt-4 sm:pt-8 justify-center'} relative z-20 min-h-0`}>
          
          {/* Aesthetic block */}
          <div className="w-12 sm:w-16 h-3 sm:h-4 mb-3 sm:mb-6 shrink-0 bg-white" />

          <h2 className="font-black uppercase leading-tight tracking-tight text-white mb-2 sm:mb-4 break-words drop-shadow-[0_4px_4px_rgba(0,0,0,0.15)]" style={{ fontSize: '8cqw' }}>
            {supporterName || 'YOUR NAME'}
          </h2>
          
          <div className="bg-white p-2.5 sm:p-5 inline-block self-start mb-3 sm:mb-6 border-l-[6px] sm:border-l-[10px] shadow-[3px_3px_0px_rgba(255,255,255,0.4),0_8px_16px_rgba(0,0,0,0.1)] shrink-0" style={{ borderColor: themeColors.accent1 }}>
            <h3 className="font-bold uppercase tracking-widest" style={{ color: themeColors.bg, fontSize: '2.51cqw', letterSpacing: '0.15em' }}>
              ENDORSES HON. HASSAN
            </h3>
          </div>

          <p className="font-black italic uppercase tracking-wide leading-snug max-w-md break-words shrink-0" style={{ color: themeColors.accent1, fontSize: '1.53cqw', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            "{customMessage || 'BUILDING THE FUTURE'}"
          </p>

          <div className="mt-auto flex items-center justify-between border-t-2 sm:border-t-4 border-white pt-2 sm:pt-4 shrink-0">
             <div className="flex gap-1.5 sm:gap-2">
               <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full" />
               <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white" />
               <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
             </div>
             <p className="font-black uppercase tracking-[0.3em] text-white" style={{ fontSize: '2cqw' }}>2027 CAMPAIGN</p>
          </div>
        </div>

      </div>

      {/* Frame border */}
      <div className="absolute inset-0 border-[16px] border-white/20 pointer-events-none z-50 mix-blend-overlay" />
    </div>
  )
}
