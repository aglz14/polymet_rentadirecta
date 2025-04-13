import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { EyeIcon, EyeOffIcon, AlertCircleIcon } from "lucide-react";
import BrandLogo from "@/polymet/components/brand-logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!email || !password) {
      setError("Por favor complete todos los campos");
      return;
    }

    // Here you would typically handle authentication
    console.log("Login attempt with:", { email, rememberMe });

    // Navigate to dashboard using React Router
    navigate("/dashboard");
  };

  return (
    <div className="container flex h-screen w-full flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] md:w-[450px]">
        <div className="flex flex-col space-y-2 text-center">
          <div className="mx-auto mb-4">
            <Link to="/">
              <BrandLogo />
            </Link>
          </div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Iniciar Sesión
          </h1>
          <p className="text-sm text-muted-foreground">
            Ingrese sus credenciales para acceder a su cuenta
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            {error && (
              <div className="mb-4 flex items-center gap-2 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                <AlertCircleIcon className="h-4 w-4" />
                <p>{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Contraseña</Label>
                    <Link
                      to="/recuperar-contrasena"
                      className="text-xs text-muted-foreground underline underline-offset-4 hover:text-primary"
                    >
                      ¿Olvidó su contraseña?
                    </Link>
                  </div>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />

                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) =>
                      setRememberMe(checked as boolean)
                    }
                  />

                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Recordarme
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                >
                  Iniciar Sesión
                </Button>
              </div>
            </form>
          </CardContent>

          <Separator className="my-4" />

          <CardFooter className="flex flex-col gap-4">
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                ¿No tiene una cuenta?
              </span>{" "}
              <Link
                to="/registro"
                className="font-medium text-[#1B2A55] underline underline-offset-4 hover:text-[#1B2A55]/90"
              >
                Registrarse
              </Link>
            </div>

            <div className="grid gap-2">
              <Button variant="outline" type="button" className="w-full">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="#4285F4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" />
                  <path
                    d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z"
                    fill="#EA4335"
                  />

                  <path
                    d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5718 17.5742 13.3037 18.001 12 18C9.39903 18 7.19053 16.3415 6.35853 14.027L3.09753 16.5395C4.75253 19.778 8.11353 22 12 22Z"
                    fill="#34A853"
                  />

                  <path
                    d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                    fill="#FBBC05"
                  />
                </svg>
                Continuar con Google
              </Button>

              <Button variant="outline" type="button" className="w-full">
                <svg
                  className="mr-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.6576 2.1C14.2576 2.1 13.0576 3.2 11.4576 3.2C9.75758 3.2 8.35758 2.1 6.35758 2.1C4.45758 2.1 2.35758 3.3 1.05758 5.3C-0.942422 8.3 -0.242422 13.8 2.55758 17.7C3.55758 19.2 4.95758 20.9 6.75758 20.9C8.45758 20.9 9.05758 19.8 11.1576 19.8C13.2576 19.8 13.7576 20.9 15.4576 20.9C17.2576 20.9 18.6576 19.2 19.6576 17.7C20.4576 16.5 20.7576 15.9 21.3576 14.4C17.5576 13 16.6576 7.4 20.3576 5.4C19.2576 3.5 17.8576 2.1 16.6576 2.1Z"
                    fill="currentColor"
                  />
                </svg>
                Continuar con Apple
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
