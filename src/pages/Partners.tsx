import { Award, Star, Check, Mail } from 'lucide-react';

const currentPartners = [
  {
    id: '9c78fd04-fa27-4261-8ed4-aefaaff73e9d',
    name: 'South Baltimore Gateway Partnership',
    tier: 'Title',
    logo_url: '/SBGP_logo.svg',
    website: '',
    description: 'Community development and revitalization partner',
    order_index: 1,
  },
  {
    id: 'cob-01',
    name: 'City of Baltimore',
    tier: 'Platinum',
    logo_url: '/COB-Vert-Mayor-BMS-G_(1).png',
    website: '',
    description: '',
    order_index: 2,
  },
  {
    id: 'bcrp-01',
    name: 'Baltimore City Recreation & Parks',
    tier: 'Platinum',
    logo_url: '/BC_Recs_&_Parks_simple_logo_lo_res_.jpg',
    website: '',
    description: '',
    order_index: 3,
  },
  {
    id: 'yri-01',
    name: 'Youth Resiliency Institute',
    tier: 'Gold',
    logo_url: '/YRI_LOGO.jpg',
    website: '',
    description: '',
    order_index: 4,
  },
  {
    id: 'mhh-01',
    name: 'MedStar Harbor Hospital',
    tier: 'Silver',
    logo_url: '/MHH2_RGB_Rev_H-V1.jpg',
    website: '',
    description: '',
    order_index: 5,
  },
];

const tiers = [
  {
    name: 'Title',
    color: 'from-amber-700 to-red-800',
    benefits: [
      'Premier logo placement on all festival materials',
      'Exclusive stage naming rights',
      'VIP festival experience for 20 guests',
      'Year-round recognition as presenting sponsor',
      'Booth space at prime festival location',
      'Social media spotlight campaigns',
      'Speaking opportunity at main stage',
    ],
  },
  {
    name: 'Platinum',
    color: 'from-gray-400 to-gray-600',
    benefits: [
      'Prominent logo on festival materials',
      'VIP festival experience for 15 guests',
      'Premium booth location',
      'Social media recognition',
      'Logo on festival website',
      'Acknowledgment from main stage',
    ],
  },
  {
    name: 'Gold',
    color: 'from-yellow-500 to-amber-600',
    benefits: [
      'Logo on select festival materials',
      'VIP festival experience for 10 guests',
      'Standard booth space',
      'Website recognition',
      'Social media mentions',
    ],
  },
  {
    name: 'Silver',
    color: 'from-gray-300 to-gray-500',
    benefits: [
      'Logo on festival website',
      'VIP festival experience for 5 guests',
      'Social media recognition',
      'Program acknowledgment',
    ],
  },
  {
    name: 'Bronze',
    color: 'from-orange-600 to-amber-700',
    benefits: [
      'Name on festival website',
      'Festival tickets for 4 guests',
      'Program listing',
    ],
  },
  {
    name: 'Cowrie',
    color: 'from-amber-600 to-red-600',
    benefits: [
      'Community partner recognition',
      'Festival tickets for 2 guests',
      'Website listing',
    ],
  },
];

export function Partners() {
  const getPartnersByTier = (tierName: string) => {
    return currentPartners.filter((p) => p.tier === tierName);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 via-red-900 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">Our Partners</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Join leading organizations in supporting Cherry Hill's cultural legacy and community empowerment.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sponsorship Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to make a lasting impact on our community while gaining valuable exposure for your organization
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all border-2 border-gray-100"
              >
                <div className={`bg-gradient-to-r ${tier.color} text-white p-6`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                    {tier.name === 'Title' && <Star className="text-yellow-300" size={28} />}
                    {tier.name !== 'Title' && <Award size={28} />}
                  </div>
                  <p className="text-white/90">Tier Sponsorship</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Become a Partner?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how a partnership can benefit your organization while supporting our vital community work.
            </p>
            <a
              href="mailto:partnerships@youthresiliency.org"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-600 to-red-600 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <Mail className="mr-2" size={24} />
              Contact Our Partnership Team
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Current Partners
            </h2>
            <p className="text-xl text-gray-600">
              Thank you to our valued partners who make this festival possible
            </p>
          </div>

          {currentPartners.length > 0 ? (
            <div className="space-y-16">
              {tiers.map((tier) => {
                const tierPartners = getPartnersByTier(tier.name);
                if (tierPartners.length === 0) return null;

                return (
                  <div key={tier.name}>
                    <div className="flex items-center justify-center mb-8">
                      <div className={`bg-gradient-to-r ${tier.color} text-white px-6 py-3 rounded-full font-bold text-xl`}>
                        {tier.name} Partners
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {tierPartners.map((partner) => (
                        <div
                          key={partner.id}
                          className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all"
                        >
                          <div className="h-32 flex items-center justify-center mb-6">
                            {partner.logo_url ? (
                              <img
                                src={partner.logo_url}
                                alt={partner.name}
                                className="max-h-full max-w-full object-contain mx-auto"
                              />
                            ) : (
                              <Award className="text-amber-600 mx-auto" size={48} />
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                            {partner.name}
                          </h3>
                          {partner.description && (
                            <p className="text-gray-600 text-center mb-4 leading-relaxed">
                              {partner.description}
                            </p>
                          )}
                          {partner.website && (
                            <div className="text-center">
                              <a
                                href={partner.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-amber-600 font-semibold hover:text-amber-700"
                              >
                                Visit Website →
                              </a>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <p className="text-gray-500 text-lg">
                Partner announcements coming soon!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Media Partners</h2>
            <p className="text-xl text-gray-600">
              Proud to have Baltimore's leading media outlets amplifying our story
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="text-center mb-10">
                <span className="inline-block bg-gradient-to-r from-amber-600 to-red-600 text-white px-6 py-2 rounded-full font-bold text-lg">
                  WBAL
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-items-center">
                <div className="flex items-center justify-center h-28 w-full">
                  <img
                    src="/WBAL_Primary-Stacked_FullColor-Blue_RGB_(4).png"
                    alt="WBAL-TV 11"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-28 w-full">
                  <img
                    src="/HTVRadio_WBAL-News-Radio-Station-Primary_FullColor-Dark_RGB_(2) copy.png"
                    alt="WBAL News Radio"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div className="flex items-center justify-center h-28 w-full">
                  <img
                    src="/htv-98rock-main-logo.png"
                    alt="98 Rock 97.9 Baltimore"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-10">
              <div className="text-center mb-10">
                <span className="inline-block bg-gradient-to-r from-blue-700 to-orange-500 text-white px-6 py-2 rounded-full font-bold text-lg">
                  WEAA
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center h-40 w-64">
                  <img
                    src="/50th_Anniv_3C.png"
                    alt="WEAA 88.9 FM – Morgan State University"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Community Impact
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your partnership directly supports cultural preservation, youth programming, and community development in Cherry Hill.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Brand Visibility
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gain exposure to thousands of festival attendees and community members through our year-round programming and events.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-8 border border-amber-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Authentic Connection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Align your brand with a meaningful cause and build genuine relationships within the Baltimore community.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
