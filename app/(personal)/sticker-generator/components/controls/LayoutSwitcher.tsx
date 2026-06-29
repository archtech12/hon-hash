import { TemplateId } from '../../types'

interface LayoutSwitcherProps {
  currentTemplate: TemplateId
  onSelect: (id: TemplateId) => void
}

export const LayoutSwitcher = ({ currentTemplate, onSelect }: LayoutSwitcherProps) => {
  const templates: { id: TemplateId; name: string; desc: string }[] = [
    { id: 'classic', name: 'Classic', desc: 'Professional Campaign Card' },
    { id: 'modern', name: 'Modern', desc: 'Clean & Glassmorphic' },
    { id: 'print', name: 'Print', desc: 'Ink-Friendly High Contrast' },
    { id: 'youth', name: 'Youth', desc: 'Vibrant & Bold' },
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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {templates.map((t) => (
        <button
          key={t.id}
          onClick={() => onSelect(t.id)}
          className={`relative p-3 min-h-[60px] rounded-xl border-2 text-left transition-all duration-200 group overflow-hidden flex flex-col justify-center items-center text-center touch-manipulation active:scale-95 ${currentTemplate === t.id
              ? 'border-brand-500 bg-brand-500/20 shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.02]'
              : 'border-white/10 hover:border-brand-400/50 bg-white/5'
            }`}
        >
           {currentTemplate === t.id && (
                <div className="absolute top-0 right-0 p-1 rounded-bl-lg bg-brand-500 text-white">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
           )}
          <p className={`font-black text-xs uppercase tracking-wide leading-tight ${currentTemplate === t.id ? 'text-brand-400' : 'text-gray-300'}`}>
            {t.name}
          </p>
          <p className="text-[10px] text-gray-500 leading-tight mt-1 hidden sm:block font-medium">{t.desc}</p>
        </button>
      ))}
    </div>
  )
}
