import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import SeriesCard from "@/components/products/SeriesCard";
import CategoryCard from "@/components/products/CategoryCard";
import { categories, getCategoryBySlug } from "@/data/products";
import { ChevronRight } from "lucide-react";

const Products = () => {
  const { categorySlug } = useParams();

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [categorySlug]);

  // If category is specified, show series for that category
  const category = categorySlug ? getCategoryBySlug(categorySlug) : null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-gradient py-12 sm:py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4">
            {category ? category.name : "Our Products"}
          </h1>
          <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto px-4">
            {category
              ? category.description
              : "Explore our wide range of premium quality taps and fittings"}
          </p>
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
            {category && (
              <>
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0" />
                <span className="text-primary font-medium">{category.name}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Category Tabs (if no category selected) */}
      {!category && (
        <section className="py-4 sm:py-6 md:py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Link
                to="/products"
                className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-primary text-primary-foreground font-medium text-xs sm:text-sm"
              >
                All Products
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors font-medium text-xs sm:text-sm"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Content Grid */}
      <section className="py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          {category ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              {category.series.map((series) => (
                <SeriesCard key={series.slug} series={series} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {categories.map((cat) => (
                <CategoryCard key={cat.slug} category={cat} />
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
