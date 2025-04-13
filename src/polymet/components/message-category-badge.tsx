import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  MessageSquareIcon,
  CreditCardIcon,
  WrenchIcon,
  AlertTriangleIcon,
  HelpCircleIcon,
} from "lucide-react";

interface MessageCategoryBadgeProps {
  category: "maintenance" | "payment" | "general" | "complaint" | "other";
  size?: "default" | "sm" | "lg";
  className?: string;
  showIcon?: boolean;
}

export default function MessageCategoryBadge({
  category,
  size = "default",
  className,
  showIcon = true,
}: MessageCategoryBadgeProps) {
  const getCategoryText = (category: string) => {
    switch (category) {
      case "maintenance":
        return "Mantenimiento";
      case "payment":
        return "Pagos";
      case "general":
        return "General";
      case "complaint":
        return "Queja";
      case "other":
        return "Otro";
      default:
        return category;
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "maintenance":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
      case "payment":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
      case "general":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400";
      case "complaint":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
      case "other":
        return "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400";
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

  const CategoryIcon = () => {
    switch (category) {
      case "maintenance":
        return <WrenchIcon className={cn(iconSizeClasses[size], "mr-1")} />;
      case "payment":
        return <CreditCardIcon className={cn(iconSizeClasses[size], "mr-1")} />;
      case "general":
        return (
          <MessageSquareIcon className={cn(iconSizeClasses[size], "mr-1")} />
        );

      case "complaint":
        return (
          <AlertTriangleIcon className={cn(iconSizeClasses[size], "mr-1")} />
        );

      case "other":
        return <HelpCircleIcon className={cn(iconSizeClasses[size], "mr-1")} />;
      default:
        return null;
    }
  };

  return (
    <Badge
      variant="outline"
      className={cn(
        getCategoryStyles(category),
        sizeClasses[size],
        "font-medium border-0 flex items-center",
        className
      )}
    >
      {showIcon && <CategoryIcon />}
      {getCategoryText(category)}
    </Badge>
  );
}
