import { StickerData } from '../../types'

export const CandidatePortrait = ({ className = '', src }: { className?: string, src?: string }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        src={src || "/assets/images/gallery/0-Portraits-Official/potraitn.jpg"}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/assets/images/default-candidate-avatar.png";
        }}
        alt="Hon. Hassan Shehu Hussain"
        crossOrigin="anonymous"
        className="w-full h-full object-cover object-top"
      />
      {/* Subtle inner shadow for depth */}
      <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[inherit] pointer-events-none" />
    </div>
  )
}
