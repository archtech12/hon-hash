import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ModernPremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  const colors = {
    green: { bg: '#041508', glow1: 'rgba(34,197,94,0.3)', glow2: 'rgba(16,185,129,0.2)', accent: '#4ade80' },
    red: { bg: '#1a0505', glow1: 'rgba(239,68,68,0.3)', glow2: 'rgba(220,38,38,0.2)', accent: '#f87171' },
    blue: { bg: '#050f1a', glow1: 'rgba(59,130,246,0.3)', glow2: 'rgba(37,99,235,0.2)', accent: '#60a5fa' },
    gold: { bg: '#171104', glow1: 'rgba(245,158,11,0.3)', glow2: 'rgba(217,119,6,0.2)', accent: '#fbbf24' },
  }[colorTheme] || { bg: '#041508', glow1: 'rgba(34,197,94,0.3)', glow2: 'rgba(16,185,129,0.2)', accent: '#4ade80' }

  return (
    <div className="w-full h-full font-sans relative overflow-hidden select-none flex flex-col" style={{ backgroundColor: colors.bg }}>
      
      {/* ── AMBIENT GLASSMORPHISM GLOWS ── */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-screen pointer-events-none" />
      <div className="absolute top-0 right-0 w-[80%] h-[80%] rounded-full blur-[100px] pointer-events-none transform translate-x-1/4 -translate-y-1/4" style={{ backgroundColor: colors.glow1 }} />
      <div className="absolute bottom-0 left-0 w-[70%] h-[70%] rounded-full blur-[90px] pointer-events-none transform -translate-x-1/4 translate-y-1/4" style={{ backgroundColor: colors.glow2 }} />

      {/* ── UI OVERLAYS ── */}
      <div className="absolute inset-4 rounded-3xl border border-white/10 z-10 pointer-events-none" />
      
      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="relative z-20 flex h-full p-8 gap-6">
          {/* Main Card */}
          <div className="flex-1 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 flex overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Left Info Panel */}
            <div className="w-[55%] p-8 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                  <div className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: colors.accent, color: colors.accent }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/80">Progress First</span>
                </div>
                
                <h1 className="font-black uppercase text-5xl leading-none text-white tracking-tight drop-shadow-lg">
                  Hon. Hassan <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Shehu Hussain</span>
                </h1>
                
                <div className="mt-4 inline-block px-4 py-2 bg-gradient-to-r from-white/10 to-transparent border-l-2" style={{ borderColor: colors.accent }}>
                  <span className="font-bold text-[10px] tracking-widest text-white/60 uppercase">Nasarawa Federal Constituency</span>
                </div>
              </div>

              <div className="mt-auto">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5 shadow-inner">
                  <p className="font-black italic text-lg uppercase leading-snug" style={{ color: colors.accent }}>"{customMessage || 'PROGRESS FIRST'}"</p>
                </div>
              </div>
            </div>

            {/* Right Photo Panel */}
            <div className="flex-1 relative border-l border-white/10">
              <CandidatePortrait className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 right-6">
                <span className="font-black text-4xl text-white/10 uppercase tracking-tighter">#2027</span>
              </div>
            </div>
          </div>

          {/* Supporter Sidebar */}
          <div className="w-[120px] flex flex-col gap-4">
            <div className="w-full aspect-square rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden shadow-xl p-1 relative group">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[20%]" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-white/5 text-white/20">
                    <span className="material-symbols-outlined text-3xl">photo_camera</span>
                  </div>
                )}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl" />
              </div>
            </div>
            
            <div className="flex-1 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-3 flex flex-col justify-center items-center text-center">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/40 mb-1">Endorsed By</span>
              <span className="font-black text-sm uppercase text-white truncate w-full">{supporterName || 'YOUR NAME'}</span>
              <div className="w-full h-px bg-white/10 my-2" />
              <span className="text-[7px] font-bold uppercase tracking-widest" style={{ color: colors.accent }}>Verified Supporter</span>
            </div>
          </div>
        </div>
      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="relative z-20 flex flex-col h-full p-6 pt-10 gap-4">
          
          {/* Header */}
          <div className="flex justify-between items-start px-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: colors.accent, color: colors.accent }} />
              <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white/80">Progress First</span>
            </div>
            <span className="text-white/20 font-black tracking-widest text-sm">#2027</span>
          </div>

          {/* Main Visual Card */}
          <div className="flex-1 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            {/* Photo half */}
            <div className="relative h-[55%]">
              <CandidatePortrait className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041508]/90 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-6">
                <h1 className="font-black uppercase text-4xl leading-[0.85] text-white tracking-tight drop-shadow-lg">
                  Hon. Hassan <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Shehu Hussain</span>
                </h1>
              </div>
            </div>

            {/* Info half */}
            <div className="flex-1 flex flex-col justify-between p-6 bg-gradient-to-b from-[#041508]/90 to-transparent">
              <div className="inline-block px-3 py-1.5 bg-white/5 border-l-2" style={{ borderColor: colors.accent }}>
                <span className="font-bold text-[9px] tracking-[0.2em] text-white/60 uppercase">Nasarawa Federal Constituency</span>
              </div>

              <div className="mt-auto">
                <div className="p-4 rounded-xl bg-black/40 border border-white/5">
                  <p className="font-black italic text-xl uppercase leading-none" style={{ color: colors.accent }}>"{customMessage || 'SERVICE ABOVE POLITICS'}"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Supporter Bar */}
          <div className="h-[90px] bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 p-2 flex items-center gap-4 shadow-lg">
            <div className="h-full aspect-square rounded-2xl overflow-hidden relative border border-white/10 p-1">
               <div className="w-full h-full rounded-xl overflow-hidden">
                 {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-white/5 text-white/20">
                      <span className="material-symbols-outlined text-2xl">person</span>
                    </div>
                  )}
               </div>
            </div>
            <div className="flex-1 min-w-0 pr-4">
              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/40 mb-0.5">Endorsed By</p>
              <p className="font-black text-xl uppercase text-white truncate leading-none mb-1">{supporterName || 'YOUR NAME'}</p>
              <p className="text-[8px] font-bold uppercase tracking-widest" style={{ color: colors.accent }}>Verified Supporter • Continuity</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
