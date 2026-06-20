import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const TypeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Use bright, punchy, high-contrast colors (white/light base, extremely bold accents)
  const themeColors = {
    green: { bg: '#ffffff', text: '#022c22', accent: '#16a34a' },
    red: { bg: '#ffffff', text: '#450a0a', accent: '#dc2626' },
    blue: { bg: '#ffffff', text: '#172554', accent: '#2563eb' },
    gold: { bg: '#ffffff', text: '#422006', accent: '#d97706' },
  }[colorTheme] || { bg: '#ffffff', text: '#022c22', accent: '#16a34a' }

  const firstName = supporterName ? supporterName.split(' ')[0] : 'YOUR'
  const lastName = supporterName ? supporterName.split(' ').slice(1).join(' ') || 'NAME' : 'NAME'

  return (
    <div className="w-full h-full font-sans overflow-hidden flex relative select-none" style={{ backgroundColor: themeColors.bg }}>
      
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
      <div className="absolute -top-10 -left-10 w-[120%] h-[120%] pointer-events-none flex flex-col justify-center opacity-[0.04]">
        <h1 className="text-[300px] leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap" style={{ color: themeColors.text }}>
          HASSAN
        </h1>
        <h1 className="text-[300px] leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-32" style={{ color: themeColors.text }}>
          SHEHU
        </h1>
        <h1 className="text-[300px] leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-16" style={{ color: themeColors.text }}>
          HUSSAIN
        </h1>
      </div>

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-8 lg:p-12`}>
        
        {/* ================= LEFT / TOP: TYPOGRAPHY ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-[55%] justify-center pr-8 border-r-[12px]' : 'h-[45%] justify-end pb-8 border-b-[12px]'}`} style={{ borderColor: themeColors.text }}>
          
          <div className="absolute top-6 left-6">
             <span className="font-black text-[12px] tracking-[0.4em] uppercase px-4 py-2 text-white" style={{ backgroundColor: themeColors.accent }}>2027 Mandate</span>
          </div>

          <div className="mt-auto">
            {/* Supporter Name built as structural type, strict word-breaking to prevent splitting letters */}
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] tracking-tighter mb-2 break-words max-w-full" style={{ color: themeColors.text }}>
              {firstName}
            </h2>
            <h2 className="font-black uppercase text-[clamp(2.5rem,6vw,5rem)] leading-[0.85] tracking-tighter mb-8 break-words max-w-full" style={{ color: themeColors.accent }}>
              {lastName}
            </h2>

            {/* Vision Statement Block (Deep Border Accent) */}
            <div className="flex items-center gap-4 bg-slate-50 p-6 border-l-[16px] shadow-[5px_5px_0px_rgba(0,0,0,0.05)] relative" style={{ borderColor: themeColors.accent }}>
              <div className="absolute top-0 right-0 p-2 opacity-20">
                 <div className="w-2 h-2 border-t-2 border-r-2 border-slate-900" />
              </div>
              <p className="font-black text-[clamp(0.8rem,1.5vw,1.1rem)] uppercase tracking-[0.2em] leading-snug" style={{ color: themeColors.text }}>
                "{customMessage || 'NO NOISE. JUST WORK.'}"
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT / BOTTOM: STRICT GRID IMAGES ================= */}
        <div className={`flex ${isLandscape ? 'w-[45%] flex-col pl-8 justify-center gap-8' : 'h-[55%] flex-row items-end pt-8 justify-between gap-4'} relative`}>
          
          <div className="w-full flex gap-4 h-full items-center justify-center">
            {/* CANDIDATE PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-slate-100 overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.1)] border-[6px]`} style={{ borderColor: themeColors.text }}>
               <CandidatePortrait className="w-full h-full object-cover grayscale-[15%] contrast-125" />
               <div className="absolute top-0 left-0 bg-white/95 px-3 py-1.5 border-b-[4px] border-r-[4px]" style={{ borderColor: themeColors.text }}>
                 <p className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: themeColors.accent }}>THE VISION</p>
               </div>
            </div>

            {/* SUPPORTER PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-slate-100 overflow-hidden shadow-[10px_10px_0px_rgba(0,0,0,0.1)] border-[6px]`} style={{ borderColor: themeColors.accent }}>
               {supporterPhoto ? (
                 <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[10%]" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-300">
                   <span className="material-symbols-outlined text-[80px]">person</span>
                 </div>
               )}
               <div className="absolute top-0 left-0 bg-white/95 px-3 py-1.5 border-b-[4px] border-r-[4px]" style={{ borderColor: themeColors.accent }}>
                 <p className="font-black text-[11px] uppercase tracking-[0.2em]" style={{ color: themeColors.text }}>THE VOTER</p>
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
