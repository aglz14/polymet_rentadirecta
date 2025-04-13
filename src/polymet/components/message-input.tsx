import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { PaperclipIcon, SendIcon } from "lucide-react";
import { useState, useRef, FormEvent, ChangeEvent } from "react";

interface MessageInputProps {
  onSendMessage: (message: string, files?: File[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export default function MessageInput({
  onSendMessage,
  placeholder = "Escribe un mensaje...",
  disabled = false,
  className,
}: MessageInputProps) {
  const [message, setMessage] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim() || files.length > 0) {
      onSendMessage(message.trim(), files.length > 0 ? files : undefined);
      setMessage("");
      setFiles([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const removeFile = (index: number) => {
    setFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  // Format file size
  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
    else return (bytes / 1048576).toFixed(1) + " MB";
  };

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)}>
      {files.length > 0 && (
        <div className="mb-2 p-2 bg-accent rounded-md">
          <p className="text-xs font-medium mb-1">Archivos adjuntos:</p>
          <div className="space-y-1">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-background rounded-md p-1.5 text-xs"
              >
                <div className="flex items-center overflow-hidden">
                  <PaperclipIcon className="h-3 w-3 mr-1.5 flex-shrink-0" />
                  <span className="truncate">{file.name}</span>
                  <span className="ml-1.5 text-muted-foreground">
                    ({formatFileSize(file.size)})
                  </span>
                </div>
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={() => removeFile(index)}
                >
                  <X className="h-3 w-3" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-end border rounded-md bg-background">
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="min-h-[80px] max-h-[200px] border-0 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
        />

        <div className="flex p-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            multiple
          />

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-8 w-8 mr-1"
            onClick={handleFileClick}
            disabled={disabled}
          >
            <PaperclipIcon className="h-4 w-4" />
          </Button>
          <Button
            type="submit"
            size="icon"
            className="h-8 w-8 bg-[#1B2A55] hover:bg-[#1B2A55]/90"
            disabled={disabled || (!message.trim() && files.length === 0)}
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </form>
  );
}

// X icon component
function X(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
