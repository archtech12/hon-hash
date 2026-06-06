import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplateV2 = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  const themeColors = {
    green: {
      accent: 'emerald-500',
      glow: 'bg-emerald-600',
      border: 'border-emerald-500/30',
      text: 'text-emerald-400',
      bgGrad: 'from-emerald-950/80',
    },
    red: {
      accent: 'rose-500',
      glow: 'bg-rose-600',
      border: 'border-rose-500/30',
      text: 'text-rose-400',
      bgGrad: 'from-rose-950/80',
    },
    blue: {
      accent: 'blue-500',
      glow: 'bg-blue-600',
      border: 'border-blue-500/30',
      text: 'text-blue-400',
      bgGrad: 'from-blue-950/80',
    },
    gold: {
      accent: 'amber-500',
      glow: 'bg-amber-600',
      border: 'border-amber-500/30',
      text: 'text-amber-400',
      bgGrad: 'from-amber-950/80',
    },
  }[colorTheme] || {
    accent: 'emerald-500',
    glow: 'bg-emerald-600',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    bgGrad: 'from-emerald-950/80',
  }

  return (
    <div className="w-full h-full bg-[#030712] font-sans flex items-center justify-center p-8 relative overflow-hidden select-none">
      {/* Dark Ambient Grid & Nebulae */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] ${themeColors.bgGrad} via-slate-950 to-black`}></div>
      <div className={`absolute top-[-10%] left-[-10%] w-[50%] h-[50%] ${themeColors.glow}/15 rounded-full blur-[120px] pointer-events-none`}></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      {/* CSS-Only grid patterns */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px] z-0"></div>

      {/* Floating Metallic Badge Card */}
      <div className="w-full h-full max-w-[96%] max-h-[96%] relative flex flex-col items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-8">
        {/* Glowing Edges */}
        <div className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-${themeColors.accent}/45 to-transparent opacity-60`}></div>
        <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent opacity-30"></div>

        {isLandscape ? (
          /* ================= LANDSCAPE RATIO (1080x565) ================= */
          <div className="w-full h-full flex gap-8 items-center z-10 relative">
            {/* Left Column: Slogan, Title, Hologram */}
            <div className="w-[52%] flex flex-col justify-between h-full py-2">
              <div className="flex flex-col items-start">
                <div className="relative mb-2">
                  <div className="absolute inset-0 bg-yellow-400 blur-lg opacity-25"></div>
                  <div className="relative flex items-center gap-1.5 bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-3.5 py-1 rounded-full shadow-md border border-yellow-200/50">
                    <span className="material-symbols-outlined text-base">verified</span>
                    <span className="font-extrabold tracking-[0.1em] text-[8px] uppercase">VERIFIED SUPPORTER</span>
                  </div>
                </div>
                <p className={`${themeColors.text} font-mono text-[8px] tracking-widest opacity-80 mb-2`}>ID: 2027-HASH-V2</p>
                
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white font-black uppercase text-4xl tracking-wide leading-none mt-2">
                  HON. HASH 2027
                </h2>
              </div>

              {/* Glassmorphic Slogan Container */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 my-2 text-center w-full">
                <p className="font-bold text-white text-sm italic truncate">
                  "{customMessage || 'TOGETHER WE RISE'}"
                </p>
              </div>

              <div className="flex items-center justify-between text-left">
                <div className="flex flex-col">
                  <p className="text-gray-500 font-bold uppercase text-[8px] tracking-[0.2em] mb-0.5">SUPPORTED BY</p>
                  <p className="text-white font-black text-2xl uppercase truncate tracking-wide max-w-[240px]">
                    {supporterName || 'YOUR NAME'}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-white/40 font-bold text-[8px] uppercase tracking-widest bg-white/5 px-2 py-1 rounded border border-white/10">VALID THRU 2027</span>
                </div>
              </div>
            </div>

            {/* Right Column: Portraits */}
            <div className="w-[48%] flex items-center justify-center gap-4 relative h-full">
              {/* Left Photo: Candidate */}
              <div className="relative w-[48%] aspect-[3.8/4.8]">
                <div className={`absolute inset-0 rounded-2xl bg-${themeColors.accent}/20 blur-md transform -rotate-3`}></div>
                <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 ${themeColors.border} shadow-2xl bg-slate-900 transform -rotate-3 hover:rotate-0 transition-transform duration-500`}>
                  <CandidatePortrait className="w-full h-full object-cover scale-110 object-top" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center">
                    <p className="text-white text-[8px] font-extrabold uppercase">Hon. Hassan</p>
                  </div>
                </div>
              </div>

              {/* Right Photo: Supporter */}
              <div className="relative w-[48%] aspect-[3.8/4.8] flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-md transform rotate-3"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl bg-slate-900 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white/20">
                      <span className="material-symbols-outlined text-4xl">person</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-2 text-center z-20">
                    <p className="text-yellow-400 text-[8px] font-extrabold uppercase truncate px-1">
                      {supporterName || 'SUPPORTER'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= VERTICAL RATIOS (Square, Portrait, Story) ================= */
          <div className="w-full h-full flex flex-col items-center justify-between z-10 relative">
            {/* Top Area: Verified Badge Label */}
            <div className="flex flex-col items-center text-center mt-2">
              <div className="relative mb-2">
                <div className="absolute inset-0 bg-yellow-400 blur-xl opacity-20"></div>
                <div className="relative flex items-center gap-2 bg-gradient-to-b from-yellow-300 to-yellow-600 text-black px-5 py-2 rounded-full shadow-xl border border-yellow-200/50">
                  <span className="material-symbols-outlined text-lg font-black">verified</span>
                  <span className="font-extrabold tracking-[0.1em] text-[10px] uppercase">VERIFIED SUPPORTER</span>
                </div>
              </div>
              <p className={`${themeColors.text} font-mono text-[8px] tracking-widest opacity-80 uppercase mt-1`}>
                ID: 2027-HASH-V2
              </p>
            </div>

            {/* Middle: Side-by-Side Photos */}
            <div className={`flex-1 w-full flex items-center justify-center gap-6 my-auto min-h-0 ${isStory ? 'my-12' : ''}`}>
              {/* Left Photo: Candidate */}
              <div className="relative w-[46%] aspect-[3.5/4.5] max-w-[200px]">
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-bl from-${themeColors.accent} to-purple-600 opacity-20 blur-md transform -rotate-3`}></div>
                <div className={`relative w-full h-full rounded-2xl overflow-hidden border-2 ${themeColors.border} shadow-2xl bg-slate-900 transform -rotate-3 hover:rotate-0 transition-transform duration-500`}>
                  <CandidatePortrait className="w-full h-full object-cover scale-110 object-top" />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-3 text-center">
                    <p className="text-white text-[9px] font-black uppercase">Hon. Hassan</p>
                  </div>
                </div>
              </div>

              {/* Right Photo: Supporter */}
              <div className="relative w-[46%] aspect-[3.5/4.5] max-w-[200px] flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400 to-orange-500 opacity-20 blur-md transform rotate-3"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-yellow-400/30 shadow-2xl bg-slate-900 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-900 text-white/20">
                      <span className="material-symbols-outlined text-5xl">person</span>
                    </div>
                  )}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/85 to-transparent p-3 text-center z-20">
                    <p className="text-yellow-400 text-[9px] font-black uppercase truncate px-1">
                      {supporterName || 'SUPPORTER'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Slogan & Verification Details */}
            <div className="w-full flex flex-col items-center text-center mt-auto">
              <p className="text-white font-black uppercase text-[10px] tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10 mb-3">
                VALID THRU 2027
              </p>
              
              {/* Glassmorphic message container */}
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 w-[90%] mb-4">
                <p className="text-white font-bold italic text-sm">
                  "{customMessage || 'TOGETHER WE RISE'}"
                </p>
              </div>

              {/* Footer */}
              <div className="w-full">
                <div className={`w-[80%] h-[1px] bg-gradient-to-r from-transparent via-${themeColors.accent} to-transparent mx-auto mb-3 opacity-40`}></div>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-white font-black uppercase text-2xl tracking-widest">
                  HON. HASH 2027
                </h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
