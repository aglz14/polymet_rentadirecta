import { Card, CardContent } from "@/components/ui/card";
import {
  BanknoteIcon,
  CalendarIcon,
  CircleDollarSignIcon,
  ClockIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PaymentStatsProps {
  totalPayments: number;
  paidPayments: number;
  pendingPayments: number;
  overduePayments: number;
  totalAmount: number;
  paidAmount: number;
  pendingAmount: number;
  overdueAmount: number;
}

export default function PaymentStats({
  totalPayments,
  paidPayments,
  pendingPayments,
  overduePayments,
  totalAmount,
  paidAmount,
  pendingAmount,
  overdueAmount,
}: PaymentStatsProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "MXN",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const stats = [
    {
      title: "Total de Pagos",
      value: totalPayments.toString(),
      icon: CircleDollarSignIcon,
      secondaryValue: formatCurrency(totalAmount),
      secondaryLabel: "Monto total",
      color: "bg-[#1B2A55]",
    },
    {
      title: "Pagos Realizados",
      value: paidPayments.toString(),
      icon: BanknoteIcon,
      secondaryValue: formatCurrency(paidAmount),
      secondaryLabel: "Monto pagado",
      color: "bg-green-600",
      percentage:
        totalPayments > 0
          ? Math.round((paidPayments / totalPayments) * 100)
          : 0,
    },
    {
      title: "Pagos Pendientes",
      value: pendingPayments.toString(),
      icon: CalendarIcon,
      secondaryValue: formatCurrency(pendingAmount),
      secondaryLabel: "Monto pendiente",
      color: "bg-blue-600",
      percentage:
        totalPayments > 0
          ? Math.round((pendingPayments / totalPayments) * 100)
          : 0,
    },
    {
      title: "Pagos Atrasados",
      value: overduePayments.toString(),
      icon: ClockIcon,
      secondaryValue: formatCurrency(overdueAmount),
      secondaryLabel: "Monto atrasado",
      color: "bg-yellow-600",
      percentage:
        totalPayments > 0
          ? Math.round((overduePayments / totalPayments) * 100)
          : 0,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="flex items-center p-4">
                <div
                  className={cn(
                    "rounded-full p-2 mr-4",
                    stat.color ? stat.color : "bg-primary"
                  )}
                >
                  <stat.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                {stat.percentage !== undefined && (
                  <div className="ml-auto">
                    <div className="text-sm font-medium text-right">
                      {stat.percentage}%
                    </div>
                  </div>
                )}
              </div>
              <div className="bg-muted px-4 py-2">
                <div className="flex justify-between items-center">
                  <p className="text-xs text-muted-foreground">
                    {stat.secondaryLabel}
                  </p>
                  <p className="text-sm font-medium">{stat.secondaryValue}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
