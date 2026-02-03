import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { Series } from "@/data/products";

interface SeriesCardProps {
  series: Series;
}

const SeriesCard = ({ series }: SeriesCardProps) => {
  const isComingSoon = series.name === "Coming Soon";

  return (
    <Link
      to={isComingSoon ? "#" : `/products/${series.categorySlug}/${series.slug}`}
      className={`group block bg-background rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
        isComingSoon ? "cursor-default opacity-75" : ""
      }`}
      onClick={(e) => isComingSoon && e.preventDefault()}
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-muted image-placeholder relative overflow-hidden">
        {isComingSoon ? (
          <div className="flex flex-col items-center justify-center gap-2">
            <Clock className="w-8 h-8 text-muted-foreground" />
            <p className="text-sm">Coming Soon</p>
          </div>
        ) : (
          <p className="text-xs sm:text-sm">Image Coming Soon</p>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors" />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 md:p-5">
        <span className="text-xs text-secondary font-medium uppercase tracking-wider">
          {series.category}
        </span>
        <h3 className="font-bold text-base sm:text-lg text-foreground mt-1 mb-2 group-hover:text-primary transition-colors line-clamp-1">
          {series.name}
        </h3>
        {!isComingSoon && (
          <>
            <div className="flex items-center gap-2 text-primary text-xs sm:text-sm font-medium">
              <span>View Products</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
            </div>
            <p className="text-xs text-muted-foreground mt-1 sm:mt-2">
              {series.products.length} {series.products.length === 1 ? "product" : "products"}
            </p>
          </>
        )}
      </div>
    </Link>
  );
};

export default SeriesCard;
