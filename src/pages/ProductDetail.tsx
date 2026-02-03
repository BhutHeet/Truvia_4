import React from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { getProductById, getSeriesBySlug, Product, Series } from "@/data/products";
import { ChevronRight, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

type SpecItem = {
  label: string;
  value: string;
};

const getProductContent = (product: Product, series: Series): { features: string[]; specs: SpecItem[] } => {
  const defaultFeatures = product.features;
  const defaultSpecs: SpecItem[] = [
    { label: "Material", value: "PTMT / PP" },
    { label: "Finish", value: "Chrome / Colored" },
    { label: "Warranty", value: "1 Year" },
  ];

  const { categorySlug, slug } = series;

  // PTMT Taps
  if (categorySlug === "ptmt-taps") {
    if (slug === "aura-series") {
      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "Green & White" },
        ],
      };
    }

    if (slug === "fusion-series") {
      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "Blue & White" },
        ],
      };
    }

    if (slug === "charcoal-series") {
      return {
        features: ["15MM Rising Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "Black & White" },
        ],
      };
    }

    if (slug === "marble-series") {
      // Special case for Wall Mixture
      if (product.id === "MAR-1009" || product.name === "Wall Mixture") {
        return {
          features: ["20MM Ceramic Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
          specs: [
            { label: "Material", value: "PTMT" },
            { label: "Warranty", value: "3 years" },
            { label: "Finish", value: "Glossy" },
            { label: "Color", value: "Blue & White" },
          ],
        };
      }

      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "Blue & White" },
        ],
      };
    }

    if (slug === "royal-series") {
      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "Premium Finish", "SS-304 Insert"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "Blue & White" },
        ],
      };
    }

    if (slug === "t-head-taps") {
      return {
        features: ["T-Head Design", "90° Angle", "Durable", "Easy Grip"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "White" },
        ],
      };
    }
  }

  // PPRC Taps
  if (categorySlug === "pprc-taps") {
    if (slug === "hexa-series") {
      return {
        features: ["15MM Rising Spindle", "0% Drop", "LightWeight", "Corrosion Resistance"],
        specs: [
          { label: "Material", value: "PPRC" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "As Per Standard" },
          { label: "Color", value: "Green & White" },
        ],
      };
    }

    if (slug === "pprc-charcoal-series") {
      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "LightWeight", "Corrosion Resistance"],
        specs: [
          { label: "Material", value: "PPRC" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "As Per Standard" },
          { label: "Color", value: "Black & White" },
        ],
      };
    }

    if (slug === "pprc-fusion-series" || slug === "pprc-royal-series") {
      return {
        features: ["15MM Ceramic Spindle", "0% Drop", "LightWeight", "Corrosion Resistance"],
        specs: [
          { label: "Material", value: "PPRC" },
          { label: "Warranty", value: "3 years" },
          { label: "Finish", value: "As Per Standard" },
          { label: "Color", value: "Blue & White" },
        ],
      };
    }
  }

  // Shower & Faucets
  if (categorySlug === "shower-faucets") {
    if (slug === "health-faucet") {
      return {
        features: [
          "Comfortable Grip Design",
          "Leak-Proof Performance",
          "Easy Installation",
          "Ideal for Hard Water",
        ],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "1 year" },
          { label: "Finish", value: "Glossy" },
          { label: "Color", value: "White" },
        ],
      };
    }

    if (slug === "abs-shower") {
      return {
        features: ["4X4 Size", "ABS Construction", "Multiple Spray", "Easy Clean"],
        specs: [
          { label: "Material", value: "ABS" },
          { label: "Warranty", value: "1 year" },
          { label: "Finish", value: "As Per Standard" },
          { label: "Color", value: "White" },
        ],
      };
    }
  }

  // Pipes & Ball Cock
  if (categorySlug === "pipes-ball-cock") {
    if (slug === "waste-pipe") {
      return {
        features: [
          "Smooth Internal Surface",
          "Superior Durability",
          "No Rust & Corrosion",
          "Hot/Cold Water Compatibility",
        ],
        specs: [
          { label: "Material", value: "PPCP" },
          { label: "Length", value: "1 meter" },
          { label: "Warranty", value: "1 year" },
          { label: "Color", value: "White" },
        ],
      };
    }

    if (slug === "connection-pipe") {
      return {
        features: [
          "Flexible Design",
          "Rust Free & Leak Free",
          "Sturdy Threaded Ends (PTMT Nuts)",
          "Tool Free Installation",
        ],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "1 Year" },
          { label: "Finish", value: "As Per Standard" },
          { label: "Color", value: "White" },
        ],
      };
    }

    if (slug === "ball-cock") {
      return {
        features: ["Easy Installation", "High Performance", "Long Life", "Automatic Turn-Off Mechanism"],
        specs: [
          { label: "Material", value: "PTMT" },
          { label: "Warranty", value: "1 year" },
          { label: "Color", value: "Blue & White" },
        ],
      };
    }
  }

  // Fallback
  return {
    features: defaultFeatures,
    specs: defaultSpecs,
  };
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = productId ? getProductById(productId) : null;
  const series = product ? getSeriesBySlug(product.seriesSlug) : null;

  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (!product || !series) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link to="/products" className="text-secondary hover:underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  // Get related products (other products in the same series)
  const relatedProducts = series.products.filter((p) => p.id !== product.id).slice(0, 4);

  // Resolve features & specifications based on category/series
  const { features, specs } = getProductContent(product, series);

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm flex-wrap">
            <Link to="/" className="text-muted-foreground hover:text-primary">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link to="/products" className="text-muted-foreground hover:text-primary">
              Products
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <Link
              to={`/products/${series.categorySlug}/${series.slug}`}
              className="text-muted-foreground hover:text-primary"
            >
              {series.name}
            </Link>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center image-placeholder">
                  <p className="text-muted-foreground">Image Coming Soon</p>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <span className="text-secondary font-semibold uppercase tracking-wider text-sm">
                {series.name}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-4">
                {product.name}
                <span className="ml-2 text-xl md:text-2xl font-semibold text-primary">
                  ({product.id})
                </span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">Key Features</h3>
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications */}
              <div className="mb-8 p-6 bg-muted rounded-xl">
                <h3 className="text-lg font-semibold text-foreground mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {specs.map((spec) => (
                    <div key={spec.label}>
                      <span className="text-muted-foreground">{spec.label}</span>
                      <p className="font-medium">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+916353329493">
                  <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                    <Phone className="mr-2 w-4 h-4" />
                    Call for Price
                  </Button>
                </a>
                <a href="mailto:info@truviapolyplast.com">
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Mail className="mr-2 w-4 h-4" />
                    Send Inquiry
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-primary mb-8">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ProductDetail;
