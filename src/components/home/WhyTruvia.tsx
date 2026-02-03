import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: "/assets/icons/drip.png",
    title: "Drip Free",
  },
  {
    icon: "/assets/icons/scratch-res.png",
    title: "Scratch Resistant",
  },
  {
    icon: "/assets/icons/rust.png",
    title: "Rust Free",
  },
  {
    icon: "/assets/icons/long-life.png",
    title: "Long Life",
  },
  {
    icon: "/assets/icons/temperature.png",
    title: "Temperature Friendly",
  },
  {
    icon: "/assets/icons/less-main.png",
    title: "Less Maintenance",
  },
];

const WhyTruvia = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Content - Leo Taps Style Layout */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              <span className="text-foreground">Why </span>
              <span className="text-primary">TRUVIA?</span>
            </h2>
            <p className="text-secondary font-semibold text-base sm:text-lg mb-4">
              Quality is at the core of everything we do!
            </p>
            <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              We "TRUVIA POLYPLAST" have gained success in the market by manufacturing 
              and wholesaling a remarkable gamut of P.T.M.T Taps, Plastic Valve, 
              Plastic & Shower, Connection Pipe & Many More Products. We are an 
              ISO 9001:2015 certified company.
            </p>
            <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Our product range is highly acclaimed in the market for its high durability, 
              premium quality, excellent performance and longer service life. We ensure 
              that raw material used in the production process is of superlative quality 
              and is reliably sourced. This outstanding range of products is offered by us 
              at rock bottom prices.
            </p>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-sm sm:text-base">
                Learn More About Us
              </Button>
            </Link>
          </div>

          {/* Right - Image/Video Placeholder */}
          <div className="relative">
            <div className="aspect-video bg-muted rounded-xl sm:rounded-2xl image-placeholder overflow-hidden shadow-lg">
              <p className="text-sm text-muted-foreground">Video Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Feature Icons Row - Like Leo Taps stats section style */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mb-2 sm:mb-3 flex items-center justify-center transition-transform group-hover:scale-110">
                <img 
                  src={feature.icon} 
                  alt={feature.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyTruvia;
