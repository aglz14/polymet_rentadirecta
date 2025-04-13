import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircleIcon,
  FilterIcon,
  InboxIcon,
  MessageSquareIcon,
  SearchIcon,
} from "lucide-react";
import {
  MESSAGES_DATA,
  MessageThread,
  getOpenThreadsCount,
  getClosedThreadsCount,
  getPendingThreadsCount,
  getUrgentThreadsCount,
  getHighPriorityThreadsCount,
} from "@/polymet/data/messages-data";
import MessageListItem from "@/polymet/components/message-list-item";
import MessageThreadHeader from "@/polymet/components/message-thread-header";
import MessageBubble, {
  MessageDateDivider,
} from "@/polymet/components/message-bubble";
import MessageInput from "@/polymet/components/message-input";

export default function MensajesPage() {
  const { threadId } = useParams();
  const [activeTab, setActiveTab] = useState("todos");
  const [selectedThreadId, setSelectedThreadId] = useState<string | undefined>(
    threadId
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredThreads, setFilteredThreads] = useState<MessageThread[]>([]);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showThreadList, setShowThreadList] = useState(true);

  // Group messages by date for the selected thread
  const selectedThread = MESSAGES_DATA.find(
    (thread) => thread.id === selectedThreadId
  );

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobileView(mobile);

      // On mobile, if a thread is selected, hide the thread list
      if (mobile && selectedThreadId) {
        setShowThreadList(false);
      } else {
        setShowThreadList(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [selectedThreadId]);

  // Handle thread selection from URL params
  useEffect(() => {
    if (threadId) {
      setSelectedThreadId(threadId);
      if (isMobileView) {
        setShowThreadList(false);
      }
    }
  }, [threadId, isMobileView]);

  // Filter threads based on tab and search query
  useEffect(() => {
    let filtered = [...MESSAGES_DATA];

    // Apply tab filter
    if (activeTab === "abiertos") {
      filtered = filtered.filter((thread) => thread.status === "open");
    } else if (activeTab === "pendientes") {
      filtered = filtered.filter((thread) => thread.status === "pending");
    } else if (activeTab === "cerrados") {
      filtered = filtered.filter((thread) => thread.status === "closed");
    } else if (activeTab === "urgentes") {
      filtered = filtered.filter((thread) => thread.priority === "urgent");
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (thread) =>
          thread.subject.toLowerCase().includes(query) ||
          thread.participants.some((p) =>
            p.name.toLowerCase().includes(query)
          ) ||
          thread.propertyName?.toLowerCase().includes(query) ||
          thread.unitNumber?.toLowerCase().includes(query)
      );
    }

    // Sort by priority and date
    filtered.sort((a, b) => {
      // First by priority (urgent > high > normal)
      const priorityOrder = { urgent: 0, high: 1, normal: 2 };
      const priorityDiff =
        priorityOrder[a.priority] - priorityOrder[b.priority];
      if (priorityDiff !== 0) return priorityDiff;

      // Then by date (newest first)
      const dateA = new Date(a.lastMessage.timestamp);
      const dateB = new Date(b.lastMessage.timestamp);
      return dateB.getTime() - dateA.getTime();
    });

    setFilteredThreads(filtered);
  }, [activeTab, searchQuery, MESSAGES_DATA]);

  // Handle thread selection
  const handleThreadSelect = (threadId: string) => {
    setSelectedThreadId(threadId);
    if (isMobileView) {
      setShowThreadList(false);
    }
  };

  // Handle back button on mobile
  const handleBackToList = () => {
    setShowThreadList(true);
    setSelectedThreadId(undefined);
  };

  // Handle message send
  const handleSendMessage = (content: string, files?: File[]) => {
    console.log("Sending message:", content, files);
    // In a real app, this would send the message to the server
  };

  // Handle status change
  const handleStatusChange = (status: "open" | "closed" | "pending") => {
    console.log("Changing status to:", status);
    // In a real app, this would update the thread status
  };

  // Handle priority change
  const handlePriorityChange = (priority: "normal" | "high" | "urgent") => {
    console.log("Changing priority to:", priority);
    // In a real app, this would update the thread priority
  };

  // Group messages by date for display with dividers
  const groupMessagesByDate = () => {
    if (!selectedThread) return [];

    const groups: { date: string; messages: any[] }[] = [];
    let currentDate = "";
    let currentGroup: any[] = [];

    selectedThread.messages.forEach((message) => {
      const messageDate = message.timestamp.split("T")[0];

      if (messageDate !== currentDate) {
        if (currentGroup.length > 0) {
          groups.push({ date: currentDate, messages: [...currentGroup] });
          currentGroup = [];
        }
        currentDate = messageDate;
      }

      currentGroup.push(message);
    });

    if (currentGroup.length > 0) {
      groups.push({ date: currentDate, messages: currentGroup });
    }

    return groups;
  };

  const messageGroups = groupMessagesByDate();

  // Determine if the current user is the sender (for message bubbles)
  const isCurrentUser = (senderId: string) => {
    // In a real app, this would check against the logged-in user ID
    // For this example, we'll assume the current user is the manager (user-2)
    return senderId === "user-2";
  };

  return (
    <div className="h-full flex flex-col">
      <div className="container max-w-screen-xl p-4 sm:p-6 flex-grow flex flex-col">
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl font-bold text-[#1B2A55]">Mensajes</h1>

          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative w-full md:max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />

              <Input
                placeholder="Buscar por inquilino, propiedad o asunto..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <FilterIcon className="h-4 w-4" />
              </Button>
              <Button className="bg-[#1B2A55] hover:bg-[#1B2A55]/90">
                <MessageSquareIcon className="h-4 w-4 mr-2" />
                Nuevo Mensaje
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 flex-grow flex flex-col">
          <Tabs
            defaultValue="todos"
            value={activeTab}
            onValueChange={setActiveTab}
            className="flex-grow flex flex-col"
          >
            <div className="overflow-x-auto pb-2">
              <TabsList className="inline-flex min-w-full">
                <TabsTrigger
                  value="todos"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Todos
                  <Badge className="ml-1 bg-muted text-muted-foreground">
                    {MESSAGES_DATA.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="abiertos"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Abiertos
                  <Badge className="ml-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                    {getOpenThreadsCount()}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="pendientes"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Pendientes
                  <Badge className="ml-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">
                    {getPendingThreadsCount()}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="cerrados"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Cerrados
                  <Badge className="ml-1 bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400">
                    {getClosedThreadsCount()}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger
                  value="urgentes"
                  className="text-xs sm:text-sm whitespace-nowrap px-2 sm:px-4"
                >
                  Urgentes
                  <Badge className="ml-1 bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                    {getUrgentThreadsCount()}
                  </Badge>
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent
              value={activeTab}
              className="flex-grow mt-4 flex flex-col"
            >
              <div className="flex flex-grow border rounded-lg overflow-hidden">
                {/* Thread List - Hidden on mobile when a thread is selected */}
                {showThreadList && (
                  <div className="w-full md:w-1/3 border-r">
                    <div className="flex items-center justify-between p-3 border-b bg-muted/50">
                      <div className="flex items-center">
                        <InboxIcon className="h-4 w-4 mr-2 text-muted-foreground" />

                        <span className="text-sm font-medium">
                          {filteredThreads.length} mensajes
                        </span>
                      </div>
                      {getHighPriorityThreadsCount() + getUrgentThreadsCount() >
                        0 && (
                        <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
                          <AlertCircleIcon className="h-3 w-3 mr-1" />
                          {getHighPriorityThreadsCount() +
                            getUrgentThreadsCount()}{" "}
                          prioritarios
                        </Badge>
                      )}
                    </div>
                    <ScrollArea className="h-[calc(100vh-16rem)]">
                      {filteredThreads.length > 0 ? (
                        filteredThreads.map((thread, index) => (
                          <MessageListItem
                            key={thread.id}
                            thread={thread}
                            isSelected={thread.id === selectedThreadId}
                            onClick={() => handleThreadSelect(thread.id)}
                          />
                        ))
                      ) : (
                        <div className="flex flex-col items-center justify-center p-8 text-center">
                          <MessageSquareIcon className="h-12 w-12 text-muted-foreground/50 mb-4" />

                          <h3 className="text-lg font-medium mb-1">
                            No hay mensajes
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            No se encontraron mensajes que coincidan con los
                            criterios de búsqueda.
                          </p>
                        </div>
                      )}
                    </ScrollArea>
                  </div>
                )}

                {/* Message Thread View */}
                {selectedThreadId && selectedThread ? (
                  <div
                    className={`flex flex-col ${showThreadList ? "hidden md:flex md:w-2/3" : "w-full"}`}
                  >
                    <MessageThreadHeader
                      thread={selectedThread}
                      onBack={handleBackToList}
                      onStatusChange={handleStatusChange}
                      onPriorityChange={handlePriorityChange}
                    />

                    <ScrollArea className="flex-grow p-4">
                      {messageGroups.map((group, groupIndex) => (
                        <div key={`group-${groupIndex}`}>
                          <MessageDateDivider date={group.date} />

                          {group.messages.map((message, messageIndex) => (
                            <MessageBubble
                              key={message.id}
                              message={message}
                              isCurrentUser={isCurrentUser(message.senderId)}
                              showAvatar={
                                messageIndex === 0 ||
                                group.messages[messageIndex - 1]?.senderId !==
                                  message.senderId
                              }
                            />
                          ))}
                        </div>
                      ))}
                    </ScrollArea>
                    <div className="p-4 border-t">
                      <MessageInput onSendMessage={handleSendMessage} />
                    </div>
                  </div>
                ) : (
                  <div className="hidden md:flex md:w-2/3 items-center justify-center">
                    <div className="flex flex-col items-center justify-center p-8 text-center">
                      <MessageSquareIcon className="h-16 w-16 text-muted-foreground/30 mb-4" />

                      <h3 className="text-xl font-medium mb-2">
                        Selecciona un mensaje
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-md">
                        Selecciona un mensaje de la lista para ver la
                        conversación completa y responder.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
