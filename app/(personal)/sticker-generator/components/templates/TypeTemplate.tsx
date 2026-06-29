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
      
      {/* ── BACKGROUND REFINEMENT ── */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_100%)] pointer-events-none" />

      {/* ── MASSIVE SWISS TYPOGRAPHY (Background Graphic - Reduced Opacity) ── */}
      <div className="absolute -top-[5%] -left-[10%] w-[120%] h-[120%] pointer-events-none flex flex-col justify-center opacity-10 overflow-hidden mix-blend-overlay">
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          HASSAN
        </h1>
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-32" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          SHEHU
        </h1>
        <h1 className="leading-[0.75] font-black uppercase tracking-tighter whitespace-nowrap ml-16" style={{ color: themeColors.contrast, fontSize: '60cqw' }}>
          HUSSAIN
        </h1>
      </div>

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-8 sm:p-14 min-h-0`}>
        
        {/* ================= LEFT / TOP: TYPOGRAPHY ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-[55%] justify-center pr-8 sm:pr-10 border-r-[4px] sm:border-r-[6px]' : 'h-[45%] justify-end pb-8 sm:pb-10 border-b-[4px] sm:border-b-[6px]'} shrink-0 min-h-0 relative`} style={{ borderColor: 'rgba(255,255,255,0.3)' }}>
          
          <div className="absolute top-0 left-0">
             <span className="font-black tracking-[0.4em] uppercase px-4 py-2 text-white rounded-sm shadow-[0_4px_10px_rgba(0,0,0,0.15)]" style={{ backgroundColor: themeColors.accent, fontSize: '1.02cqw' }}>POWERED BY HON. HASH 2027</span>
          </div>

          <div className="mt-auto min-h-0 shrink-0">
            {/* Supporter Name - Improved Hierarchy & Shadow */}
            <h2 className="font-black uppercase leading-[0.85] tracking-tight mb-2 break-words max-w-full" style={{ color: themeColors.text, fontSize: '4.8cqw', textShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              {firstName}
            </h2>
            <h2 className="font-black uppercase leading-[0.85] tracking-tight mb-6 sm:mb-10 break-words max-w-full" style={{ color: themeColors.accent, fontSize: '4.8cqw', textShadow: '0 4px 15px rgba(0,0,0,0.15)' }}>
              {lastName}
            </h2>

            {/* Quote Panel - Refined with subtle gradient & padding */}
            <div className="flex items-center gap-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md p-5 sm:p-8 border-l-[6px] sm:border-l-[8px] rounded-r-xl shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] relative shrink-0" style={{ borderColor: themeColors.accent }}>
              <p className="font-bold uppercase tracking-[0.2em] leading-relaxed break-words" style={{ color: themeColors.text, fontSize: '1.28cqw' }}>
                "{customMessage || 'NO NOISE. JUST WORK.'}"
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT / BOTTOM: STRICT GRID IMAGES ================= */}
        <div className={`flex ${isLandscape ? 'w-[45%] flex-col pl-10 justify-center gap-10' : 'h-[55%] flex-row items-end pt-10 justify-between gap-6'} relative`}>
          
          <div className="w-full flex gap-6 h-full items-center justify-center">
            {/* CANDIDATE PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-white overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border-[4px]`} style={{ borderColor: themeColors.text }}>
               <CandidatePortrait className="w-full h-full object-cover" />
               <div className="absolute top-0 left-0 bg-white px-4 py-2 border-b-[3px] border-r-[3px] rounded-br-xl shadow-sm" style={{ borderColor: themeColors.text }}>
                 <p className="font-black text-[1cqw] uppercase tracking-[0.25em]" style={{ color: themeColors.accent }}>THE VISION</p>
               </div>
            </div>

            {/* SUPPORTER PHOTO */}
            <div className={`relative flex-1 aspect-[3/4] bg-white overflow-hidden rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border-[4px]`} style={{ borderColor: themeColors.accent }}>
               {supporterPhoto ? (
                 <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-gray-300">
                   <span className="material-symbols-outlined text-[7.41cqw]">person</span>
                 </div>
               )}
               <div className="absolute top-0 left-0 bg-white px-4 py-2 border-b-[3px] border-r-[3px] rounded-br-xl shadow-sm" style={{ borderColor: themeColors.accent }}>
                 <p className="font-black text-[1cqw] uppercase tracking-[0.25em]" style={{ color: themeColors.text }}>THE VOTER</p>
               </div>
            </div>
          </div>

        </div>

      </div>

      {/* Frame border - Refined precision */}
      <div className="absolute inset-0 border-[14px] pointer-events-none z-50 rounded-lg" style={{ borderColor: themeColors.bg }} />
      <div className="absolute inset-[14px] border-[3px] pointer-events-none z-50 rounded-sm" style={{ borderColor: themeColors.text, opacity: 0.8 }} />
    </div>
  )
}

