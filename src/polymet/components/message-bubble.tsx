import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Message } from "@/polymet/data/messages-data";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { FileIcon, DownloadIcon } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
  showAvatar?: boolean;
}

export default function MessageBubble({
  message,
  isCurrentUser,
  showAvatar = true,
}: MessageBubbleProps) {
  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  // Format the timestamp
  const formatMessageTime = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "HH:mm", { locale: es });
  };

  return (
    <div
      className={cn(
        "flex mb-4 max-w-[85%]",
        isCurrentUser ? "ml-auto flex-row-reverse" : "mr-auto"
      )}
    >
      {showAvatar && !isCurrentUser && (
        <Avatar className="h-8 w-8 mr-2 mt-1">
          {message.senderAvatar ? (
            <AvatarImage src={message.senderAvatar} alt={message.senderName} />
          ) : (
            <AvatarFallback>
              {message.senderName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
      )}

      <div className={cn("flex flex-col", isCurrentUser && "items-end")}>
        {!isCurrentUser && (
          <span className="text-xs text-muted-foreground mb-1 ml-1">
            {message.senderName}
          </span>
        )}

        <Card
          className={cn(
            "p-3 shadow-sm",
            isCurrentUser
              ? "bg-[#1B2A55] text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg"
              : "bg-accent rounded-tl-lg rounded-tr-lg rounded-br-lg"
          )}
        >
          <div className="text-sm whitespace-pre-wrap">{message.content}</div>

          {message.attachments && message.attachments.length > 0 && (
            <div className="mt-3 space-y-2">
              {message.attachments.map((attachment, index) => (
                <div
                  key={attachment.id}
                  className={cn(
                    "flex items-center p-2 rounded-md",
                    isCurrentUser
                      ? "bg-[#2c3e6e] text-white"
                      : "bg-background border"
                  )}
                >
                  <FileIcon className="h-4 w-4 mr-2 flex-shrink-0" />

                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate">
                      {attachment.name}
                    </p>
                    <p className="text-xs opacity-70">
                      {formatFileSize(attachment.size)}
                    </p>
                  </div>
                  <Button
                    variant={isCurrentUser ? "ghost" : "outline"}
                    size="icon"
                    className="h-7 w-7 ml-2"
                  >
                    <DownloadIcon className="h-3.5 w-3.5" />
                  </Button>
                </div>
              ))}
            </div>
          )}

          <div
            className={cn(
              "text-xs mt-1",
              isCurrentUser ? "text-white/70" : "text-muted-foreground"
            )}
          >
            {formatMessageTime(message.timestamp)}
          </div>
        </Card>
      </div>

      {showAvatar && isCurrentUser && (
        <Avatar className="h-8 w-8 ml-2 mt-1">
          {message.senderAvatar ? (
            <AvatarImage src={message.senderAvatar} alt={message.senderName} />
          ) : (
            <AvatarFallback>
              {message.senderName
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
      )}
    </div>
  );
}

interface MessageDateDividerProps {
  date: string;
}

export function MessageDateDivider({ date }: MessageDateDividerProps) {
  // Format the date
  const formatMessageDate = (dateString: string) => {
    const date = new Date(dateString);
    return format(date, "d 'de' MMMM, yyyy", { locale: es });
  };

  return (
    <div className="flex items-center justify-center my-4">
      <div className="bg-muted px-3 py-1 rounded-full text-xs text-muted-foreground">
        {formatMessageDate(date)}
      </div>
    </div>
  );
}
