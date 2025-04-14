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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  UsersIcon,
  UserPlusIcon,
  MoreVerticalIcon,
  TrashIcon,
  MailIcon,
  ShieldIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "@/hooks/use-toast";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "viewer";
  avatar?: string;
  status: "active" | "pending" | "inactive";
}

interface TeamManagementProps {
  initialMembers?: TeamMember[];
  isCurrentUserAdmin?: boolean;
}

export default function TeamManagement({
  initialMembers = [],
  isCurrentUserAdmin = true,
}: TeamManagementProps) {
  const [members, setMembers] = useState<TeamMember[]>(
    initialMembers.length > 0
      ? initialMembers
      : [
          {
            id: "1",
            name: "Juan Díaz",
            email: "juan.diaz@example.com",
            role: "admin",
            avatar: "https://github.com/kdrnp.png",
            status: "active",
          },
          {
            id: "2",
            name: "Ana Martínez",
            email: "ana.martinez@example.com",
            role: "manager",
            avatar: "https://github.com/furkanksl.png",
            status: "active",
          },
          {
            id: "3",
            name: "Carlos Rodríguez",
            email: "carlos.rodriguez@example.com",
            role: "viewer",
            avatar: "https://github.com/yusufhilmi.png",
            status: "active",
          },
          {
            id: "4",
            name: "Laura González",
            email: "laura.gonzalez@example.com",
            role: "viewer",
            avatar: "https://github.com/yahyabedirhan.png",
            status: "pending",
          },
        ]
  );

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newMember, setNewMember] = useState({
    name: "",
    email: "",
    role: "viewer" as "admin" | "manager" | "viewer",
  });
  const { toast } = useToast();

  const handleAddMember = () => {
    if (!newMember.name || !newMember.email) {
      toast({
        title: "Error",
        description: "Por favor, completa todos los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    const newId = (members.length + 1).toString();
    setMembers([
      ...members,
      {
        id: newId,
        ...newMember,
        status: "pending",
      },
    ]);

    setNewMember({
      name: "",
      email: "",
      role: "viewer",
    });

    setIsDialogOpen(false);

    toast({
      title: "Invitación enviada",
      description: `Se ha enviado una invitación a ${newMember.email}.`,
    });
  };

  const handleDeleteMember = (id: string) => {
    setMembers(members.filter((member) => member.id !== id));
    toast({
      title: "Colaborador eliminado",
      description: "El colaborador ha sido eliminado correctamente.",
    });
  };

  const handleChangeRole = (
    id: string,
    role: "admin" | "manager" | "viewer"
  ) => {
    setMembers(
      members.map((member) => (member.id === id ? { ...member, role } : member))
    );
    toast({
      title: "Rol actualizado",
      description: "El rol del colaborador ha sido actualizado correctamente.",
    });
  };

  const handleResendInvitation = (email: string) => {
    toast({
      title: "Invitación reenviada",
      description: `Se ha reenviado la invitación a ${email}.`,
    });
  };

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "admin":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "manager":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400";
    }
  };

  const getRoleLabel = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrador";
      case "manager":
        return "Gestor";
      default:
        return "Visualizador";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400";
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "active":
        return "Activo";
      case "pending":
        return "Pendiente";
      default:
        return "Inactivo";
    }
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
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-[#1B2A55] flex items-center gap-2">
              <UsersIcon className="h-5 w-5" />
              Equipo de trabajo
            </CardTitle>
            <CardDescription>
              Gestiona a los colaboradores que tienen acceso a tu cuenta
            </CardDescription>
          </div>
          {isCurrentUserAdmin && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                  <UserPlusIcon className="h-4 w-4 mr-2" />
                  Añadir colaborador
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Añadir nuevo colaborador</DialogTitle>
                  <DialogDescription>
                    Envía una invitación para que un nuevo colaborador se una a
                    tu equipo.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nombre completo</Label>
                    <Input
                      id="name"
                      value={newMember.name}
                      onChange={(e) =>
                        setNewMember({ ...newMember, name: e.target.value })
                      }
                      placeholder="Nombre del colaborador"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Correo electrónico</Label>
                    <Input
                      id="email"
                      type="email"
                      value={newMember.email}
                      onChange={(e) =>
                        setNewMember({ ...newMember, email: e.target.value })
                      }
                      placeholder="correo@ejemplo.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Rol</Label>
                    <Select
                      value={newMember.role}
                      onValueChange={(value: any) =>
                        setNewMember({ ...newMember, role: value })
                      }
                    >
                      <SelectTrigger id="role">
                        <SelectValue placeholder="Selecciona un rol" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="admin">Administrador</SelectItem>
                        <SelectItem value="manager">Gestor</SelectItem>
                        <SelectItem value="viewer">Visualizador</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-muted-foreground mt-1">
                      {newMember.role === "admin"
                        ? "Acceso completo a todas las funciones y configuraciones."
                        : newMember.role === "manager"
                          ? "Puede gestionar propiedades, inquilinos y pagos."
                          : "Solo puede ver información, sin permisos de edición."}
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="button"
                    className="bg-[#1B2A55] hover:bg-[#1B2A55]/90"
                    onClick={handleAddMember}
                  >
                    Enviar invitación
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Colaborador</TableHead>
                <TableHead>Rol</TableHead>
                <TableHead>Estado</TableHead>
                {isCurrentUserAdmin && (
                  <TableHead className="w-[100px]">Acciones</TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member, index) => (
                <TableRow key={member.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{member.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {member.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getRoleBadgeColor(member.role)}>
                      {getRoleLabel(member.role)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusBadgeColor(member.status)}>
                      {getStatusLabel(member.status)}
                    </Badge>
                  </TableCell>
                  {isCurrentUserAdmin && (
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVerticalIcon className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          {member.status === "pending" && (
                            <DropdownMenuItem
                              onClick={() =>
                                handleResendInvitation(member.email)
                              }
                            >
                              <MailIcon className="h-4 w-4 mr-2" />
                              Reenviar invitación
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem
                            onClick={() => handleChangeRole(member.id, "admin")}
                            disabled={member.role === "admin"}
                          >
                            <ShieldIcon className="h-4 w-4 mr-2 text-blue-600" />
                            Hacer administrador
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleChangeRole(member.id, "manager")
                            }
                            disabled={member.role === "manager"}
                          >
                            <ShieldIcon className="h-4 w-4 mr-2 text-green-600" />
                            Hacer gestor
                          </DropdownMenuItem>
                          <DropdownMenuItem
                            onClick={() =>
                              handleChangeRole(member.id, "viewer")
                            }
                            disabled={member.role === "viewer"}
                          >
                            <ShieldIcon className="h-4 w-4 mr-2 text-gray-600" />
                            Hacer visualizador
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleDeleteMember(member.id)}
                            className="text-red-600 focus:text-red-600"
                          >
                            <TrashIcon className="h-4 w-4 mr-2" />
                            Eliminar
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
