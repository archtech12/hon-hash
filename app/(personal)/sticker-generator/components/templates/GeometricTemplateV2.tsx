import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplateV2 = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Neo-Brutalist highly saturated pastel/neon colors
  const themeColors = {
    green: { bg: '#e2e8f0', accent1: '#a7f3d0', accent2: '#10b981', text: '#000000' },
    red: { bg: '#e2e8f0', accent1: '#fecaca', accent2: '#ef4444', text: '#000000' },
    blue: { bg: '#e2e8f0', accent1: '#bfdbfe', accent2: '#3b82f6', text: '#000000' },
    gold: { bg: '#e2e8f0', accent1: '#fde68a', accent2: '#f59e0b', text: '#000000' },
  }[colorTheme] || { bg: '#e2e8f0', accent1: '#a7f3d0', accent2: '#10b981', text: '#000000' }

  return (
    <div className="w-full h-full font-sans overflow-hidden flex relative select-none" style={{ backgroundColor: themeColors.bg, containerType: 'inline-size' }}>
      
      {/* ── NEO-BRUTALIST BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-4 sm:p-6 lg:p-8 gap-4 sm:gap-6 min-h-0`}>
        
        {/* ================= LEFT / TOP: PHOTOS ================= */}
        <div className={`flex ${isLandscape ? 'w-[55%] flex-col' : 'h-[50%] flex-row'} gap-4 sm:gap-6 relative z-20 shrink-0 min-h-0`}>
          
          {/* Supporter Photo Box */}
          <div className={`relative ${isLandscape ? 'w-full h-[60%]' : 'w-[55%] h-full'} bg-white border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1),0_15px_30px_rgba(0,0,0,0.1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1),0_20px_40px_rgba(0,0,0,0.1)] overflow-hidden group flex flex-col shrink-0`}>
             <div className="flex-1 w-full relative bg-slate-100 border-b-4 border-black min-h-0">
               {supporterPhoto ? (
                 <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex flex-col gap-1 items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400">
                   <span className="material-symbols-outlined text-[5cqw] sm:text-[7cqw]">account_circle</span>
                   <span className="font-sans text-[1.5cqw] font-bold tracking-widest uppercase opacity-60">Add Photo</span>
                 </div>
               )}
             </div>
             <div className="h-8 sm:h-10 lg:h-12 w-full flex items-center justify-between px-3 sm:px-4 shrink-0" style={{ backgroundColor: themeColors.accent1 }}>
                <span className="font-black uppercase tracking-widest text-black" style={{ fontSize: '2cqw' }}>Voter</span>
                <span className="material-symbols-outlined text-black" style={{ fontSize: '3cqw' }}>arrow_forward</span>
             </div>
          </div>

          {/* Candidate Photo Box */}
          <div className={`relative ${isLandscape ? 'w-[70%] h-[35%] self-end' : 'w-[40%] h-[80%] self-end'} bg-white border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1),0_15px_30px_rgba(0,0,0,0.15)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1),0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col shrink-0`}>
             <div className="flex-1 w-full relative bg-slate-100 border-b-4 border-black min-h-0">
               <CandidatePortrait className="w-full h-full object-cover" />
             </div>
             <div className="h-6 sm:h-8 lg:h-10 w-full flex items-center justify-center px-1 sm:px-2 shrink-0 shadow-inner" style={{ backgroundColor: themeColors.accent2 }}>
                <span className="font-black uppercase tracking-widest text-black break-words" style={{ fontSize: '1.51cqw' }}>Candidate</span>
             </div>
          </div>

        </div>

        {/* ================= RIGHT / BOTTOM: TEXT ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-[45%] h-full' : 'h-[50%] w-full'} gap-3 sm:gap-4 relative z-20 min-h-0 shrink-0`}>
          
          {/* Header Badge */}
          <div className="self-start border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1),0_4px_10px_rgba(0,0,0,0.05)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1),0_8px_16px_rgba(0,0,0,0.05)] px-3 py-1.5 sm:px-5 sm:py-2.5 bg-white flex items-center gap-2 shrink-0">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full border-[1.5px] sm:border-2 border-black" style={{ backgroundColor: themeColors.accent2 }} />
            <span className="font-black uppercase tracking-widest" style={{ fontSize: '2cqw' }}>Election 2027</span>
          </div>

          {/* Supporter Name */}
          <div className="mt-1 sm:mt-2 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.08)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1),0_15px_30px_rgba(0,0,0,0.08)] bg-white p-4 sm:p-5 lg:p-8 shrink-0">
            <h2 className="font-black uppercase leading-[0.95] tracking-tight text-black break-words" style={{ fontSize: '6cqw' }}>
              {supporterName || 'YOUR NAME'}
            </h2>
          </div>
          
          {/* Endorsement Message */}
          <div className="mt-1 sm:mt-2 border-4 border-black shadow-[3px_3px_0px_rgba(0,0,0,1),0_10px_20px_rgba(0,0,0,0.08)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1),0_15px_30px_rgba(0,0,0,0.08)] p-4 sm:p-5 lg:p-8 flex-1 flex items-center justify-center text-center min-h-0 overflow-hidden relative" style={{ backgroundColor: themeColors.accent1 }}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 mix-blend-multiply pointer-events-none" />
            <p className="font-black uppercase tracking-widest leading-snug text-black break-words relative z-10" style={{ fontSize: '3.51cqw' }}>
              "{customMessage || 'POWER TO THE PEOPLE'}"
            </p>
          </div>

          {/* Slogan */}
          <div className="mt-auto border-4 border-black shadow-[2px_2px_0px_rgba(0,0,0,1),0_8px_16px_rgba(0,0,0,0.2)] sm:shadow-[3px_3px_0px_rgba(0,0,0,1),0_12px_24px_rgba(0,0,0,0.2)] px-4 py-3 sm:px-5 sm:py-4 bg-black text-white flex items-center justify-center shrink-0 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
            <p className="font-black uppercase tracking-[0.25em] sm:tracking-[0.35em] break-words relative z-10" style={{ fontSize: '2cqw' }}>Hon. Hassan Shehu Hussain</p>
          </div>

        </div>

      </div>
    </div>
  )
}
