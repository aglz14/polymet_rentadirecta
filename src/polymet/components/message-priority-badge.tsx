import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AlertCircleIcon, AlertOctagonIcon, CircleIcon } from "lucide-react";

interface MessagePriorityBadgeProps {
  priority: "normal" | "high" | "urgent";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function MessagePriorityBadge({
  priority,
  size = "default",
  className,
  showIcon = true,
}: MessagePriorityBadgeProps) {
  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "normal":
        return "Normal";
      case "high":
        return "Alta";
      case "urgent":
        return "Urgente";
      default:
        return priority;
    }
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "normal":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "high":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400";
      case "urgent":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400";
    }
  };

  const sizeClasses = {
    default: "px-2 py-1 text-xs",
    sm: "px-1.5 py-0.5 text-xs",
    lg: "px-2.5 py-1.5 text-sm",
  };

  const iconSizeClasses = {
    default: "h-3 w-3",
    sm: "h-2.5 w-2.5",
    lg: "h-4 w-4",
  };

  const PriorityIcon = () => {
    switch (priority) {
      case "normal":
        return <CircleIcon className={cn(iconSizeClasses[size], "mr-1")} />;
      case "high":
        return (
          <AlertCircleIcon className={cn(iconSizeClasses[size], "mr-1")} />
        );

      case "urgent":
        return (
          <AlertOctagonIcon className={cn(iconSizeClasses[size], "mr-1")} />
        );

      default:
        return null;
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        getPriorityStyles(priority),
        sizeClasses[size],
        "font-medium border-0 flex items-center",
        className
      )}
    >
      {showIcon && <PriorityIcon />}
      {getPriorityText(priority)}
    </Badge>
  );
}
