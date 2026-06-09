import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Music, Heart, Eye, EyeOff, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { HeroCarousel } from '../components/HeroCarousel';
import { CountdownTimer } from '../components/CountdownTimer';

interface Stat {
  label: string;
  value: number;
  order_index: number;
}

export function Home() {
  const [stats, setStats] = useState<Stat[]>([]);
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      const { data } = await supabase.rpc('get_stats');

      if (data) {
        setStats(data);
      }
    }

    fetchStats();
  }, []);

  useEffect(() => {
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <div>
      <button
        onClick={() => setHighContrast(!highContrast)}
        className="fixed top-24 right-4 z-50 p-2 rounded-lg bg-[#B22222] text-white hover:bg-[#4A3728] transition-all shadow-lg"
        aria-label="Toggle high contrast mode"
      >
        {highContrast ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>

      <HeroCarousel highContrast={highContrast} />

      <section className="py-8 bg-[#1B3A5C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              to="/festival"
              className={`px-8 py-4 bg-[#B22222] text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#B22222] transition-all shadow-xl ${highContrast ? 'border-4 border-white' : ''}`}
            >
              Plan Your Visit
            </Link>
            <Link
              to="/stand-strong"
              className={`px-8 py-4 bg-[#D4AF37] text-[#4A3728] rounded-lg font-bold text-lg hover:bg-white hover:text-[#2E8B57] transition-all shadow-xl ${highContrast ? 'border-4 border-white' : ''}`}
            >
              Claim Your Place
            </Link>
            <a
              href="https://forms.gle/74KvpJYiuHD8Wrjv6"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-8 py-4 bg-[#2E8B57] text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#2E8B57] transition-all shadow-xl ${highContrast ? 'border-4 border-white' : ''}`}
            >
              Vendor Sign Up
            </a>
            <Link
              to="/baltimore4th"
              className={`px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white hover:text-[#4A3728] transition-all ${highContrast ? 'border-4 border-white' : ''}`}
            >
              Baltimore 4th Info
            </Link>
          </div>
        </div>
      </section>

      <CountdownTimer />

      <section className={`pt-20 pb-10 ${highContrast ? 'bg-black text-white' : 'bg-[#F5F5DC]'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-serif font-bold mb-4 ${highContrast ? 'text-white' : 'text-[#4A3728]'}`}>
              The Ancestral Convergence
            </h2>
            <p className={`text-lg ${highContrast ? 'text-gray-300' : 'text-[#4A3728]'}`}>
              Four historic moments align in 2026
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-xl ${highContrast ? 'bg-[#B22222] border-4 border-white text-white' : 'bg-white shadow-lg'}`}
              >
                <div className={`text-5xl md:text-6xl font-serif font-black mb-2 ${highContrast ? 'text-white' : 'text-[#B22222]'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm md:text-base font-semibold ${highContrast ? 'text-white' : 'text-[#4A3728]'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-4">
              The Historical Hubs
            </h2>
            <p className="text-xl text-[#4A3728] max-w-3xl mx-auto">
              Connecting pivotal moments in American and African American history
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B22222]/10 rounded-2xl p-8 border-2 border-[#D4AF37]">
              <div className="text-5xl font-serif font-black text-[#D4AF37] mb-4">250</div>
              <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">America's 250th</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Connecting Cherry Hill's pioneering families to the broader American story of freedom, self-determination, and resilience.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#2E8B57]/10 rounded-2xl p-8 border-2 border-[#D4AF37]">
              <div className="text-5xl font-serif font-black text-[#D4AF37] mb-4">100</div>
              <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">Black History's Century</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Celebrating the evolution of the Black History movement from 1926's "Negro History Week" to 2026's global recognition.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#B22222]/10 rounded-2xl p-8 border-2 border-[#D4AF37]">
              <div className="text-5xl font-serif font-black text-[#D4AF37] mb-4">80</div>
              <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">Cherry Hill's Legacy</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Honoring the pioneering families of 1945 who built a resilient community that stands strong today.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#2E8B57]/10 rounded-2xl p-8 border-2 border-[#D4AF37]">
              <div className="text-5xl font-serif font-black text-[#D4AF37] mb-4">10</div>
              <h3 className="text-2xl font-serif font-bold text-[#4A3728] mb-3">Festival's 10th Anniversary</h3>
              <p className="text-[#4A3728] leading-relaxed">
                A decade of the Cherry Hill Arts &amp; Music Waterfront Festival — celebrating art, culture, and community at the water's edge.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card-resilience p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#B22222] rounded-xl flex items-center justify-center mb-6">
                <Music className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-3">Truth-Telling Stages</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Artists, historians, and tradition-keepers reclaim the power to tell their own stories
              </p>
            </div>

            <div className="card-resilience p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-xl flex items-center justify-center mb-6">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-3">Family Workshops</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Art-making and intergenerational activities celebrating our cultural heritage
              </p>
            </div>

            <div className="card-resilience p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#B22222] rounded-xl flex items-center justify-center mb-6">
                <Calendar className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-3">Waterfront Celebration</h3>
              <p className="text-[#4A3728] leading-relaxed">
                1 PM - 10 PM at Middle Branch Park with drone show at 9:30 PM
              </p>
            </div>

            <div className="card-resilience p-8 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-[#2E8B57] rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-[#4A3728] mb-3">Community Archive</h3>
              <p className="text-[#4A3728] leading-relaxed">
                Explore year-round archival exhibitions and multimedia storytelling
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-[#B22222] font-semibold tracking-widest uppercase text-sm mb-3">Festival Testimonials</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-4">What Leaders Are Saying</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/Wes_Moore_the_governor.jpg?v=2"
                  alt="Governor Wes Moore at the Cherry Hill Arts & Music Waterfront Festival"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#4A3728] text-base leading-relaxed italic flex-1 mb-4">
                  "You continue to love on our community and our community appreciates you more than you'll ever know. Thank you for all the leadership and all the work."
                </p>
                <div>
                  <p className="font-bold text-[#4A3728]">Wes Moore</p>
                  <p className="text-[#B22222] text-sm font-medium">Governor of Maryland</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="h-64 overflow-hidden relative bg-[#1B3A5C]">
                <img
                  src="/Brooke_Lierman_on_stage copy copy.jpg"
                  alt="Brooke Lierman, Comptroller of Maryland, speaking at the festival"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 15%' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-5xl font-serif font-black text-white/20 select-none">BL</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#4A3728] text-base leading-relaxed italic flex-1 mb-4">
                  "Our arts matter. Black arts matter, and I'm so happy to be a supporter of this amazing event!"
                </p>
                <div>
                  <p className="font-bold text-[#4A3728]">Brooke Lierman</p>
                  <p className="text-[#B22222] text-sm font-medium">Comptroller of Maryland</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="h-64 overflow-hidden">
                <img
                  src="/Kwaizi_Mfume.jpg?v=2"
                  alt="Congressman Kwesi Mfume at the Cherry Hill festival"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#4A3728] text-base leading-relaxed italic flex-1 mb-4">
                  "Thank you Fanon and Navasha! I love this community."
                </p>
                <div>
                  <p className="font-bold text-[#4A3728]">Kwesi Mfume</p>
                  <p className="text-[#B22222] text-sm font-medium">United States Congressman</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <div className="h-64 overflow-hidden relative bg-[#1B3A5C]">
                <img
                  src="/Felicia_Porter_District_10 copy copy copy.png"
                  alt="Baltimore City Councilwoman Phylicia Porter, District 10"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '45% 15%' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-5xl font-serif font-black text-white/20 select-none">PP</span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[#4A3728] text-base leading-relaxed italic flex-1 mb-4">
                  "The Cherry Hill Arts & Music Waterfront Festival not only brings communities together through arts and culture; we bring people together by strengthening a community and a sense of heritage, legacy, and identity for the Cherry Hill community."
                </p>
                <div>
                  <p className="font-bold text-[#4A3728]">Phylicia Porter</p>
                  <p className="text-[#B22222] text-sm font-medium">Baltimore City Councilwoman, District 10</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#B22222] font-semibold tracking-widest uppercase text-sm mb-3">Media Coverage</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-4">In The News</h2>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <div className="space-y-12">
            {/* 2025 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-serif font-black text-[#B22222]">2025</span>
                <div className="flex-1 h-px bg-[#D4AF37]"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-5">
                <a href="https://www.cbsnews.com/baltimore/news/fourth-july-inner-harbor-fireworks-cherry-hill-music-brandon-scott/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">CBS News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Fourth of July Inner Harbor Fireworks, Cherry Hill Music — Brandon Scott</p>
                </a>
                <a href="https://www.thebaltimorebanner.com/culture/things-to-do/july-4-baltimore-fireworks-drones-A2SG2QCBTFFBXK4APPKY4I5WIA/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">Baltimore Banner</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">July 4 Baltimore Fireworks &amp; Drones</p>
                </a>
                <a href="https://www.wmar2news.com/local/baltimore-announces-dual-fourth-of-july-celebrations-with-fireworks-and-first-ever-cherry-hill-drone-show" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">WMAR News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Baltimore Announces Dual Fourth of July Celebrations with Fireworks and First-Ever Cherry Hill Drone Show</p>
                </a>
              </div>
            </div>

            {/* 2024 */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-serif font-black text-[#B22222]">2024</span>
                <div className="flex-1 h-px bg-[#D4AF37]"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <a href="https://afro.com/cherry-hill-arts-music-waterfront-festival/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">AFRO News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Cherry Hill Arts Music Waterfront Festival</p>
                </a>
                <a href="https://www.wbaltv.com/article/the-8th-annual-cherry-hill-arts-music-festival/61463910" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">WBAL TV</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">The 8th Annual Cherry Hill Arts &amp; Music Festival</p>
                </a>
                <a href="https://www.cbsnews.com/baltimore/video/the-8th-annual-cherry-hill-fest-returns-this-thursday-heres-what-to-expect/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">CBS News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">The 8th Annual Cherry Hill Fest Returns — Here's What to Expect</p>
                </a>
                <a href="https://soulbounce.com/2024/07/navasha-daya-mighty-mark-fanon-hill-patapsco-river-love-8th-annual-cherry-hill-arts-and-music-waterfront-festival/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">Soul Bounce</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Navasha Daya, Mighty Mark &amp; Fanon Hill — Patapsco River Love at the 8th Annual Cherry Hill Arts &amp; Music Waterfront Festival</p>
                </a>
                <a href="https://www.wbaltv.com/article/cherry-hill-arts-music-festival-returns-time-the-4th-of-july-baltimore/40527197" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">WBAL TV</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Cherry Hill Arts &amp; Music Festival Returns in Time for the 4th of July</p>
                </a>
                <a href="https://afro.com/hip-hop-legend-monie-love-headlines-cherry-hill-waterfront-festival/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">AFRO News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Hip Hop Legend Monie Love Headlines Cherry Hill Waterfront Festival</p>
                </a>
                <a href="https://www.wmar2news.com/aroundtown/7th-annual-cherry-hill-arts-festival-set-to-take-over-middle-branch-park" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">WMAR News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">7th Annual Cherry Hill Arts Festival Set to Take Over Middle Branch Park</p>
                </a>
                <a href="https://www.cbsnews.com/baltimore/news/youth-resiliency-institute-honors-medstar-harbor-heroes-after-brooklyn-homes-mass-shooting/" target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-[#F5F5DC] rounded-xl p-6 border border-[#D4AF37]/40 hover:border-[#B22222] hover:shadow-md transition-all">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#B22222]">CBS News</span>
                    <ExternalLink size={14} className="shrink-0 text-[#B22222] opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-[#4A3728] font-semibold leading-snug group-hover:text-[#B22222] transition-colors">Youth Resiliency Institute Honors MedStar Harbor Staff After Brooklyn Homes Mass Shooting</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1B3A5C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <img
                src="/Cherry_Hill_Charm_photo.png"
                alt="Cherry Hill Charm - Original Motion Picture Soundtrack"
                className="w-full max-w-sm rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-3">Coming Soon</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Cherry Hill Charm
              </h2>
              <div className="w-16 h-1 bg-[#D4AF37] mb-8"></div>
              <div className="space-y-5 text-gray-200 leading-relaxed">
                <p>
                  The Youth Resiliency Institute & Platinum Producer and DJ Mighty Mark have partnered to release the soundtrack for the upcoming film "Cherry Hill Charm." The film tells the story of the Cherry Hill Arts & Music Waterfront Festival at the convergence of the United States' 250th anniversary, the 100th anniversary of the movement that gave rise to Black History Month, the 80th anniversary of the dedication of Cherry Hill Homes public housing, and a decade of this Festival.
                </p>
                <p>
                  The Cherry Hill Arts & Music Waterfront Festival celebrates the transformative power and healing potential of art and nature and the belief that every child, youth and family should have equitable access to high quality culturally responsive experiences and programming in the arts and ecology. Notably, in 2020, the Cherry Hill Arts & Music Waterfront Festival made history as Baltimore City's first Arts & Music festival to transition to a virtual platform in response to the pandemic.
                </p>
                <p>
                  The "Cherry Hill Charm" original motion picture soundtrack showcases a blend of original musical compositions and historical audio excerpts. These excerpts include narratives from long-standing elder residents of the Cherry Hill community, offering a unique perspective focused on the heritage of one of America's most significant Black communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#4A3728] to-[#2E1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Stand Strong With Us
              </h2>
              <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                As a guardian of Black history and a beacon of community stewardship, the Youth Resiliency Institute invites you to claim your place in the 10<sup>th</sup> Anniversary of the Cherry Hill Arts & Music Waterfront Festival
              </p>
              <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="text-amber-400" size={24} />
                  <span>1:00 PM - 10:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="text-amber-400" size={24} />
                  <span>Middle Branch Park, Baltimore</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Festival Policy</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Family-friendly environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Alcohol-free event</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Free admission for all</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">✓</span>
                  <span>Accessible parking available</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
