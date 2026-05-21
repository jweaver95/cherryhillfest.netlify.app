import { useEffect, useState } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-04T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeRemaining({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-[#B22222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
            Countdown to July 4, 2026
          </h2>
          <p className="text-white/90 text-lg">
            The 80th Anniversary Celebration
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="text-5xl md:text-6xl font-serif font-black text-[#B22222] mb-2">
              {timeRemaining.days}
            </div>
            <div className="text-sm md:text-base font-bold text-[#4A3728] uppercase tracking-wider">
              Days
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="text-5xl md:text-6xl font-serif font-black text-[#D4AF37] mb-2">
              {timeRemaining.hours}
            </div>
            <div className="text-sm md:text-base font-bold text-[#4A3728] uppercase tracking-wider">
              Hours
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="text-5xl md:text-6xl font-serif font-black text-[#2E8B57] mb-2">
              {timeRemaining.minutes}
            </div>
            <div className="text-sm md:text-base font-bold text-[#4A3728] uppercase tracking-wider">
              Minutes
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
            <div className="text-5xl md:text-6xl font-serif font-black text-[#B22222] mb-2">
              {timeRemaining.seconds}
            </div>
            <div className="text-sm md:text-base font-bold text-[#4A3728] uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
