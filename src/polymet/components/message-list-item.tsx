import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { MessageThread } from "@/polymet/data/messages-data";
import { format, isToday, isYesterday } from "date-fns";
import { es } from "date-fns/locale";
import MessageCategoryBadge from "@/polymet/components/message-category-badge";
import MessagePriorityBadge from "@/polymet/components/message-priority-badge";
import MessageStatusBadge from "@/polymet/components/message-status-badge";

interface MessageListItemProps {
  thread: MessageThread;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function MessageListItem({
  thread,
  isSelected = false,
  onClick,
}: MessageListItemProps) {
  // Get the other participant (not the current user, assuming current user is the manager)
  const otherParticipant = thread.participants.find(
    (participant) =>
      participant.type === "tenant" || participant.type === "owner"
  );

  // Format the timestamp
  const formatMessageDate = (dateString: string) => {
    const date = new Date(dateString);
    if (isToday(date)) {
      return format(date, "HH:mm", { locale: es });
    } else if (isYesterday(date)) {
      return "Ayer";
    } else {
      return format(date, "dd MMM", { locale: es });
    }
  };

  // Truncate text if it's too long
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  };

  return (
    <div
      className={cn(
        "flex flex-col p-4 border-b cursor-pointer hover:bg-accent/50 transition-colors",
        isSelected && "bg-accent"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
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
            <div className="flex items-center">
              <h4 className="font-medium text-sm">
                {otherParticipant?.name || "Sistema"}
              </h4>
              {thread.unreadCount > 0 && (
                <Badge className="ml-2 bg-[#1B2A55] text-white text-xs px-1.5 py-0.5 rounded-full">
                  {thread.unreadCount}
                </Badge>
              )}
            </div>
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
        <span className="text-xs text-muted-foreground">
          {formatMessageDate(thread.lastMessage.timestamp)}
        </span>
      </div>

      <h3 className="font-medium text-sm mb-1">
        {truncateText(thread.subject, 60)}
      </h3>
      <p className="text-xs text-muted-foreground mb-3">
        {truncateText(thread.lastMessage.content, 80)}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        <MessageCategoryBadge category={thread.category} size="sm" />
        <MessagePriorityBadge priority={thread.priority} size="sm" />
        <MessageStatusBadge status={thread.status} size="sm" />
      </div>
    </div>
  );
}
