import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileForm from "@/polymet/components/profile-form";
import SecurityForm from "@/polymet/components/security-form";
import RoleDisplay from "@/polymet/components/role-display";
import TeamManagement from "@/polymet/components/team-management";
import { Toaster } from "@/components/ui/toaster";

export default function ConfiguracionPage() {
  const [activeTab, setActiveTab] = useState("perfil");

  // Mock user data
  const userData = {
    name: "Juan Díaz",
    email: "juan.diaz@example.com",
    position: "Administrador",
    avatar: "https://github.com/kdrnp.png",
    role: "admin" as "admin" | "manager" | "viewer",
    isAdmin: true,
  };

  return (
    <div className="h-full flex flex-col">
      <div className="container max-w-screen-xl p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-[#1B2A55]">Configuración</h1>

          <Tabs
            defaultValue="perfil"
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-grow flex flex-col"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-full">
                <TabsTrigger
                  value="perfil"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Perfil
                </TabsTrigger>
                <TabsTrigger
                  value="seguridad"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Seguridad
                </TabsTrigger>
                <TabsTrigger
                  value="permisos"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Permisos
                </TabsTrigger>
                <TabsTrigger
                  value="equipo"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Equipo
                </TabsTrigger>
              </TabsList>
            </div>

            <div className="mt-6 flex-grow">
              <TabsContent value="perfil" className="space-y-6">
                <ProfileForm initialData={userData} />
              </TabsContent>

              <TabsContent value="seguridad" className="space-y-6">
                <SecurityForm />
              </TabsContent>

              <TabsContent value="permisos" className="space-y-6">
                <RoleDisplay
                  role={userData.role}
                  isCurrentUserAdmin={userData.isAdmin}
                />
              </TabsContent>

              <TabsContent value="equipo" className="space-y-6">
                <TeamManagement isCurrentUserAdmin={userData.isAdmin} />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
