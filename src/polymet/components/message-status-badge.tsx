import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MessageStatusBadgeProps {
  status: "open" | "closed" | "pending";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export default function MessageStatusBadge({
  status,
  size = "default",
  className,
}: MessageStatusBadgeProps) {
  const getStatusText = (status: string) => {
    switch (status) {
      case "open":
        return "Abierto";
      case "closed":
        return "Cerrado";
      case "pending":
        return "Pendiente";
      default:
        return status;
    }
  };

  const getStatusStyles = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "closed":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400";
      case "pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
    }
  };

  const sizeClasses = {
    default: "px-2 py-1 text-xs",
    sm: "px-1.5 py-0.5 text-xs",
    lg: "px-2.5 py-1.5 text-sm",
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        getStatusStyles(status),
        sizeClasses[size],
        "font-medium border-0",
        className
      )}
    >
      {getStatusText(status)}
    </Badge>
  );
}
