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
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, FileIcon, UploadIcon, XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

const documentSchema = z.object({
  title: z.string().min(1, "El título es requerido"),
  type: z.string().min(1, "El tipo de documento es requerido"),
  description: z.string().optional(),
  file: z.instanceof(File, { message: "El archivo es requerido" }),
  isRentContract: z.boolean().default(false),
  expirationDate: z.date().optional(),
  tenantIds: z.array(z.string()).optional(),
});

type DocumentFormValues = z.infer<typeof documentSchema>;

interface DocumentUploadDialogProps {
  onUpload: (values: DocumentFormValues) => void;
  tenants?: { id: string; name: string }[];
  trigger?: React.ReactNode;
}

export default function DocumentUploadDialog({
  onUpload,
  tenants = [],
  trigger,
}: DocumentUploadDialogProps) {
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const form = useForm<DocumentFormValues>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: "",
      type: "",
      description: "",
      isRentContract: false,
      tenantIds: [],
    },
  });

  const isRentContract = form.watch("isRentContract");

  const handleSubmit = (values: DocumentFormValues) => {
    onUpload(values);
    setOpen(false);
    form.reset();
    setSelectedFile(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      form.setValue("file", file);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
      form.setValue("file", file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    form.setValue("file", undefined as any);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
            <UploadIcon className="mr-2 h-4 w-4" />
            Subir Documento
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle>Subir Documento</DialogTitle>
          <DialogDescription>
            Sube un documento legal o contrato para tu propiedad.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem className="col-span-2">
                    <FormLabel>Título del Documento</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Contrato de Arrendamiento"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Documento</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar tipo" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="contrato">Contrato</SelectItem>
                        <SelectItem value="recibo">Recibo</SelectItem>
                        <SelectItem value="inventario">Inventario</SelectItem>
                        <SelectItem value="legal">Documento Legal</SelectItem>
                        <SelectItem value="otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isRentContract"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-end space-x-2 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-sm font-normal">
                      Es un contrato de arrendamiento
                    </FormLabel>
                  </FormItem>
                )}
              />
            </div>

            {isRentContract && (
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="expirationDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Fecha de Vencimiento</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: es })
                              ) : (
                                <span>Seleccionar fecha</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date() || date > new Date("2100-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {tenants.length > 0 && (
                  <FormField
                    control={form.control}
                    name="tenantIds"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inquilinos Asociados</FormLabel>
                        <Select
                          onValueChange={(value) =>
                            field.onChange([...(field.value || []), value])
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Seleccionar inquilino" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {tenants.map((tenant, index) => (
                              <SelectItem key={tenant.id} value={tenant.id}>
                                {tenant.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          {field.value && field.value.length > 0 ? (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {field.value.map((id, index) => {
                                const tenant = tenants.find((t) => t.id === id);
                                return (
                                  tenant && (
                                    <div
                                      key={id}
                                      className="flex items-center rounded-md bg-secondary px-2 py-1 text-xs"
                                    >
                                      {tenant.name}
                                      <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="ml-1 h-4 w-4 p-0"
                                        onClick={() =>
                                          field.onChange(
                                            field.value?.filter(
                                              (item) => item !== id
                                            )
                                          )
                                        }
                                      >
                                        <XIcon className="h-3 w-3" />
                                      </Button>
                                    </div>
                                  )
                                );
                              })}
                            </div>
                          ) : (
                            "Selecciona los inquilinos relacionados con este contrato"
                          )}
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
              </div>
            )}

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descripción (Opcional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Añade una descripción para este documento"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem>
                  <FormLabel>Archivo</FormLabel>
                  <FormControl>
                    <div
                      className={cn(
                        "border-2 border-dashed rounded-lg p-6 transition-colors",
                        dragActive
                          ? "border-[#1B2A55] bg-[#1B2A55]/5"
                          : "border-border",
                        selectedFile && "border-green-500 bg-green-50"
                      )}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <Input
                        id="file-upload"
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />

                      {selectedFile ? (
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <FileIcon className="h-8 w-8 text-[#1B2A55]" />
                            <div>
                              <p className="text-sm font-medium">
                                {selectedFile.name}
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {(selectedFile.size / 1024 / 1024).toFixed(2)}{" "}
                                MB
                              </p>
                            </div>
                          </div>
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={removeFile}
                          >
                            <XIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center">
                          <UploadIcon className="h-10 w-10 text-muted-foreground mb-2" />
                          <div className="mb-2">
                            <p className="font-medium">
                              Arrastra y suelta un archivo
                            </p>
                            <p className="text-xs text-muted-foreground">
                              o haz clic para seleccionar
                            </p>
                          </div>
                          <Button
                            type="button"
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              document.getElementById("file-upload")?.click();
                            }}
                          >
                            Seleccionar Archivo
                          </Button>
                        </div>
                      )}
                    </div>
                  </FormControl>
                  <FormDescription>
                    Formatos aceptados: PDF, DOC, DOCX, JPG, JPEG, PNG. Tamaño
                    máximo: 10MB.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
              >
                Subir Documento
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
