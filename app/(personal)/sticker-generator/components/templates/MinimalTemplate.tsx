import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'
import { tokens } from './design-system/tokens'

export const MinimalTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className={`${tokens.layout.container} bg-white text-gray-900 font-sans p-[3cqw]`} style={{ containerType: 'inline-size', fontFamily: "'Inter', 'SF Pro Display', sans-serif" }}>
      
      {/* Bento Box Container */}
      <div className={`w-full h-full p-[2.5cqw] relative z-10 flex ${isLandscape ? 'flex-row' : 'flex-col'} gap-[2.5cqw] bg-white rounded-[3cqw] overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)] ring-1 ring-gray-100`}>
        
        {/* Top: Photography Bento Cards */}
        <div className={`flex flex-row gap-[2.5cqw] ${isLandscape ? 'w-[55%] h-full flex-col' : 'h-[55%] w-full'}`}>
           
           {/* Candidate Bento Card */}
           <div className={`flex-1 relative bg-gray-50 rounded-[2cqw] overflow-hidden shadow-sm group/card cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              <CandidatePortrait className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105" />
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md px-[1.5cqw] py-[0.5cqw] rounded-full shadow-sm z-20">
                 <span className="font-bold text-gray-800 tracking-wider uppercase" style={{ fontSize: isLandscape ? '1cqw' : '1.2cqw' }}>Hassan Shehu</span>
              </div>
           </div>

           {/* Supporter Bento Card */}
           <div className={`flex-1 relative bg-green-50 rounded-[2cqw] overflow-hidden shadow-sm group/card cursor-pointer`}>
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
              {supporterPhoto ? (
                  <img src={supporterPhoto} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-105" />
                ) : (
                   <div className="w-full h-full flex items-center justify-center text-green-300 transition-transform duration-700 group-hover/card:scale-105">
                       <span className="material-symbols-outlined font-light" style={{ fontSize: '8cqw' }}>person</span>
                   </div>
              )}
              <div className="absolute bottom-3 right-3 bg-green-700/95 backdrop-blur-md px-[1.5cqw] py-[0.5cqw] rounded-full shadow-sm z-20">
                 <span className="font-bold text-white tracking-wider uppercase" style={{ fontSize: isLandscape ? '1cqw' : '1.2cqw' }}>Supporter</span>
              </div>
           </div>
        </div>

        {/* Bottom: Typography Bento Card */}
        <div className={`flex flex-col bg-gradient-to-br from-green-900 to-green-950 text-white rounded-[2cqw] overflow-hidden shadow-md relative ${isLandscape ? 'w-[45%] h-full' : 'w-full h-[45%]'}`}>
           
           {/* Ambient Glow */}
           <div className="absolute top-0 right-0 w-[30cqw] h-[30cqw] bg-green-400/10 blur-[40px] rounded-full pointer-events-none"></div>

           {/* Content Wrapper */}
           <div className="flex-1 flex flex-col p-[3cqw] relative z-10 h-full">
              
              {/* Header inside card */}
              <div className="flex justify-between items-start mb-[1cqw]">
                 <div className="flex items-center gap-[1cqw]">
                     <div className="w-[1.5cqw] h-[1.5cqw] bg-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]"></div>
                     <span className="font-bold text-green-400 tracking-widest uppercase" style={{ fontSize: isLandscape ? '1.2cqw' : '1.5cqw' }}>Official 2027</span>
                 </div>
                 <span className="material-symbols-outlined text-green-400/50" style={{ fontSize: isLandscape ? '3cqw' : '4cqw' }}>verified</span>
              </div>

              {/* Huge Title (Dynamic Slogan) */}
              <div className="flex-1 flex flex-col justify-center py-[1cqw]">
                 <h1 className="font-black uppercase tracking-tighter text-white leading-[0.9]" style={{ fontSize: isLandscape ? '5.5cqw' : '8cqw', wordBreak: 'break-word' }}>
                    {customMessage || (
                        <>A New Era<br/>For Nasarawa.</>
                    )}
                 </h1>
              </div>

              {/* Endorsement Details */}
              <div className="mt-auto pt-[2cqw] border-t border-green-700/50 flex items-end justify-between">
                 <div className="max-w-[70%]">
                    <p className="font-medium text-green-100/70 mb-[0.5cqw] tracking-wide" style={{ fontSize: isLandscape ? '1.2cqw' : '1.5cqw' }}>Proudly endorsed by</p>
                    <h3 className="font-bold text-white leading-tight truncate" style={{ fontSize: isLandscape ? '2cqw' : '2.5cqw' }}>
                       {supporterName || 'John Doe'}
                    </h3>
                 </div>
                 
                 <div className="text-right">
                    <p className="font-black text-green-400 tracking-[0.2em] leading-none" style={{ fontSize: isLandscape ? '1.5cqw' : '2cqw' }}>REF<br/>2027</p>
                 </div>
              </div>

           </div>
        </div>

      </div>
    </div>
  )
}

