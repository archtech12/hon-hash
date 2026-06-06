import { StickerData, TemplateId } from '../../types'

interface LayoutSwitcherProps {
  currentTemplate: TemplateId
  onSelect: (id: TemplateId) => void
}

export const LayoutSwitcher = ({ currentTemplate, onSelect }: LayoutSwitcherProps) => {
  const templates: { id: TemplateId; name: string; desc: string }[] = [
    { id: 'classic', name: 'Classic', desc: 'Professional Campaign Card' },
    { id: 'modern', name: 'Modern', desc: 'Clean & Glassmorphic' },
    { id: 'youth', name: 'Youth', desc: 'Vibrant & Bold' },
    { id: 'print', name: 'Print', desc: 'Ink-Friendly High Contrast' },
    { id: 'minimal', name: 'Minimal', desc: 'Pure & Elegant' },
    { id: 'badge', name: 'Verified', desc: 'Official Supporter ID' },
    { id: 'type', name: 'Loud', desc: 'Big Typography & Impact' },
    { id: 'geometric', name: 'Shapes', desc: 'Dynamic Structure' },
    { id: 'classicV2', name: 'Classic PRO', desc: 'Updated Polished Look' },
    { id: 'badgeV2', name: 'Verified 2.0', desc: 'Modern & Clean' },
    { id: 'geometricV2', name: 'Shapes 2.0', desc: 'Designer Edition' },
    { id: 'classicPremium', name: 'Premium Classic', desc: 'Expert Heritage Design' },
    { id: 'modernPremium', name: 'Premium Modern', desc: 'Visionary Glass' },
    { id: 'printPremium', name: 'Premium Print', desc: 'Editorial Billboard' },
    { id: 'badgePremium', name: 'Premium VIP', desc: 'Secure Pass Credential' },
  ]

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`relative p-2.5 rounded-lg border-2 text-left transition-all duration-200 group overflow-hidden flex flex-col justify-center items-center text-center ${currentTemplate === t.id
              ? 'border-green-500 bg-green-50 shadow-[0_2px_8px_rgba(34,197,94,0.15)] scale-[1.02]'
              : 'border-gray-200 hover:border-green-300 bg-white'
            }`}
        >
           {currentTemplate === t.id && (
                <div className="absolute top-0 right-0 p-1 rounded-bl-lg bg-green-500 text-white">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
           )}
          <p className={`font-bold text-[11px] uppercase tracking-wide leading-tight ${currentTemplate === t.id ? 'text-green-800' : 'text-gray-700'}`}>
            {t.name}
          </p>
          <p className="text-[9px] text-gray-500 leading-tight mt-0.5 hidden sm:block">{t.desc}</p>
        </button>
      ))}
    </div>
  )
}
