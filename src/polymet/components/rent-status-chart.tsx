import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface RentStatusChartProps {
  data: {
    monthly: {
      name: string;
      pagado: number;
      pendiente: number;
      atrasado: number;
    }[];
    quarterly: {
      name: string;
      pagado: number;
      pendiente: number;
      atrasado: number;
    }[];
    yearly: {
      name: string;
      pagado: number;
      pendiente: number;
      atrasado: number;
    }[];
  };
}

export default function RentStatusChart({ data }: RentStatusChartProps) {
  // We're using the monthly data by default as the parent component now handles the tabs
  const chartData = data.monthly;

  return (
    <ChartContainer
      config={{
        pagado: {
          label: "Pagado",
          color: "hsl(var(--chart-1))",
        },
        pendiente: {
          label: "Pendiente",
          color: "hsl(var(--chart-2))",
        },
        atrasado: {
          label: "Atrasado",
          color: "hsl(var(--chart-3))",
        },
      }}
      className="aspect-[none] h-[300px]"
    >
      <BarChart data={chartData}>
        <ChartTooltip content={<ChartTooltipContent />} />

        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tickMargin={10}
        />

        <Bar
          dataKey="pagado"
          fill="#E57373" // Coral/red color as shown in the screenshot
          radius={[4, 4, 0, 0]}
          stackId="stack"
        />

        <Bar
          dataKey="pendiente"
          fill="#4DB6AC" // Teal color as shown in the screenshot
          radius={[4, 4, 0, 0]}
          stackId="stack"
        />

        <Bar
          dataKey="atrasado"
          fill="#5C6BC0" // Blue/indigo color as shown in the screenshot
          radius={[4, 4, 0, 0]}
          stackId="stack"
        />
      </BarChart>
    </ChartContainer>
  );
}
