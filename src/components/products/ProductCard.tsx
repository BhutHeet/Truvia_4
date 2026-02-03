import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="group block bg-background rounded-lg sm:rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border"
    >
      {/* Image */}
      <div className="aspect-square bg-muted overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center image-placeholder">
            <p className="text-xs sm:text-sm text-muted-foreground">Image Coming Soon</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5 sm:p-3 md:p-4">
        <h4 className="font-semibold text-foreground mb-1.5 sm:mb-2 line-clamp-2 group-hover:text-primary transition-colors text-xs sm:text-sm md:text-base">
          {product.name}
        </h4>
        <div className="inline-flex items-center gap-1 sm:gap-2 text-secondary group-hover:text-primary text-xs sm:text-sm font-medium transition-colors">
          View More
          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
