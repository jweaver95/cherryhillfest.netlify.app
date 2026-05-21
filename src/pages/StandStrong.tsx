import { Heart, Users, BookOpen, Sparkles, Target, Shield, Zap, TrendingUp } from 'lucide-react';
import { LivingMap } from '../components/LivingMap';

export function StandStrong() {
  return (
    <div>
      <section className="bg-gradient-to-br from-[#4A3728] via-[#B22222] to-[#2E8B57] text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-serif font-black mb-6">Stand Strong</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl leading-relaxed">
            Invest in the story. Become a steward of Cherry Hill's ancestral legacy. The future belongs to communities bold enough to claim the power to tell their own stories.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-4">
              Claim Your Place: The Ancestral Foundation Project
            </h2>
            <p className="text-xl text-[#4A3728] max-w-3xl mx-auto leading-relaxed">
              Transform your support into a living legacy. Every brick tells a story. Every donation fuels the work.
            </p>
          </div>

          <LivingMap />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-[#4A3728] mb-4">
              Guardian Memberships: Year-Round Stewardship
            </h2>
            <p className="text-xl text-[#4A3728] max-w-3xl mx-auto">
              Monthly recurring donations that fund intergenerational programming
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-[#B22222]/10 to-[#D4AF37]/10 rounded-2xl p-8 border-2 border-[#B22222]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-[#4A3728]">Community Guardian</h3>
                <Heart className="text-[#B22222]" size={28} />
              </div>
              <div className="text-3xl font-serif font-black text-[#B22222] mb-4">$10/mo</div>
              <ul className="space-y-3 text-[#4A3728] text-sm mb-6">
                <li className="flex items-center">
                  <span className="text-[#B22222] mr-2">✓</span>
                  Monthly legacy updates
                </li>
                <li className="flex items-center">
                  <span className="text-[#B22222] mr-2">✓</span>
                  Access to archival stories
                </li>
                <li className="flex items-center">
                  <span className="text-[#B22222] mr-2">✓</span>
                  Annual impact report
                </li>
              </ul>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=LMRP774CRU7PJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#B22222] text-white rounded-lg font-bold hover:bg-[#4A3728] transition-all text-center"
              >
                Become a Guardian
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#2E8B57]/10 rounded-2xl p-8 border-2 border-[#D4AF37] md:transform md:scale-105">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-[#4A3728]">Heritage Protector</h3>
                <Sparkles className="text-[#D4AF37]" size={28} />
              </div>
              <div className="text-3xl font-serif font-black text-[#D4AF37] mb-4">$50/mo</div>
              <ul className="space-y-3 text-[#4A3728] text-sm mb-6">
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  All Community benefits +
                </li>
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  Exclusive intergenerational interviews
                </li>
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  Virtual tours & exhibitions
                </li>
                <li className="flex items-center">
                  <span className="text-[#D4AF37] mr-2">✓</span>
                  Steward recognition on site
                </li>
              </ul>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=LMRP774CRU7PJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#D4AF37] text-[#4A3728] rounded-lg font-bold hover:bg-[#B22222] hover:text-white transition-all text-center"
              >
                Become a Protector
              </a>
            </div>

            <div className="bg-gradient-to-br from-[#2E8B57]/10 to-[#B22222]/10 rounded-2xl p-8 border-2 border-[#2E8B57]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-serif font-bold text-[#4A3728]">Story Steward</h3>
                <Shield className="text-[#2E8B57]" size={28} />
              </div>
              <div className="text-3xl font-serif font-black text-[#2E8B57] mb-4">$250/mo</div>
              <ul className="space-y-3 text-[#4A3728] text-sm mb-6">
                <li className="flex items-center">
                  <span className="text-[#2E8B57] mr-2">✓</span>
                  All Protector benefits +
                </li>
                <li className="flex items-center">
                  <span className="text-[#2E8B57] mr-2">✓</span>
                  Direct program sponsorships
                </li>
                <li className="flex items-center">
                  <span className="text-[#2E8B57] mr-2">✓</span>
                  Board recognition & impact briefings
                </li>
                <li className="flex items-center">
                  <span className="text-[#2E8B57] mr-2">✓</span>
                  Private intergenerational event invites
                </li>
              </ul>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=LMRP774CRU7PJ"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-[#2E8B57] text-white rounded-lg font-bold hover:bg-[#1F5C3F] transition-all text-center"
              >
                Become a Steward
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#B22222] to-[#2E8B57] rounded-2xl p-8 text-white grid md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4">
              <Zap size={40} className="flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Hours of Intergenerational</p>
                <p className="text-3xl font-serif font-black">1,200+</p>
                <p className="text-sm">Programs Funded</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <TrendingUp size={40} className="flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Archival Items</p>
                <p className="text-3xl font-serif font-black">80 Yrs</p>
                <p className="text-sm">of Stories Preserved</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Users size={40} className="flex-shrink-0" />
              <div>
                <p className="text-sm text-white/80">Community Members</p>
                <p className="text-3xl font-serif font-black">100+</p>
                <p className="text-sm">Connected & Engaged</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F5F5DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#4A3728] mb-6">
                What Your Stewardship Funds
              </h2>
              <p className="text-xl text-[#4A3728] mb-6 leading-relaxed">
                Your investment directly supports the Youth Resiliency Institute's vital work:
              </p>
              <ul className="space-y-4 text-lg text-[#4A3728]">
                <li className="flex items-start">
                  <BookOpen className="text-[#B22222] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span>Year-round archival initiatives and exhibitions</span>
                </li>
                <li className="flex items-start">
                  <Heart className="text-[#B22222] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span>Youth programming, mentorship, and workshops</span>
                </li>
                <li className="flex items-start">
                  <Sparkles className="text-[#B22222] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span>Film screenings and intergenerational dialogue events</span>
                </li>
                <li className="flex items-start">
                  <Target className="text-[#B22222] mr-3 mt-1 flex-shrink-0" size={24} />
                  <span>The annual Cherry Hill Arts & Music Waterfront Festival</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#B22222]/20 to-[#D4AF37]/20 rounded-2xl h-96 flex items-center justify-center border-4 border-[#B22222] p-8">
              <img
                src="/yri_logo-2_copy.jpg"
                alt="Youth Resiliency Institute Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Make a Donation</h2>
            <p className="text-xl text-gray-600">
              Choose an amount that's meaningful to you
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[25, 50, 100, 250].map((amount) => (
                <button
                  key={amount}
                  className="px-4 py-4 border-2 border-amber-600 text-amber-600 rounded-xl font-bold text-xl hover:bg-amber-600 hover:text-white transition-all"
                >
                  ${amount}
                </button>
              ))}
            </div>

            <div className="mb-8">
              <label htmlFor="custom-amount" className="block text-gray-700 font-semibold mb-3 text-lg">
                Or enter a custom amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-xl" aria-hidden="true">$</span>
                <input
                  id="custom-amount"
                  type="number"
                  min="1"
                  placeholder="0.00"
                  className="w-full pl-10 pr-4 py-4 border-2 border-gray-300 rounded-xl text-xl focus:border-amber-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-amber-600 focus:ring-amber-600"
                />
                <span className="text-gray-700 text-lg">Make this a monthly recurring donation</span>
              </label>
            </div>

            <a
              href="https://www.paypal.com/donate/?hosted_button_id=LMRP774CRU7PJ"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-5 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-xl font-bold text-xl hover:shadow-2xl hover:scale-105 transition-all text-center"
            >
              Continue to Payment
            </a>

            <p className="text-center text-gray-500 mt-6">
              Youth Resiliency Institute is a 501(c)(3) nonprofit organization. Your donation is tax-deductible.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Your Support Helps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar makes a difference in our community
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-4">$25</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Supplies for Art Workshop
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Provides materials for one child to participate in our art-making programs at the festival
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-4">$100</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Archive Preservation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Helps digitize and preserve historical photographs and documents from Cherry Hill's history
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <div className="text-4xl font-bold text-amber-600 mb-4">$250</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Youth Program Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sponsors a month of after-school programming and mentorship for local youth
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Living Map Monument
              </h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Explore Cherry Hill's rich history through our interactive 3D monument. This digital tribute brings to life the stories, landmarks, and legacy of our community spanning eight decades.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                Navigate through time and space to discover the people, places, and moments that shaped Cherry Hill into the resilient community it is today.
              </p>
              <a
                href="https://www.paypal.com/donate/?hosted_button_id=LMRP774CRU7PJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
              >
                Support Our Work
              </a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Target className="text-amber-400 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">Historic Landmarks</h3>
                <p className="text-gray-400 text-sm">
                  Discover key locations that define our community
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Users className="text-amber-400 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">Community Stories</h3>
                <p className="text-gray-400 text-sm">
                  Hear from residents past and present
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <BookOpen className="text-amber-400 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">Timeline View</h3>
                <p className="text-gray-400 text-sm">
                  Navigate 80 years of history
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Shield className="text-amber-400 mb-3" size={40} />
                <h3 className="font-bold text-lg mb-2">Legacy Preservation</h3>
                <p className="text-gray-400 text-sm">
                  Honoring our pioneering families
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Other Ways to Support
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Financial contributions aren't the only way to make a difference
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Share your time and talents at the festival or year-round programs
              </p>
              <a
                href="mailto:info@youthresiliency.org?subject=Volunteer%20Interest"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                Learn More
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Become a Partner</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Corporate sponsorships help us expand our reach and impact
              </p>
              <a
                href="/partners"
                className="inline-block px-6 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all"
              >
                View Opportunities
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
