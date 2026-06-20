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
    <div className="w-full h-full font-sans overflow-hidden flex relative select-none" style={{ backgroundColor: themeColors.bg }}>
      
      {/* ── NEO-BRUTALIST BACKGROUND ── */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

      <div className={`relative z-10 w-full h-full flex ${isLandscape ? 'flex-row' : 'flex-col'} p-6 lg:p-8 gap-6`}>
        
        {/* ================= LEFT / TOP: PHOTOS ================= */}
        <div className={`flex ${isLandscape ? 'w-[55%] flex-col' : 'h-[50%] flex-row'} gap-6 relative z-20`}>
          
          {/* Supporter Photo Box */}
          <div className={`relative ${isLandscape ? 'w-full h-[60%]' : 'w-[55%] h-full'} bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden group flex flex-col`}>
             <div className="flex-1 w-full relative bg-slate-100 border-b-4 border-black">
               {supporterPhoto ? (
                 <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
               ) : (
                 <div className="w-full h-full flex items-center justify-center text-slate-300">
                   <span className="material-symbols-outlined text-[80px]">person</span>
                 </div>
               )}
             </div>
             <div className="h-10 lg:h-12 w-full flex items-center justify-between px-3" style={{ backgroundColor: themeColors.accent1 }}>
                <span className="font-black text-xs lg:text-sm uppercase tracking-widest text-black">Voter</span>
                <span className="material-symbols-outlined text-black">arrow_forward</span>
             </div>
          </div>

          {/* Candidate Photo Box */}
          <div className={`relative ${isLandscape ? 'w-[70%] h-[35%] self-end' : 'w-[40%] h-[80%] self-end'} bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col`}>
             <div className="flex-1 w-full relative bg-slate-100 border-b-4 border-black">
               <CandidatePortrait className="w-full h-full object-cover" />
             </div>
             <div className="h-8 lg:h-10 w-full flex items-center justify-center px-2" style={{ backgroundColor: themeColors.accent2 }}>
                <span className="font-black text-[10px] lg:text-xs uppercase tracking-widest text-black">Candidate</span>
             </div>
          </div>

        </div>

        {/* ================= RIGHT / BOTTOM: TEXT ================= */}
        <div className={`flex flex-col ${isLandscape ? 'w-[45%] h-full' : 'h-[50%] w-full'} gap-4 relative z-20`}>
          
          {/* Header Badge */}
          <div className="self-start border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-4 py-2 bg-white flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-black" style={{ backgroundColor: themeColors.accent2 }} />
            <span className="font-black text-xs uppercase tracking-widest">Election 2027</span>
          </div>

          {/* Supporter Name */}
          <div className="mt-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] bg-white p-4 lg:p-6">
            <h2 className="font-black uppercase text-[clamp(2rem,5vw,4rem)] leading-[0.9] tracking-tighter text-black break-all">
              {supporterName || 'YOUR NAME'}
            </h2>
          </div>
          
          {/* Endorsement Message */}
          <div className="mt-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] p-4 lg:p-6 flex-1 flex items-center justify-center text-center" style={{ backgroundColor: themeColors.accent1 }}>
            <p className="font-black text-lg lg:text-2xl uppercase tracking-widest leading-tight text-black">
              "{customMessage || 'POWER TO THE PEOPLE'}"
            </p>
          </div>

          {/* Slogan */}
          <div className="mt-auto border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] px-4 py-3 bg-black text-white flex items-center justify-center">
            <p className="font-black text-xs lg:text-sm uppercase tracking-[0.3em]">Hon. Hassan Shehu Hussain</p>
          </div>

        </div>

      </div>
    </div>
  )
}
