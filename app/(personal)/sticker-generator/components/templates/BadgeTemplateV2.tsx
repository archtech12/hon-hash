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
    <div className="w-full h-full flex items-center justify-center p-6 bg-[#e2e8f0] relative overflow-hidden select-none font-sans">
      
      {/* ── AMBIENT SHADOW ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)] pointer-events-none" />

      {/* ================= OFFICIAL DELEGATE BADGE ================= */}
      <div className={`relative z-10 w-full h-full max-w-[95%] mx-auto bg-white rounded-xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.2)] border border-slate-300 overflow-hidden flex ${isLandscape ? 'flex-row' : 'flex-col'}`}>
        
        {/* Micro-print security pattern background */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] pointer-events-none" />

        {/* ── HEADER REGION ── */}
        <div className={`flex items-center justify-between p-6 ${isLandscape ? 'w-[25%] flex-col border-r-4' : 'w-full h-[22%] border-b-4'}`} style={{ backgroundColor: themeColors.primary, borderColor: themeColors.secondary }}>
           {/* Abstract security graphic */}
           <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
             <div className="w-[150%] h-[150%] absolute -top-[50%] -left-[25%] border-[40px] rounded-full" style={{ borderColor: themeColors.secondary }} />
           </div>

           <div className={`flex items-center gap-4 relative z-10 ${isLandscape ? 'flex-col text-center mt-4' : 'w-full'}`}>
             <div className="w-16 h-16 bg-white flex items-center justify-center rounded shadow-inner p-1">
               <CandidatePortrait className="w-full h-full object-cover rounded-sm grayscale-[30%]" />
             </div>
             <div className={`${isLandscape ? '' : 'flex-1'}`}>
               <h1 className="text-white font-black text-2xl lg:text-3xl tracking-widest uppercase leading-none drop-shadow-md">
                 DELEGATE
               </h1>
               <p className="text-white/80 text-[10px] lg:text-xs font-bold tracking-[0.4em] uppercase mt-1">Official Campaign 2027</p>
             </div>
           </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative`}>
          
          {/* Watermark in background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <span className="material-symbols-outlined text-[300px]">verified</span>
          </div>

          {/* LEFT/TOP: Supporter Photo (The primary focus) */}
          <div className={`flex items-center justify-center p-8 ${isLandscape ? 'w-[45%] border-r border-slate-200' : 'w-full border-b border-slate-200'}`}>
             <div className="w-full max-w-[280px] aspect-[4/5] bg-white p-2 border border-slate-300 shadow-lg relative">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-slate-200 rounded-full shadow-inner" />
                <div className="w-full h-full bg-slate-100 overflow-hidden relative">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <span className="material-symbols-outlined text-8xl">person</span>
                    </div>
                  )}
                  {/* Digital timestamp overlay */}
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 text-[8px] font-mono tracking-widest rounded">
                    AUTH: {Date.now().toString().slice(-8)}
                  </div>
                </div>
             </div>
          </div>

          {/* RIGHT/BOTTOM: ID Details & Endorsement */}
          <div className={`flex-1 flex flex-col p-8 relative z-10`}>
             
             {/* Name Block */}
             <div className="mb-6">
               <p className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-black mb-1">Accredited Member</p>
               <h2 className="font-black text-4xl lg:text-5xl uppercase tracking-tighter leading-[0.9] text-slate-800 break-words border-l-8 pl-4 py-1" style={{ borderColor: themeColors.primary }}>
                 {supporterName || 'YOUR FULL NAME'}
               </h2>
             </div>

             {/* Structural Grid Info */}
             <div className="grid grid-cols-2 gap-4 mb-6">
               <div className="bg-slate-50 border border-slate-200 p-3 rounded-sm">
                 <p className="text-slate-400 text-[8px] uppercase tracking-widest font-bold mb-1">Status</p>
                 <p className="font-black text-sm uppercase" style={{ color: themeColors.primary }}>Active / Verified</p>
               </div>
               <div className="bg-slate-50 border border-slate-200 p-3 rounded-sm">
                 <p className="text-slate-400 text-[8px] uppercase tracking-widest font-bold mb-1">Endorsing</p>
                 <p className="font-black text-sm uppercase text-slate-800">Hon. Hassan S.H.</p>
               </div>
             </div>

             {/* Statement Block */}
             <div className="flex-1 bg-slate-100 border border-slate-200 p-5 rounded-sm relative">
                <span className="material-symbols-outlined absolute top-4 left-4 text-slate-200 text-4xl leading-none">format_quote</span>
                <p className="font-black italic text-lg lg:text-xl text-slate-700 tracking-wide leading-snug relative z-10 mt-4">
                  "{customMessage || 'COMMITTED TO PROGRESS AND TRANSPARENCY'}"
                </p>
             </div>

             {/* Footer Elements */}
             <div className="mt-6 flex justify-between items-end">
               <div className="h-10 w-48 opacity-70 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat mix-blend-multiply" />
               <div className="text-right">
                 <div className="w-10 h-10 rounded-full border-2 flex items-center justify-center ml-auto mb-1 bg-white" style={{ borderColor: themeColors.secondary }}>
                   <span className="material-symbols-outlined text-xl" style={{ color: themeColors.primary }}>fingerprint</span>
                 </div>
                 <p className="font-black text-[8px] text-slate-400 uppercase tracking-widest">NASSARAWA FIRST</p>
               </div>
             </div>

          </div>

        </div>

      </div>
    </div>
  )
}
