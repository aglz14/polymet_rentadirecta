import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: number;
    trend: "up" | "down" | "neutral";
    text: string;
  };
  className?: string;
}

export default function StatsCard({
  title,
  value,
  icon,
  change,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-primary/10 p-1.5 text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className="mt-1 flex items-center text-xs">
            {change.trend === "up" ? (
              <ArrowUpIcon className="mr-1 h-4 w-4 text-green-500" />
            ) : change.trend === "down" ? (
              <ArrowDownIcon className="mr-1 h-4 w-4 text-red-500" />
            ) : null}
            <span
              className={cn({
                "text-green-500": change.trend === "up",
                "text-red-500": change.trend === "down",
                "text-muted-foreground": change.trend === "neutral",
              })}
            >
              {change.value}%
            </span>
            <span className="ml-1 text-muted-foreground">{change.text}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}
