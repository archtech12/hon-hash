import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const YouthTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className="w-full h-full bg-[#064e3b] font-sans relative overflow-hidden flex flex-col select-none" style={{ containerType: 'inline-size' }}>
      
      {/* Dynamic diagonal background (Mint/Light Green) */}
      <div className="absolute inset-0 bg-[#10b981]" style={{ clipPath: isLandscape ? 'polygon(0 0, 50% 0, 70% 100%, 0 100%)' : 'polygon(0 0, 100% 0, 100% 45%, 0 80%)' }}></div>
      
      {/* ── DIVIDER SEAM (Accent Divider Line) ── */}
      <div className="absolute inset-0 bg-[#fbbf24] shadow-[0_0_15px_rgba(251,191,36,0.5)] z-0" style={{ 
        clipPath: isLandscape 
          ? 'polygon(50% 0, calc(50% + 5px) 0, calc(70% + 5px) 100%, 70% 100%)' 
          : 'polygon(0 80%, 100% 45%, 100% calc(45% + 5px), 0 calc(80% + 5px))' 
      }}></div>
      
      {/* Candidate - Placed firmly on the right/bottom */}
      <div className={`absolute ${isLandscape ? 'top-0 right-0 w-[50%] h-full' : 'bottom-0 right-0 w-full h-[55%]'} z-10`}>
        <div className="w-full h-full relative overflow-hidden">
          <CandidatePortrait className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/20 to-transparent"></div>
        </div>
      </div>

      {/* Main Content Safe Area */}
      <div className={`relative z-30 flex flex-col justify-between ${isLandscape ? 'w-[55%] h-full p-8' : 'w-full h-full p-6 pt-12'}`}>
          
          {/* Top Section: Supporter */}
          <div className="flex flex-col items-center self-start gap-4">
              <div className="relative w-[35cqw] max-w-[180px] aspect-square rounded-full border-[6px] border-white bg-[#022c22] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.5)] group">
                  {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#064e3b] text-white">
                        <span className="font-black" style={{ fontSize: '5cqw' }}>YOU</span>
                    </div>
                  )}
              </div>
              <div className="bg-white text-[#064e3b] px-5 py-2 rounded-full font-black uppercase whitespace-nowrap border-2 border-[#10b981] shadow-xl" style={{ fontSize: '3.5cqw' }}>
                  {supporterName || 'Supporter'}
              </div>
          </div>

          {/* Bottom Section: Typography */}
          <div className="flex flex-col mt-auto w-full max-w-full">
             <h1 className="text-white font-black leading-[0.9] tracking-tighter uppercase italic drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] break-words w-full" style={{ fontSize: '10cqw' }}>
                TEAM<br/>
                <span className="text-[#6ee7b7] drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">Hon. HASH</span>
             </h1>
             <p className="text-[#a7f3d0] font-black uppercase mt-3 tracking-widest drop-shadow-md break-words w-full" style={{ fontSize: '3.5cqw' }}>
                {customMessage || 'YOUTH MANDATE 2027'}
             </p>
          </div>
      </div>

      {/* Floating Badge */}
      <div className="absolute top-6 right-6 z-40">
        <span className="inline-block px-4 py-2 bg-[#fbbf24] text-[#451a03] font-black uppercase" style={{ fontSize: '2.5cqw', transform: 'rotate(5deg)', boxShadow: '4px 4px 0 rgba(0,0,0,0.3)', border: '2px solid white' }}>
          #2027
        </span>
      </div>
    </div>
  )
}
