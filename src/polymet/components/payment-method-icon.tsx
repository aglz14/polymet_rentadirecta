import {
  CreditCardIcon,
  BanknoteIcon,
  CheckSquareIcon,
  ArrowDownToLineIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentMethodIconProps {
  method?: "transferencia" | "efectivo" | "tarjeta" | "cheque";
  className?: string;
  size?: number;
}

export default function PaymentMethodIcon({
  method,
  className,
  size = 16,
}: PaymentMethodIconProps) {
  if (!method) return null;

  const iconProps = {
    className: cn("text-muted-foreground", className),
    size,
    strokeWidth: 1.5,
  };

  switch (method) {
    case "transferencia":
      return <ArrowDownToLineIcon {...iconProps} />;
    case "efectivo":
      return <BanknoteIcon {...iconProps} />;
    case "tarjeta":
      return <CreditCardIcon {...iconProps} />;
    case "cheque":
      return <CheckSquareIcon {...iconProps} />;
    default:
      return null;
  }
}
