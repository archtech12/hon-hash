import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const PrintTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, aspectRatio } = data
  const isLandscape = ['landscape', 'square', 'print'].includes(aspectRatio)

  return (
    <div className="w-full h-full bg-[#f8fafc] flex flex-col font-sans border-[12px] sm:border-[16px] border-brand-900 relative select-none" style={{ containerType: 'inline-size' }}>
      
      {/* ── HIGH-GRADE PRINT TEXTURE ── */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(0,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,1)_1px,transparent_1px)] bg-[size:16px_16px] sm:bg-[size:24px_24px] pointer-events-none z-0" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.15)_100%)] pointer-events-none z-0" />

      {/* Header */}
      <div className="h-[12%] sm:h-[14%] flex items-center justify-between px-4 sm:px-8 border-b-[4px] sm:border-b-[6px] border-brand-700 bg-white relative z-10 shadow-sm shrink-0">
         <div className="flex flex-col">
            <span className="text-brand-900 font-black leading-tight uppercase tracking-widest drop-shadow-sm" style={{ fontSize: '4cqw' }}>APC</span>
            <span className="text-brand-600 font-bold uppercase tracking-[0.2em] mt-0.5 sm:mt-1" style={{ fontSize: '2cqw' }}>All Progressives Congress</span>
         </div>
         <div className="text-right flex flex-col items-end">
             <span className="block text-charcoal font-black uppercase leading-tight tracking-[0.3em] sm:tracking-[0.4em] px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 border border-brand-500/30 shadow-sm" style={{ fontSize: '2cqw' }}>Nasarawa Federal</span>
         </div>
      </div>

      <div className={`flex-1 flex ${isLandscape ? 'flex-row' : 'flex-col'} relative z-10 overflow-hidden`}>
         
         {/* Left: Supporter */}
         <div className={`${isLandscape ? 'w-1/2 border-r-[2px] sm:border-r-[3px]' : 'h-1/2 border-b-[2px] sm:border-b-[3px]'} p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-center border-dashed border-brand-900/30 bg-white/80 backdrop-blur-md min-h-0`}>
            <div className="w-full max-w-[180px] sm:max-w-[260px] aspect-[4/5] bg-white border-2 sm:border-4 border-gray-200 flex items-center justify-center mb-4 sm:mb-8 p-1.5 sm:p-3 shadow-glass-lg relative shrink-0">
               <div className="w-full h-full bg-gray-100 overflow-hidden relative">
                 {supporterPhoto ? (
                    <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300">
                       <span className="material-symbols-outlined text-[5.56cqw] sm:text-[9.26cqw] font-light">person</span>
                    </div>
                 )}
               </div>
            </div>
            <h3 className="text-charcoal font-black leading-tight text-center uppercase border-b-[4px] sm:border-b-[6px] border-brand-500 pb-2 sm:pb-3 mb-2 sm:mb-3 break-words w-full" style={{ fontSize: '6cqw' }}>
               {supporterName || 'FULL NAME'}
            </h3>
            <p className="text-brand-600 font-black uppercase tracking-[0.4em] sm:tracking-[0.5em]" style={{ fontSize: '2cqw' }}>Official Endorsement</p>
         </div>

         {/* Right: Candidate */}
         <div className={`${isLandscape ? 'w-1/2' : 'h-1/2'} p-4 sm:p-8 lg:p-10 flex flex-col items-center justify-center text-center bg-brand-900 text-white shadow-[inset_0_0_50px_rgba(0,0,0,0.6)] sm:shadow-[inset_0_0_80px_rgba(0,0,0,0.6)] relative overflow-hidden min-h-0`}>
            
            {/* Ambient Background Glow in Right Panel */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-600/20 blur-[60px] sm:blur-[80px] pointer-events-none"></div>

            <div className="w-full max-w-[140px] sm:max-w-[220px] aspect-square rounded-full border-[6px] sm:border-[10px] border-white overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.7)] mb-4 sm:mb-8 bg-gray-100 flex items-center justify-center relative z-10 group shrink-0">
               <CandidatePortrait className="w-full h-full object-cover " />
            </div>
            
            <h2 className="font-black leading-[0.9] uppercase tracking-tighter mb-4 sm:mb-6 drop-shadow-lg relative z-10 w-full" style={{ fontSize: '8cqw' }}>
               Hon. HASH<br/><span className="tracking-widest font-bold text-brand-300 block mt-1" style={{ fontSize: '3cqw' }}>(Hassan Shehu)</span>
            </h2>
            
            <div className="bg-charcoal/90 border-l-[4px] sm:border-l-[6px] border-brand-400 p-3 sm:p-5 shadow-glass-lg w-[95%] sm:max-w-[350px] relative z-10 backdrop-blur-md">
              <p className="text-white italic font-black tracking-widest break-words" style={{ fontSize: '3cqw' }}>
                "{customMessage || 'SERVICE ABOVE POLITICS'}"
              </p>
            </div>
         </div>
      </div>

      {/* Footer */}
      <div className="h-[8%] sm:h-[10%] bg-charcoal text-brand-100 flex items-center justify-between px-4 sm:px-8 border-t-[3px] sm:border-t-4 border-brand-500 relative z-10 shrink-0">
         <p className="uppercase tracking-[0.3em] sm:tracking-[0.5em] font-black text-gray-400" style={{ fontSize: '1.51cqw' }}>Authorized Campaign Material 2027</p>
         <div className="flex gap-1 sm:gap-1.5">
           <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-700" />
           <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-500" />
           <div className="w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-brand-300" />
         </div>
      </div>
    </div>
  )
}
