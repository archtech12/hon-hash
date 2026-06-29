import { useState, useRef } from 'react'
import { StickerData, AspectRatio } from '../../types'
import PhotoCropper from '../PhotoCropper'
import { getCroppedImg } from '../../utils/cropImage'
import type { Area } from 'react-easy-crop'

interface ThemeControlsProps {
  data: StickerData
  onUpdate: (field: keyof StickerData, value: any) => void
}

export const ThemeControls = ({ data, onUpdate }: ThemeControlsProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [isCropperOpen, setIsCropperOpen] = useState(false)
  const [tempPhoto, setTempPhoto] = useState<string | null>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        const result = ev.target?.result as string
        setTempPhoto(result)
        setCrop({ x: 0, y: 0 })
        setZoom(1)
        setIsCropperOpen(true)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleCropComplete = (croppedArea: Area, croppedAreaPixels: Area) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }

  const handleCropDone = async () => {
    if (tempPhoto && croppedAreaPixels) {
      try {
        const croppedImage = await getCroppedImg(tempPhoto, croppedAreaPixels)
        onUpdate('supporterPhoto', croppedImage)
        setIsCropperOpen(false)
      } catch (e) {
        console.error('Error cropping image:', e)
        alert('Failed to crop image. Please check your file and try again.')
      }
    }
  }

  const handleRemovePhoto = () => {
    onUpdate('supporterPhoto', null)
    setTempPhoto(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const triggerFileInput = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="space-y-8">
      {/* Photo Upload */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <span className="bg-brand-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black shadow-glass-glow">1</span>
            <label className="text-xs sm:text-sm font-black text-white uppercase tracking-widest">Add Your Photo</label>
          </div>
        </div>
        
        {data.supporterPhoto ? (
          <div className="bg-brand-900/30 rounded-2xl border-2 border-brand-500/50 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-300 shadow-glass">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-brand-400 shadow-lg flex-shrink-0 bg-black/50">
              <img src={data.supporterPhoto} alt="Cropped preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0 w-full">
              <div className="flex items-center gap-2 text-brand-400 font-black text-[11px] sm:text-xs uppercase mb-1.5 tracking-widest">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Image Ready
              </div>
              <p className="text-[10px] sm:text-[11px] text-gray-400 font-medium truncate mb-3">Perfectly sized for high-res output.</p>
              <div className="flex flex-wrap gap-2">
                {tempPhoto && (
                  <button
                    onClick={() => setIsCropperOpen(true)}
                    className="flex-1 min-w-[70px] text-white hover:text-brand-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95"
                  >
                    <span className="material-symbols-outlined text-[14px]">crop</span>
                    Adjust
                  </button>
                )}
                <button
                  onClick={triggerFileInput}
                  className="flex-1 min-w-[70px] text-white hover:text-brand-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95"
                >
                  <span className="material-symbols-outlined text-[14px]">cached</span>
                  Change
                </button>
                <button
                  onClick={handleRemovePhoto}
                  className="flex-1 min-w-[70px] text-rose-400 hover:text-rose-300 text-[10px] sm:text-xs font-bold transition-all flex items-center justify-center gap-1.5 bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 px-3 py-2.5 rounded-xl touch-manipulation active:scale-95"
                >
                  <span className="material-symbols-outlined text-[14px]">delete</span>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div 
            onClick={triggerFileInput}
            className="cursor-pointer group flex flex-col items-center justify-center w-full p-6 sm:p-8 rounded-[1.5rem] border-2 border-dashed border-brand-500/50 hover:border-brand-400 bg-brand-500/5 hover:bg-brand-500/10 transition-all duration-300 active:scale-95 touch-manipulation min-h-[140px]"
          >
            <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400 shadow-glass-glow group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-[24px]">add_a_photo</span>
                </div>
                <span className="text-xs sm:text-sm font-black text-brand-300 uppercase tracking-widest text-center">Tap to Upload Photo</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 font-bold uppercase tracking-wider text-center">High Quality Recommended</span>
            </div>
          </div>
        )}
        
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept="image/*" 
          onChange={handlePhotoUpload} 
          onClick={(e) => {
            (e.target as HTMLInputElement).value = '';
          }}
        />

        {tempPhoto && (
          <PhotoCropper
            isOpen={isCropperOpen}
            image={tempPhoto}
            crop={crop}
            zoom={zoom}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            onCropComplete={handleCropComplete}
            onClose={() => setIsCropperOpen(false)}
            onDone={handleCropDone}
          />
        )}
      </div>

      {/* Aspect Ratio */}
      <div>
        <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3">Format</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {(['square', 'portrait', 'landscape', 'print'] as AspectRatio[]).map(ratio => (
            <button
              key={ratio}
              onClick={() => onUpdate('aspectRatio', ratio)}
              className={`p-3 rounded-xl border text-xs font-black flex flex-col items-center justify-center gap-2 transition-all duration-300 touch-manipulation min-h-[64px] active:scale-95 ${data.aspectRatio === ratio
                  ? 'border-brand-500 bg-brand-500/20 text-brand-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                  : 'border-white/10 hover:border-white/20 text-gray-400 bg-white/5'
                }`}
            >
              <span className={`block bg-current rounded-sm ${ratio === 'square' ? 'w-5 h-5' :
                  ratio === 'portrait' ? 'w-4 h-5' :
                      ratio === 'landscape' ? 'w-6 h-4' : 'w-5 h-5'
                }`}></span>
              <span className="text-[10px] uppercase tracking-wider">{ratio === 'portrait' ? 'Vertical' : ratio}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Color Theme (only for supported templates) */}
      {data.templateId === 'classic' && (
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
          <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-4">Aesthetic Theme</label>
          <div className="flex gap-4">
            {['green', 'red', 'blue', 'gold'].map(color => (
              <button
                key={color}
                onClick={() => onUpdate('colorTheme', color)}
                className={`w-12 h-12 rounded-full border-[3px] transition-all duration-300 relative touch-manipulation active:scale-95 ${data.colorTheme === color ? 'border-white ring-4 ring-white/20 shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-110' : 'border-transparent hover:scale-105'
                  }`}
                style={{ backgroundColor: color === 'gold' ? '#fbbf24' : color }}
                aria-label={`Select ${color} theme`}
              >
                  {data.colorTheme === color && (
                      <span className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-5 h-5 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                          </svg>
                      </span>
                  )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
