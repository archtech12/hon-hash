import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  const themeColors = {
    green: { bg: '#ffffff', header: '#14532d', accent: '#f59e0b', text: '#0a1f0e' },
    red: { bg: '#ffffff', header: '#7f1d1d', accent: '#fbbf24', text: '#2b0909' },
    blue: { bg: '#ffffff', header: '#1e3a8a', accent: '#38bdf8', text: '#09152b' },
    gold: { bg: '#ffffff', header: '#171104', accent: '#fbbf24', text: '#1c1917' },
  }[colorTheme] || { bg: '#ffffff', header: '#14532d', accent: '#f59e0b', text: '#0a1f0e' }

  return (
    <div className="w-full h-full bg-[#e2e8f0] font-sans flex items-center justify-center p-8 relative overflow-hidden select-none">
      
      {/* ── LANYARD/PASS BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-60" />
      
      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="w-full h-full bg-white rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden flex relative z-10 border border-[#cbd5e1]">
          {/* Lanyard Hole Mock */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-[80px] rounded-full bg-[#e2e8f0] shadow-inner border border-[#94a3b8]" />

          {/* LEFT: Identity Strip */}
          <div className="w-[28%] flex flex-col justify-between items-center text-center relative pl-12" style={{ backgroundColor: themeColors.header }}>
            <div className="absolute top-0 bottom-0 right-0 w-2" style={{ backgroundColor: themeColors.accent }} />
            
            <div className="mt-8">
              <span className="material-symbols-outlined text-[#ffffff] text-4xl mb-2">verified_user</span>
              <h1 className="text-[#ffffff] font-black text-2xl uppercase tracking-[0.1em] leading-tight">
                VIP<br/><span style={{ color: themeColors.accent }}>ACCESS</span>
              </h1>
            </div>
            
            <p className="text-[#ffffff]/60 font-bold text-[9px] uppercase tracking-[0.4em] mb-10 transform -rotate-90 origin-bottom whitespace-nowrap">
              #NASSARAWAFIRST
            </p>
          </div>

          {/* RIGHT: Main Details */}
          <div className="flex-1 flex flex-col p-8 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,1),#f8fafc)]">
            
            {/* Top Row: Name & Status */}
            <div className="flex justify-between items-start border-b-2 border-slate-200 pb-4 mb-4">
              <div>
                <p className="font-black text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: themeColors.header }}>Official Supporter</p>
                <h2 className="text-slate-900 font-black uppercase text-4xl leading-none tracking-tight">
                  {supporterName || 'YOUR NAME'}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-mono text-[10px] font-bold tracking-widest mb-1">ID: HASH-2027-X</p>
                <div className="inline-block px-3 py-1 font-black text-[9px] tracking-widest uppercase text-white" style={{ backgroundColor: themeColors.header }}>
                  Verified
                </div>
              </div>
            </div>

            {/* Middle Row: Photos */}
            <div className="flex flex-1 items-center gap-6">
              
              {/* Supporter Photo (The "ID" Photo) */}
              <div className="w-[140px] aspect-[3/4] border-4 bg-white shadow-md relative group p-1" style={{ borderColor: themeColors.header }}>
                <div className="w-full h-full relative overflow-hidden bg-slate-100">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[30%] contrast-110" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-300">
                      <span className="material-symbols-outlined text-5xl">person</span>
                    </div>
                  )}
                </div>
                {/* Hologram sticker mock */}
                <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-300 to-blue-300 opacity-60 mix-blend-multiply border border-white" />
              </div>

              {/* Endorsing Text */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-bold text-[9px] uppercase tracking-widest text-slate-400 mb-1">Endorsing</p>
                <h3 className="font-black uppercase text-2xl leading-tight text-slate-800 mb-4">
                  Hon. Hassan <br/>Shehu Hussain
                </h3>
                
                <div className="bg-slate-100 border border-slate-200 p-3 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: themeColors.accent }} />
                  <p className="font-black italic text-sm uppercase text-slate-700 tracking-wide">
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
              </div>

              {/* Candidate Stamp */}
              <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-4 border-white shadow-lg relative opacity-90">
                <CandidatePortrait className="w-full h-full object-cover scale-110 grayscale-[10%]" />
              </div>
            </div>

            {/* Bottom Row: Barcode */}
            <div className="mt-4 pt-4 border-t border-slate-200 flex justify-between items-center">
              <div className="h-8 w-48 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat grayscale mix-blend-multiply" />
              <p className="font-black text-[8px] uppercase tracking-widest text-slate-400">#HASH2027Continuity</p>
            </div>
          </div>
        </div>
      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="w-full h-full max-w-[85%] aspect-[4/5.5] bg-white rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col relative z-10 border border-[#cbd5e1] mx-auto">
          
          {/* Lanyard Hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-4 rounded-full bg-[#e2e8f0] shadow-inner border border-[#94a3b8] z-30" />

          {/* Top Header */}
          <div className="pt-12 pb-6 px-6 relative text-center" style={{ backgroundColor: themeColors.header }}>
            <div className="absolute bottom-0 left-0 right-0 h-2" style={{ backgroundColor: themeColors.accent }} />
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ffffff] text-2xl">verified_user</span>
              <p className="text-[#ffffff] font-black text-[10px] uppercase tracking-[0.4em]">VIP ACCESS</p>
            </div>
            <h1 className="text-[#ffffff] font-black text-3xl uppercase tracking-widest leading-none">
              VERIFIED SUPPORTER
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex-1 flex flex-col items-center p-6 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1),#f8fafc)]">
            
            {/* ID Photo */}
            <div className="w-[140px] aspect-[3/4] bg-white border-4 p-1 shadow-xl relative -mt-12 z-20 mb-4" style={{ borderColor: themeColors.header }}>
              <div className="w-full h-full relative overflow-hidden bg-slate-100">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[20%] contrast-110" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-300">
                    <span className="material-symbols-outlined text-6xl">person</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-gradient-to-tr from-amber-200 via-emerald-300 to-blue-300 opacity-80 mix-blend-multiply border border-white shadow-sm" />
            </div>

            {/* Supporter Name */}
            <div className="text-center mb-4 w-full">
              <h2 className="text-slate-900 font-black uppercase text-[32px] leading-none tracking-tight mb-1 truncate px-2">
                {supporterName || 'YOUR NAME'}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <p className="text-slate-400 font-mono text-[9px] font-bold tracking-widest">ID: HASH-2027</p>
                <span className="px-2 py-0.5 font-black text-[8px] tracking-widest uppercase text-white rounded" style={{ backgroundColor: themeColors.header }}>Valid</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t-[2px] border-slate-200 border-dashed my-2" />

            {/* Endorsing Details */}
            <div className="w-full mt-2">
              <p className="font-bold text-[9px] uppercase tracking-widest text-slate-400 mb-1 text-center">Official Mandate</p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center gap-4">
                <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 shadow-sm flex-shrink-0" style={{ borderColor: themeColors.accent }}>
                  <CandidatePortrait className="w-full h-full object-cover scale-110 grayscale-[10%]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black uppercase text-sm leading-tight text-slate-800 truncate">
                    Hon. Hassan S. Hussain
                  </h3>
                  <p className="font-black italic text-[10px] uppercase text-slate-500 truncate" style={{ color: themeColors.header }}>
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
              </div>
            </div>

            {/* Barcode Footer */}
            <div className="mt-auto pt-4 w-full flex flex-col items-center">
              <div className="h-8 w-[80%] opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-center bg-no-repeat grayscale mix-blend-multiply mb-1" />
              <p className="font-black text-[8px] uppercase tracking-[0.2em] text-slate-400">#NASSARAWAFIRST</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
