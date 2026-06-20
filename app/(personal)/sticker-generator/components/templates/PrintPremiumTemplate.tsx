import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const PrintPremiumTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)
  const isStory = aspectRatio === 'portrait'

  return (
    <div className="w-full h-full bg-[#f8f9fa] flex flex-col font-sans relative select-none overflow-hidden" style={{ border: '16px solid #000' }}>
      
      {/* Newspaper texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply opacity-60 z-0 pointer-events-none" />
      
      {/* ── HEADER ── */}
      <div className="border-b-[6px] border-black p-5 bg-white relative z-10 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="font-black text-black leading-none uppercase tracking-tighter" style={{ fontSize: '42px' }}>
            NASSARAWA <span style={{ color: '#15803d' }}>FIRST</span>
          </h1>
          <p className="font-bold tracking-[0.3em] uppercase text-gray-500" style={{ fontSize: '10px' }}>
            The Official Campaign Bulletin • 2027
          </p>
        </div>
        <div className="flex flex-col items-end">
          <div className="bg-black text-white px-3 py-1 inline-block mb-1">
            <span className="font-black uppercase tracking-widest" style={{ fontSize: '10px' }}>SPECIAL EDITION</span>
          </div>
          <span className="font-mono font-bold text-gray-400" style={{ fontSize: '10px' }}>#HASH2027CONTINUITY</span>
        </div>
      </div>

      {isLandscape ? (
        /* ================= LANDSCAPE RATIO ================= */
        <div className="flex-1 flex relative z-10">
          
          {/* LEFT: Candidate Column */}
          <div className="w-[35%] flex flex-col border-r-[4px] border-black bg-white p-6">
            <div className="w-full aspect-[3/4] border-[4px] border-black p-1 shadow-[6px_6px_0_#15803d] mb-4 relative overflow-hidden">
              <CandidatePortrait className="w-full h-full object-cover filter grayscale contrast-125 saturate-0" />
            </div>
            <h2 className="font-black text-black uppercase leading-none tracking-tight border-b-4 border-black pb-2 mb-2" style={{ fontSize: '32px' }}>
              HON. HASSAN <br/>SHEHU HUSSAIN
            </h2>
            <p className="font-serif italic font-bold text-gray-700" style={{ fontSize: '14px', lineHeight: 1.3 }}>
              "Achievements, facts, and records speak louder than rhetoric. The focus remains firmly on delivering democratic dividends."
            </p>
          </div>

          {/* RIGHT: Editorial Content & Supporter */}
          <div className="flex-1 flex flex-col bg-[#f8f9fa] p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1 pr-6">
                <h3 className="font-black text-[#15803d] uppercase tracking-tighter leading-none mb-3" style={{ fontSize: '56px' }}>
                  PROGRESS FIRST.
                </h3>
                <div className="bg-black text-white p-4 inline-block shadow-[6px_6px_0_#15803d]">
                  <p className="font-black italic uppercase tracking-wide" style={{ fontSize: '20px' }}>
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
              </div>
              
              <div className="w-[140px] aspect-[3/4] border-4 border-black bg-white p-1 relative shadow-[6px_6px_0_#000] transform rotate-3">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale contrast-125" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-4xl">photo_camera</span>
                  </div>
                )}
                <div className="absolute -bottom-3 -right-3 bg-[#15803d] text-white px-2 py-1 border-2 border-black font-black text-[8px] uppercase tracking-widest">
                  ENDORSED
                </div>
              </div>
            </div>

            <div className="mt-auto border-t-[4px] border-black pt-4">
              <p className="font-bold text-[#15803d] uppercase tracking-[0.2em]" style={{ fontSize: '10px' }}>Official Endorsement Provided By</p>
              <h2 className="font-black text-black uppercase truncate" style={{ fontSize: '36px', letterSpacing: '-0.02em' }}>
                {supporterName || 'YOUR NAME HERE'}
              </h2>
            </div>
          </div>
        </div>

      ) : (
        /* ================= VERTICAL RATIOS ================= */
        <div className="flex-1 flex flex-col relative z-10 p-6 pt-8">
          
          {/* Main Headline */}
          <div className="text-center border-b-[4px] border-black pb-4 mb-6">
            <h1 className="font-black text-black uppercase tracking-tighter leading-[0.85] mb-2" style={{ fontSize: isStory ? '58px' : '72px' }}>
              PROGRESS <br/><span style={{ color: '#15803d' }}>FIRST.</span>
            </h1>
            <h2 className="font-serif italic font-bold text-gray-800" style={{ fontSize: '18px' }}>
              "Service Above Politics. Achievements Over Rhetoric."
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="flex-1 flex flex-col gap-6">
            
            {/* Candidate Row */}
            <div className="flex gap-4 items-center">
              <div className="w-[150px] aspect-[3/4] border-[4px] border-black p-1 shadow-[6px_6px_0_#15803d] flex-shrink-0">
                <CandidatePortrait className="w-full h-full object-cover filter grayscale contrast-125" />
              </div>
              <div className="flex-1 border-l-4 border-black pl-4">
                <p className="font-bold uppercase tracking-[0.2em] text-gray-500 mb-1" style={{ fontSize: '9px' }}>The Mandate</p>
                <h3 className="font-black uppercase text-black leading-none tracking-tight mb-2" style={{ fontSize: '32px' }}>
                  HON. HASSAN <br/>S. HUSSAIN
                </h3>
                <p className="font-serif text-sm font-medium text-gray-700 leading-snug">
                  Delivering democratic dividends and advancing the welfare of Nassarawa Federal Constituency.
                </p>
              </div>
            </div>

            <div className="w-full border-t-[4px] border-black border-dashed" />

            {/* Supporter Endorsement Row */}
            <div className="flex gap-4 items-center mt-auto">
              <div className="flex-1 pr-4 text-right">
                <div className="bg-black text-white p-3 inline-block shadow-[4px_4px_0_#15803d] mb-3 transform -rotate-1">
                  <p className="font-black italic uppercase tracking-wide" style={{ fontSize: '16px' }}>
                    "{customMessage || 'SERVICE ABOVE POLITICS'}"
                  </p>
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.2em] text-[#15803d] mb-1" style={{ fontSize: '9px' }}>Endorsed By</p>
                  <h3 className="font-black uppercase text-black leading-none truncate" style={{ fontSize: '28px', letterSpacing: '-0.02em' }}>
                    {supporterName || 'YOUR NAME'}
                  </h3>
                </div>
              </div>
              
              <div className="w-[110px] aspect-[3/4] border-4 border-black bg-white p-1 relative shadow-[6px_6px_0_#000] flex-shrink-0">
                {supporterPhoto ? (
                  <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover grayscale contrast-125" />
                ) : (
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-3xl">photo_camera</span>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── FOOTER ── */}
      <div className="h-10 border-t-[6px] border-black bg-black text-white flex items-center justify-between px-6 relative z-10">
        <span className="font-bold tracking-[0.3em] uppercase" style={{ fontSize: '9px' }}>Authorized Campaign Material</span>
        <span className="font-black tracking-widest" style={{ fontSize: '12px' }}>2027</span>
      </div>
    </div>
  )
}
