import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Wrench, ShowerHead, PipetteIcon, CircleDot } from "lucide-react";

const categories = [
  {
    name: "PTMT Taps",
    slug: "ptmt-taps",
    icon: Droplets,
    gradient: "from-primary via-primary/80 to-secondary",
  },
  {
    name: "PPRC Taps",
    slug: "pprc-taps",
    icon: Wrench,
    gradient: "from-secondary via-secondary/80 to-accent",
  },
  {
    name: "Shower & Faucets",
    slug: "shower-faucets",
    icon: ShowerHead,
    gradient: "from-accent via-accent/80 to-primary",
  },
  {
    name: "Pipes & Ball Cock",
    slug: "pipes-ball-cock",
    icon: PipetteIcon,
    gradient: "from-primary via-accent/60 to-secondary",
  },
  {
    name: "Ball Valve",
    slug: "ball-valve",
    icon: CircleDot,
    gradient: "from-secondary via-primary/60 to-accent",
  },
];

const TopCategories = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
            Our Products
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Explore Our Range
          </h2>
        </div>

        {/* Grid - All same size cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isComingSoon = category.name === "Ball Valve";
            return (
              <Link
                key={index}
                to={`/products/${category.slug}`}
                className={`group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${
                  isComingSoon ? "opacity-80" : ""
                }`}
              >
                {/* Image/Visual Area */}
                <div className={`relative aspect-square bg-gradient-to-br ${category.gradient} overflow-hidden`}>
                  {/* Decorative circles */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute -top-8 -right-8 w-32 h-32 border-[6px] border-white rounded-full" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 border-[4px] border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-[3px] border-white rounded-full" />
                  </div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                      <Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white drop-shadow-lg" />
                    </div>
                  </div>

                  {/* Coming Soon Badge */}
                  {isComingSoon && (
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 text-[10px] sm:text-xs font-semibold text-primary">
                      Coming Soon
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="p-3 sm:p-4 bg-card">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                      {category.name}
                    </h3>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary group-hover:text-primary-foreground group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-primary text-primary-foreground font-semibold text-sm sm:text-base hover:bg-primary/90 transition-colors group"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
