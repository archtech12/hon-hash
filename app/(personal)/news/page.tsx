'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { news as staticNews } from '@/lib/news' // Using local data fallback

interface NewsItem {
  _id: string
  title: string
  content: string
  category: string
  imageUrl?: string
  publishDate: string
}

// ... (imports same)
export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('/api/news', { cache: 'no-store' })
        const data = await response.json()
        const fetchedNews = data.data || data || []
        
        if (fetchedNews.length > 0) {
          setNews(fetchedNews)
        } else {
          setNews(staticNews as any)
        }
      } catch (error) {
        console.error('Error fetching news:', error)
        setNews(staticNews as any)
      } finally {
        setLoading(false)
      }
    }
    
    fetchNews()
  }, [])

  const getCategoryColor = (category: string) => {
    const colors: {[key: string]: string} = {
      'Community Engagement': 'bg-red-100 text-red-800',
      'Political': 'bg-blue-100 text-blue-800',
      'Social Welfare': 'bg-purple-100 text-purple-800',
      'Infrastructure': 'bg-orange-100 text-orange-800',
      'Education': 'bg-pink-100 text-pink-800',
    }
    return colors[category] || 'bg-gray-100 text-gray-800'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})
  }

  return (
    <div className="w-full">
      {/* Hero Section - Premium */}
      <div className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden pb-12">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-green-500/20 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute bottom-[0%] right-[0%] w-[40%] h-[40%] bg-yellow-500/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10 text-center animate-fade-in-up">
          <div className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide uppercase text-green-100 shadow-lg">
             <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block mr-2"></span>
             Media Center
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-sm leading-tight">
             Latest News & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-300">Updates</span>
          </h1>
          <p className="text-lg md:text-xl text-green-100 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Stay informed about the latest developments, initiatives, and community updates from Hon. Hassan Shehu Hussain's office.
          </p>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {loading ? (
             <div className="text-center py-12">
               <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-green-700"></div>
               <p className="mt-4 text-gray-600">Loading news...</p>
             </div>
           ) : news.length === 0 ? (
             <div className="text-center py-12">
               <span className="material-symbols-outlined text-6xl text-gray-400 mb-4">article</span>
               <p className="text-gray-600">No news articles available yet.</p>
             </div>
           ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {news.map((article) => (
                 <div
                   key={article._id}
                   className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 flex flex-col transform hover:-translate-y-2"
                 >
                   <div className="h-56 overflow-hidden bg-gray-200 relative group-hover:shadow-inner">
                     {article.imageUrl ? (
                       <Image
                         src={article.imageUrl}
                         alt={article.title}
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       />
                     ) : (
                       <div className="h-full flex items-center justify-center bg-green-50">
                         <span className="material-symbols-outlined text-6xl text-green-200">
                           article
                         </span>
                       </div>
                     )}
                     <div className="absolute top-4 left-4 z-10">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-sm backdrop-blur-md ${getCategoryColor(article.category)}`}>
                             {article.category}
                        </span>
                     </div>
                   </div>
                   <div className="p-6 flex flex-col flex-grow">
                     <div className="flex items-center gap-2 mb-3 text-xs font-medium text-gray-400 uppercase tracking-widest">
                       <span className="material-symbols-outlined text-[16px] text-green-600">calendar_today</span>
                       {formatDate(article.publishDate)}
                     </div>
                     
                     <h3 className="text-xl font-bold mb-3 text-gray-900 leading-tight group-hover:text-green-700 transition-colors line-clamp-2">
                       {article.title}
                     </h3>
                     
                     <div
                       className="text-gray-600 mb-4 line-clamp-3 text-sm flex-grow"
                       dangerouslySetInnerHTML={{__html: article.content}}
                     />
                     
                     <div className="pt-4 mt-auto border-t border-gray-100">
                         <Link
                           href={`/news/${article._id}`}
                           className="inline-flex items-center text-green-700 font-bold hover:text-green-800 transition-colors group-hover:underline"
                         >
                           Read More <span className="material-symbols-outlined ml-1 text-sm font-bold">arrow_forward</span>
                         </Link>
                     </div>
                   </div>
                 </div>
               ))}
             </div>
           )}

          {/* Featured Videos Section */}
          <div className="mt-24">
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
                  WATCH NOW
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                  Featured Videos
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                   Watch highlights and coverage of Hon. HASH's work and political journey
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Video 1 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group-hover:shadow-inner">
                   <video 
                     src="/assets/videos/hash.mp4" 
                     controls 
                     preload="metadata"
                     className="w-full h-full object-cover"
                     poster="/assets/images/gallery/0-Portraits-Official/potraitn.jpg"
                   />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center text-green-600 font-bold uppercase tracking-wider text-xs">
                        <span className="material-symbols-outlined text-lg mr-2">smart_display</span>
                        Campaign Message
                    </span>
                    <span className="font-semibold bg-gray-100 px-2 py-0.5 rounded text-xs">1:29</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                     A Message from Hon. HASH
                  </h3>
                </div>
              </div>

              {/* Video 2 */}
              <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] transition-all duration-500 border border-gray-100 transform hover:-translate-y-2">
                <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group-hover:shadow-inner">
                   <video 
                     src="/assets/videos/toapc.mp4" 
                     controls
                     preload="metadata" 
                     className="w-full h-full object-cover"
                   />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span className="flex items-center text-green-600 font-bold uppercase tracking-wider text-xs">
                        <span className="material-symbols-outlined text-lg mr-2">smart_display</span>
                        Campaign Trail
                    </span>
                    <span className="font-semibold bg-gray-100 px-2 py-0.5 rounded text-xs">1:49</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-green-700 transition-colors">
                     Campaign Trail & APC Support
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-3 py-2 rounded-md bg-green-700 text-white cursor-default">
                1
              </button>
              <button
                className="px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                2
              </button>
              <button
                className="px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                3
              </button>
              <button
                className="px-3 py-2 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </nav>
          </div>
        </div>
      </section>
    </div>
  )
}
