import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const TypeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Pure color, vibrant, highly saturated aesthetics
  const themeColors = {
    green: { bg: '#10b981', text: '#ffffff', accent: '#064e3b', contrast: '#34d399' },
    red:   { bg: '#ef4444', text: '#ffffff', accent: '#7f1d1d', contrast: '#f87171' },
    blue:  { bg: '#3b82f6', text: '#ffffff', accent: '#1e3a8a', contrast: '#60a5fa' },
    gold:  { bg: '#f59e0b', text: '#ffffff', accent: '#78350f', contrast: '#fbbf24' },
  }[colorTheme] || { bg: '#10b981', text: '#ffffff', accent: '#064e3b', contrast: '#34d399' }

  const firstName = supporterName ? supporterName.split(' ')[0] : 'YOUR'
  const lastName = supporterName ? supporterName.split(' ').slice(1).join(' ') || 'NAME' : 'NAME'

  return (
    <div className="w-full h-full font-sans overflow-hidden flex relative select-none" style={{ backgroundColor: themeColors.bg, containerType: 'inline-size' }}>
      
      {/* ── BACKGROUND GRAIN & MICRO-DECORATIVE VECTORS ── */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      
      {/* Alignment Crosses */}
      <div className="absolute top-10 right-10 w-4 h-4 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-px bg-slate-400" />
         <div className="absolute left-1/2 top-0 h-full w-px bg-slate-400" />
      </div>
      <div className="absolute bottom-10 left-10 w-4 h-4 pointer-events-none">
         <div className="absolute top-1/2 left-0 w-full h-px bg-slate-400" />
         <div className="absolute left-1/2 top-0 h-full w-px bg-slate-400" />
      </div>

      {/* ── MASSIVE SWISS TYPOGRAPHY (Background Graphic) ── */}
      <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] pointer-events-none flex flex-col justify-center opacity-20 overflow-hidden mix-blend-overlay">
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap drop-shadow-xl" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          HASSAN
        </h1>
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-32 drop-shadow-xl" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          SHEHU
        </h1>
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-16 drop-shadow-xl" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          HUSSAIN
        </h1>
      </div>

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-6 sm:p-12 min-h-0`}>
        
        {/* ================= LEFT / TOP: TYPOGRAPHY ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-[55%] justify-center pr-6 sm:pr-8 border-r-[8px] sm:border-r-[12px]' : 'h-[45%] justify-end pb-6 sm:pb-8 border-b-[8px] sm:border-b-[12px]'} shrink-0 min-h-0`} style={{ borderColor: themeColors.text }}>
          
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
             <span className="font-black tracking-[0.3em] sm:tracking-[0.4em] uppercase px-3 py-1.5 sm:px-4 sm:py-2 text-white shadow-lg" style={{ backgroundColor: themeColors.accent, fontSize: '1.02cqw' }}>2027 Mandate</span>
          </div>

          <div className="mt-auto min-h-0 shrink-0">
            {/* Supporter Name built as structural type, strict word-breaking to prevent splitting letters */}
            <h2 className="font-black uppercase leading-[0.85] tracking-tighter mb-1 sm:mb-2 break-words max-w-full drop-shadow-md" style={{ color: themeColors.text, fontSize: '5.09cqw' }}>
              {firstName}
            </h2>
            <h2 className="font-black uppercase leading-[0.85] tracking-tighter mb-4 sm:mb-8 break-words max-w-full drop-shadow-md" style={{ color: themeColors.accent, fontSize: '5.09cqw' }}>
              {lastName}
            </h2>

            {/* Vision Statement Block (Deep Border Accent) */}
            <div className="flex items-center gap-2 sm:gap-4 bg-white/10 backdrop-blur-md p-3 sm:p-6 border-l-[8px] sm:border-l-[16px] shadow-[10px_10px_30px_rgba(0,0,0,0.2)] relative shrink-0" style={{ borderColor: themeColors.accent }}>
              <div className="absolute top-0 right-0 p-1 sm:p-2 opacity-40">
                 <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 border-t-2 border-r-2 border-white" />
              </div>
              <p className="font-black uppercase tracking-[0.2em] leading-snug break-words drop-shadow-sm" style={{ color: themeColors.text, fontSize: '1.28cqw' }}>
                "{customMessage || 'NO NOISE. JUST WORK.'}"
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT / BOTTOM: STRICT GRID IMAGES ================= */}
        <div className={`flex ${isLandscape ? 'w-[45%] flex-col pl-8 justify-center gap-8' : 'h-[55%] flex-row items-end pt-8 justify-between gap-4'} relative`}>
          
          <div className="w-full flex gap-4 h-full items-center justify-center">
            {/* CANDIDATE PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-white overflow-hidden shadow-[15px_15px_30px_rgba(0,0,0,0.25)] border-[6px]`} style={{ borderColor: themeColors.text }}>
               <CandidatePortrait className="w-full h-full object-cover" />
               <div className="absolute top-0 left-0 bg-white/95 backdrop-blur-md px-3 py-1.5 border-b-[4px] border-r-[4px]" style={{ borderColor: themeColors.text }}>
                 <p className="font-black text-[1.02cqw] uppercase tracking-[0.2em]" style={{ color: themeColors.accent }}>THE VISION</p>
               </div>
            </div>

            {/* SUPPORTER PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-white overflow-hidden shadow-[15px_15px_30px_rgba(0,0,0,0.25)] border-[6px]`} style={{ borderColor: themeColors.accent }}>
               {supporterPhoto ? (
                 <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-300">
                   <span className="material-symbols-outlined text-[7.41cqw]">person</span>
                 </div>
               )}
               <div className="absolute top-0 left-0 bg-white/95 backdrop-blur-md px-3 py-1.5 border-b-[4px] border-r-[4px]" style={{ borderColor: themeColors.accent }}>
                 <p className="font-black text-[1.02cqw] uppercase tracking-[0.2em]" style={{ color: themeColors.text }}>THE VOTER</p>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* Frame border */}
      <div className="absolute inset-0 border-[16px] pointer-events-none z-50" style={{ borderColor: themeColors.bg }} />
      <div className="absolute inset-[16px] border-[4px] pointer-events-none z-50" style={{ borderColor: themeColors.text }} />
    </div>
  )
}
