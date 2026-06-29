import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplateV2 = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  // Professional, highly structured corporate/official credential colors
  const themeColors = {
    green: { primary: '#0f766e', secondary: '#14b8a6', text: '#134e4a', bg: '#f8fafc' },
    red: { primary: '#b91c1c', secondary: '#ef4444', text: '#7f1d1d', bg: '#f8fafc' },
    blue: { primary: '#1d4ed8', secondary: '#3b82f6', text: '#1e3a8a', bg: '#f8fafc' },
    gold: { primary: '#b45309', secondary: '#f59e0b', text: '#78350f', bg: '#f8fafc' },
  }[colorTheme] || { primary: '#0f766e', secondary: '#14b8a6', text: '#134e4a', bg: '#f8fafc' }

  return (
    <div className="w-full h-full flex items-center justify-center p-4 sm:p-6 bg-[#e2e8f0] relative overflow-hidden select-none font-sans" style={{ containerType: 'inline-size' }}>
      
      {/* ── AMBIENT SHADOW ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />

      {/* ================= OFFICIAL DELEGATE BADGE ================= */}
      <div className={`relative z-10 w-full h-full max-w-[95%] mx-auto bg-white rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border border-slate-300 overflow-hidden flex ${isLandscape ? 'flex-row' : 'flex-col'}`}>
        
        {/* Micro-print security pattern background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] pointer-events-none" />

        {/* ── HEADER REGION ── */}
        <div className={`flex items-center justify-between p-4 sm:p-6 ${isLandscape ? 'w-[25%] flex-col border-r-4' : 'w-full h-[22%] border-b-4 shrink-0'}`} style={{ backgroundColor: themeColors.primary, borderColor: themeColors.secondary }}>
           {/* Abstract security graphic */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="w-[150%] h-[150%] absolute -top-[50%] -left-[25%] border-[20px] sm:border-[40px] rounded-full" style={{ borderColor: themeColors.secondary }} />
           </div>

           <div className={`flex items-center gap-3 sm:gap-4 relative z-10 ${isLandscape ? 'flex-col text-center mt-2 sm:mt-4' : 'w-full'}`}>
             <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white flex items-center justify-center rounded shadow-inner p-1 shrink-0">
               <CandidatePortrait className="w-full h-full object-cover rounded-sm" />
             </div>
             <div className={`${isLandscape ? '' : 'flex-1'}`}>
               <h1 className="text-white font-black tracking-widest uppercase leading-tight drop-shadow-md" style={{ fontSize: '6cqw' }}>
                 DELEGATE
               </h1>
               <p className="text-white/80 font-bold tracking-[0.3em] sm:tracking-[0.4em] uppercase mt-1" style={{ fontSize: '2cqw' }}>Official Campaign 2027</p>
             </div>
           </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative min-h-0`}>
          
          {/* Watermark in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <span className="material-symbols-outlined text-[18.52cqw] sm:text-[27.78cqw]">verified</span>
          </div>

          {/* LEFT/TOP: Supporter Photo (The primary focus) */}
          <div className={`flex items-center justify-center p-4 sm:p-8 ${isLandscape ? 'w-[45%] border-r border-slate-200' : 'h-[45%] sm:h-auto w-full border-b border-slate-200 shrink-0 min-h-0'}`}>
             <div className="w-full h-full sm:h-auto max-w-[200px] sm:max-w-[280px] aspect-[4/5] bg-white p-1.5 sm:p-2 border border-slate-300 shadow-lg relative">
                <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 w-10 sm:w-16 h-1 sm:h-2 bg-slate-200 rounded-full shadow-inner" />
                <div className="w-full h-full bg-slate-100 overflow-hidden relative">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <span className="material-symbols-outlined text-[5.56cqw] sm:text-[7.41cqw]">person</span>
                    </div>
                  )}
                  {/* Digital timestamp overlay */}
                  <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 bg-black/60 backdrop-blur-sm text-white px-1 sm:px-2 py-0.5 font-mono tracking-widest rounded" style={{ fontSize: '2cqw' }}>
                    AUTH: {Date.now().toString().slice(-8)}
                  </div>
                </div>
             </div>
          </div>

          {/* RIGHT/BOTTOM: ID Details & Endorsement */}
          <div className={`flex-1 flex flex-col p-4 sm:p-8 relative z-10 min-h-0 overflow-hidden`}>
             
             {/* Name Block */}
             <div className="mb-3 sm:mb-6 shrink-0">
               <p className="text-slate-400 uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black mb-1" style={{ fontSize: '2cqw' }}>Accredited Member</p>
               <h2 className="font-black uppercase tracking-tighter leading-[0.9] text-slate-800 break-words border-l-[4px] sm:border-l-8 pl-3 sm:pl-4 py-1" style={{ borderColor: themeColors.primary, fontSize: '4.07cqw' }}>
                 {supporterName || 'YOUR FULL NAME'}
               </h2>
             </div>

             {/* Structural Grid Info */}
             <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-6 shrink-0">
               <div className="bg-slate-50 border border-slate-200 p-2 sm:p-3 rounded-sm">
                 <p className="text-slate-400 uppercase tracking-widest font-bold mb-0.5 sm:mb-1" style={{ fontSize: '1.51cqw' }}>Status</p>
                 <p className="font-black uppercase break-words" style={{ color: themeColors.primary, fontSize: '1.28cqw' }}>Active / Verified</p>
               </div>
               <div className="bg-slate-50 border border-slate-200 p-2 sm:p-3 rounded-sm">
                 <p className="text-slate-400 uppercase tracking-widest font-bold mb-0.5 sm:mb-1" style={{ fontSize: '1.51cqw' }}>Endorsing</p>
                 <p className="font-black uppercase text-slate-800 break-words" style={{ fontSize: '2.51cqw' }}>Hon. Hassan S.H.</p>
               </div>
             </div>

             {/* Statement Block */}
             <div className="flex-1 bg-slate-100 border border-slate-200 p-3 sm:p-5 rounded-sm relative min-h-0 overflow-hidden flex items-center">
                <span className="material-symbols-outlined absolute top-2 left-2 sm:top-4 sm:left-4 text-slate-200 leading-tight" style={{ fontSize: '6cqw' }}>format_quote</span>
                <p className="font-black italic text-slate-700 tracking-wide leading-snug sm:leading-snug relative z-10 w-full break-words" style={{ fontSize: '3.51cqw' }}>
                  "{customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY'}"
                </p>
             </div>

             {/* Footer Elements */}
             <div className="mt-3 sm:mt-6 flex justify-between items-end shrink-0">
               <div className="h-6 sm:h-10 w-[50%] opacity-70 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat mix-blend-multiply" />
               <div className="text-right flex flex-col items-end">
                 <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-full border-[1.5px] sm:border-2 flex items-center justify-center mb-0.5 sm:mb-1 bg-white" style={{ borderColor: themeColors.secondary }}>
                   <span className="material-symbols-outlined" style={{ color: themeColors.primary, fontSize: '1.53cqw' }}>fingerprint</span>
                 </div>
                 <p className="font-black uppercase tracking-widest" style={{ color: themeColors.primary, fontSize: '0.77cqw' }}>NASSARAWA FIRST</p>
               </div>
             </div>

          </div>

        </div>

      </div>
    </div>
  )
}
