import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const TypeTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = aspectRatio === 'landscape'
  const isStory = aspectRatio === 'story'

  return (
    <div className="w-full h-full bg-[#f8fafc] font-sans relative overflow-hidden flex flex-col justify-between select-none">
      
      {/* ── MASSIVE REPEATING BACKGROUND TYPOGRAPHY ── */}
      <div className="absolute inset-0 overflow-hidden flex flex-col pointer-events-none z-0" style={{ transform: 'rotate(-4deg) scale(1.2)' }}>
        {Array(20).fill('SERVICE ABOVE POLITICS').map((text, i) => (
          <div key={i} className="whitespace-nowrap" style={{ 
            fontSize: '110px', 
            lineHeight: 0.85, 
            fontWeight: 900, 
            textTransform: 'uppercase', 
            letterSpacing: '-0.04em',
            color: i % 2 === 0 ? 'rgba(21,128,61,0.06)' : 'rgba(0,0,0,0.03)',
            transform: `translateX(${i % 2 === 0 ? '-10%' : '-5%'})`
          }}>
            {text} • #HASH2027 • {text} • #HASH2027
          </div>
        ))}
      </div>

      {/* ── BOLD OUTER BORDER ── */}
      <div className="absolute inset-0 border-[16px] border-[#0a1f0e] z-30 pointer-events-none" />

      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="relative z-10 flex h-full p-10 gap-8">
          
          {/* LEFT: Massive Typography Block */}
          <div className="w-[58%] flex flex-col justify-between h-full">
            <div>
              <div className="inline-block bg-[#f59e0b] text-[#0a1f0e] px-3 py-1 mb-4" style={{ boxShadow: '4px 4px 0 #0a1f0e' }}>
                <span className="font-black text-[10px] tracking-[0.3em] uppercase">The Mandate</span>
              </div>
              
              <h1 className="font-black uppercase text-[#0a1f0e]" style={{ fontSize: '80px', lineHeight: 0.85, letterSpacing: '-0.04em' }}>
                {customMessage || 'SERVICE ABOVE POLITICS'}
              </h1>
            </div>

            <div className="mt-auto pt-6 border-t-[3px] border-[#15803d]">
              <p className="font-black text-[#15803d] uppercase tracking-[0.3em] text-[10px] mb-1">We Stand With</p>
              <h2 className="font-black uppercase text-[#0a1f0e] truncate" style={{ fontSize: '32px', letterSpacing: '-0.02em', lineHeight: 1 }}>
                Hon. Hassan Shehu Hussain
              </h2>
            </div>
          </div>

          {/* RIGHT: Photos & Endorsement */}
          <div className="flex-1 flex flex-col justify-end relative">
            <div className="absolute top-0 right-0 w-full h-[85%] bg-[#15803d]" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }} />
            
            <div className="relative z-10 flex items-end gap-4 pb-4 pr-4">
              {/* Candidate Box */}
              <div className="w-[160px] h-[190px] bg-[#0a1f0e] relative border-4 border-[#0a1f0e] shadow-[8px_8px_0px_#f59e0b] overflow-hidden flex-shrink-0">
                <CandidatePortrait className="w-full h-full grayscale-[40%] contrast-125" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f0e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-2 left-2 text-white font-black text-[10px] tracking-widest uppercase">HON. HASH</div>
              </div>

              {/* Supporter Box */}
              <div className="w-[120px] h-[120px] bg-[#0a1f0e] relative border-4 border-[#0a1f0e] shadow-[6px_6px_0px_#f59e0b] overflow-hidden flex-shrink-0">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[20%] contrast-125" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/20 bg-[#14532d]">
                    <span className="material-symbols-outlined text-4xl">person</span>
                  </div>
                )}
                <div className="absolute bottom-1 right-1 text-[#0a1f0e] font-black text-[8px] bg-[#f59e0b] px-2 py-0.5 uppercase tracking-widest">SUPPORTER</div>
              </div>
            </div>

            <div className="bg-[#0a1f0e] text-white p-4 relative z-20 shadow-[6px_6px_0px_#f59e0b]">
              <p className="font-black text-[#4ade80] uppercase tracking-[0.2em] text-[8px] mb-0.5">Endorsed By</p>
              <p className="font-black text-2xl uppercase truncate leading-none">{supporterName || 'YOUR NAME'}</p>
            </div>
          </div>
        </div>

      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="relative z-10 flex flex-col justify-between h-full" style={{ padding: isStory ? '28px' : '36px' }}>
          
          {/* TOP: Candidate Text Block */}
          <div className="z-20">
            <div className="inline-block bg-[#0a1f0e] text-[#f59e0b] px-3 py-1 mb-3">
              <span className="font-black text-[9px] tracking-[0.3em] uppercase">#HASH2027Continuity</span>
            </div>
            <h2 className="font-black uppercase text-[#0a1f0e] leading-[0.85]" style={{ fontSize: isStory ? '44px' : '52px', letterSpacing: '-0.03em' }}>
              Hon. Hassan<br/>
              <span className="text-[#15803d]">Shehu Hussain</span>
            </h2>
          </div>

          {/* MIDDLE: Photos interlocking with massive Slogan */}
          <div className="flex-1 flex flex-col justify-center relative z-10 my-4">
            
            {/* Massive Slogan background block */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] text-center transform -rotate-[5deg]">
              <h1 className="font-black uppercase leading-[0.8] mix-blend-multiply" style={{ fontSize: isStory ? '85px' : '100px', letterSpacing: '-0.05em', color: 'rgba(21,128,61,0.15)' }}>
                {customMessage || 'NASSARAWA FIRST'}
              </h1>
            </div>

            <div className="relative z-20 flex items-center justify-center gap-4">
              {/* Candidate Box */}
              <div className="w-[170px] h-[220px] bg-[#0a1f0e] relative border-4 border-[#0a1f0e] shadow-[12px_12px_0px_#15803d] overflow-hidden transform rotate-[-3deg]">
                <CandidatePortrait className="w-full h-full grayscale-[20%] contrast-125" />
                <div className="absolute bottom-2 left-2 right-2 bg-white text-[#0a1f0e] text-center font-black text-[10px] tracking-widest uppercase py-1 border-2 border-[#0a1f0e]">HON. HASH</div>
              </div>

              {/* Supporter Box */}
              <div className="w-[130px] h-[130px] bg-[#f59e0b] relative border-4 border-[#0a1f0e] shadow-[10px_10px_0px_#15803d] overflow-hidden transform rotate-[4deg] translate-y-10 -ml-8">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale-[10%] contrast-125 mix-blend-multiply" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#0a1f0e]/30 bg-[#fde68a]">
                    <span className="material-symbols-outlined text-5xl">person</span>
                  </div>
                )}
                <div className="absolute bottom-1 right-1 bg-[#0a1f0e] text-[#f59e0b] text-center font-black text-[8px] tracking-widest uppercase px-2 py-0.5">YOU</div>
              </div>
            </div>
          </div>

          {/* BOTTOM: Massive Endorsement Block */}
          <div className="z-20 mt-auto">
            {/* The main slogan repeated clearly */}
            <div className="bg-[#15803d] text-white p-3 mb-3 border-4 border-[#0a1f0e] shadow-[6px_6px_0px_#f59e0b] transform rotate-1">
              <h3 className="font-black text-center uppercase tracking-tighter" style={{ fontSize: isStory ? '22px' : '26px', lineHeight: 1 }}>
                "{customMessage || 'SERVICE ABOVE POLITICS'}"
              </h3>
            </div>

            {/* Supporter Name Block */}
            <div className="bg-[#0a1f0e] p-5 border-4 border-[#0a1f0e] shadow-[8px_8px_0px_#15803d] flex items-center justify-between">
              <div className="flex-1 min-w-0 pr-4">
                <p className="font-black text-[#4ade80] uppercase tracking-[0.2em] text-[9px] mb-1">Verified Endorsement</p>
                <h2 className="font-black text-white uppercase leading-none truncate" style={{ fontSize: '28px', letterSpacing: '-0.02em' }}>
                  {supporterName || 'YOUR NAME'}
                </h2>
              </div>
              <div className="flex-shrink-0">
                 <span className="material-symbols-outlined text-[#f59e0b]" style={{ fontSize: '36px', fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
