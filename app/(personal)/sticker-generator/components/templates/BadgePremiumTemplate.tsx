import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const BadgePremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  const themeColors = {
    green: { bg: '#040d07', header: '#15803d', accent: '#fcd34d', text: '#ffffff' },
    red: { bg: '#0d0404', header: '#b91c1c', accent: '#fca5a5', text: '#ffffff' },
    blue: { bg: '#04080d', header: '#1d4ed8', accent: '#93c5fd', text: '#ffffff' },
    gold: { bg: '#0f0a02', header: '#b45309', accent: '#fef08a', text: '#ffffff' },
  }[colorTheme] || { bg: '#040d07', header: '#15803d', accent: '#fcd34d', text: '#ffffff' }

  return (
    <div className="w-full h-full font-sans flex items-center justify-center p-8 relative overflow-hidden select-none" style={{ backgroundColor: themeColors.bg }}>
      
      {/* ── DARK LANYARD/PASS BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="w-full h-full bg-[#0a140f] rounded-3xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden flex relative z-10 border border-[#1e293b]">
          
          {/* Lanyard Hole Mock */}
          <div className="absolute top-1/2 left-4 -translate-y-1/2 w-6 h-[80px] rounded-full bg-[#040d07] shadow-inner border border-[#334155] z-30" />

          {/* LEFT: Identity Strip (Gradient Dark) */}
          <div className="w-[28%] flex flex-col justify-between items-center text-center relative pl-12 bg-gradient-to-b" style={{ '--tw-gradient-from': themeColors.header, '--tw-gradient-to': '#000' } as any}>
            <div className="absolute top-0 bottom-0 right-0 w-[1px] bg-white/20" />
            
            <div className="mt-8 z-10">
              <div className="w-12 h-12 rounded-full border border-white/20 bg-white/5 flex items-center justify-center mx-auto mb-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <span className="material-symbols-outlined text-[#ffffff] text-2xl font-light">qr_code_scanner</span>
              </div>
              <h1 className="text-[#ffffff] font-black text-2xl uppercase tracking-[0.15em] leading-tight drop-shadow-md">
                SECURE<br/><span style={{ color: themeColors.accent }}>PASS</span>
              </h1>
            </div>
            
            <p className="text-[#ffffff]/40 font-bold text-[9px] uppercase tracking-[0.4em] mb-10 transform -rotate-90 origin-bottom whitespace-nowrap z-10">
              #PROGRESSFIRST
            </p>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
          </div>

          {/* RIGHT: Main Details */}
          <div className="flex-1 flex flex-col p-8 relative">
            
            {/* Top Row: Name & Status */}
            <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
              <div>
                <p className="font-bold text-[10px] tracking-[0.3em] uppercase mb-1" style={{ color: themeColors.accent }}>Authorized Personnel</p>
                <h2 className="text-white font-black uppercase text-4xl leading-none tracking-tight">
                  {supporterName || 'YOUR NAME'}
                </h2>
              </div>
              <div className="text-right">
                <p className="text-white/40 font-mono text-[10px] font-bold tracking-widest mb-1">UID: {String(Math.floor(Math.random() * 90000) + 10000)}</p>
                <div className="inline-block px-3 py-1 font-bold text-[9px] tracking-widest uppercase text-white/90 border border-white/20 rounded bg-white/5">
                  Valid 2027
                </div>
              </div>
            </div>

            {/* Middle Row: Photos */}
            <div className="flex flex-1 items-center gap-6">
              
              {/* Supporter Photo (Dark Tech Frame) */}
              <div className="w-[140px] aspect-[3/4] bg-[#020604] border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.5)] relative p-1.5">
                <div className="w-full h-full relative overflow-hidden bg-white/5">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[40%] contrast-125 brightness-90" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-white/10">
                      <span className="material-symbols-outlined text-5xl">face</span>
                    </div>
                  )}
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.05)] to-transparent h-1/2 animate-pulse pointer-events-none" />
                </div>
              </div>

              {/* Endorsing Text */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-bold text-[9px] uppercase tracking-widest text-white/40 mb-1">Clearance Level: HASH</p>
                <h3 className="font-black uppercase text-2xl leading-tight text-white mb-4">
                  Hon. Hassan <br/>Shehu Hussain
                </h3>
                
                <div className="bg-white/5 border border-white/10 p-3 rounded-lg relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[80%]" style={{ backgroundColor: themeColors.accent }} />
                  <p className="font-black italic text-sm uppercase text-white/90 tracking-wide pl-2">
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
              </div>

              {/* Candidate Portrait Hexagon */}
              <div className="w-[100px] h-[115px] overflow-hidden border-2 shadow-lg relative opacity-80" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', borderColor: themeColors.accent }}>
                <CandidatePortrait className="w-full h-full object-cover scale-110 grayscale" />
                <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: themeColors.header }} />
              </div>
            </div>

            {/* Bottom Row: Barcode */}
            <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
              <div className="h-8 w-48 opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-left bg-no-repeat invert mix-blend-screen" />
              <p className="font-mono text-[8px] uppercase tracking-[0.3em] text-white/30">HASH // 2027 // CONTINUITY</p>
            </div>
          </div>
        </div>
      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="w-full h-full max-w-[85%] aspect-[4/5.5] bg-[#0a140f] rounded-3xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative z-10 border border-[#1e293b] mx-auto">
          
          {/* Lanyard Hole */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[80px] h-4 rounded-full bg-[#040d07] shadow-inner border border-[#334155] z-30" />

          {/* Top Header */}
          <div className="pt-12 pb-6 px-6 relative text-center bg-gradient-to-b" style={{ '--tw-gradient-from': themeColors.header, '--tw-gradient-to': '#000' } as any}>
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/20" />
            
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#ffffff] text-xl font-light">qr_code_scanner</span>
              <p className="text-[#ffffff]/80 font-bold text-[9px] uppercase tracking-[0.4em]">SECURE PASS</p>
            </div>
            <h1 className="text-[#ffffff] font-black text-3xl uppercase tracking-widest leading-none drop-shadow-md">
              AUTHORIZED
            </h1>
          </div>

          {/* Profile Section */}
          <div className="flex-1 flex flex-col items-center p-6 relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03),transparent)] pointer-events-none" />

            {/* ID Photo */}
            <div className="w-[140px] aspect-[3/4] bg-[#020604] border border-white/20 p-1.5 shadow-2xl relative -mt-12 z-20 mb-4">
              <div className="w-full h-full relative overflow-hidden bg-white/5">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[40%] contrast-125 brightness-90" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/10">
                    <span className="material-symbols-outlined text-6xl">face</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.05)] to-transparent h-1/2 animate-pulse pointer-events-none" />
              </div>
            </div>

            {/* Supporter Name */}
            <div className="text-center mb-4 w-full">
              <h2 className="text-white font-black uppercase text-[32px] leading-none tracking-tight mb-2 truncate px-2">
                {supporterName || 'YOUR NAME'}
              </h2>
              <div className="flex items-center justify-center gap-3">
                <p className="text-white/40 font-mono text-[9px] font-bold tracking-widest">UID: {String(Math.floor(Math.random() * 90000) + 10000)}</p>
                <span className="px-2 py-0.5 font-bold text-[8px] tracking-widest uppercase text-white/90 border border-white/20 rounded bg-white/5">Valid 2027</span>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full border-t border-white/10 my-2" />

            {/* Endorsing Details */}
            <div className="w-full mt-2">
              <p className="font-bold text-[9px] uppercase tracking-widest text-white/40 mb-2 text-center">Clearance: HASH</p>
              
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-4">
                <div className="w-[50px] h-[50px] overflow-hidden shadow-inner flex-shrink-0 relative opacity-90" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}>
                  <CandidatePortrait className="w-full h-full object-cover scale-110 grayscale" />
                  <div className="absolute inset-0 mix-blend-multiply" style={{ backgroundColor: themeColors.header }} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-black uppercase text-sm leading-tight text-white truncate mb-0.5">
                    Hon. Hassan S. Hussain
                  </h3>
                  <p className="font-black italic text-[10px] uppercase text-white/80 truncate">
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
              </div>
            </div>

            {/* Barcode Footer */}
            <div className="mt-auto pt-4 w-full flex flex-col items-center">
              <div className="h-8 w-[80%] opacity-50 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Code_39.svg/1200px-Code_39.svg.png')] bg-contain bg-center bg-no-repeat invert mix-blend-screen mb-1" />
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/30">#PROGRESSFIRST</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
