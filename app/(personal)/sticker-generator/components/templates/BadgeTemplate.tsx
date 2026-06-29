import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Use bright, high-contrast, premium colors
  const themeColors = {
    green: { bg: '#ffffff', header: '#065f46', accent: '#10b981', text: '#022c22' },
    red: { bg: '#ffffff', header: '#991b1b', accent: '#ef4444', text: '#450a0a' },
    blue: { bg: '#ffffff', header: '#1e40af', accent: '#3b82f6', text: '#172554' },
    gold: { bg: '#ffffff', header: '#854d0e', accent: '#eab308', text: '#422006' },
  }[colorTheme] || { bg: '#ffffff', header: '#065f46', accent: '#10b981', text: '#022c22' }

  return (
    <div className="w-full h-full bg-[#f1f5f9] font-sans flex items-center justify-center p-4 sm:p-8 relative overflow-hidden select-none" style={{ containerType: 'inline-size' }}>
      
      {/* ── BACKGROUND AMBIENCE ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white to-[#e2e8f0] opacity-80" />

      {/* ================= VIP PASS CARD ================= */}
      <div className={`relative z-10 w-full h-full bg-white rounded-2xl sm:rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-200 flex ${isLandscape ? 'flex-row' : 'flex-col max-w-[90%] mx-auto'}`}>
        
        {/* Lanyard Cutout */}
        <div className={`absolute z-30 bg-[#f1f5f9] rounded-full shadow-inner border border-slate-300 ${isLandscape ? 'top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-6 h-16 sm:w-8 sm:h-24' : 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-6 sm:w-24 sm:h-8'}`} />

        {/* ── HEADER STRIP ── */}
        <div className={`flex items-center justify-center p-4 sm:p-6 relative ${isLandscape ? 'w-[25%] flex-col border-r border-slate-200' : 'h-[20%] sm:h-[25%] border-b border-slate-200'}`} style={{ backgroundColor: themeColors.header }}>
           <div className={`flex items-center gap-2 ${isLandscape ? 'flex-col rotate-180 [writing-mode:vertical-rl]' : ''}`}>
             <span className="material-symbols-outlined text-white text-[2.22cqw] sm:text-[2.78cqw]">verified_user</span>
             <h1 className="text-white font-black uppercase tracking-[0.2em] sm:tracking-[0.3em]" style={{ fontSize: '3cqw' }}>
               VIP ACCESS
             </h1>
           </div>
           {/* Security Chip Mock */}
           <div className={`absolute ${isLandscape ? 'bottom-8' : 'right-4 sm:right-8'} w-8 h-6 sm:w-12 sm:h-10 rounded-md bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 opacity-90 border border-yellow-300 shadow-sm`} />
        </div>

        {/* ── BODY CONTENT ── */}
        <div className="flex-1 flex flex-col p-4 sm:p-8 relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-white min-h-0">
          <div className="absolute inset-0 bg-white/95" />

          <div className="relative z-10 flex flex-col h-full min-h-0 overflow-hidden">
            {/* Top Info Bar */}
            <div className="flex justify-between items-start mb-4 sm:mb-6 border-b-2 border-slate-100 pb-2 sm:pb-4 shrink-0">
               <div className="w-[60%]">
                 <p className="font-bold text-[0.74cqw] sm:text-[0.93cqw] text-slate-400 tracking-[0.2em] uppercase mb-1">Official Supporter</p>
                 <h2 className="font-black uppercase tracking-tight leading-tight break-words w-full" style={{ color: themeColors.text, fontSize: '3.06cqw' }}>
                   {supporterName || 'YOUR NAME'}
                 </h2>
               </div>
               <div className="flex flex-col items-end">
                  <span className="px-2 py-1 sm:px-4 sm:py-1.5 font-black tracking-widest uppercase text-white rounded-md mb-1" style={{ backgroundColor: themeColors.accent, fontSize: '1.02cqw' }}>
                    Verified
                  </span>
                  <span className="font-bold text-slate-400 uppercase tracking-widest" style={{ fontSize: '1.51cqw' }}>ID: HASH-2027</span>
               </div>
            </div>

            {/* Photos & Message Area - BIGGER PHOTOS */}
            <div className={`flex-1 flex gap-4 sm:gap-8 min-h-0 ${isLandscape ? 'items-center' : 'flex-col items-center justify-center'}`}>
              
              <div className="flex gap-2 sm:gap-4 shrink-0">
                {/* Supporter Photo */}
                <div className={`relative p-1.5 sm:p-2 bg-white rounded-xl sm:rounded-2xl border-2 shadow-xl ${isLandscape ? 'w-[120px] sm:w-[180px]' : 'w-[140px] sm:w-[200px]'} aspect-[3/4] flex-shrink-0 group z-20`} style={{ borderColor: themeColors.header }}>
                   <div className="w-full h-full relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-100">
                     {supporterPhoto ? (
                       <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                     ) : (
                       <div className="w-full h-full flex items-center justify-center text-slate-300">
                         <span className="material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]">person</span>
                       </div>
                     )}
                   </div>
                   {/* Hologram sticker mock */}
                   <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-200 to-blue-200 opacity-90 border-2 border-white shadow-lg flex items-center justify-center">
                     <span className="material-symbols-outlined text-white text-[1.3cqw] sm:text-[1.67cqw]">star</span>
                   </div>
                </div>

                {/* Candidate Photo - Massively increased size */}
                <div className={`relative p-1.5 sm:p-2 bg-slate-50 rounded-xl sm:rounded-2xl border-2 border-slate-200 shadow-md ${isLandscape ? 'w-[100px] sm:w-[140px]' : 'w-[120px] sm:w-[160px]'} aspect-[3/4] flex-shrink-0 z-10 self-end -ml-6 lg:ml-0`}>
                   <div className="w-full h-full relative overflow-hidden rounded-lg sm:rounded-xl bg-slate-200">
                     <CandidatePortrait className="w-full h-full object-cover" />
                   </div>
                   <div className="absolute -top-2 left-2 sm:-top-3 sm:left-4 bg-white px-1 sm:px-2 py-0.5 sm:py-1 border border-slate-200 rounded font-black uppercase tracking-widest text-slate-400" style={{ fontSize: '1.51cqw' }}>
                     Candidate
                   </div>
                </div>
              </div>

              {/* Endorsement Message */}
              <div className={`flex flex-col justify-center w-full min-h-0 ${!isLandscape ? 'items-center text-center mt-2 sm:mt-4' : ''}`}>
                 <p className="font-bold text-[0.74cqw] sm:text-[0.93cqw] uppercase tracking-[0.2em] text-slate-400 mb-1 sm:mb-2">Official Endorsement</p>
                 <div className="bg-slate-50 p-2 sm:p-4 rounded-lg sm:rounded-xl border border-slate-200 w-full shadow-sm relative min-h-0 overflow-hidden flex items-center">
                    <span className="material-symbols-outlined absolute top-1 left-1 sm:top-2 sm:left-2 text-slate-200 text-[1.85cqw] sm:text-[2.78cqw]">format_quote</span>
                    <p className="font-black italic uppercase tracking-wide relative z-10 pl-4 sm:pl-6 pt-1 sm:pt-2 w-full break-words leading-snug" style={{ color: themeColors.header, fontSize: '1.79cqw' }}>
                      "{customMessage || 'SERVICE ABOVE POLITICS'}"
                    </p>
                 </div>
              </div>

            </div>

            {/* Footer Barcode */}
            <div className="mt-auto pt-4 border-t-2 border-slate-100 flex justify-between items-end">
              <div className="flex flex-col">
                <div className="h-10 w-56 opacity-60 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat" />
              </div>
              <p className="font-black text-[1.11cqw] uppercase tracking-[0.3em] text-slate-300">#NASSARAWAFIRST</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
