import Layout from "@/components/layout/Layout";
import { Award, Users, Factory, Shield } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Learn about TRUVIA POLYPLAST - Your trusted partner in quality taps and fittings
          </p>
        </div>
      </section>

      {/* Why Truvia Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                <span className="text-foreground">About </span>
                <span className="text-primary">TRUVIA</span>
              </h2>
              <p className="text-secondary font-semibold text-base sm:text-lg mb-4">
                Premium PTMT Taps & Bath Fittings Manufacturer
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Truvia is a trusted manufacturer and supplier of premium PTMT taps and bath fittings. 
                Though recently established, our brand is built on strong foundations of quality, 
                innovation, integrity, and customer satisfaction. We are committed to delivering 
                world-class products that combine modern design, superior durability, and reliable performance.
              </p>
              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Each Truvia product is crafted using advanced manufacturing techniques and high-grade 
                materials to ensure strength, smooth functionality, and an elegant finish. Our focus 
                is not just on manufacturing fittings, but on enhancing everyday living by providing 
                confidence, comfort, and style to bathrooms and kitchens.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                With a growing network of dealers and customers across India, Truvia aims to become 
                one of the nation's most trusted and preferred bath fittings brands, continuously 
                setting new benchmarks in the PTMT industry through innovation, transparency, and 
                sustainable practices.
              </p>
            </div>

            {/* Right - Image/Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-muted rounded-xl sm:rounded-2xl image-placeholder overflow-hidden shadow-lg">
                <p className="text-sm text-muted-foreground">Video Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-primary">Our Core Values</h2>
          <p className="section-subtitle">
            The principles that guide everything we do
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Quality First</h3>
              <p className="text-sm text-muted-foreground">
                Uncompromising quality in every product we manufacture
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Customer Focus</h3>
              <p className="text-sm text-muted-foreground">
                Your satisfaction is our top priority
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Factory className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Innovation</h3>
              <p className="text-sm text-muted-foreground">
                Continuously improving our products and processes
              </p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center shadow-sm">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-sm text-muted-foreground">
                Honest and transparent business practices
              </p>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
