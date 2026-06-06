import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  return (
    <div className="w-full h-full font-sans relative overflow-hidden select-none" style={{ background: '#0a1f0e' }}>

      {/* ── BACKGROUND LAYERS ── */}
      {/* Radial vignette center glow */}
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(21,128,61,0.35) 0%, transparent 70%)' }} />

      {/* Diagonal green geometric slab — left side identity block */}
      <div className="absolute top-0 left-0 bottom-0" style={{
        width: '58%',
        background: 'linear-gradient(160deg, #166534 0%, #14532d 60%, #0f3d22 100%)',
        clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)',
      }} />

      {/* Inner texture on the green slab */}
      <div className="absolute top-0 left-0 bottom-0 opacity-[0.07]" style={{
        width: '58%',
        clipPath: 'polygon(0 0, 100% 0, 82% 100%, 0 100%)',
        backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 8px, rgba(255,255,255,0.5) 8px, rgba(255,255,255,0.5) 9px)',
      }} />

      {/* Gold accent edge on the diagonal cut */}
      <div className="absolute top-0 bottom-0 z-[2]" style={{
        left: '46%',
        width: '14%',
        background: 'linear-gradient(160deg, #d97706 0%, #f59e0b 40%, #fbbf24 60%, #d97706 100%)',
        clipPath: 'polygon(0 0, 100% 0, 72% 100%, 0 100%)',
      }} />

      {/* Thin white line on right edge of gold */}
      <div className="absolute top-0 bottom-0 z-[3]" style={{
        left: '55%',
        width: '3px',
        background: 'rgba(255,255,255,0.6)',
        transform: 'skewX(-10deg)',
      }} />

      {/* HON watermark in bottom-right dark zone */}
      <div className="absolute bottom-3 right-4 z-[1] pointer-events-none select-none" style={{
        fontSize: '90px', fontWeight: 900, color: 'rgba(255,255,255,0.04)',
        letterSpacing: '-0.05em', lineHeight: 1,
      }}>
        2027
      </div>

      {isLandscape ? (
        /* ====== LANDSCAPE ====== */
        <div className="relative z-10 flex h-full items-stretch">

          {/* LEFT: Name & info — on the green slab */}
          <div className="flex flex-col justify-center px-10 py-8 gap-4" style={{ width: '52%' }}>

            {/* Campaign ribbon */}
            <div className="flex items-center gap-3">
              <div style={{ width: '30px', height: '3px', background: '#fbbf24' }} />
              <span style={{ fontSize: '9px', fontWeight: 800, color: '#fde68a', letterSpacing: '0.45em', textTransform: 'uppercase' }}>
                Official Campaign · 2027
              </span>
            </div>

            {/* Large candidate name */}
            <div style={{ lineHeight: 0.88 }}>
              <div style={{ fontSize: '50px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}>
                Hon. Hassan
              </div>
              <div style={{ fontSize: '50px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #fde68a 0%, #fbbf24 50%, #f59e0b 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Shehu Hussain
              </div>
            </div>

            {/* Constituency label */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', border: '1px solid rgba(251,191,36,0.4)', background: 'rgba(251,191,36,0.08)', alignSelf: 'flex-start' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#fbbf24' }} />
              <span style={{ fontSize: '8px', fontWeight: 700, color: '#fde68a', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                Nasarawa Federal Constituency
              </span>
            </div>

            {/* Slogan box */}
            <div style={{ transform: 'rotate(-1.5deg)', alignSelf: 'flex-start' }}>
              <div style={{
                padding: '10px 18px',
                background: '#ffffff',
                color: '#0a1f0e',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '18px',
                letterSpacing: '-0.01em',
                boxShadow: '6px 6px 0 #d97706',
                lineHeight: 1.1,
              }}>
                "{customMessage || 'TOGETHER WE RISE'}"
              </div>
            </div>

            {/* Endorsed by */}
            <div>
              <div style={{ fontSize: '9px', fontWeight: 700, color: '#86efac', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '3px' }}>
                Endorsed by
              </div>
              <div style={{ fontSize: '28px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, maxWidth: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                {supporterName || 'YOUR NAME'}
              </div>
            </div>
          </div>

          {/* RIGHT: Dual photo stack */}
          <div className="flex-1 flex items-center justify-center gap-5" style={{ paddingRight: '24px' }}>

            {/* Candidate photo — tall portrait */}
            <div className="relative flex-shrink-0" style={{ width: '168px', height: '212px' }}>
              {/* Stacked shadow frame */}
              <div className="absolute" style={{ inset: 0, border: '5px solid rgba(251,191,36,0.35)', transform: 'translate(9px, 9px)', pointerEvents: 'none' }} />
              {/* Main frame */}
              <div className="absolute" style={{ inset: 0, border: '5px solid #ffffff', overflow: 'hidden', transform: 'rotate(-2.5deg)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
                <CandidatePortrait className="w-full h-full" />
              </div>
              {/* Name tag */}
              <div style={{ position: 'absolute', bottom: '-10px', right: '-6px', background: '#166534', color: '#ffffff', fontWeight: 900, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 10px', transform: 'rotate(-2.5deg)', boxShadow: '3px 3px 0 rgba(0,0,0,0.3)', whiteSpace: 'nowrap' }}>
                HON. HASH
              </div>
            </div>

            {/* Supporter photo — circle */}
            <div className="relative flex-shrink-0" style={{ width: '140px', height: '140px' }}>
              {/* Amber ring */}
              <div className="absolute" style={{ inset: '-6px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbf24, #f59e0b, #d97706)', padding: '3px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a1f0e' }} />
              </div>
              {/* Photo */}
              <div className="absolute" style={{ inset: 0, borderRadius: '50%', overflow: 'hidden', border: '4px solid #0a1f0e', boxShadow: '0 12px 30px rgba(0,0,0,0.4)' }}>
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-slate-800" style={{ color: '#475569' }}>
                    <span className="material-symbols-outlined" style={{ fontSize: '38px' }}>person</span>
                    <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>Your Photo</span>
                  </div>
                )}
              </div>
              {/* SUPPORTER label */}
              <div style={{ position: 'absolute', bottom: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#fbbf24', color: '#0a1f0e', fontWeight: 900, fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 12px', boxShadow: '3px 3px 0 rgba(0,0,0,0.3)', whiteSpace: 'nowrap' }}>
                SUPPORTER
              </div>
            </div>
          </div>
        </div>

      ) : (
        /* ====== VERTICAL (Square / Portrait / Story) ====== */
        <div className="relative z-10 flex-1 flex flex-col" style={{ padding: isStory ? '28px' : '32px', gap: isStory ? '14px' : '16px' }}>

          {/* TOP: Name + Candidate photo */}
          <div className="flex items-start justify-between gap-4">
            {/* Name block */}
            <div className="flex flex-col gap-3 flex-1">
              <div className="flex items-center gap-2">
                <div style={{ width: '22px', height: '3px', background: '#fbbf24' }} />
                <span style={{ fontSize: '8px', fontWeight: 800, color: '#fde68a', letterSpacing: '0.45em', textTransform: 'uppercase' }}>Campaign 2027</span>
              </div>
              <div style={{ lineHeight: 0.88 }}>
                <div style={{ fontSize: isStory ? '36px' : '40px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
                  Hon.<br />Hassan
                </div>
                <div style={{ fontSize: isStory ? '36px' : '40px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', background: 'linear-gradient(90deg, #fde68a, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  Shehu<br />Hussain
                </div>
              </div>
              {/* Constituency */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 10px', border: '1px solid rgba(251,191,36,0.35)', background: 'rgba(251,191,36,0.06)', alignSelf: 'flex-start' }}>
                <span style={{ fontSize: '7px', fontWeight: 700, color: '#fde68a', letterSpacing: '0.25em', textTransform: 'uppercase' }}>Nasarawa Fed. Constituency</span>
              </div>
            </div>

            {/* Candidate portrait — tilted polaroid-style */}
            <div className="relative flex-shrink-0" style={{ width: '148px', height: '182px' }}>
              <div className="absolute" style={{ inset: 0, border: '4px solid rgba(251,191,36,0.3)', transform: 'translate(7px, 7px)', pointerEvents: 'none' }} />
              <div className="absolute" style={{ inset: 0, border: '5px solid #ffffff', overflow: 'hidden', transform: 'rotate(2.5deg)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
                <CandidatePortrait className="w-full h-full" />
              </div>
              <div style={{ position: 'absolute', bottom: '-10px', left: 0, right: 0, background: '#14532d', color: '#ffffff', fontWeight: 900, fontSize: '9px', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center', padding: '5px 2px', transform: 'rotate(2.5deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)' }}>
                HON. HASH 2027
              </div>
            </div>
          </div>

          {/* MIDDLE: Slogan */}
          <div style={{ alignSelf: 'flex-start', transform: 'rotate(-2deg)', marginTop: 'auto' }}>
            <div style={{
              padding: isStory ? '10px 16px' : '12px 20px',
              background: '#ffffff',
              color: '#0a1f0e',
              fontWeight: 900,
              fontStyle: 'italic',
              textTransform: 'uppercase',
              fontSize: isStory ? '19px' : '22px',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              boxShadow: '6px 6px 0 #d97706',
              maxWidth: '92%',
            }}>
              "{customMessage || 'SERVICE TO HUMANITY'}"
            </div>
          </div>

          {/* BOTTOM: Supporter */}
          <div className="mt-auto" style={{ paddingTop: '14px', borderTop: '2px solid rgba(251,191,36,0.3)' }}>
            <div className="flex items-center gap-4">
              {/* Supporter circle */}
              <div className="relative flex-shrink-0" style={{ width: '76px', height: '76px' }}>
                <div className="absolute" style={{ inset: '-5px', borderRadius: '50%', background: 'linear-gradient(135deg, #fbbf24, #d97706)', padding: '3px' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#0a1f0e' }} />
                </div>
                <div className="absolute" style={{ inset: 0, borderRadius: '50%', overflow: 'hidden', border: '3px solid #0a1f0e', boxShadow: '0 8px 20px rgba(0,0,0,0.4)' }}>
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-slate-800" style={{ color: '#475569' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '30px' }}>person</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name text */}
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#86efac', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '3px' }}>
                  Endorsed by
                </div>
                <div style={{ fontSize: '24px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
                  {supporterName || 'YOUR NAME'}
                </div>
                <div style={{ fontSize: '8px', fontWeight: 600, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '3px' }}>
                  Verified Supporter · HON. HASH 2027
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
