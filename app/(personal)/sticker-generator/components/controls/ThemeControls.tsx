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
    <div className="space-y-6">
      {/* Photo Upload */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black">1</span>
            <label className="text-sm font-black text-slate-800 uppercase tracking-wide">Add Your Photo</label>
          </div>
        </div>
        
        {data.supporterPhoto ? (
          <div className="bg-green-50/50 rounded-2xl border-2 border-green-500/30 p-4 flex items-center gap-4 transition-all duration-300">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-green-500 shadow-md flex-shrink-0">
              <img src={data.supporterPhoto} alt="Cropped preview" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 text-green-700 font-bold text-xs uppercase mb-1 tracking-wider">
                <span className="material-symbols-outlined text-sm font-black">check_circle</span>
                Uploaded & Cropped
              </div>
              <p className="text-[10px] text-gray-400 truncate">Portraits fit circular frames perfectly</p>
              <div className="flex gap-2.5 mt-2">
                {tempPhoto && (
                  <button
                    onClick={() => setIsCropperOpen(true)}
                    className="text-slate-700 hover:text-green-700 text-xs font-bold transition-colors flex items-center gap-1 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-200 px-2 py-1.5 rounded-lg shadow-sm"
                  >
                    <span className="material-symbols-outlined text-xs">crop</span>
                    Adjust
                  </button>
                )}
                <button
                  onClick={triggerFileInput}
                  className="text-slate-700 hover:text-green-700 text-xs font-bold transition-colors flex items-center gap-1 bg-white hover:bg-green-50 border border-gray-200 hover:border-green-200 px-2 py-1.5 rounded-lg shadow-sm"
                >
                  <span className="material-symbols-outlined text-xs">cached</span>
                  Change
                </button>
                <button
                  onClick={handleRemovePhoto}
                  className="text-red-600 hover:text-red-700 text-xs font-bold transition-colors flex items-center gap-1 bg-white hover:bg-red-50 border border-gray-200 hover:border-red-200 px-2 py-1.5 rounded-lg shadow-sm"
                >
                  <span className="material-symbols-outlined text-xs">delete</span>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div 
            onClick={triggerFileInput}
            className="cursor-pointer group flex flex-col items-center justify-center w-full p-4 rounded-xl border-2 border-dashed border-green-300 hover:border-green-500 bg-green-50/30 hover:bg-green-50 transition-all duration-200"
          >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <span className="material-symbols-outlined text-[16px]">add_a_photo</span>
                </div>
                <span className="text-sm font-bold text-green-700">CLICK TO UPLOAD PHOTO</span>
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
        <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Size & Format</label>
        <div className="grid grid-cols-4 gap-2">
          {(['square', 'portrait', 'landscape', 'print'] as AspectRatio[]).map(ratio => (
            <button
              key={ratio}
              onClick={() => onUpdate('aspectRatio', ratio)}
              className={`p-2 rounded-xl border text-xs font-medium flex flex-col items-center justify-center gap-2 transition-all duration-300 ${data.aspectRatio === ratio
                  ? 'border-green-500 bg-green-50 text-green-700 shadow-sm transform -translate-y-0.5'
                  : 'border-gray-200 hover:border-gray-300 text-gray-500 bg-white hover:bg-gray-50'
                }`}
            >
              <span className={`block bg-current rounded-sm ${ratio === 'square' ? 'w-5 h-5' :
                  ratio === 'portrait' ? 'w-4 h-5' :
                      ratio === 'landscape' ? 'w-6 h-3' : 'w-5 h-5'
                }`}></span>
              <span className="text-[10px]">{ratio === 'portrait' ? 'Feed' : ratio.charAt(0).toUpperCase() + ratio.slice(1)}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Color Theme (only for supported templates) */}
      {data.templateId === 'classic' && (
        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Color Theme</label>
          <div className="flex gap-4">
            {['green', 'red', 'blue', 'gold'].map(color => (
              <button
                key={color}
                onClick={() => onUpdate('colorTheme', color)}
                className={`w-10 h-10 rounded-full border-4 transition-all duration-300 relative ${data.colorTheme === color ? 'border-white ring-2 ring-gray-200 shadow-md scale-110' : 'border-transparent hover:scale-105'
                  }`}
                style={{ backgroundColor: color === 'gold' ? '#fbbf24' : color }}
                aria-label={`Select ${color} theme`}
              >
                  {data.colorTheme === color && (
                      <span className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-4 h-4 text-white drop-shadow-md" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
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
