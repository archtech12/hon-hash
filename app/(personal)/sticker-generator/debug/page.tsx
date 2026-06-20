'use client'

import { useState, useRef } from 'react'
import html2canvas from 'html2canvas'
import { StickerPreview } from '../components/StickerPreview'
import { TemplateId, AspectRatio, StickerData } from '../types'

const TEMPLATES: TemplateId[] = [
  'classic', 'modern', 'youth', 'print', 'minimal', 'badge', 'type', 'geometric',
  'classicV2', 'badgeV2', 'geometricV2', 'classicPremium', 'modernPremium', 'printPremium', 'badgePremium'
]

const ASPECT_RATIOS: AspectRatio[] = ['square', 'portrait', 'landscape', 'print']
const THEMES: ('green' | 'red' | 'blue' | 'gold')[] = ['green', 'red', 'blue', 'gold']

export default function DebugStickers() {
  const [photo, setPhoto] = useState<string | null>('/my-photo.jpg')
  const [name, setName] = useState('Nazifi Ibrahim Saad')
  const [message, setMessage] = useState('Vote for Progress!')
  const [selectedTheme, setSelectedTheme] = useState<'green' | 'red' | 'blue' | 'gold'>('green')

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhoto(url)
    }
  }

  const handleDownloadSheet = async (elementId: string, templateName: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    try {
      // Ensure images are loaded before capture (basic wait)
      await new Promise(resolve => setTimeout(resolve, 500))
      
      const canvas = await html2canvas(element, {
        scale: 2,
        backgroundColor: '#09152b', // Match page background
        useCORS: true,
        logging: false,
      })
      
      const image = canvas.toDataURL('image/png', 1.0)
      const link = document.createElement('a')
      link.href = image
      link.download = `debug-sheet-${templateName}-${Date.now()}.png`
      link.click()
    } catch (e) {
      console.error('Download failed', e)
      alert('Failed to generate sheet. Check console.')
    }
  }

  return (
    <div className="min-h-screen bg-[#09152b] text-white p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto mb-12 space-y-4">
        <h1 className="text-4xl font-bold text-white mb-2">Sticker Template Debugger</h1>
        <p className="text-gray-300">View all templates and layouts at once to see which ones need updating.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-xl mt-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="w-full bg-black/30 rounded-xl px-4 py-3 text-white border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">Message</label>
            <input 
              type="text" 
              value={message} 
              onChange={e => setMessage(e.target.value)}
              className="w-full bg-black/30 rounded-xl px-4 py-3 text-white border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">Photo Upload</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={handlePhotoUpload}
              className="w-full bg-black/30 rounded-xl px-4 py-2.5 text-white border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-300">Global Theme</label>
            <select 
              value={selectedTheme} 
              onChange={e => setSelectedTheme(e.target.value as any)}
              className="w-full bg-black/30 rounded-xl px-4 py-3 text-white border border-white/10 focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all outline-none appearance-none"
            >
              {THEMES.map(t => <option key={t} value={t} className="bg-gray-900">{t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="max-w-full px-4 space-y-32 pb-32">
        {TEMPLATES.map(template => (
          <div key={template} id={`sheet-${template}`} className="pt-16 border-t border-white/10 relative">
            <div className="mb-12 text-center relative">
              <h2 className="text-3xl font-extrabold capitalize bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent inline-block">
                {template} Template
              </h2>
              <button 
                onClick={() => handleDownloadSheet(`sheet-${template}`, template)}
                className="absolute right-0 top-0 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-sm">download</span>
                Download Sheet
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12 items-start justify-items-center">
              {ASPECT_RATIOS.map(ratio => {
                const data: StickerData = {
                  supporterName: name,
                  supporterPhoto: photo,
                  customMessage: message,
                  templateId: template,
                  aspectRatio: ratio,
                  showWatermark: true,
                  colorTheme: selectedTheme
                }

                return (
                  <div key={ratio} className="flex flex-col gap-4 w-full max-w-[220px] mx-auto group">
                    <div className="flex items-center justify-between px-2">
                      <h3 className="text-sm text-gray-400 font-bold uppercase tracking-widest">{ratio}</h3>
                      <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-300">
                        {template}
                      </span>
                    </div>
                    
                    <div className="w-full overflow-hidden rounded-2xl bg-neutral-900 border-2 border-white/5 group-hover:border-white/20 transition-all duration-300 shadow-2xl group-hover:shadow-green-500/10">
                      <StickerPreview data={data} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
