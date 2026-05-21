import { useEffect, useState } from 'react';
import { Clock, MapPin, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ScheduleEvent {
  id: string;
  title: string;
  description: string;
  start_time: string;
  end_time: string;
  location: string;
  category: string;
}

interface Artist {
  id: string;
  name: string;
  bio: string;
  role: string;
  image_url: string;
  performance_time: string;
  stage: string;
  featured: boolean;
}

export function Festival() {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);

  useEffect(() => {
    async function fetchData() {
      const [eventsResult, artistsResult] = await Promise.all([
        supabase.rpc('get_schedule_events'),
        supabase.rpc('get_artists'),
      ]);

      if (eventsResult.data) setEvents(eventsResult.data);
      if (artistsResult.data) setArtists(artistsResult.data);
    }

    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-gradient-to-br from-amber-900 via-red-900 to-gray-900 text-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">The Festival</h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed">
            Experience the shores of the Middle Branch of the Patapsco River as the skies come alive with music, art, and the Inaugural Drone Show!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 text-sm font-semibold rounded-full mb-6 tracking-wide uppercase">
              10th Annual
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              The Cherry Hill Arts &amp; Music Waterfront Festival
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              This free festival, now in its 10th year, is expanding its vibrant, family friendly environment. The 2026 Cherry Hill Arts &amp; Music Waterfront Festival is rolling out a dazzling lineup of local, regional, national, and even international music acts, children's activities, art making and experiences for all ages. Everyone is invited to join in celebrating the historical and cultural significance of Cherry Hill, wider Baltimore and Maryland on Independence Day.
            </p>

            <blockquote className="border-l-4 border-amber-600 pl-6 mb-8">
              <p className="text-lg text-gray-700 leading-relaxed italic mb-6">
                "Founded and managed by the Youth Resiliency Institute, the Cherry Hill Arts &amp; Music Waterfront Festival has long served as a guardian of Black history. It preserves and celebrates the cultural heritage of Cherry Hill, wider South Baltimore, and Maryland—going beyond celebration to affirm that heritage must be invested in, protected, and passed on. By uplifting diverse artists, historians, and culture bearers, the Festival transforms public space into living history and reclaims storytelling as a source of economic power, civic presence, and collective memory."
              </p>
              <footer className="not-italic">
                <p className="font-bold text-gray-900">Fanon Hill</p>
                <p className="text-gray-600 text-sm">Executive Director, The Youth Resiliency Institute</p>
                <p className="text-gray-600 text-sm">Founder, The Cherry Hill Arts &amp; Music Waterfront Festival</p>
              </footer>
            </blockquote>

            <div className="flex flex-wrap gap-3">
              {['Free Admission', 'Independence Day', 'Inaugural Drone Show', 'All Ages Welcome'].map((tag) => (
                <div key={tag} className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5">
                  <span className="w-2 h-2 rounded-full bg-amber-600 flex-shrink-0"></span>
                  <span className="text-gray-700 font-medium text-sm">{tag}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Artists</h2>
            <p className="text-xl text-gray-600">
              Celebrating our community's voices and stories
            </p>
          </div>

          {artists.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {artists.map((artist) => (
                <div
                  key={artist.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
                >
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-red-100 flex items-center justify-center">
                    {artist.image_url ? (
                      <img
                        src={artist.image_url}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={80} className="text-amber-600" />
                    )}
                  </div>
                  <div className="p-6">
                    {artist.featured && (
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-600 to-red-600 text-white text-sm font-semibold rounded-full mb-3">
                        Featured
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {artist.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-3">{artist.role}</p>
                    {artist.bio && (
                      <p className="text-gray-600 mb-4 leading-relaxed">{artist.bio}</p>
                    )}
                    {artist.performance_time && (
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock size={16} className="mr-2" />
                        <span>{artist.performance_time}</span>
                      </div>
                    )}
                    {artist.stage && (
                      <div className="flex items-center text-gray-500 text-sm mt-2">
                        <MapPin size={16} className="mr-2" />
                        <span>{artist.stage}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <p className="text-gray-500 text-lg">
                Artist lineup coming soon! Check back for updates.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Festival Schedule</h2>
            <p className="text-xl text-gray-600">1:00 PM - 10:00 PM</p>
          </div>

          {events.length > 0 ? (
            <div className="space-y-4">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-gradient-to-r from-amber-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all border border-amber-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="px-3 py-1 bg-gradient-to-r from-amber-600 to-red-600 text-white text-sm font-semibold rounded-full">
                          {event.category}
                        </span>
                        <div className="flex items-center text-gray-600">
                          <Clock size={16} className="mr-2" />
                          <span className="font-medium">
                            {event.start_time} - {event.end_time}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {event.title}
                      </h3>
                      {event.description && (
                        <p className="text-gray-600 mb-2 leading-relaxed">
                          {event.description}
                        </p>
                      )}
                      {event.location && (
                        <div className="flex items-center text-gray-500">
                          <MapPin size={16} className="mr-2" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <p className="text-gray-500 text-lg">
                Full schedule will be announced soon. Stay tuned!
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">Family Fun Activities</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Engage your whole family with hands-on art-making workshops and exciting children's activities throughout the day.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Art Workshops</h3>
                <p className="text-gray-300 leading-relaxed">
                  Create your own masterpiece with local artists guiding you through various mediums and techniques.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Kids Zone</h3>
                <p className="text-gray-300 leading-relaxed">
                  Face painting, games, and interactive activities designed especially for our youngest community members.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4">Cultural Heritage</h3>
                <p className="text-gray-300 leading-relaxed">
                  Learn about Cherry Hill's rich history through storytelling, exhibits, and interactive displays.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
