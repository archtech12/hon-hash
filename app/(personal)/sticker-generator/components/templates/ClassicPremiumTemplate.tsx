import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicPremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'portrait'

  const themes = {
    green: { bg: '#0d1b12', text: '#ffffff', accent: '#f59e0b', secondary: '#166534', subtle: 'rgba(255,255,255,0.1)' },
    red: { bg: '#2b0909', text: '#ffffff', accent: '#fbbf24', secondary: '#7f1d1d', subtle: 'rgba(255,255,255,0.1)' },
    blue: { bg: '#09152b', text: '#ffffff', accent: '#38bdf8', secondary: '#1e3a8a', subtle: 'rgba(255,255,255,0.1)' },
    gold: { bg: '#1c1917', text: '#ffffff', accent: '#fbbf24', secondary: '#78350f', subtle: 'rgba(255,255,255,0.1)' },
  }[colorTheme]

  return (
    <div className="w-full h-full font-serif relative overflow-hidden select-none flex flex-col" style={{ backgroundColor: themes.bg }}>
      {/* ── TEXTURES & BACKGROUND ── */}
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")' }} />
      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full opacity-30 pointer-events-none" style={{ background: `radial-gradient(circle, ${themes.secondary} 0%, transparent 60%)`, mixBlendMode: 'screen' }} />

      {/* ── BORDERS (Classic Magazine Style) ── */}
      <div className="absolute inset-4 z-10 pointer-events-none" style={{ border: `1px solid ${themes.accent}` }} />
      <div className="absolute inset-[22px] z-10 pointer-events-none" style={{ border: `1px solid ${themes.subtle}` }} />

      {/* ── STRUCTURAL WATERMARKS ── */}
      <div className="absolute top-8 right-8 z-0 opacity-10 pointer-events-none" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
        <span className="font-sans font-black uppercase text-4xl tracking-widest text-white">#HASH2027Continuity</span>
      </div>

      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="relative z-20 flex-1 flex h-full p-10">
          {/* LEFT: Editorial Text */}
          <div className="flex-1 flex flex-col justify-center gap-6 pr-8">
            <div className="border-b pb-4" style={{ borderColor: themes.subtle }}>
              <h3 className="font-sans font-bold uppercase tracking-[0.4em] mb-2" style={{ color: themes.accent, fontSize: '10px' }}>The Heritage Mandate</h3>
              <h1 className="font-black uppercase leading-none" style={{ color: themes.text, fontSize: '48px', letterSpacing: '-0.02em' }}>
                Hon. Hassan <br/>
                <span className="font-light italic font-serif">Shehu Hussain</span>
              </h1>
            </div>

            <div className="font-sans font-medium text-white/80" style={{ fontSize: '12px', lineHeight: 1.6, maxWidth: '85%' }}>
              "Achievements, facts, and records speak louder than rhetoric. The focus remains firmly on delivering democratic dividends for Nassarawa Federal Constituency."
            </div>

            <div className="flex items-center gap-6 mt-4">
              <div className="relative w-24 h-24 rounded-full overflow-hidden" style={{ border: `3px solid ${themes.accent}` }}>
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-white/5 flex items-center justify-center text-white/30"><span className="material-symbols-outlined text-3xl">person</span></div>
                )}
              </div>
              <div>
                <p className="font-sans font-bold uppercase tracking-widest text-white/50 mb-1" style={{ fontSize: '9px' }}>Endorsed By</p>
                <p className="font-serif font-bold text-2xl uppercase text-white">{supporterName || 'YOUR NAME'}</p>
                <p className="font-sans font-bold italic mt-2" style={{ color: themes.accent, fontSize: '12px' }}>"{customMessage || 'NASSARAWA FIRST'}"</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Classic Portrait */}
          <div className="w-[45%] h-full relative border-l" style={{ borderColor: themes.subtle }}>
            <CandidatePortrait className="w-full h-full object-cover object-top grayscale-[20%] contrast-125" />
            <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${themes.bg} 0%, transparent 40%)` }} />
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <h2 className="font-sans font-black uppercase tracking-[0.2em] text-white text-xl">Service Above Politics</h2>
            </div>
          </div>
        </div>
      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="relative z-20 flex-1 flex flex-col p-8 pt-12">
          {/* TOP: Header */}
          <div className="text-center mb-6 z-30">
            <h3 className="font-sans font-bold uppercase tracking-[0.5em] mb-4" style={{ color: themes.accent, fontSize: '10px' }}>Nassarawa First • Progress First</h3>
            <h1 className="font-black uppercase leading-[0.9]" style={{ color: themes.text, fontSize: isStory ? '48px' : '56px' }}>
              Hon. Hassan
            </h1>
            <h2 className="font-light italic mt-2" style={{ color: themes.text, fontSize: isStory ? '32px' : '40px' }}>Shehu Hussain</h2>
          </div>

          {/* MIDDLE: Candidate Portrait */}
          <div className="flex-1 relative mx-4 mb-6 z-20" style={{ border: `1px solid ${themes.subtle}` }}>
            <div className="absolute inset-2" style={{ border: `1px solid ${themes.accent}` }}>
              <CandidatePortrait className="w-full h-full object-cover object-top grayscale-[10%] contrast-110" />
              <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${themes.bg} 0%, transparent 30%)` }} />
            </div>
            {/* Overlay banner */}
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-2" style={{ borderTop: `1px solid ${themes.accent}`, borderBottom: `1px solid ${themes.accent}` }}>
                <span className="font-sans font-black uppercase tracking-[0.2em] text-white" style={{ fontSize: '12px' }}>#HASH2027Continuity</span>
              </div>
            </div>
          </div>

          {/* BOTTOM: Supporter & Message */}
          <div className="bg-white/5 backdrop-blur-sm p-5 flex flex-col items-center text-center z-30" style={{ border: `1px solid ${themes.subtle}` }}>
            <div className="flex items-center gap-4 w-full">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0" style={{ border: `2px solid ${themes.accent}` }}>
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-black/40 flex items-center justify-center text-white/30"><span className="material-symbols-outlined">person</span></div>
                )}
              </div>
              <div className="flex-1 text-left border-l pl-4" style={{ borderColor: themes.subtle }}>
                <p className="font-sans font-bold uppercase tracking-widest text-white/50 mb-1" style={{ fontSize: '8px' }}>Official Supporter</p>
                <p className="font-serif font-bold text-xl uppercase text-white truncate">{supporterName || 'YOUR NAME'}</p>
                <p className="font-sans font-black italic mt-1 truncate" style={{ color: themes.accent, fontSize: '11px', letterSpacing: '0.05em' }}>"{customMessage || 'SERVICE ABOVE POLITICS'}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
