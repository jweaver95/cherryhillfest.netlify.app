import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  alt: string;
  hideText?: boolean;
}

const slides: Slide[] = [
  {
    image: '/YouthResiliencyInstitute_CHAMF10_America250(2026)-1.png',
    title: 'America 250',
    subtitle: 'Our story deserves to be told in full.',
    alt: 'America 250 - Our Story Deserves to Be Told in Full - Cherry Hill Arts & Music Waterfront Festival',
    hideText: true,
  },
  {
    image: '/Cherry_Hill_Veterans_in_Cherry_Hill.jpeg',
    title: 'The Convergence',
    subtitle: '80 Years in the Making. 250 Years in the Story. 10 Years of the Festival.',
    alt: '80 Years in the Making - Veterans of Cherry Hill serving our community alongside modern festival celebration',
  },
  {
    image: '/CHAMF_Festival_crowd.jpg',
    title: 'Claim Your Place in History',
    subtitle: 'Connecting generations through intergenerational dialogue and shared legacy at Middle Branch Park.',
    alt: 'Elder and youth connecting at a craft table during the Cherry Hill Arts & Music Waterfront Festival',
  },
  {
    image: '/We_will_not_whisper_replacement.jpg',
    title: 'We Will Not Whisper Our History',
    subtitle: 'We will lift it high. Join us at the waterfront as we celebrate resilience, community, and truth-telling.',
    alt: 'Community gathering at Cherry Hill Arts & Music Waterfront Festival with Baltimore skyline',
  },
  {
    image: '/YouthResiliencyInstitute_CHAMF10_America250(2026)-Bottom.png',
    title: 'July 4, 2026',
    subtitle: 'Middle Branch Park, South Baltimore',
    alt: 'July 4th 2026 - Middle Branch Park South Baltimore - Youth Resiliency Institute',
    hideText: true,
  },
  {
    image: '/Drone_Festival_Shot.JPG',
    title: 'See You at the Waterfront',
    subtitle: 'Thousands strong. Baltimore skyline. Middle Branch Park. This is home.',
    alt: 'Aerial drone shot of Cherry Hill Arts & Music Waterfront Festival at dusk with Baltimore skyline',
  },
];

interface HeroCarouselProps {
  autoPlay?: boolean;
  interval?: number;
  highContrast?: boolean;
}

export function HeroCarousel({ autoPlay = true, interval = 6000, highContrast = false }: HeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      handleNext();
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide, autoPlay, interval]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <div className="relative h-[560px] sm:h-[600px] md:h-[680px] lg:h-[760px] xl:h-[860px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
        >
          <div className="absolute inset-0">
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {!slide.hideText && (
            <div className={`absolute inset-0 ${highContrast ? 'bg-black/80' : 'bg-gradient-to-r from-black/70 via-black/50 to-transparent'}`}></div>
          )}

          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            {!slide.hideText && (
              <div className={`text-white max-w-3xl transform transition-all duration-700 ${
                index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
                <h1 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-black mb-3 sm:mb-4 md:mb-6 leading-tight ${
                  highContrast ? 'text-white border-4 border-white p-4 inline-block' : 'text-shadow-lg'
                }`}>
                  {slide.title}
                </h1>
                <p className={`text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 leading-relaxed ${
                  highContrast ? 'text-white font-bold' : 'text-gray-100'
                }`}>
                  {slide.subtitle}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={handlePrev}
        className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all z-10 group ${
          highContrast ? 'border-4 border-white' : ''
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="text-white" size={24} />
      </button>

      <button
        onClick={handleNext}
        className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 transition-all z-10 group ${
          highContrast ? 'border-4 border-white' : ''
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="text-white" size={24} />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="flex items-center justify-center w-11 h-11"
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`block transition-all rounded-full ${
              index === currentSlide
                ? highContrast
                  ? 'w-12 h-4 bg-white border-2 border-white'
                  : 'w-10 sm:w-12 h-2.5 sm:h-3 bg-white'
                : highContrast
                ? 'w-3 h-4 bg-white/50 border-2 border-white'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/75'
            }`} />
          </button>
        ))}
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-20 sm:h-24 md:h-32 bg-gradient-to-t ${
        highContrast ? 'from-black/90' : 'from-black/40'
      } to-transparent pointer-events-none`}></div>
    </div>
  );
}
