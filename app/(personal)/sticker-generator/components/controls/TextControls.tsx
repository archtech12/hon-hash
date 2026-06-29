import { StickerData } from '../../types'

interface TextControlsProps {
  data: StickerData
  onUpdate: (field: keyof StickerData, value: any) => void
}

export const TextControls = ({ data, onUpdate }: TextControlsProps) => {
  return (
    <div className="space-y-6">
      {/* Name Input */}
      <div>
        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Your Name</label>
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <span className="material-symbols-outlined text-gray-500 group-focus-within:text-brand-500 transition-colors">person</span>
            </div>
            <input
            type="text"
            value={data.supporterName}
            onChange={(e) => onUpdate('supporterName', e.target.value)}
            placeholder="e.g. Ibrahim Yusuf"
            className="w-full pl-12 pr-4 py-4 bg-black/40 border border-white/10 rounded-xl focus:bg-black/60 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all placeholder:text-gray-600 text-white font-bold text-sm sm:text-base shadow-inner touch-manipulation"
            />
        </div>
      </div>

      {/* Slogan Input */}
      <div>
        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Campaign Slogan</label>
        <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                 <span className="material-symbols-outlined text-gray-500 group-focus-within:text-brand-500 transition-colors">campaign</span>
            </div>
            <input
            type="text"
            value={data.customMessage}
            onChange={(e) => onUpdate('customMessage', e.target.value)}
            placeholder="Progress First"
            maxLength={30}
            className="w-full pl-12 pr-16 py-4 bg-black/40 border border-white/10 rounded-xl focus:bg-black/60 focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 outline-none transition-all placeholder:text-gray-600 text-white font-bold text-sm sm:text-base shadow-inner touch-manipulation"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-black text-brand-400 bg-brand-500/20 px-2 py-1 rounded-md">
                {data.customMessage.length}/30
            </span>
        </div>
        
        {/* Quick Slogans */}
        <div className="mt-4">
            <p className="text-[10px] text-gray-500 font-black uppercase mb-3 tracking-widest">Quick Suggestions</p>
            <div className="flex flex-wrap gap-2">
                {['Nassarawa First', 'Progress First', 'Service Above Politics', '#HASH2027Continuity', 'Youth For HASH', 'Building The Future'].map(slogan => (
                    <button
                        key={slogan}
                        onClick={() => onUpdate('customMessage', slogan)}
                        className="text-[11px] sm:text-xs px-4 py-2 bg-white/5 border border-white/10 hover:border-brand-400/50 hover:bg-brand-500/10 text-gray-300 hover:text-brand-300 rounded-full transition-all shadow-sm active:scale-95 font-bold touch-manipulation min-h-[40px] flex items-center"
                    >
                        {slogan}
                    </button>
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}
