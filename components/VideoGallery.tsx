'use client'

import { useState } from 'react'

export function VideoGallery() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const videos = [
    {
      id: 'hash',
      title: 'A Message from Hon. HASH',
      src: '/assets/videos/hash.mp4',
      thumbnailText: 'Hon. HASH Message',
      duration: '1:29'
    },
    {
      id: 'toapc',
      title: 'Campaign Trail & APC Support',
      src: '/assets/videos/toapc.mp4',
      thumbnailText: 'APC Support',
      duration: '1:49'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-green-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Featured Videos
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight drop-shadow-lg">
            Voices of the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-200">Movement</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg font-light">
            Watch our latest campaign messages and community engagement moments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Main Video Player */}
          <div className="bg-black/40 rounded-3xl p-3 md:p-4 border border-white/10 shadow-2xl backdrop-blur-sm">
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-inner group">
              {activeVideo ? (
                <video 
                  src={activeVideo}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer group-hover:scale-105 transition-transform duration-700"
                  onClick={() => setActiveVideo(videos[0].src)}
                >
                  {/* Default Placeholder styling since we don't have exact poster images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-900/80 to-gray-900/90 z-10"></div>
                  <div className="relative z-20 flex flex-col items-center">
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-500/40 transition-colors">
                      <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.5)]">
                        <span className="material-symbols-outlined text-4xl ml-2">play_arrow</span>
                      </div>
                    </div>
                    <p className="text-white font-bold tracking-widest uppercase text-sm">Play Featured Video</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Video Playlist */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-bold mb-2 flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="material-symbols-outlined text-green-400">queue_music</span>
              Up Next
            </h3>
            
            <div className="space-y-4 pr-2 max-h-[400px] overflow-y-auto custom-scrollbar">
              {videos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => setActiveVideo(video.src)}
                  className={`flex flex-col sm:flex-row gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-300 border ${activeVideo === video.src ? 'bg-white/10 border-green-400/30 shadow-[0_0_20px_rgba(34,197,94,0.1)]' : 'bg-black/20 border-transparent hover:bg-white/5 hover:border-white/10'}`}
                >
                  {/* Thumbnail Placeholder */}
                  <div className="relative w-full sm:w-32 h-32 sm:h-24 bg-gray-800 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/5">
                    <div className="absolute inset-0 bg-gradient-to-tr from-green-900/50 to-transparent"></div>
                    <span className="material-symbols-outlined text-3xl text-gray-400 group-hover:text-green-400 z-10">smart_display</span>
                    <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[10px] font-bold tracking-wider z-10">
                      {video.duration}
                    </div>
                  </div>
                  
                  {/* Video Info */}
                  <div className="flex flex-col justify-center flex-1">
                    <h4 className={`font-bold text-lg leading-tight mb-2 ${activeVideo === video.src ? 'text-green-400' : 'text-gray-100'}`}>
                      {video.title}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {video.thumbnailText}
                    </p>
                  </div>

                  {/* Playing Indicator */}
                  {activeVideo === video.src && (
                    <div className="hidden sm:flex items-center justify-center px-4">
                      <div className="flex gap-1 items-end h-4">
                        <div className="w-1 bg-green-400 animate-[bounce_1s_infinite] h-full"></div>
                        <div className="w-1 bg-green-400 animate-[bounce_1s_infinite_0.2s] h-3/4"></div>
                        <div className="w-1 bg-green-400 animate-[bounce_1s_infinite_0.4s] h-full"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
