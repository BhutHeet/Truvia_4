import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductCard from "@/components/products/ProductCard";
import { getSeriesBySlug } from "@/data/products";
import { ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const SeriesDetail = () => {
  const { categorySlug, seriesSlug } = useParams();
  const series = seriesSlug ? getSeriesBySlug(seriesSlug) : null;

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [seriesSlug]);

  if (!series) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 sm:py-20 text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-primary mb-4">Series Not Found</h1>
          <Link to="/products" className="text-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  // Check if this is a "Coming Soon" series with no products
  const isComingSoon = series.products.length === 0;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 text-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Image Placeholder */}
            <div className="hidden lg:flex justify-center order-1 lg:order-none">
              <div className="w-60 h-60 md:w-80 md:h-80 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <div className="text-center text-white/60">
                  <p className="text-base md:text-lg font-medium">Image Coming Soon</p>
                  <p className="text-xs md:text-sm">{series.name}</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="text-center lg:text-right">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4">
                {series.name.split(" ")[0]}
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Collection
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80 italic">
                {series.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-muted py-3 sm:py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Products
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
            <Link
              to={`/products/${categorySlug}`}
              className="text-muted-foreground hover:text-primary"
            >
              {series.category}
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
            <span className="text-primary font-medium">{series.name}</span>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          {isComingSoon ? (
            <div className="text-center py-12 sm:py-16 md:py-20">
              <div className="max-w-md mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">
                  Coming Soon
                </h2>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  We're working on adding new products to this series. Stay tuned for exciting updates!
                </p>
                <Link to={`/products/${categorySlug}`}>
                  <Button className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to {series.category}
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-primary mb-4 sm:mb-6 md:mb-8">
                Products in {series.name}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                {series.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default SeriesDetail;
