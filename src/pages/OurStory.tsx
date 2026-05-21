import { BookOpen, Heart, Users, Target, FileText } from 'lucide-react';

/* HERITAGE TIMELINE — hidden, restore by uncommenting timelineEntries and the timeline section below
const timelineEntries = [
  { year: 1944, title: 'The Beginning of Cherry Hill Homes', content: 'In 1944, Cherry Hill Homes became one of the first public housing communities in Baltimore, providing homes for pioneering African American families who built a vibrant, close-knit community.', image_url: '/1944_Beginning.jpeg' },
  { year: 1945, title: 'Veterans Return Home', content: 'Cherry Hill welcomed African American veterans returning from World War II and the Korean War, providing a foundation for a strong, resilient community built on service and sacrifice.', image_url: '/1945_Veterans.jpeg' },
  { year: 1950, title: 'Community Growth', content: 'Cherry Hill flourished as families put down roots, established businesses, and created a vibrant neighborhood identity grounded in mutual support and cultural pride.', image_url: '/1950_Growth.jpeg' },
  { year: 1960, title: 'Cultural Renaissance', content: 'The community became a hub for Black arts and culture, with local talent showcasing music, theater, and visual arts that celebrated African American heritage and creativity.', image_url: '/1960_Cultural_Renaissance.jpeg' },
  { year: 1970, title: 'Youth Empowerment Begins', content: 'Community leaders established youth programs and mentorship initiatives, recognizing the importance of investing in the next generation and preserving community values.', image_url: '/1970_Youth_Empowerment_Begins.jpeg' },
  { year: 1980, title: 'Preservation Efforts', content: "Residents organized to protect Cherry Hill's history and cultural legacy, documenting stories and establishing archives to ensure future generations would know their roots.", image_url: '/1980_Preservation_Efforts.jpeg' },
  { year: 1990, title: 'Festival Traditions', content: "The Cherry Hill Festival became an annual celebration, bringing together residents and visitors to honor the community's heritage through performances, exhibitions, and gatherings.", image_url: '/1990_Festival_Traditions_.jpeg' },
  { year: 2000, title: 'New Millennium, Enduring Spirit', content: 'Cherry Hill entered the 21st century with renewed commitment to community preservation, launching digital archival projects and expanding programming for all ages.', image_url: '/2000_New_Millennium.jpeg' },
  { year: 2010, title: 'Youth Resiliency Institute Founded', content: "The YRI was established under the leadership of Fanon Hill and Mama Shirley Foulks, formalizing the community's commitment to heritage preservation and youth development.", image_url: '/2010_YRI_Founded.jpeg' },
  { year: 2024, title: '80 Years Strong', content: 'Cherry Hill celebrates 80 years of resilience, community, and cultural stewardship, standing as a testament to the strength and determination of its pioneering families.', image_url: '/2024_80_years_strong.jpeg' },
];
*/

export function OurStory() {
  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 via-red-900 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Our Story</h1>
            <a
              href="/CHAMF_-_A_Mesage.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-200 group whitespace-nowrap flex-shrink-0"
              title="Read the full message (PDF)"
            >
              <FileText size={16} className="group-hover:scale-110 transition-transform duration-200" />
              <span>Read Full Message</span>
            </a>
          </div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            A legacy of resilience, community, and cultural preservation spanning generations in Cherry Hill.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Youth Resiliency Institute (YRI)
            </h2>
            <div className="max-w-4xl mx-auto space-y-5">
              <p className="text-xl text-gray-700 leading-relaxed">
                Managed and co-founded by the Youth Resiliency Institute, the Cherry Hill Arts &amp; Music Waterfront Festival has stood as a guardian of Black history since its inception. Under the leadership of Executive Director/Co-Founder Fanon Hill and co-founder Navasha Daya, our work extends far beyond a single day. Through year-round archival initiatives, film screenings, and intergenerational programming, we affirm that a neighborhood's value is ancestral and lived.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                For over fifteen years, The Youth Resiliency Institute has been developing, researching, implementing, and evaluating culturally responsive community arts in Baltimore, Maryland with a priority focus in South Baltimore's historic Cherry Hill community.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2014, the Youth Resiliency Institute received recognition at the White House for its innovative, art-based, family-centered programming in Cherry Hill. Additionally, the Institute has been honored by Associated Black Charities and the Black Mental Health Alliance for its impactful year-round contributions to the community in Baltimore City.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Care</h3>
              <p className="text-gray-600 leading-relaxed">
                Supporting families and fostering connections through social programming and events
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <BookOpen className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Archival Work</h3>
              <p className="text-gray-600 leading-relaxed">
                Preserving stories, photographs, and memories that define Cherry Hill's legacy
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Youth Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Empowering young people with skills, mentorship, and leadership opportunities
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Stewardship</h3>
              <p className="text-gray-600 leading-relaxed">
                Celebrating and sharing the rich cultural traditions of our community
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">Our Philosophy</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              We will unapologetically honor, protect, and proclaim the history others have tried to diminish or erase. Through arts and culture, we reclaim storytelling as civic presence and collective memory.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Community Authorship as Economic Power
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                The History of Cherry Hill
              </h3>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Founded in 1945 as a home for African American veterans returning from World War II and the Korean War, Cherry Hill stands as a powerful illustration of Black resilience. The legacy of these pioneering families lives on this waterfront, in every performance, exhibition, and gathering.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/2024_80_years_strong_-_1.jpeg"
                alt="80 Years Strong — Cherry Hill pioneering families celebrating 80 years of resilience, community, and cultural stewardship"
                className="w-full h-96 object-cover"
                style={{ objectPosition: '20% center' }}
              />
            </div>
          </div>

          {/* HERITAGE TIMELINE removed — data preserved in comment at top of file for restoration */}
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Be Part of Our Story
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you're a Cherry Hill resident, alumni, or supporter, there are many ways to contribute to our mission and help preserve this important legacy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/stand-strong"
              className="px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              Support Our Work
            </a>
            <a
              href="/partners"
              className="px-8 py-4 bg-gray-900 text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
