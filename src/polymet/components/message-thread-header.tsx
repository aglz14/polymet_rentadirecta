import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageThread } from "@/polymet/data/messages-data";
import MessageCategoryBadge from "@/polymet/components/message-category-badge";
import MessagePriorityBadge from "@/polymet/components/message-priority-badge";
import MessageStatusBadge from "@/polymet/components/message-status-badge";
import { ArrowLeftIcon, MoreHorizontalIcon, PhoneIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface MessageThreadHeaderProps {
  thread: MessageThread;
  onBack: () => void;
  onStatusChange: (status: "open" | "closed" | "pending") => void;
  onPriorityChange: (priority: "normal" | "high" | "urgent") => void;
}

export default function MessageThreadHeader({
  thread,
  onBack,
  onStatusChange,
  onPriorityChange,
}: MessageThreadHeaderProps) {
  // Get the other participant (not the current user, assuming current user is the manager)
  const otherParticipant = thread.participants.find(
    (participant) =>
      participant.type === "tenant" || participant.type === "owner"
  );

  return (
    <div className="flex items-center justify-between p-4 border-b bg-card">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="mr-2 md:hidden"
          onClick={onBack}
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        <Avatar className="h-10 w-10 mr-3">
          {otherParticipant?.avatar ? (
            <AvatarImage
              src={otherParticipant.avatar}
              alt={otherParticipant.name}
            />
          ) : (
            <AvatarFallback>
              {otherParticipant?.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
        <div>
          <h3 className="font-medium">{otherParticipant?.name || "Sistema"}</h3>
          <div className="text-xs text-muted-foreground flex items-center">
            <span>{thread.propertyName}</span>
            {thread.unitNumber && (
              <>
                <span className="mx-1">•</span>
                <span>{thread.unitNumber}</span>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden md:flex gap-2">
          <MessageCategoryBadge category={thread.category} size="sm" />
          <MessagePriorityBadge priority={thread.priority} size="sm" />
          <MessageStatusBadge status={thread.status} size="sm" />
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="hidden md:flex"
          aria-label="Llamar"
        >
          <PhoneIcon className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" aria-label="Más opciones">
              <MoreHorizontalIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuSeparator className="md:hidden" />
            <DropdownMenuItem className="md:hidden">
              <PhoneIcon className="h-4 w-4 mr-2" />
              Llamar
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => onPriorityChange("normal")}
              className="flex items-center"
            >
              <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
              Prioridad Normal
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onPriorityChange("high")}
              className="flex items-center"
            >
              <div className="w-4 h-4 rounded-full bg-orange-500 mr-2"></div>
              Prioridad Alta
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onPriorityChange("urgent")}
              className="flex items-center"
            >
              <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
              Prioridad Urgente
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => onStatusChange("open")}>
              Marcar como Abierto
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStatusChange("pending")}>
              Marcar como Pendiente
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onStatusChange("closed")}>
              Marcar como Cerrado
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Exportar conversación</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500">
              Eliminar conversación
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
