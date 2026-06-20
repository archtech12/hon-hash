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
    <div className="min-h-screen bg-[#0a0a0a] font-sans relative overflow-x-hidden text-white selection:bg-emerald-500/30">
      
      {/* ── CINEMATIC BACKGROUND EFFECTS ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
         {/* Deep ambient glows */}
         <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-900/20 rounded-full blur-[150px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen opacity-50"></div>
         {/* High-end dot grid overlay */}
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Off-screen high-resolution export target */}
      <div className="absolute left-[-9999px] top-[-9999px] pointer-events-none" aria-hidden="true">
        <div className="relative overflow-hidden">
          <StickerPreview ref={exportRef} data={data} isExporting={true} />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* ── HEADER SECTION ── */}
        <header className="mb-16 text-center lg:text-left flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center lg:items-start">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full mb-6 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                     <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                     PRO ENDORSEMENT STUDIO
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 tracking-tighter leading-tight">
                    Design Your <br className="hidden lg:block"/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500">Sticker</span>
                </h1>
                <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-light">
                    Generate an ultra-premium, personalized endorsement card in seconds. Choose a layout, enter your details, and download the high-res graphic.
                </p>
            </div>
            
            {/* Global Stats / Trust Badge */}
            <div className="hidden lg:flex flex-col items-end gap-2 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <span className="text-3xl font-black text-white">2027</span>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">Hon. Hassan Shehu Hussain</span>
                <div className="flex items-center gap-2 mt-2 opacity-50">
                   <span className="w-1 h-1 bg-white rounded-full" />
                   <span className="w-1 h-1 bg-white rounded-full" />
                   <span className="w-1 h-1 bg-white rounded-full" />
                </div>
            </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* ── LEFT: CONTROLS PANEL ── */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-8 pb-32 lg:pb-0">
                
                {/* Step 1: Layout */}
                <section className="bg-white/[0.02] backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/[0.05] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="flex items-center justify-between mb-8">
                       <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                           <div className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 text-xs border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.2)]">1</div> 
                           Architecture
                       </h2>
                       <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Select Base</span>
                    </div>
                    
                    <div className="relative z-10">
                       <LayoutSwitcher currentTemplate={data.templateId} onSelect={(id) => updateField('templateId', id)} />
                    </div>
                </section>

                {/* Step 2: Customization */}
                <section className="bg-white/[0.02] backdrop-blur-2xl p-8 rounded-[2rem] shadow-2xl border border-white/[0.05] relative overflow-hidden group">
                     <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                     <div className="flex items-center justify-between mb-8">
                        <h2 className="text-sm font-bold text-white uppercase tracking-widest flex items-center gap-3">
                           <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 text-xs border border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.2)]">2</div>
                           Personalization
                        </h2>
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">Inject Data</span>
                    </div>
                    
                    <div className="relative z-10 space-y-8">
                        <TextControls data={data} onUpdate={updateField} />
                        
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-8"></div>
                        
                        <div>
                           <h3 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Color Profile</h3>
                           <ThemeControls data={data} onUpdate={updateField} />
                        </div>
                    </div>
                </section>
            </div>

            {/* ── RIGHT: PREVIEW STUDIO ── */}
            <div className="lg:col-span-7 order-1 lg:order-2">
                 <div className="lg:sticky lg:top-8">
                    
                    {/* The Studio Environment */}
                    <div className="bg-[#050505] p-6 md:p-12 rounded-[2.5rem] lg:rounded-[3rem] shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/[0.05] flex flex-col items-center justify-center min-h-[400px] lg:min-h-[700px] relative overflow-hidden group">
                        
                        {/* Floor Reflection / Studio Lights */}
                        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-[200px] bg-emerald-500/10 blur-[80px] rounded-[100%] pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-1000"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none"></div>

                        {/* The Floating Canvas */}
                        <div className="relative w-full max-w-[550px] transition-all duration-700 hover:scale-[1.03] z-10 perspective-1000">
                             {/* Canvas Glow Shadow */}
                             <div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur-xl opacity-50 transition-opacity duration-500"></div>
                             
                             <div className="relative shadow-[0_40px_80px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] rounded-sm overflow-hidden bg-black mx-auto">
                                 <StickerPreview ref={previewRef} data={data} />
                                 {/* Glass Reflection on top of canvas */}
                                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                             </div>
                        </div>

                        {/* Status Bar */}
                        <div className="absolute top-6 left-8 right-8 flex justify-between items-center pointer-events-none">
                            <div className="flex items-center gap-2">
                               <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                               <span className="text-[9px] font-mono text-emerald-400 uppercase tracking-widest">Live Render</span>
                            </div>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{data.aspectRatio.toUpperCase()} • 2160PX</span>
                        </div>

                        {/* Mobile Actions Bar - Fixed to bottom of screen on small devices */}
                        <div className="fixed bottom-0 left-0 right-0 p-4 pb-8 bg-black/80 backdrop-blur-2xl border-t border-white/10 lg:relative lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:p-0 mt-0 lg:mt-16 flex flex-row items-center justify-center gap-4 w-full max-w-full lg:max-w-md z-50 lg:z-10 transition-all">
                            
                            <button
                                onClick={handleDownload}
                                disabled={isDownloading || isSharing || !data.supporterName}
                                className={`
                                    flex-1 relative overflow-hidden group px-4 lg:px-8 py-4 rounded-2xl font-bold text-white transition-all active:scale-95 text-sm lg:text-base border
                                    ${!data.supporterName 
                                        ? 'bg-white/5 border-white/5 text-white/30 cursor-not-allowed' 
                                        : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isDownloading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                            Rendering...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-xl">file_download</span>
                                            High-Res PNG
                                        </>
                                    )}
                                </span>
                            </button>

                            <button
                                onClick={handleShare}
                                disabled={isDownloading || isSharing || !data.supporterName}
                                className={`
                                    flex-1 relative overflow-hidden group px-4 lg:px-8 py-4 rounded-2xl font-bold transition-all active:scale-95 text-sm lg:text-base border
                                    ${!data.supporterName 
                                        ? 'bg-white/5 border-white/5 text-white/30 cursor-not-allowed' 
                                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
                                    }
                                `}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-3">
                                    {isSharing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
                                            Preparing...
                                        </>
                                    ) : (
                                        <>
                                            <span className="material-symbols-outlined text-xl">ios_share</span>
                                            Share Link
                                        </>
                                    )}
                                </span>
                            </button>

                        </div>
                        
                        {!data.supporterName && (
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-2 text-rose-400 bg-rose-500/10 px-4 py-2 rounded-full text-[10px] font-bold border border-rose-500/20 backdrop-blur-sm shadow-[0_0_20px_rgba(244,63,94,0.1)] animate-pulse">
                                <span className="material-symbols-outlined text-sm">lock</span>
                                Data Input Required for Export
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
