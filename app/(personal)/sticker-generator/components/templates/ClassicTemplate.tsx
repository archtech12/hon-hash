import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplate = ({ data }: TemplateProps) => {
  const { supporterName, supporterPhoto, customMessage, colorTheme } = data

  const themes = {
    green: { bg: 'bg-green-950', accent: 'bg-green-700', border: 'border-green-600', text: 'text-green-50' },
    red: { bg: 'bg-red-950', accent: 'bg-red-700', border: 'border-red-600', text: 'text-red-50' },
    blue: { bg: 'bg-blue-950', accent: 'bg-blue-700', border: 'border-blue-600', text: 'text-blue-50' },
    gold: { bg: 'bg-stone-900', accent: 'bg-amber-600', border: 'border-amber-500', text: 'text-amber-50' },
  }[colorTheme]

  return (
    <div className={`w-full h-full flex flex-col ${themes.bg} font-serif relative overflow-hidden`}>
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
       
       <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-b from-white/10 to-transparent rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

       <div className="flex-1 p-6 flex flex-col z-10">
            {/* Header / Logo Area */}
            <div className="flex justify-between items-start mb-6">
                 <div className="flex flex-col">
                     <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-sans font-bold mb-1">Campaign 2027</span>
                     <div className="h-0.5 w-12 bg-white/30"></div>
                 </div>
                 <div className="border border-white/20 bg-white/5 backdrop-blur-md px-3 py-1 rounded-full">
                     <span className="text-[10px] text-white/90 font-sans font-bold uppercase tracking-widest">Nasarawa Federal</span>
                 </div>
            </div>

            {/* Main Visuals Row */}
            <div className="flex-1 flex gap-0 relative items-end">
                {/* Candidate (Larger) */}
                <div className="w-[60%] h-[110%] -mb-[10%] relative z-10">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20"></div>
                     <CandidatePortrait className="w-full h-full object-cover object-top mask-image-gradient" />
                     <div className="absolute bottom-[20%] left-0 z-30">
                        <h1 className="text-white font-bold text-[clamp(1.5rem,5vw,3.5rem)] leading-none drop-shadow-2xl">
                          HON.<br/>
                          HASH
                        </h1>
                     </div>
                </div>

                {/* Supporter (Circle Overlap) */}
                <div className="w-[45%] aspect-square rounded-full border-4 border-white shadow-2xl overflow-hidden relative z-20 -ml-[15%] mb-8 bg-zinc-800">
                    {supporterPhoto ? (
                       <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-600">
                            <span className="text-4xl font-sans">?</span>
                        </div>
                    )}
                 </div>
            </div>
       </div>

       {/* Footer / Message Bar */}
       <div className="relative bg-white z-20 py-4 px-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
            <div className={`absolute top-0 left-0 w-full h-1 ${themes.accent}`}></div>
            <div className="flex flex-col items-center text-center">
                <p className={`text-[10px] uppercase tracking-widest font-bold mb-1 ${themes.text.replace('50', '800')}`}>Proudly Supported By</p>
                <h2 className="text-black font-bold text-[clamp(1rem,3vw,1.5rem)] leading-none uppercase mb-2">
                    {supporterName || 'YOUR NAME'}
                </h2>
                <div className="w-full h-px bg-gray-200 my-2"></div>
                 <p className={`font-bold italic text-lg ${themes.text.replace('50', '600')}`}>
                    "{customMessage}"
                </p>
            </div>
       </div>
    </div>
  )
}
