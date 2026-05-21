import { MapPin, Car, Clock, Shield, Sparkles, Navigation } from 'lucide-react';

const testimonials = [
  {
    quote:
      "We have one of the most vibrant arts and music cultures in the United States of America and you see it right here in Cherry Hill at the Cherry Hill Arts & Music Waterfront Festival.",
    name: 'Zeke Cohen',
    title: 'Baltimore City Council President',
  },
  {
    quote:
      "South Baltimore Gateway Partnership is proud to be not just a funder, but a partner in this incredible festival. This event is special; and it's special for a number of reasons. It's special because Cherry Hill is a special neighborhood, with pride and tradition, history, and culture, and talent to share with the world. It's special because Cherry Hill is on the banks of the middle branch, and therefore connected to nature. It's special because of organizations like the Youth Resiliency Institute, which have fulfilled the promises and dreams that they set out to do so many years ago.",
    name: 'Brad Rogers',
    title: 'Executive Director, South Baltimore Gateway Partnership',
  },
  {
    quote:
      "I love the Cherry Hill Arts & Music Waterfront Festival and look forward to it every single year! Dancing to live music in a beautiful park, right on our beloved city's waterfront is so joyful. There's delicious local food, arts and crafts, and such a warm community feeling. Best place to view our fabulous drone show! Bring your picnic gear and besties for a wonderful evening – see you there!",
    name: 'Delegate Robbyn Lewis',
    title: 'Maryland House of Delegates, District 46',
  },
];

const communityQuotes = [
  {
    quote:
      "I have resided in the Cherry Hill community for 48 years. My role at the festival was working with the children at the game stations and making sure that children were safe while playing the games. What I enjoy most is everything. I really enjoy seeing the many diverse backgrounds come together to eat and chat. The festival should be something that happens every year because many of the festival vendors are Cherry Hill residents who are not able to vend in other parts of the city due to a lack of transportation. The festival creates relationships and resources.",
    name: 'Ms. T. Clark',
    title: 'Cherry Hill Community Member',
  },
  {
    quote:
      "I lived in Cherry Hill for 62 years. I'm 67 years old. I worked the festival this year in the VIP room serving the people. I love being with them, I love the family setting working together and coming together. The festival is beautiful and is very important.",
    name: 'Ms. S. Commander',
    title: 'Cherry Hill Community Member',
  },
  {
    quote:
      "I am a new resident of the Cherry Hill Community. I was told horror stories about moving to the community, but I have been shown nothing but love. The festival is an amazing experience. I called my family and told them to come to the festival. We all agreed that this would be an annual event for our family. I'm looking forward to this next year.",
    name: 'Mr. K. Damon',
    title: 'Cherry Hill Community Member',
  },
  {
    quote:
      "I am a 7-year resident of Cherry Hill Community. My favorite part about the festival is that everyone of all ages comes out and has a great time. It is a safe environment and very educational with a lot of art.",
    name: 'Ms. T. Bell',
    title: 'Cherry Hill Community Member',
  },
];

