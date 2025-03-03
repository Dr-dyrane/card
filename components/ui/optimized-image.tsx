import React from "react";
import { cn, getOptimizedImageUrl } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}

export const OptimizedImage = ({
  src,
  alt,
  className,
  sizes = "100vw",
  ...props
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // Optimize image for faster loading
  const optimizedSrc = getOptimizedImageUrl(src, {
    width: 1200, // Max width of 1200px
    quality: 75 // Image quality of 75%
  });

  return (
    <div className={cn(
      "relative bg-muted/10 w-full h-auto overflow-hidden rounded-md",
      isLoading && "animate-pulse",
      className
    )}>
      <img
        src={optimizedSrc} // Load optimized image
        alt={alt}
        sizes={sizes}
        loading="lazy"
        className={cn(
          "transition-opacity duration-300 object-cover w-full rounded-md h-auto aspect-[2/1] md:aspect-[16/9] lg:aspect-[4/3]",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setError(true);
          setIsLoading(false);
        }}
        {...props}
      />
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/5">
          <p className="text-sm text-muted-foreground">Failed to load image</p>
        </div>
      )}
    </div>
  );
};