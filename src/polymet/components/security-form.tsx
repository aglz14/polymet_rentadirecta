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
import { Progress } from "@/components/ui/progress";
import {
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
  AlertCircleIcon,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SecurityForm() {
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "newPassword") {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password: string) => {
    // Simple password strength calculation
    let strength = 0;

    if (password.length >= 8) strength += 25;
    if (password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^A-Za-z0-9]/)) strength += 25;

    setPasswordStrength(strength);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "";
    if (passwordStrength <= 25) return "Débil";
    if (passwordStrength <= 50) return "Regular";
    if (passwordStrength <= 75) return "Buena";
    return "Fuerte";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-gray-200";
    if (passwordStrength <= 25) return "bg-red-500";
    if (passwordStrength <= 50) return "bg-orange-500";
    if (passwordStrength <= 75) return "bg-yellow-500";
    return "bg-green-500";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.currentPassword ||
      !formData.newPassword ||
      !formData.confirmPassword
    ) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      toast({
        title: "Error",
        description: "Las contraseñas nuevas no coinciden.",
        variant: "destructive",
      });
      return;
    }

    if (passwordStrength < 50) {
      toast({
        title: "Contraseña débil",
        description: "Por favor, utiliza una contraseña más segura.",
        variant: "destructive",
      });
      return;
    }

    setIsSaving(true);

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false);
      setFormData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
      setPasswordStrength(0);

      toast({
        title: "Contraseña actualizada",
        description: "Tu contraseña ha sido actualizada correctamente.",
        duration: 3000,
      });
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-[#1B2A55] flex items-center gap-2">
          <LockIcon className="h-5 w-5" />
          Seguridad
        </CardTitle>
        <CardDescription>
          Actualiza tu contraseña y configura opciones de seguridad
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="currentPassword" className="text-sm font-medium">
                Contraseña actual
              </Label>
              <div className="relative">
                <Input
                  id="currentPassword"
                  name="currentPassword"
                  type={showCurrentPassword ? "text" : "password"}
                  value={formData.currentPassword}
                  onChange={handleChange}
                  className="w-full pr-10"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                >
                  {showCurrentPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="newPassword" className="text-sm font-medium">
                Nueva contraseña
              </Label>
              <div className="relative">
                <Input
                  id="newPassword"
                  name="newPassword"
                  type={showNewPassword ? "text" : "password"}
                  value={formData.newPassword}
                  onChange={handleChange}
                  className="w-full pr-10"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                >
                  {showNewPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {formData.newPassword && (
                <div className="space-y-1 mt-1">
                  <div className="flex justify-between items-center text-xs">
                    <span>Seguridad de la contraseña</span>
                    <span
                      className={`font-medium ${
                        passwordStrength <= 25
                          ? "text-red-500"
                          : passwordStrength <= 50
                            ? "text-orange-500"
                            : passwordStrength <= 75
                              ? "text-yellow-500"
                              : "text-green-500"
                      }`}
                    >
                      {getPasswordStrengthText()}
                    </span>
                  </div>
                  <Progress
                    value={passwordStrength}
                    className={`h-1 ${getPasswordStrengthColor()}`}
                  />

                  <ul className="text-xs text-muted-foreground space-y-1 mt-2">
                    <li className="flex items-center gap-1">
                      {formData.newPassword.length >= 8 ? (
                        <CheckIcon className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircleIcon className="h-3 w-3 text-muted-foreground" />
                      )}
                      Mínimo 8 caracteres
                    </li>
                    <li className="flex items-center gap-1">
                      {formData.newPassword.match(/[A-Z]/) ? (
                        <CheckIcon className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircleIcon className="h-3 w-3 text-muted-foreground" />
                      )}
                      Al menos una letra mayúscula
                    </li>
                    <li className="flex items-center gap-1">
                      {formData.newPassword.match(/[0-9]/) ? (
                        <CheckIcon className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircleIcon className="h-3 w-3 text-muted-foreground" />
                      )}
                      Al menos un número
                    </li>
                    <li className="flex items-center gap-1">
                      {formData.newPassword.match(/[^A-Za-z0-9]/) ? (
                        <CheckIcon className="h-3 w-3 text-green-500" />
                      ) : (
                        <AlertCircleIcon className="h-3 w-3 text-muted-foreground" />
                      )}
                      Al menos un carácter especial
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-sm font-medium">
                Confirmar nueva contraseña
              </Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full pr-10"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full px-3"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <EyeIcon className="h-4 w-4 text-muted-foreground" />
                  )}
                </Button>
              </div>
              {formData.newPassword &&
                formData.confirmPassword &&
                formData.newPassword !== formData.confirmPassword && (
                  <p className="text-xs text-red-500 mt-1">
                    Las contraseñas no coinciden
                  </p>
                )}
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              type="submit"
              className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
              disabled={isSaving}
            >
              {isSaving ? (
                <span className="flex items-center gap-1">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Actualizando...
                </span>
              ) : (
                "Actualizar contraseña"
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
