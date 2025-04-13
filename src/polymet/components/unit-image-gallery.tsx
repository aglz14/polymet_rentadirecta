import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MaximizeIcon,
  XIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface UnitImageGalleryProps {
  images: string[];
  title?: string;
  className?: string;
}

export default function UnitImageGallery({
  images,
  title,
  className,
}: UnitImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  if (!images || images.length === 0) {
    return (
      <Card className={cn("overflow-hidden", className)}>
        <CardContent className="p-0">
          <div className="aspect-video w-full bg-muted flex items-center justify-center">
            <p className="text-muted-foreground">No hay imágenes disponibles</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <>
      <Card
        className={cn(
          "overflow-hidden",
          className,
          isFullscreen ? "hidden" : ""
        )}
      >
        <CardContent className="p-0 relative">
          <div className="aspect-video w-full overflow-hidden">
            <img
              src={images[currentIndex]}
              alt={
                title
                  ? `${title} - Imagen ${currentIndex + 1}`
                  : `Imagen ${currentIndex + 1}`
              }
              className="h-full w-full object-cover"
            />
          </div>

          {images.length > 1 && (
            <>
              <Button
                variant="secondary"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-8 w-8"
                onClick={handlePrevious}
              >
                <ChevronLeftIcon className="h-4 w-4" />
                <span className="sr-only">Anterior</span>
              </Button>

              <Button
                variant="secondary"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-8 w-8"
                onClick={handleNext}
              >
                <ChevronRightIcon className="h-4 w-4" />
                <span className="sr-only">Siguiente</span>
              </Button>
            </>
          )}

          <div className="absolute bottom-2 right-2 flex gap-2">
            <Button
              variant="secondary"
              size="icon"
              className="bg-background/80 hover:bg-background/90 h-8 w-8 rounded-full"
              onClick={toggleFullscreen}
            >
              <MaximizeIcon className="h-4 w-4" />
              <span className="sr-only">Pantalla completa</span>
            </Button>
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-1.5 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-background/95 flex flex-col">
          <div className="flex items-center justify-between p-4">
            <h3 className="text-lg font-medium">
              {title
                ? `${title} - Imagen ${currentIndex + 1} de ${images.length}`
                : `Imagen ${currentIndex + 1} de ${images.length}`}
            </h3>
            <Button variant="ghost" size="icon" onClick={toggleFullscreen}>
              <XIcon className="h-5 w-5" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>

          <div className="flex-1 flex items-center justify-center relative">
            <img
              src={images[currentIndex]}
              alt={
                title
                  ? `${title} - Imagen ${currentIndex + 1}`
                  : `Imagen ${currentIndex + 1}`
              }
              className="max-h-full max-w-full object-contain"
            />

            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10"
                  onClick={handlePrevious}
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                  <span className="sr-only">Anterior</span>
                </Button>

                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 rounded-full h-10 w-10"
                  onClick={handleNext}
                >
                  <ChevronRightIcon className="h-6 w-6" />
                  <span className="sr-only">Siguiente</span>
                </Button>
              </>
            )}
          </div>

          <div className="p-4 flex justify-center gap-2">
            {images.length > 1 &&
              images.map((image, index) => (
                <button
                  key={index}
                  className={`h-16 w-16 rounded-md overflow-hidden border-2 transition-all ${
                    index === currentIndex
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                >
                  <img
                    src={image}
                    alt={`Miniatura ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
          </div>
        </div>
      )}
    </>
  );
}