export function Baltimore4th() {
  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 via-red-900 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Baltimore Fourth</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Plan your visit to the Cherry Hill Arts & Music Waterfront Festival. Everything you need to know for a safe and enjoyable experience.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6">
          <img
            src="/YouthResiliencyInstitute_CHAMF10_America250(2026)-1.png"
            alt="America 250 — Our Story Deserves to Be Told in Full — Cherry Hill Arts & Music Waterfront Festival"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
          <img
            src="/YouthResiliencyInstitute_CHAMF10_America250(2026)-Bottom.png"
            alt="July 4th 2026 — Middle Branch Park, South Baltimore — Youth Resiliency Institute"
            className="w-full h-auto rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Waterfront Drone Show Spectacular
              </h2>
              <div className="flex items-center text-2xl text-amber-600 font-semibold mb-6">
                <Clock size={32} className="mr-3" />
                <span>9:30 PM</span>
              </div>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Cap off your festival experience with a breathtaking drone show over the Middle Branch waterfront. The show begins promptly at 9:30 PM and features a stunning array of colors and patterns illuminating the Baltimore skyline.
              </p>
              <div className="bg-gradient-to-r from-amber-50 to-red-50 rounded-xl p-6 border border-amber-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Best Viewing Spots</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <Sparkles size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Waterfront lawn area (arrive early for prime spots)</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Festival main stage area with enhanced audio</span>
                  </li>
                  <li className="flex items-start">
                    <Sparkles size={20} className="text-amber-600 mr-2 mt-1 flex-shrink-0" />
                    <span>Family activity zone with blanket seating</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-2xl h-96 overflow-hidden shadow-xl">
              <img
                src="/CHAMF_Festival_6.jpeg"
                alt="Waterfront Drone Show Spectacular at Middle Branch Park"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-lg text-gray-700 mb-4 font-semibold">
                Middle Branch Park
              </p>
              <p className="text-gray-600 leading-relaxed">
                3001 Waterview Avenue<br />
                Baltimore, MD 21230
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Middle+Branch+Park+Baltimore"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-amber-600 font-semibold hover:text-amber-700"
              >
                <Navigation size={18} className="mr-2" />
                Get Directions
              </a>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-red-600 rounded-lg flex items-center justify-center mr-4">
                  <Clock className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Festival Hours</h3>
              </div>
              <div className="space-y-3 text-lg">
                <div className="flex justify-between">
                  <span className="text-gray-600">Gates Open:</span>
                  <span className="font-semibold text-gray-900">1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Performances Begin:</span>
                  <span className="font-semibold text-gray-900">2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Drone Show:</span>
                  <span className="font-semibold text-gray-900">9:30 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Event Ends:</span>
                  <span className="font-semibold text-gray-900">10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Parking & Transportation
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Car className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Free Parking</h3>
              <p className="text-gray-600 leading-relaxed">
                Ample free parking is available in designated lots around Middle Branch Park. Parking attendants will guide you to available spaces.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessible Parking</h3>
              <p className="text-gray-600 leading-relaxed">
                ADA-accessible parking spaces are available near all festival entrances. Please display your permit prominently.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mb-6">
                <Navigation className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Public Transit</h3>
              <p className="text-gray-600 leading-relaxed">
                MTA bus routes serve the Middle Branch Park area. Check MTA schedules for the most current route information.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                <Shield className="text-white" size={32} />
              </div>
              <h2 className="text-4xl font-bold">Festival Safety Policy</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  Family-Friendly Environment
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">
                      This is an alcohol-free event to ensure a safe, welcoming atmosphere for all ages
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">
                      Professional security and medical staff on-site throughout the festival
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">
                      Clearly marked first aid stations and lost child reunification points
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-amber-400">
                  What to Bring
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">Blankets and lawn chairs for comfortable seating</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">Sunscreen and hats for sun protection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-3 text-xl">✓</span>
                    <span className="leading-relaxed">
                      Free water refill stations available
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
              <p className="text-lg leading-relaxed">
                <strong className="text-amber-400">Please Note:</strong> Bags may be subject to inspection upon entry. Outside food and beverages are welcome. No weapons, illegal substances, or glass containers permitted.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-amber-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Festival Testimonials</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What the Community Is Saying</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="space-y-10">
            {testimonials.map((t, i) => (
              <div key={i} className="relative bg-white border-l-4 border-amber-600 rounded-r-2xl px-8 py-8 shadow-sm">
                <span className="absolute top-4 left-6 text-5xl text-amber-300 font-serif leading-none select-none">"</span>
                <p className="text-gray-700 text-lg leading-relaxed italic pt-6 mb-6">
                  {t.quote}
                </p>
                <div>
                  <p className="text-gray-900 font-bold">{t.name}</p>
                  <p className="text-amber-700 text-sm font-medium">{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-amber-700 font-semibold tracking-widest uppercase text-sm mb-3">Community Member Quotes</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices from Cherry Hill</h2>
            <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityQuotes.map((q, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
                <p className="text-gray-700 text-base leading-relaxed italic flex-1 mb-6">
                  "{q.quote}"
                </p>
                <div>
                  <p className="text-gray-900 font-bold text-sm">{q.name}</p>
                  <p className="text-amber-700 text-xs font-medium">{q.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
