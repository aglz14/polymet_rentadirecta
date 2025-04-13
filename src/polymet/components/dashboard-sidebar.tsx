import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BuildingIcon,
  CreditCardIcon,
  FileTextIcon,
  HomeIcon,
  LayoutIcon,
  LogOutIcon,
  MessageSquareIcon,
  SettingsIcon,
  UsersIcon,
} from "lucide-react";
import BrandLogo from "@/polymet/components/brand-logo";

export default function DashboardSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  return (
    <aside
      className={cn(
        "flex h-screen flex-col border-r border-border/40 bg-background transition-all duration-300",
        collapsed ? "w-[70px]" : "w-[250px]"
      )}
    >
      <div className="flex h-16 items-center border-b border-border/40 px-4">
        <Link to="/dashboard" className="flex items-center">
          {collapsed ? <BrandLogo variant="icon" /> : <BrandLogo />}
        </Link>
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto py-4">
        <nav className="space-y-1 px-2">
          <NavItem
            to="/dashboard"
            icon={<HomeIcon className="h-5 w-5" />}
            label="Dashboard"
            isActive={isActive("/dashboard")}
            collapsed={collapsed}
            badge={0}
          />

          <NavItem
            to="/dashboard/edificios"
            icon={<BuildingIcon className="h-5 w-5" />}
            label="Edificios"
            isActive={isActive("/dashboard/edificios")}
            collapsed={collapsed}
            badge={0}
          />

          <NavItem
            to="/dashboard/unidades"
            icon={<LayoutIcon className="h-5 w-5" />}
            label="Unidades"
            isActive={isActive("/dashboard/unidades")}
            collapsed={collapsed}
            badge={0}
          />

          <NavItem
            to="/dashboard/inquilinos"
            icon={<UsersIcon className="h-5 w-5" />}
            label="Inquilinos"
            isActive={isActive("/dashboard/inquilinos")}
            collapsed={collapsed}
            badge={2}
          />

          <NavItem
            to="/dashboard/pagos"
            icon={<CreditCardIcon className="h-5 w-5" />}
            label="Pagos"
            isActive={isActive("/dashboard/pagos")}
            collapsed={collapsed}
            badge={5}
          />

          <NavItem
            to="/dashboard/documentos"
            icon={<FileTextIcon className="h-5 w-5" />}
            label="Documentos"
            isActive={isActive("/dashboard/documentos")}
            collapsed={collapsed}
            badge={3}
          />

          <NavItem
            to="/dashboard/mensajes"
            icon={<MessageSquareIcon className="h-5 w-5" />}
            label="Mensajes"
            isActive={isActive("/dashboard/mensajes")}
            collapsed={collapsed}
            badge={8}
          />
        </nav>

        <div className="space-y-1 px-2">
          <NavItem
            to="/dashboard/configuracion"
            icon={<SettingsIcon className="h-5 w-5" />}
            label="Configuración"
            isActive={isActive("/dashboard/configuracion")}
            collapsed={collapsed}
            badge={0}
          />

          <div className="my-2 border-t border-border/40"></div>
          <div
            className={cn(
              "flex items-center rounded-md p-2",
              collapsed ? "justify-center" : "px-3"
            )}
          >
            {collapsed ? (
              <div className="h-8 w-8 rounded-full bg-[#1B2A55] text-white flex items-center justify-center">
                <span className="text-xs font-medium">JD</span>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-[#1B2A55] text-white flex items-center justify-center mr-3">
                  <span className="text-xs font-medium">JD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Juan Díaz</span>
                  <span className="text-xs text-muted-foreground">
                    Administrador
                  </span>
                </div>
              </div>
            )}
          </div>
          <NavItem
            to="/logout"
            icon={<LogOutIcon className="h-5 w-5" />}
            label="Cerrar Sesión"
            isActive={false}
            collapsed={collapsed}
            badge={0}
          />
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="m-2 self-end"
        onClick={() => setCollapsed(!collapsed)}
        aria-label={collapsed ? "Expandir" : "Colapsar"}
      >
        {collapsed ? (
          <ArrowRightIcon className="h-4 w-4" />
        ) : (
          <ArrowLeftIcon className="h-4 w-4" />
        )}
      </Button>
    </aside>
  );
}

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  collapsed: boolean;
  badge: number;
}

function NavItem({
  to,
  icon,
  label,
  isActive,
  collapsed,
  badge,
}: NavItemProps) {
  return (
    <Link
      to={to}
      className={cn(
        "group flex items-center rounded-md px-3 py-2 text-sm font-medium",
        isActive
          ? "bg-[#1B2A55]/10 text-[#1B2A55]"
          : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        collapsed && "justify-center px-2"
      )}
    >
      <span className={cn("", isActive && "text-[#1B2A55]")}>{icon}</span>
      {!collapsed && <span className="ml-3 flex-1">{label}</span>}
      {!collapsed && badge > 0 && (
        <span
          className={cn(
            "ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-medium",
            isActive ? "bg-[#1B2A55] text-white" : "bg-[#86BC65] text-white"
          )}
        >
          {badge}
        </span>
      )}
      {collapsed && badge > 0 && (
        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#86BC65] text-[10px] font-medium text-white">
          {badge}
        </span>
      )}
    </Link>
  );
}
