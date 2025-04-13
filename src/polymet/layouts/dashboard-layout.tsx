import { ReactNode } from "react";
import DashboardSidebar from "@/polymet/components/dashboard-sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 overflow-auto">
        <main className="container max-w-screen-xl p-6">{children}</main>
      </div>
    </div>
  );
}
