import { StickerData } from '../../types'

interface TextControlsProps {
  data: StickerData
  onUpdate: (field: keyof StickerData, value: any) => void
}

export const TextControls = ({ data, onUpdate }: TextControlsProps) => {
  return (
    <div className="space-y-5">
      {/* Name Input */}
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Your Name</label>
        <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span className="material-symbols-outlined text-gray-400 group-focus-within:text-green-500 transition-colors">person</span>
            </div>
            <input
            type="text"
            value={data.supporterName}
            onChange={(e) => onUpdate('supporterName', e.target.value)}
            placeholder="e.g. Ibrahim Yusuf"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-medium"
            />
        </div>
      </div>

      {/* Slogan Input */}
      <div>
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Campaign Slogan</label>
        <div className="relative group">
             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                 <span className="material-symbols-outlined text-gray-400 group-focus-within:text-green-500 transition-colors">campaign</span>
            </div>
            <input
            type="text"
            value={data.customMessage}
            onChange={(e) => onUpdate('customMessage', e.target.value)}
            placeholder="Progress First"
            maxLength={30}
            className="w-full pl-10 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:ring-4 focus:ring-green-500/10 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 text-gray-900 font-medium"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-md">
                {data.customMessage.length}/30
            </span>
        </div>
        
        {/* Quick Slogans */}
        <div className="mt-3">
            <p className="text-[10px] text-gray-400 font-bold uppercase mb-2">Quick Suggestions</p>
            <div className="flex flex-wrap gap-2">
                {['Nassarawa First', 'Progress First', 'Service Above Politics', '#HASH2027Continuity', 'Continuity For Dev'].map(slogan => (
                    <button
                        key={slogan}
                        onClick={() => onUpdate('customMessage', slogan)}
                        className="text-xs px-3 py-1.5 bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-600 hover:text-green-800 rounded-lg transition-all shadow-sm active:scale-95"
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
