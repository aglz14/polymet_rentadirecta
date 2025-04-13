import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PaymentStatusBadgeProps {
  status: "pagado" | "pendiente" | "atrasado" | "cancelado";
  size?: "default" | "lg";
  className?: string;
}

export default function PaymentStatusBadge({
  status,
  size = "default",
  className,
}: PaymentStatusBadgeProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "pagado":
        return (
          <Badge
            className={cn(
              "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
              size === "lg" && "px-3 py-1 text-sm",
              className
            )}
          >
            Pagado
          </Badge>
        );

      case "pendiente":
        return (
          <Badge
            className={cn(
              "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
              size === "lg" && "px-3 py-1 text-sm",
              className
            )}
          >
            Pendiente
          </Badge>
        );

      case "atrasado":
        return (
          <Badge
            className={cn(
              "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
              size === "lg" && "px-3 py-1 text-sm",
              className
            )}
          >
            Atrasado
          </Badge>
        );

      case "cancelado":
        return (
          <Badge
            className={cn(
              "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
              size === "lg" && "px-3 py-1 text-sm",
              className
            )}
          >
            Cancelado
          </Badge>
        );

      default:
        return null;
    }
  };

  return getStatusBadge();
}
