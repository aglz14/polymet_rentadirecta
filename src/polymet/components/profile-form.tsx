import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { UserIcon, MailIcon, BriefcaseIcon, CheckIcon } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface ProfileFormProps {
  initialData?: {
    name: string;
    email: string;
    position: string;
    avatar?: string;
  };
}

export default function ProfileForm({ initialData }: ProfileFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || "Juan Díaz",
    email: initialData?.email || "juan.diaz@example.com",
    position: initialData?.position || "Administrador",
    avatar: initialData?.avatar || "https://github.com/kdrnp.png",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setIsEditing(false);
      toast({
        title: "Perfil actualizado",
        description:
          "Tu información personal ha sido actualizada correctamente.",
        duration: 3000,
      });
    }, 1000);
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#1B2A55] flex items-center gap-2">
          <UserIcon className="h-5 w-5" />
          Información Personal
        </CardTitle>
        <CardDescription>
          Actualiza tu información personal y de contacto
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
            <Avatar className="h-20 w-20 border-2 border-border">
              <AvatarImage src={formData.avatar} alt={formData.name} />
              <AvatarFallback>{getInitials(formData.name)}</AvatarFallback>
            </Avatar>

            <div className="space-y-2 flex-1">
              <Label htmlFor="avatar-upload" className="text-sm font-medium">
                Foto de perfil
              </Label>
              <div className="flex items-center gap-2">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  disabled={!isEditing}
                >
                  Cambiar imagen
                </Button>
                {isEditing && (
                  <Button type="button" variant="ghost" size="sm">
                    Eliminar
                  </Button>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                Formatos permitidos: JPG, PNG. Tamaño máximo: 2MB
              </p>
            </div>
          </div>

          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <UserIcon className="h-4 w-4 text-muted-foreground" />
                  Nombre completo
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="position"
                  className="text-sm font-medium flex items-center gap-2"
                >
                  <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
                  Cargo
                </Label>
                <Input
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium flex items-center gap-2"
              >
                <MailIcon className="h-4 w-4 text-muted-foreground" />
                Correo electrónico
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full"
              />
            </div>
          </div>

          <div className="flex justify-end gap-2">
            {!isEditing ? (
              <Button
                type="button"
                onClick={() => setIsEditing(true)}
                className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
              >
                Editar información
              </Button>
            ) : (
              <>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      name: initialData?.name || "Juan Díaz",
                      email: initialData?.email || "juan.diaz@example.com",
                      position: initialData?.position || "Administrador",
                      avatar:
                        initialData?.avatar || "https://github.com/kdrnp.png",
                    });
                  }}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                  disabled={isSaving}
                >
                  {isSaving ? (
                    <span className="flex items-center gap-1">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Guardando...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <CheckIcon className="h-4 w-4" />
                      Guardar cambios
                    </span>
                  )}
                </Button>
              </>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
