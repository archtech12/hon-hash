import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const GeometricTemplateV2 = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  return (
    <div className="w-full h-full font-sans relative overflow-hidden select-none" style={{ background: '#ffffff' }}>

      {/* ── BACKGROUND ARCHITECTURE ── */}

      {/* Bold green right panel (portrait) or top panel (landscape) */}
      {!isLandscape ? (
        <>
          {/* Top green block — takes upper 45% */}
          <div className="absolute top-0 left-0 right-0 z-0" style={{
            height: '45%',
            background: 'linear-gradient(135deg, #14532d 0%, #166534 55%, #15803d 100%)',
          }} />

          {/* Diagonal cut at bottom of green block */}
          <div className="absolute z-[1]" style={{
            top: 'calc(45% - 45px)',
            left: 0, right: 0, height: '90px',
            background: '#ffffff',
            clipPath: 'polygon(0 100%, 100% 0%, 100% 100%)',
          }} />

          {/* Amber accent triangle */}
          <div className="absolute z-[2]" style={{
            top: 'calc(45% - 50px)',
            left: 0, right: 0, height: '50px',
            background: '#f59e0b',
            clipPath: 'polygon(0 100%, 100% 0%, 58% 0%)',
          }} />
        </>
      ) : (
        <>
          {/* Left green column — takes left 45% */}
          <div className="absolute top-0 left-0 bottom-0 z-0" style={{
            width: '45%',
            background: 'linear-gradient(180deg, #14532d 0%, #166534 50%, #15803d 100%)',
          }} />

          {/* Diagonal cut on right side of green */}
          <div className="absolute top-0 bottom-0 z-[1]" style={{
            left: 'calc(45% - 40px)',
            width: '80px',
            background: '#ffffff',
            clipPath: 'polygon(100% 0%, 100% 100%, 0% 100%)',
          }} />

          {/* Amber accent on the diagonal */}
          <div className="absolute top-0 bottom-0 z-[2]" style={{
            left: 'calc(45% - 44px)',
            width: '44px',
            background: '#f59e0b',
            clipPath: 'polygon(0 0%, 100% 0%, 0% 100%)',
          }} />
        </>
      )}

      {/* Subtle dot texture on white zone */}
      <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
        backgroundImage: 'radial-gradient(circle, #166534 1px, transparent 1px)',
        backgroundSize: '16px 16px',
      }} />

      {/* Decorative star/asterisk stamp top right */}
      <div className="absolute z-[2] select-none pointer-events-none" style={{
        top: isLandscape ? '12px' : '14px',
        right: isLandscape ? '14px' : '14px',
        width: '44px', height: '44px',
        background: '#f59e0b',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <span className="material-symbols-outlined" style={{ fontSize: '22px', color: '#14532d', fontVariationSettings: "'FILL' 1" }}>verified</span>
      </div>

      {/* "HON. HASH" repeated watermark — green zone */}
      <div className="absolute z-[1] pointer-events-none select-none" style={{
        ...(isLandscape ? { top: '50%', left: '8%', transform: 'translateY(-50%)' } : { top: '8%', left: '50%', transform: 'translateX(-50%)' }),
        fontSize: '110px', fontWeight: 900,
        color: 'rgba(255,255,255,0.05)',
        letterSpacing: '-0.04em', lineHeight: 1,
        whiteSpace: 'nowrap',
      }}>
        2027
      </div>

      {isLandscape ? (
        /* ====== LANDSCAPE ====== */
        <div className="relative z-10 flex h-full items-stretch">

          {/* LEFT green zone — name + info */}
          <div className="flex flex-col justify-center px-10 py-8 gap-4" style={{ width: '44%' }}>

            {/* Tag */}
            <div className="flex items-center gap-3">
              <div style={{ width: '28px', height: '3px', background: '#fbbf24' }} />
              <span style={{ fontSize: '8px', fontWeight: 800, color: '#fde68a', letterSpacing: '0.45em', textTransform: 'uppercase' }}>
                Progressive Leadership · 2027
              </span>
            </div>

            {/* Name */}
            <div style={{ lineHeight: 0.88 }}>
              <div style={{ fontSize: '46px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', textShadow: '0 3px 15px rgba(0,0,0,0.4)' }}>
                Hon. Hassan
              </div>
              <div style={{ fontSize: '46px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fcd34d', textShadow: '0 3px 15px rgba(0,0,0,0.4)' }}>
                Shehu Hussain
              </div>
            </div>

            {/* Constituency */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '5px 12px', border: '1px solid rgba(251,191,36,0.4)', background: 'rgba(0,0,0,0.15)', alignSelf: 'flex-start' }}>
              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#86efac' }} />
              <span style={{ fontSize: '7.5px', fontWeight: 700, color: '#bbf7d0', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                Nasarawa Federal Constituency
              </span>
            </div>

            {/* Endorsed label */}
            <div style={{ marginTop: '8px' }}>
              <div style={{ fontSize: '8px', fontWeight: 700, color: '#86efac', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '4px' }}>
                Endorsed by
              </div>
              <div style={{ fontSize: '26px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, textShadow: '0 2px 10px rgba(0,0,0,0.5)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100%' }}>
                {supporterName || 'YOUR NAME'}
              </div>
            </div>
          </div>

          {/* RIGHT white zone — photos + slogan */}
          <div className="flex-1 flex flex-col justify-center items-center gap-6 px-8">

            {/* Slogan */}
            <div style={{ transform: 'rotate(-1.5deg)', alignSelf: 'flex-start' }}>
              <div style={{
                padding: '10px 16px',
                background: '#14532d',
                color: '#ffffff',
                fontWeight: 900,
                fontStyle: 'italic',
                textTransform: 'uppercase',
                fontSize: '16px',
                letterSpacing: '-0.01em',
                lineHeight: 1.1,
                boxShadow: '5px 5px 0 #f59e0b',
              }}>
                "{customMessage || 'SERVICE TO HUMANITY'}"
              </div>
            </div>

            {/* Side-by-side photos */}
            <div className="flex items-end gap-5 justify-center w-full">

              {/* Candidate */}
              <div className="relative flex-shrink-0" style={{ width: '160px', height: '200px' }}>
                <div className="absolute" style={{ inset: 0, border: '4px solid #e5e7eb', transform: 'translate(7px, 7px)', pointerEvents: 'none' }} />
                <div className="absolute" style={{ inset: 0, overflow: 'hidden', border: '5px solid #14532d', boxShadow: '0 15px 35px rgba(0,0,0,0.2)', transform: 'rotate(-2deg)' }}>
                  <CandidatePortrait className="w-full h-full" />
                </div>
                <div style={{ position: 'absolute', bottom: '-10px', right: '-6px', background: '#14532d', color: '#fff', fontWeight: 900, fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '5px 10px', transform: 'rotate(-2deg)', boxShadow: '3px 3px 0 rgba(0,0,0,0.2)', whiteSpace: 'nowrap' }}>
                  HON. HASH
                </div>
              </div>

              {/* Supporter */}
              <div className="relative flex-shrink-0" style={{ width: '135px', height: '135px' }}>
                {/* Outer ring */}
                <div className="absolute" style={{ inset: '-6px', borderRadius: '50%', background: 'conic-gradient(#14532d 0deg, #f59e0b 180deg, #14532d 360deg)', padding: '3px' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff' }} />
                </div>
                <div className="absolute" style={{ inset: 0, borderRadius: '50%', overflow: 'hidden', border: '4px solid #fff', boxShadow: '0 8px 25px rgba(0,0,0,0.2)' }}>
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100" style={{ color: '#9ca3af' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>person</span>
                      <span style={{ fontSize: '8px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>Your Photo</span>
                    </div>
                  )}
                </div>
                <div style={{ position: 'absolute', bottom: '-12px', left: '50%', transform: 'translateX(-50%)', background: '#f59e0b', color: '#14532d', fontWeight: 900, fontSize: '8px', letterSpacing: '0.2em', textTransform: 'uppercase', padding: '4px 12px', boxShadow: '3px 3px 0 rgba(0,0,0,0.15)', whiteSpace: 'nowrap' }}>
                  SUPPORTER
                </div>
              </div>
            </div>
          </div>
        </div>

      ) : (
        /* ====== VERTICAL (Square / Portrait / Story) ====== */
        <div className="relative z-10 flex-1 flex flex-col" style={{ padding: isStory ? '26px' : '30px', gap: isStory ? '12px' : '14px' }}>

          {/* TOP: Name + Candidate portrait — over green zone */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div style={{ width: '20px', height: '3px', background: '#fbbf24' }} />
                <span style={{ fontSize: '8px', fontWeight: 800, color: '#fde68a', letterSpacing: '0.45em', textTransform: 'uppercase' }}>Campaign 2027</span>
              </div>
              <div style={{ lineHeight: 0.88 }}>
                <div style={{ fontSize: isStory ? '34px' : '38px', fontWeight: 900, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
                  Hon.<br />Hassan
                </div>
                <div style={{ fontSize: isStory ? '34px' : '38px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#fcd34d', textShadow: '0 4px 15px rgba(0,0,0,0.6)' }}>
                  Shehu<br />Hussain
                </div>
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', padding: '4px 10px', border: '1px solid rgba(251,191,36,0.35)', background: 'rgba(0,0,0,0.12)', alignSelf: 'flex-start' }}>
                <span style={{ fontSize: '7px', fontWeight: 700, color: '#fde68a', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Nasarawa Fed. Constituency</span>
              </div>
            </div>

            {/* Candidate photo — white bordered, rotated */}
            <div className="relative flex-shrink-0" style={{ width: '145px', height: '176px' }}>
              <div className="absolute" style={{ inset: 0, border: '4px solid rgba(255,255,255,0.2)', transform: 'translate(6px, 6px)', pointerEvents: 'none' }} />
              <div className="absolute" style={{ inset: 0, overflow: 'hidden', border: '5px solid #ffffff', boxShadow: '0 16px 40px rgba(0,0,0,0.5)', transform: 'rotate(2.5deg)' }}>
                <CandidatePortrait className="w-full h-full" />
              </div>
              <div style={{ position: 'absolute', bottom: '-10px', left: 0, right: 0, textAlign: 'center', background: '#14532d', color: '#fcd34d', fontWeight: 900, fontSize: '8px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 2px', transform: 'rotate(2.5deg)', boxShadow: '0 4px 12px rgba(0,0,0,0.4)', border: '1px solid rgba(251,191,36,0.3)' }}>
                HON. HASH 2027
              </div>
            </div>
          </div>

          {/* SLOGAN — on white zone, crossing the diagonal cut */}
          <div style={{ alignSelf: 'flex-start', transform: 'rotate(-2deg)', marginTop: isStory ? '6px' : 'auto', zIndex: 20 }}>
            <div style={{
              padding: isStory ? '10px 16px' : '12px 20px',
              background: '#14532d',
              color: '#ffffff',
              fontWeight: 900,
              fontStyle: 'italic',
              textTransform: 'uppercase',
              fontSize: isStory ? '18px' : '21px',
              letterSpacing: '-0.01em',
              lineHeight: 1.05,
              boxShadow: '6px 6px 0 #f59e0b',
              maxWidth: '88%',
            }}>
              "{customMessage || 'SERVICE TO HUMANITY'}"
            </div>
          </div>

          {/* BOTTOM: Supporter — on white zone */}
          <div className="mt-auto">
            {/* Separator */}
            <div style={{ height: '2px', background: 'linear-gradient(90deg, #14532d 0%, #f59e0b 50%, transparent 100%)', marginBottom: '14px' }} />

            <div className="flex items-center gap-4">
              {/* Supporter circle with conic gradient ring */}
              <div className="relative flex-shrink-0" style={{ width: '74px', height: '74px' }}>
                <div className="absolute" style={{ inset: '-5px', borderRadius: '50%', background: 'conic-gradient(#14532d 0deg, #f59e0b 180deg, #14532d 360deg)', padding: '3px' }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '50%', background: '#fff' }} />
                </div>
                <div className="absolute" style={{ inset: 0, borderRadius: '50%', overflow: 'hidden', border: '3px solid #fff', boxShadow: '0 6px 16px rgba(0,0,0,0.2)' }}>
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" alt="Supporter" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-100" style={{ color: '#9ca3af' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>person</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Name text */}
              <div className="flex-1 min-w-0">
                <div style={{ fontSize: '9px', fontWeight: 700, color: '#15803d', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '3px' }}>
                  Endorsed by
                </div>
                <div style={{ fontSize: '22px', fontWeight: 900, color: '#111827', textTransform: 'uppercase', letterSpacing: '-0.01em', lineHeight: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {supporterName || 'YOUR NAME'}
                </div>
                <div style={{ fontSize: '7.5px', fontWeight: 600, color: '#9ca3af', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: '4px' }}>
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
