import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  variant?: "full" | "icon";
  withDomain?: boolean;
}

export default function BrandLogo({
  className,
  variant = "full",
  withDomain = false,
}: BrandLogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {variant === "full" ? (
        <div className="flex items-center">
          {/* House icon part */}
          <div className="relative h-8 w-8 mr-2">
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Navy blue part */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path d="M25 85V40L50 20L75 40V85H25Z" fill="#1B2A55" />
                <path
                  d="M75 40L50 20L25 40L0 60V85H25V40L50 20"
                  fill="#1B2A55"
                />
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-full h-full">
              {/* Green accent */}
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path d="M25 85V65L0 85H25Z" fill="#86BC65" />
              </svg>
            </div>
          </div>

          {/* Text part */}
          <div className="flex items-baseline">
            <span className="text-xl font-bold text-[#1B2A55]">Renta</span>
            <span className="text-xl font-bold text-[#86BC65]">Directa</span>
            {withDomain && (
              <span className="text-xl font-bold text-[#1B2A55]">.mx</span>
            )}
          </div>
        </div>
      ) : (
        // Icon only version
        <div className="relative h-8 w-8">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Navy blue part */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M25 85V40L50 20L75 40V85H25Z" fill="#1B2A55" />
              <path d="M75 40L50 20L25 40L0 60V85H25V40L50 20" fill="#1B2A55" />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Green accent */}
            <svg
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path d="M25 85V65L0 85H25Z" fill="#86BC65" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
