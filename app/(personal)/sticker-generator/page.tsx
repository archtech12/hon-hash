'use client'

import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import { useStickerConfig } from './hooks/useStickerConfig'
import { StickerPreview } from './components/StickerPreview'
import { TextControls } from './components/controls/TextControls'
import { ThemeControls } from './components/controls/ThemeControls'
import { LayoutSwitcher } from './components/controls/LayoutSwitcher'

export default function StickerGeneratorPage() {
  const { data, updateField } = useStickerConfig()
  const previewRef = useRef<HTMLDivElement>(null)
  const exportRef = useRef<HTMLDivElement>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [isSharing, setIsSharing] = useState(false)
  const [generatedStickerId, setGeneratedStickerId] = useState<string | null>(null)

  const saveStickerToSupabase = async (base64Data: string): Promise<string | null> => {
    try {
      const response = await fetch('/api/stickers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          supporterName: data.supporterName,
          templateId: data.templateId,
          imageBase64: base64Data
        })
      })
      const result = await response.json()
      if (result.success) {
        setGeneratedStickerId(result.id)
        return result.id
      }
    } catch (e) {
      console.error('Failed to save to Supabase:', e)
    }
    return null
  }

  const trackAction = async (id: string, action: 'download' | 'share') => {
    try {
      await fetch('/api/stickers/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, action })
      })
    } catch (e) {
      console.error('Failed to track action:', e)
    }
  }

  const waitForImages = async (element: HTMLElement) => {
    const images = Array.from(element.getElementsByTagName('img'))
    const promises = images.map((img) => {
      if (img.complete) return Promise.resolve()
      return new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = () => reject(new Error(`Failed to load image: ${img.src}`))
      })
    })
    await Promise.all(promises)
  }

  const handleDownload = async () => {
    if (!exportRef.current) return
    
    setIsDownloading(true)
    try {
        await waitForImages(exportRef.current)
        
        // Scale off-screen container for double-resolution ultra-crisp output (2160px)
        const scale = 2
        const canvas = await html2canvas(exportRef.current, {
            scale: scale,
            backgroundColor: null,
            useCORS: true,
            logging: false,
        })
        
        const image = canvas.toDataURL('image/png', 1.0)
        
        // Save to Supabase
        const stickerId = generatedStickerId || await saveStickerToSupabase(image)
        if (stickerId) {
          trackAction(stickerId, 'download')
        }

        const link = document.createElement('a')
        link.href = image
        link.download = `hon-hash-sticker-${data.templateId}-${Date.now()}.png`
        link.click()
    } catch (e) {
        console.error('Download failed', e)
        alert(e instanceof Error ? `Image failed to load: ${e.message}. Please check your connection or try a different image.` : 'Could not generate sticker. Please try again.')
    } finally {
        setIsDownloading(false)
    }
  }

  const handleShare = async () => {
    if (!exportRef.current) return
    
    setIsSharing(true)
    try {
        await waitForImages(exportRef.current)
        
        const scale = 2
        const canvas = await html2canvas(exportRef.current, {
            scale: scale,
            backgroundColor: null,
            useCORS: true,
            allowTaint: true,
            logging: false, 
        })
        
        canvas.toBlob(async (blob) => {
            if (!blob) {
                alert('Could not generate sticker for sharing.')
                setIsSharing(false)
                return
            }

            // Create a file with a safe name and type
            const file = new File([blob], 'hon-hash-sticker.png', { type: 'image/png' })

            // Convert blob to base64 for Supabase
            const reader = new FileReader()
            reader.onloadend = async () => {
              const base64data = reader.result as string
              const stickerId = generatedStickerId || await saveStickerToSupabase(base64data)
              if (stickerId) {
                trackAction(stickerId, 'share')
              }
            }
            reader.readAsDataURL(blob)

            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                try {
                    await navigator.share({
                        files: [file],
                        title: 'Hon. Hassan Shehu Hussain Sticker',
                        text: 'Created with Hon. HASH Campaign Tool'
                    })
                } catch (err) {
                     if ((err as Error).name !== 'AbortError') {
                        console.error('Share failed', err)
                        alert(`Sharing failed: ${(err as Error).message}. Try downloading instead.`)
                     }
                }
            } else {
                alert('Your browser does not support checking for file sharing support. Attempting anyway...')
                 try {
                    await navigator.share({
                        files: [file],
                        title: 'Hon. Hassan Shehu Hussain Sticker',
                         text: 'Created with Hon. HASH Campaign Tool'
                    })
                } catch (err) {
                     if ((err as Error).name !== 'AbortError') {
                        console.error('Share failed', err)
                        alert(`Sharing failed. Please use the Download button.`)
                     }
                }
            }
            setIsSharing(false)
        }, 'image/png', 1.0)
    } catch (e) {
        console.error('Share generation failed', e)
        alert(e instanceof Error ? `Image failed to load: ${e.message}. Please check your connection or try a different image.` : 'Could not generate sticker. Please try again.')
        setIsSharing(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-x-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3"></div>
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3"></div>
      </div>

      {/* Off-screen high-resolution export target */}
      <div className="absolute left-[-9999px] top-[-9999px] pointer-events-none" aria-hidden="true">
        <div className="relative overflow-hidden">
          <StickerPreview ref={exportRef} data={data} isExporting={true} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 relative z-10">
        <header className="mb-10 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 backdrop-blur-sm border border-green-200 text-green-700 text-xs font-bold rounded-full mb-4 shadow-sm animate-fade-in-up">
                 <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                 OFFICIAL CAMPAIGN TOOL
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
                Create Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">Support Sticker</span>
            </h1>
            <p className="text-slate-500 text-lg max-w-xl mx-auto leading-relaxed">
                Join the movement. Customize your automated endorsement card in seconds and share your support for Hon. HASH.
            </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Controls Panel - Ordered 2nd on mobile, 1st on desktop */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
                
                {/* Step 1: Layout */}
                <section className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 ring-1 ring-gray-100">
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">1</span> 
                        Choose Template
                    </h2>
                    <LayoutSwitcher currentTemplate={data.templateId} onSelect={(id) => updateField('templateId', id)} />
                </section>

                {/* Step 2: Customization */}
                <section className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/50 ring-1 ring-gray-100">
                     <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 flex items-center gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-900 text-white text-xs">2</span>
                        Personalize
                    </h2>
                    <TextControls data={data} onUpdate={updateField} />
                    <div className="my-8 border-t border-dashed border-gray-200"></div>
                    <ThemeControls data={data} onUpdate={updateField} />
                </section>
            </div>

            {/* Right: Preview Panel - Ordered 1st on mobile, 2nd on desktop */}
            <div className="lg:col-span-7 order-1 lg:order-2 mb-20 lg:mb-0">
                 <div className="lg:sticky lg:top-6">
                    <div className="bg-slate-900 text-white p-6 md:p-10 rounded-[2rem] lg:rounded-[2.5rem] shadow-2xl flex flex-col items-center justify-center min-h-[350px] lg:min-h-[600px] relative overflow-hidden ring-4 lg:ring-8 ring-slate-900/5">
                        
                        {/* Background for preview container */}
                        <div className="absolute inset-0 bg-slate-800/10 z-0"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gradient-to-tr from-green-500/20 to-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative w-full max-w-[500px] transition-transform duration-500 hover:scale-[1.02] z-10">
                             <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-blue-600 rounded-[2rem] blur-xl opacity-30 animate-pulse"></div>
                            <div className="relative shadow-2xl rounded-sm overflow-hidden ring-4 ring-white/10 mx-auto">
                                <StickerPreview ref={previewRef} data={data} />
                            </div>
                        </div>

                        {/* Actions Bar - Sticky on mobile, normal on desktop */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-xl border-t border-slate-200 lg:relative lg:bg-transparent lg:border-none lg:p-0 mt-0 lg:mt-10 flex flex-row items-center justify-center gap-3 lg:gap-4 w-full max-w-full lg:max-w-md z-50 lg:z-10 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] lg:shadow-none">
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading || isSharing || !data.supporterName}
                                className={`
                                    flex-1 relative overflow-hidden group px-4 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-white shadow-lg transition-all active:scale-95 text-sm lg:text-base
                                    ${!data.supporterName 
                                        ? 'bg-slate-300 lg:bg-gray-800 text-slate-500 cursor-not-allowed shadow-none' 
                                        : 'bg-green-600 hover:bg-green-500 hover:shadow-green-500/25'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isDownloading ? (
                                        <>
                                            <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-lg lg:text-xl">download</span>
                                            Download
                                        </>
                                    )}
                                </span>
                            </button>

                            <button
                                onClick={handleShare}
                                disabled={isDownloading || isSharing || !data.supporterName}
                                className={`
                                    flex-1 relative overflow-hidden group px-4 lg:px-8 py-3 lg:py-4 rounded-xl font-bold text-white shadow-lg transition-all active:scale-95 text-sm lg:text-base
                                    ${!data.supporterName 
                                        ? 'bg-slate-300 lg:bg-gray-800 text-slate-500 cursor-not-allowed shadow-none' 
                                        : 'bg-slate-800 hover:bg-slate-700'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    {isSharing ? (
                                        <>
                                            <div className="w-4 h-4 lg:w-5 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            Sharing...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-lg lg:text-xl">share</span>
                                            Share
                                        </>
                                    )}
                                </span>
                            </button>
                        </div>
                        
                        {!data.supporterName && (
                            <div className="mt-6 hidden lg:flex items-center gap-2 text-red-300 bg-red-900/30 px-4 py-2 rounded-full text-xs font-bold border border-red-500/30 animate-pulse">
                                <span className="material-symbols-outlined">info</span>
                                Please enter your name to unlock download
                            </div>
                        )}
                    </div>
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}
