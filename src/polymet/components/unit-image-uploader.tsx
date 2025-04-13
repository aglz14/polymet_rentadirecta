import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ImagePlusIcon, UploadIcon, XIcon } from "lucide-react";

interface UnitImageUploaderProps {
  unitId: string;
  onUpload?: (images: File[]) => void;
  className?: string;
}

export default function UnitImageUploader({
  unitId,
  onUpload,
  className,
}: UnitImageUploaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPrimary, setIsPrimary] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);

      // Create previews
      filesArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviews((prev) => [...prev, reader.result as string]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles((prev) => prev.filter((_, i) => i !== index));
    setPreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (selectedFiles.length === 0) return;

    setIsUploading(true);

    // Simulate upload delay
    setTimeout(() => {
      if (onUpload) {
        onUpload(selectedFiles);
      }

      // Reset form
      setSelectedFiles([]);
      setPreviews([]);
      setTitle("");
      setDescription("");
      setIsPrimary(false);
      setIsUploading(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className={className}>
          <ImagePlusIcon className="mr-2 h-4 w-4" />
          Añadir Imágenes
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Subir imágenes</DialogTitle>
          <DialogDescription>
            Sube imágenes para la unidad {unitId}. Las imágenes ayudarán a
            mostrar las características de la propiedad.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            {selectedFiles.length === 0 ? (
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="images">Imágenes</Label>
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-muted/40 hover:bg-muted/60"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadIcon className="w-8 h-8 mb-3 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Haz clic para subir
                        </span>{" "}
                        o arrastra y suelta
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PNG, JPG o WEBP (MAX. 5MB)
                      </p>
                    </div>
                    <Input
                      id="dropzone-file"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>Imágenes seleccionadas ({selectedFiles.length})</Label>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedFiles([]);
                      setPreviews([]);
                    }}
                  >
                    Limpiar todo
                  </Button>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {previews.map((preview, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={preview}
                        alt={`Vista previa ${index + 1}`}
                        className="h-24 w-full object-cover rounded-md"
                      />

                      <button
                        type="button"
                        className="absolute top-1 right-1 bg-background/80 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFile(index)}
                      >
                        <XIcon className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                  <label
                    htmlFor="add-more-files"
                    className="h-24 border-2 border-dashed rounded-md flex items-center justify-center cursor-pointer bg-muted/40 hover:bg-muted/60"
                  >
                    <div className="flex flex-col items-center">
                      <ImagePlusIcon className="h-6 w-6 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground mt-1">
                        Añadir más
                      </span>
                    </div>
                    <Input
                      id="add-more-files"
                      type="file"
                      accept="image/*"
                      multiple
                      className="hidden"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </div>
            )}

            {selectedFiles.length > 0 && (
              <>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="title">Título</Label>
                  <Input
                    id="title"
                    placeholder="Ej: Vista principal, Cocina, Dormitorio"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea
                    id="description"
                    placeholder="Breve descripción de la imagen"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    id="primary"
                    checked={isPrimary}
                    onCheckedChange={setIsPrimary}
                  />

                  <Label htmlFor="primary">
                    Establecer como imagen principal
                  </Label>
                </div>
              </>
            )}
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
              disabled={selectedFiles.length === 0 || isUploading}
            >
              {isUploading ? "Subiendo..." : "Subir imágenes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
