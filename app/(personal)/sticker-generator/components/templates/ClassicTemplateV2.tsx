import { TemplateProps } from '../../types'
import { CandidatePortrait } from '../shared/CandidatePortrait'

export const ClassicTemplateV2 = ({ data }: TemplateProps) => {
    const { supporterName, supporterPhoto, customMessage, colorTheme } = data

    const colors = {
        green: { bg: 'bg-green-900', accent: 'bg-green-600', text: 'text-green-50' },
        red: { bg: 'bg-red-900', accent: 'bg-red-600', text: 'text-red-50' },
        blue: { bg: 'bg-blue-900', accent: 'bg-blue-600', text: 'text-blue-50' },
        gold: { bg: 'bg-yellow-900', accent: 'bg-yellow-600', text: 'text-yellow-50' },
    }[colorTheme]

    return (
        <div className={`w-full h-full flex flex-col ${colors.bg} font-sans relative overflow-hidden`} style={{ containerType: 'inline-size' }}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />

            {/* Top Section: Candidate & Supporter Split */}
            <div className="flex-1 flex relative">
                {/* Left: Candidate */}
                <div className="w-[55%] h-full relative z-0">
                    <CandidatePortrait className="w-full h-full absolute inset-0 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent z-10" />
                    <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20">
                        <h1 className="text-white font-black leading-[1.0] uppercase drop-shadow-lg tracking-tight" style={{ fontSize: '5cqw' }}>
                            Hon. <br />
                            <span className="text-yellow-400 text-[1.1em]">Hassan Shehu</span><br />
                            Hussain
                        </h1>
                    </div>
                </div>

                {/* Right: Supporter */}
                <div className="w-[45%] bg-white/10 backdrop-blur-md border-l border-white/20 flex flex-col items-center justify-center p-4 sm:p-6 text-center relative z-20 min-h-0 shrink-0">
                    <div className="aspect-square w-[70%] sm:w-[80%] max-w-[220px] rounded-full border-[4px] sm:border-[6px] border-yellow-400 p-1 sm:p-1.5 mb-2 sm:mb-4 shadow-2xl bg-white/10 relative group shrink-0">
                        {supporterPhoto ? (
                            <img src={supporterPhoto} crossOrigin="anonymous" className="w-full h-full rounded-full object-cover shadow-inner" />
                        ) : (
                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
                                <span className="text-[5.56cqw] sm:text-[7.41cqw]">?</span>
                            </div>
                        )}
                        {/* Verified Badge */}
                        <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                            <span className="text-white text-[1.11cqw] sm:text-[1.3cqw] font-bold">✓</span>
                        </div>
                    </div>

                    <div className="w-full shrink-0">
                        <p className="text-white font-bold leading-tight mb-1 drop-shadow-md break-words" style={{ fontSize: '4cqw' }}>
                            {supporterName || 'Your Name'}
                        </p>
                        <div className="h-0.5 w-8 sm:w-12 bg-yellow-400 mx-auto my-1 sm:my-2 opacity-80"></div>
                        <p className="text-yellow-400 tracking-[0.2em] uppercase font-bold" style={{ fontSize: '2cqw' }}>Proud Supporter</p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Slogan */}
            <div className={`${colors.accent} h-auto py-5 sm:py-6 flex items-center justify-center relative shadow-[0_-10px_40px_rgba(0,0,0,0.3)] z-30 shrink-0`}>
                <div className="absolute inset-0 opacity-10 bg-hero-pattern mix-blend-overlay"></div>
                <p className="text-white font-black uppercase tracking-wider text-center px-4 sm:px-6 relative z-10 drop-shadow-md leading-tight break-words w-full" style={{ fontSize: '4cqw' }}>
                    "{customMessage}"
                </p>
            </div>

            {/* Disclaimer / Footer */}
            <div className="bg-black py-1 px-2 sm:py-1.5 sm:px-3 flex justify-between items-center text-gray-400 font-medium tracking-wide uppercase shrink-0" style={{ fontSize: '1.51cqw' }}>
                <span>APC - Nasarawa Federal Constituency</span>
                <span>2027 Campaign</span>
            </div>
        </div>
    )
}
