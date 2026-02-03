import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 99, suffix: "+", label: "Products" },
  { value: 100, suffix: "%", label: "Quality Products" },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts(stats.map((stat) => Math.floor(stat.value * Math.min(progress, 1))));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-10 sm:py-12 md:py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2">
                {counts[index]}
                <span className="text-secondary">{stat.suffix}</span>
              </div>
              <p className="text-white/80 font-medium text-xs sm:text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
