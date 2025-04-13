import { Badge } from "@/components/ui/badge";

interface MaintenanceStatusBadgeProps {
  status?: "none" | "scheduled" | "inProgress" | "completed";
  size?: "default" | "lg";
  className?: string;
}

export default function MaintenanceStatusBadge({
  status = "none",
  size = "default",
  className = "",
}: MaintenanceStatusBadgeProps) {
  if (!status || status === "none") return null;

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "scheduled":
        return "Mantenimiento Programado";
      case "inProgress":
        return "Mantenimiento en Progreso";
      case "completed":
        return "Mantenimiento Completado";
      default:
        return "";
    }
  };

  const getBadgeStyles = (status: string) => {
    switch (status) {
      case "scheduled":
        return "border-yellow-500 text-yellow-600 dark:text-yellow-400";
      case "inProgress":
        return "border-blue-500 text-blue-600 dark:text-blue-400";
      case "completed":
        return "border-green-500 text-green-600 dark:text-green-400";
      default:
        return "";
    }
  };

  return (
    <Badge
      variant="outline"
      className={`${getBadgeStyles(status)} ${size === "lg" ? "text-sm px-3 py-1" : ""} ${className}`}
    >
      {getStatusLabel(status)}
    </Badge>
  );
}
