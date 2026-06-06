'use client'

import {Header} from '@/components/Header'
import {Timeline, timelineData} from './Timeline'
import Link from 'next/link'
import Image from 'next/image'

interface HomePageProps {
  data: any
}

// ... (Header imports)
// ... (Header imports)
export function HomePage({data}: HomePageProps) {
  // Use data title or default to Hon. HASH
  const {title = 'Hon. Hassan Shehu Hussain (Hon. HASH)'} = data || {}

  return (
    <div className="space-y-20">
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white overflow-hidden pb-32">
        {/* Decorative Elements - Premium Patterns */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-green-500/30 rounded-full blur-[120px] animate-blob"></div>
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] bg-yellow-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-[20%] left-[20%] w-[60%] h-[60%] bg-green-800/40 rounded-full blur-[130px] animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-20 lg:py-32 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 text-center lg:text-left space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 text-sm font-semibold tracking-wide uppercase text-green-100 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Member, House of Representatives
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight drop-shadow-sm">
                Championing <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200">The People's</span> <br/>
                Mandate
              </h1>
              
              <h2 className="text-xl sm:text-2xl font-light text-green-100 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Driving sustainable development in Nasarawa Federal Constituency through <span className="font-semibold text-white">tangible projects</span> and <span className="font-semibold text-white">inclusive representation</span>.
              </h2>

              <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-4">
                <Link
                  href="/projects"
                  className="group bg-white text-green-900 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:bg-green-50 flex items-center gap-3"
                >
                  <span>Explore Projects</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link
                  href="/volunteer"
                  className="group bg-green-800/40 backdrop-blur-sm border border-green-400/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:bg-green-700/50 hover:border-green-400 flex items-center gap-3"
                >
                  <span>Join Movement</span>
                  <span className="material-symbols-outlined text-green-300 group-hover:text-white transition-colors">volunteer_activism</span>
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-center lg:justify-end animate-fade-in-up animation-delay-2000">
               <div className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                  <div className="absolute inset-0 bg-green-500 rounded-full blur-[20px] opacity-20 animate-pulse"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-[10px] border-white/10 shadow-2xl relative">
                    <Image
                      src="/assets/images/gallery/0-Portraits-Official/potraitn.jpg"
                      alt="Hon. Hassan Shehu Hussain"
                      fill
                      className="object-cover scale-110 hover:scale-100 transition-transform duration-1000"
                      sizes="(max-width: 640px) 100vw, 500px"
                      priority
                    />
                  </div>
                  
                  {/* Floating Stats - Glassmorphism */}
                  <div className="absolute top-[15%] -left-[5%] lg:-left-[10%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-blob">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg text-green-700">
                        <span className="material-symbols-outlined">folder_open</span>
                      </div>
                      <div>
                         <div className="font-black text-2xl text-gray-900 leading-none">50</div>
                         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Projects Done</div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-[15%] -right-[5%] lg:-right-[5%] bg-white/90 backdrop-blur-xl border border-white/50 p-4 sm:p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] animate-blob animation-delay-2000">
                     <div className="flex items-center gap-3">
                      <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                        <span className="material-symbols-outlined">groups</span>
                      </div>
                      <div>
                         <div className="font-black text-2xl text-gray-900 leading-none">20,000+</div>
                         <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mt-1">Lives Impacted</div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Latest Initiatives & Offers Section */}
      <section className="py-8 -mt-20 relative z-20 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 border-b border-gray-100 pb-4">
              <div>
                <span className="text-green-600 font-bold uppercase tracking-wider text-sm">Latest Opportunities</span>
                <h2 className="text-3xl font-bold text-gray-900 mt-2">Recent Empowerment Offers</h2>
              </div>
              <Link href="/projects" className="text-green-700 font-semibold hover:text-green-800 flex items-center gap-1 mt-4 md:mt-0">
                View All Opportunities <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1: Recruitment -> Matches emp-8 */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 relative bg-gray-200 overflow-hidden">
                  <Image src="/assets/images/projects/emp-8/offers.jpg" alt="Recruitment Facilitation" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Completed</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Job Recruitment Facilitation</h3>
                  <p className="text-gray-600 text-sm mb-4">Successful facilitation in the recruitment of numerous constituents into various positions across federal and state institutions.</p>
                  <Link href="/projects" className="text-sm font-bold text-green-700 hover:underline">Read More</Link>
                </div>
              </div>
              
              {/* Card 2: Scholarship -> Matches edu-10 (Polytechnic) - Using a scholarship image from edu-8/9 */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 relative bg-gray-200 overflow-hidden">
                  <Image src="/assets/images/projects/edu-9/571428346_24746426055026768_5264726448286573770_n.jpg" alt="Polytechnic Offer" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">Completed</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Kano State Polytechnic Scholarship</h3>
                  <p className="text-gray-600 text-sm mb-4">Sponsored 100 students on full scholarship at Kano State Polytechnic in the 2024/25 academic session.</p>
                  <Link href="/projects" className="text-sm font-bold text-green-700 hover:underline">Read More</Link>
                </div>
              </div>
              
              {/* Card 3: Motorcycles -> Matches emp-3 */}
              <div className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="h-48 relative bg-gray-200 overflow-hidden">
                  <Image src="/assets/images/projects/emp-3/many motors.jpg" alt="Motorcycles" fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Empowerment</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">Motorcycle Empowerment</h3>
                  <p className="text-gray-600 text-sm mb-4">Distribution of around 300 motorcycles to women and youth for mobility and economic empowerment.</p>
                  <Link href="/projects" className="text-sm font-bold text-green-700 hover:underline">Read More</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transforming Communities Gallery */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-green-900">Transforming Communities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Visual proof of our ongoing commitment to infrastructure, healthcare, and education across Nasarawa.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
            {/* Solar/Water */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/projects/elec-4/505854166_3178447675642520_353271535521781115_n.jpg" alt="Solar Infrastructure" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Solar Power</span>
              </div>
            </div>

            {/* Roads - Span 2 cols */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group col-span-2 row-span-2">
              <Image src="/assets/images/projects/road-2/bridges in twada.jpg" alt="Road Construction" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white font-bold text-xl">Road Infrastructure</span>
              </div>
            </div>

            {/* Education */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/projects/edu-3/575178587_3340162012804418_4419926163255643774_n.jpg" alt="Education Support" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Education</span>
              </div>
            </div>

            {/* Empowerment */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
               <Image src="/assets/images/projects/emp-1/many sewing.jpg" alt="Skills Acquisition" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Empowerment</span>
              </div>
            </div>
            
             {/* Agriculture */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group">
              <Image src="/assets/images/projects/emp-6/584489132_3355629987924287_3275329239357496468_n.jpg" alt="Food Security" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Food Security</span>
              </div>
            </div>

             {/* Community */}
            <div className="relative rounded-2xl overflow-hidden shadow-lg group col-span-2 md:col-span-1">
              <Image src="/assets/images/projects/edu-6/CHILDREN ORphan.jpg" alt="Community Building" fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
               <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-white font-bold text-sm">Community Projects</span>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Enhanced Impact Dashboard */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4 text-green-900">Impact In Numbers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Quantifying our commitment to the Nasarawa Federal Constituency through verified data.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500">
              <div className="text-5xl font-black text-gray-900 mb-2">1,200+</div>
              <div className="text-green-600 font-bold uppercase tracking-wide text-sm">Solar Street Lights</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-green-500">
              <div className="text-5xl font-black text-gray-900 mb-2">30+</div>
              <div className="text-green-600 font-bold uppercase tracking-wide text-sm">Boreholes Drilled</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-yellow-500">
              <div className="text-5xl font-black text-gray-900 mb-2">1,127</div>
              <div className="text-yellow-600 font-bold uppercase tracking-wide text-sm">Scholarships Awarded</div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 border-b-4 border-blue-500">
              <div className="text-5xl font-black text-gray-900 mb-2">50</div>
              <div className="text-blue-600 font-bold uppercase tracking-wide text-sm">Unique Projects</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced About Section */}
      <section className="py-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-5/12 relative">
              <div className="absolute top-4 left-4 w-full h-full bg-green-100 rounded-2xl -z-10 transform -rotate-3"></div>
              <div className="rounded-2xl overflow-hidden shadow-2xl relative h-[400px] sm:h-[450px] lg:h-[500px] w-full transform hover:scale-[1.01] transition-transform duration-500">
                <Image
                  src="/assets/images/gallery/0-Portraits-Official/hon-standing-on-speaker-reading-book.jpg"
                  alt="Hon. HASH at the podium"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  unoptimized
                />
              </div>
            </div>
            <div className="lg:w-7/12">
              <h4 className="text-green-600 font-bold uppercase tracking-wider mb-2">Meet Your Representative</h4>
              <h2 className="text-4xl font-black mb-6 text-gray-900 leading-tight">Championing the People's Mandate</h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Hon. Hassan Shehu Hussain (Hon. HASH) is a transformative leader representing Nasarawa Federal Constituency. Now identifying with the All Progressives Congress (APC) to further align his constituency with national development goals, he continues to set the standard for effective representation.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                 From <span className="font-bold text-gray-900">facilitating recruitment</span> into federal and state institutions to distributing hundreds of empowering tools like motorcycles and sewing machines, his tenure is defined by <span className="font-bold text-gray-900">Direct Impact</span> and <span className="font-bold text-gray-900">Transparent Governance</span>.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/about"
                  className="inline-block bg-gray-900 text-white font-bold py-4 px-8 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg"
                >
                  Read Full Biography
                </Link>
                <Link
                  href="/contact"
                  className="inline-block bg-white border-2 border-gray-900 text-gray-900 font-bold py-4 px-8 rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  Contact Constituency Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <Timeline items={timelineData} />

      {/* Sticker Generator CTA */}
      <section className="py-24 bg-[url('/assets/images/projects/road-1/476629181_600759826039972_3454055431456145227_n.jpg')] bg-cover bg-center bg-no-repeat relative bg-fixed">
        <div className="absolute inset-0 bg-green-900/90 mix-blend-multiply"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold px-6 py-2 rounded-full mb-6 animate-pulse">
            Join the Movement
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 uppercase tracking-tight text-white drop-shadow-lg">
            Show Your Support
          </h2>
            {/* Sticker Gen CTA */}
          <p className="text-lg md:text-2xl text-green-100 mb-10 max-w-3xl mx-auto font-medium">
            Generate your personalized campaign sticker today. Be part of the progressive movement reshaping Nasarawa.
          </p>
          <Link
            href="/sticker-generator"
            className="inline-flex items-center gap-3 bg-white text-green-900 px-10 py-5 rounded-full font-black text-xl hover:bg-yellow-400 hover:text-green-900 transition-all hover:scale-105 shadow-2xl"
          >
            <span className="material-symbols-outlined">style</span>
            Create Custom Sticker
          </Link>
        </div>
      </section>
    </div>
  )
}
