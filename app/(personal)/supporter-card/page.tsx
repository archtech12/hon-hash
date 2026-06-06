'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import html2canvas from 'html2canvas'
import Link from 'next/link'

// Configuration
const OFFICIAL_PHOTO_PATH = '/assets/images/gallery/0-Portraits-Official/potraitn.jpg'
const PARTY_LOGO_PATH = '/assets/images/gallery/apc logo.jpg'

export default function SupporterCardPage() {
  const [supporterName, setSupporterName] = useState('')
  const [ward, setWard] = useState('')
  const [message, setMessage] = useState('')
  const [supporterImage, setSupporterImage] = useState<string | null>(null)
  const [isDownloading, setIsDownloading] = useState(false)
  const [mounted, setMounted] = useState(false)
  
  const canvasRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSupporterImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDownload = async () => {
    if (!canvasRef.current) return
    
    setIsDownloading(true)
    try {
      // Small delay to ensure rendering matches
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const canvas = await html2canvas(canvasRef.current, {
        scale: 3, // High quality for social media
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
      })
      
      // Create filename based on supporter name
      const safeName = supporterName.replace(/[^a-z0-9]/gi, '_').toLowerCase() || 'supporter'
      const link = document.createElement('a')
      link.download = `I-Stand-With-Hash-${safeName}.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    } catch (err) {
      console.error('Download failed:', err)
      alert('Failed to generate image. Please try again.')
    } finally {
      setIsDownloading(false)
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
            <Link href="/" className="inline-block mb-4">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Return Home</span>
            </Link>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">Create Your Support Card</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
                Stand with Hon. Hassan Shehu Hussain. Upload your photo, add your message, and share your support with the world.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Input Section */}
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center border-b pb-4">
                    <span className="material-symbols-outlined mr-2 text-green-600">edit_square</span>
                    Enter Details
                </h3>

                {/* Supporter Photo */}
                <div className="mb-6">
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Photo</label>
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 rounded-full bg-gray-100 overflow-hidden border-2 border-dashed border-gray-300 flex-shrink-0">
                            {supporterImage ? (
                                <img src={supporterImage} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                            )}
                        </div>
                        <input 
                            type="file" 
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="block w-full text-sm text-gray-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-green-50 file:text-green-700
                                hover:file:bg-green-100 cursor-pointer"
                        />
                    </div>
                </div>

                {/* Name & Ward */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            placeholder="e.g. Musa Ibrahim"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                            value={supporterName}
                            onChange={(e) => setSupporterName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Your Ward</label>
                        <input
                            type="text"
                            placeholder="e.g. Tudun Wada"
                            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none"
                            value={ward}
                            onChange={(e) => setWard(e.target.value)}
                        />
                    </div>
                </div>

                {/* Message */}
                <div className="mb-8">
                    <label className="block text-sm font-bold text-gray-700 mb-1">Your Message</label>
                    <textarea
                        rows={3}
                        maxLength={200}
                        className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all outline-none resize-none"
                        placeholder="I proudly support Hon. Hash for his dedication to..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="flex justify-between mt-1">
                        <span className="text-xs text-gray-400">Keep it short and punchy!</span>
                        <span className={`text-xs font-bold ${message.length > 180 ? 'text-red-500' : 'text-gray-400'}`}>
                            {message.length}/200
                        </span>
                    </div>
                </div>

                {/* Download Button */}
                <button
                    onClick={handleDownload}
                    disabled={isDownloading || !supporterImage || !supporterName}
                    className={`w-full py-4 rounded-xl font-bold text-white shadow-xl flex items-center justify-center transition-all transform hover:-translate-y-1 ${
                        isDownloading || !supporterImage || !supporterName
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-gradient-to-r from-green-600 to-green-800 hover:shadow-green-500/40'
                    }`}
                >
                    {isDownloading ? (
                        <>
                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                            Generating Card...
                        </>
                    ) : (
                        <>
                            <span className="material-symbols-outlined mr-2">download</span>
                            Download Image
                        </>
                    )}
                </button>
                {!supporterImage && <p className="text-center text-red-500 text-xs mt-2 font-medium">Please upload a photo first</p>}
            </div>
          </div>

          {/* Preview Section */}
          <div className="lg:col-span-7 flex flex-col items-center order-1 lg:order-2">
            <div className="sticky top-8">
                <h3 className="text-center text-gray-400 font-medium mb-4 text-sm uppercase tracking-widest">Live Preview</h3>
                
                {/* CANVAS AREA START */}
                <div 
                    ref={canvasRef} 
                    className="relative bg-white shadow-2xl overflow-hidden mx-auto"
                    style={{ 
                        width: '500px', // Fixed width for consistent generation
                        height: '625px', // 4:5 Aspect Ratio
                    }}
                >
                    {/* TOP SECTION: Hon. Hash (60% Height) */}
                    <div className="h-[58%] relative overflow-hidden bg-gray-900 group">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-10"></div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-[80px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>
                        
                        {/* Hon. Image */}
                        <img 
                            src={OFFICIAL_PHOTO_PATH} 
                            alt="Hon. Hassan" 
                            className="w-full h-full object-cover object-top"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-transparent to-transparent opacity-90"></div>

                        {/* Hon. Name Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 text-white z-20">
                            <div className="inline-block bg-yellow-500 text-black text-[10px] font-black px-2 py-0.5 rounded mb-1 uppercase tracking-wider">
                                Rep. Nasarawa Constituency
                            </div>
                            <h2 className="text-3xl font-black leading-none drop-shadow-lg">
                                Hon. Hassan <br/> Shehu Hussain
                            </h2>
                            <p className="text-green-300 text-sm font-bold tracking-wide mt-1 opacity-90">Member, House of Representatives</p>
                        </div>
                    </div>

                    {/* GREEN SEPARATOR */}
                    <div className="h-2 bg-gradient-to-r from-green-500 via-yellow-400 to-green-500"></div>

                    {/* BOTTOM SECTION: Supporter (40% Height) */}
                    <div className="h-[42%] bg-white p-6 relative flex flex-col justify-between">
                        {/* Watermark/Texture */}
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clean-gray-paper.png')] opacity-20 z-0"></div>
                        
                        <div className="flex gap-5 relative z-10 items-start h-full">
                            {/* Supporter Image */}
                            <div className="flex-shrink-0 relative">
                                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-gray-200">
                                    {supporterImage ? (
                                        <img src={supporterImage} alt="Me" className="w-full h-full object-cover" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-300">
                                            <span className="material-symbols-outlined text-4xl">person</span>
                                        </div>
                                    )}
                                </div>
                                {/* APC Logo Badge */}
                                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full p-1 shadow-md z-10">
                                    <img src={PARTY_LOGO_PATH} alt="APC" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            {/* Supporter Text */}
                            <div className="flex-1 flex flex-col h-full pt-1">
                                <div className="flex-grow">
                                    <div className="relative bg-green-50 rounded-tl-none rounded-2xl p-4 text-gray-700 text-sm italic leading-relaxed border border-green-100 shadow-sm mb-3">
                                        <span className="absolute -top-2 left-0 text-green-300 text-4xl leading-none font-serif opacity-50">"</span>
                                        {message || "I proudly endorse Hon. Hash for his relentless service to our community."}
                                        <div className="absolute top-3 -left-2 w-4 h-4 bg-green-50 transform rotate-45 border-b border-l border-green-100"></div>
                                    </div>
                                </div>
                                
                                <div className="mt-auto">
                                    <h3 className="font-black text-gray-900 text-lg leading-tight uppercase">
                                        {supporterName || "Supporter Name"}
                                    </h3>
                                    <p className="text-green-600 font-bold text-xs uppercase tracking-wider mb-3">
                                        {ward ? `${ward} Ward` : "Nasarawa Constituency"}
                                    </p>
                                    
                                    {/* Hashtags Footer */}
                                    <div className="border-t border-gray-100 pt-3 flex flex-wrap gap-2">
                                        <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-1 rounded">#INGANTACCENWAKILCI</span>
                                        <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-1 rounded">#2YearsOfImpact</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CANVAS AREA END */}
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">Preview is scaled down. Download for full 1500x1875 resolution.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
