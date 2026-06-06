'use client'

import Link from 'next/link'
import Image from 'next/image'

interface AboutData {
  title: string
  content: string
}

export default function AboutPage() {
  const aboutData = {
    title: 'About Hon. Hassan Shehu Hussain',
    content: `<p>Hon. Hassan Shehu Hussain (popularly known as Hon. HASH) is the Member representing Nasarawa Federal Constituency in the House of Representatives under the platform of the All Progressives Congress (APC).</p>
            <p>A committed leader and grassroots politician, Hon. HASH has dedicated his tenure to transforming lives through impactful projects in Infrastructure, Education, Health, and Empowerment. His vision is built on the principles of service to humanity and participatory governance.</p>
            <p>Since his inauguration, he has spearheaded numerous development initiatives across the 11 wards of Nasarawa Federal Constituency, including Gama, Kaura Goje, Hotoron Kudu, Hotoron Arewa, Tudun Murtala, Kawaji, Gawuna, Tudun Wada, Gwagwarwa, and Dakata.</p>`,
  }

  return (
    <div className="w-full">
      <section className="bg-green-900/90 dark:bg-green-900/95 py-12 sm:py-16 text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter">
            {aboutData.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-green-100">
            Dedicated advocate for community development and participatory leadership
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 mb-12">
                <p>
                  <strong>Hon. Hassan Shehu Hussain (Hon. HASH)</strong> serves as the distinguished Member representing Nasarawa Federal Constituency in the House of Representatives. Elected under the banner of the All Progressives Congress (APC), he has emerged as a transformative figure in Nigerian legislative politics.
                </p>
                <p>
                  With a tenure defined by tangible results, Hon. HASH has prioritized a <span className="italic">"Development First"</span> agenda. His strategic focus encompasses modernizing infrastructure, revitalizing local healthcare systems, and expanding educational access. He believes that true representation goes beyond lawmaking—it requires active, on-the-ground partnership with the people.
                </p>
                <p>
                  Since assuming office, he has successfully deployed critical interventions across all 11 wards of the constituency—from Gama to Dakata. His administration is marked by a data-driven approach to solving community challenges, ensuring that every project, whether a new road or a scholarship scheme, delivers maximum social impact.
                </p>
              </div>

              <div className="border-l-4 border-green-600 pl-6 space-y-10">
                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-green-600"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Member, House of Representatives
                  </h3>
                  <span className="text-green-700 font-bold text-sm block mb-2">
                    2023 - Present
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Representing Nasarawa Federal Constituency under the All Progressives Congress
                    (APC).
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-gray-300"></div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Foundational Leadership & Community Service
                  </h3>
                  <span className="text-gray-500 font-bold text-sm block mb-2">
                    Pre-2023
                  </span>
                  <p className="text-gray-600 dark:text-gray-400">
                    Established a strong legacy of community advocacy, mobilizing grassroots support for developmental initiatives. Championed tailored welfare programs and bridged the gap between government resources and the constituency's most vulnerable populations.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                Core Values
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Integrity in all actions and decisions</li>
                <li>Transparency in governance and operations</li>
                <li>Accountability to constituents and stakeholders</li>
                <li>Equity in resource distribution and opportunity creation</li>
                <li>Sustainability in development initiatives</li>
                <li>Community empowerment through participatory leadership</li>
              </ul>
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sticky top-24">
                <div className="mb-4 relative w-full h-64">
                  <Image
                    src="/assets/images/gallery/0-Portraits-Official/potraitn.jpg"
                    alt="Hon. Hassan Shehu Hussain"
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Quick Facts
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">badge</span>
                    <span>
                      <strong>Position:</strong> Representative, House of Representatives
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">
                      location_on
                    </span>
                    <span>
                      <strong>Constituency:</strong> Nasarawa Federal Constituency
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">
                      calendar_today
                    </span>
                    <span>
                      <strong>Years of Service:</strong> 2023 - Present
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">groups</span>
                    <span>
                      <strong>Party:</strong> All Progressives Congress (APC)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">cake</span>
                    <span>
                      <strong>Born:</strong> [Date of Birth]
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="material-symbols-outlined text-gold-400 mr-2">school</span>
                    <span>
                      <strong>Education:</strong> [Educational Qualification]
                    </span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="inline-block w-full text-center bg-green-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-800 transition duration-300"
                  >
                    Get In Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">My Vision</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Leadership "by the people, for the people" through community empowerment and
              sustainable development.
            </p>
          </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">school</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Education
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Revitalizing schools, providing scholarships, and ensuring quality learning environments for every child.
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Youth & Women Empowerment
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Skill acquisition programs and financial grants to foster entrepreneurship and self-reliance.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">water_drop</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Water & Health
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Provision of solar boreholes and support for rural clinics to ensure a healthy populace.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">agriculture</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Agriculture
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Modernizing farming practices and providing inputs to boost food security and farmer income.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">home_work</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Infrastructure
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Building roads, bridges, and markets to connect communities and drive economic growth.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-gray-700 p-6 rounded-xl transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white">security</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                Security
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Collaborating with agencies and supporting local vigilantes for safer neighborhoods.
              </p>
            </div>
        </div>
      </section>
    </div>
  )
}
