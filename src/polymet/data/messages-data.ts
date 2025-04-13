export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar?: string;
  senderType: "tenant" | "owner" | "manager" | "system";
  recipientId: string;
  recipientName: string;
  recipientAvatar?: string;
  recipientType: "tenant" | "owner" | "manager" | "system";
  content: string;
  timestamp: string;
  read: boolean;
  attachments?: {
    id: string;
    name: string;
    type: string;
    url: string;
    size: number;
  }[];
}

export interface MessageThread {
  id: string;
  participants: {
    id: string;
    name: string;
    avatar?: string;
    type: "tenant" | "owner" | "manager" | "system";
  }[];
  propertyId?: string;
  propertyName?: string;
  unitId?: string;
  unitNumber?: string;
  subject: string;
  lastMessage: {
    content: string;
    timestamp: string;
    senderId: string;
  };
  unreadCount: number;
  priority: "normal" | "high" | "urgent";
  category: "maintenance" | "payment" | "general" | "complaint" | "other";
  status: "open" | "closed" | "pending";
  messages: Message[];
}

export const MESSAGES_DATA: MessageThread[] = [
  {
    id: "thread-1",
    participants: [
      {
        id: "user-1",
        name: "Carlos Rodríguez",
        avatar: "https://github.com/yusufhilmi.png",
        type: "tenant",
      },
      {
        id: "user-2",
        name: "Juan Díaz",
        avatar: "https://github.com/kdrnp.png",
        type: "manager",
      },
    ],

    propertyId: "building-1",
    propertyName: "Edificio Alameda",
    unitId: "unit-1",
    unitNumber: "A-101",
    subject: "Reparación de fuga en baño",
    lastMessage: {
      content: "Gracias, estaré esperando al técnico mañana.",
      timestamp: "2024-05-15T14:30:00",
      senderId: "user-1",
    },
    unreadCount: 0,
    priority: "normal",
    category: "maintenance",
    status: "open",
    messages: [
      {
        id: "msg-1",
        senderId: "user-1",
        senderName: "Carlos Rodríguez",
        senderAvatar: "https://github.com/yusufhilmi.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Hola, tengo una fuga de agua en el baño principal. El agua está saliendo por debajo del lavabo.",
        timestamp: "2024-05-15T10:15:00",
        read: true,
      },
      {
        id: "msg-2",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-1",
        recipientName: "Carlos Rodríguez",
        recipientAvatar: "https://github.com/yusufhilmi.png",
        recipientType: "tenant",
        content:
          "Hola Carlos, gracias por reportar el problema. Enviaré a un plomero mañana entre 10 AM y 12 PM. ¿Estarás disponible en ese horario?",
        timestamp: "2024-05-15T11:30:00",
        read: true,
      },
      {
        id: "msg-3",
        senderId: "user-1",
        senderName: "Carlos Rodríguez",
        senderAvatar: "https://github.com/yusufhilmi.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content: "Gracias, estaré esperando al técnico mañana.",
        timestamp: "2024-05-15T14:30:00",
        read: true,
      },
    ],
  },
  {
    id: "thread-2",
    participants: [
      {
        id: "user-3",
        name: "Ana Martínez",
        avatar: "https://github.com/furkanksl.png",
        type: "tenant",
      },
      {
        id: "user-2",
        name: "Juan Díaz",
        avatar: "https://github.com/kdrnp.png",
        type: "manager",
      },
    ],

    propertyId: "building-1",
    propertyName: "Edificio Alameda",
    unitId: "unit-2",
    unitNumber: "A-202",
    subject: "Problema con el pago de renta",
    lastMessage: {
      content:
        "Entiendo, procesaré el pago manualmente. Gracias por la aclaración.",
      timestamp: "2024-05-14T16:45:00",
      senderId: "user-2",
    },
    unreadCount: 2,
    priority: "high",
    category: "payment",
    status: "pending",
    messages: [
      {
        id: "msg-4",
        senderId: "user-3",
        senderName: "Ana Martínez",
        senderAvatar: "https://github.com/furkanksl.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Hola, intenté realizar el pago de la renta pero el sistema muestra un error. Ya hice la transferencia y tengo el comprobante.",
        timestamp: "2024-05-14T15:20:00",
        read: true,
        attachments: [
          {
            id: "attach-1",
            name: "comprobante_pago_mayo.pdf",
            type: "application/pdf",
            url: "#",
            size: 1240000,
          },
        ],
      },
      {
        id: "msg-5",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-3",
        recipientName: "Ana Martínez",
        recipientAvatar: "https://github.com/furkanksl.png",
        recipientType: "tenant",
        content:
          "Hola Ana, revisaré el problema con el sistema. ¿Podrías enviarme el comprobante de transferencia?",
        timestamp: "2024-05-14T15:35:00",
        read: true,
      },
      {
        id: "msg-6",
        senderId: "user-3",
        senderName: "Ana Martínez",
        senderAvatar: "https://github.com/furkanksl.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Acabo de adjuntar el comprobante en el mensaje anterior. La transferencia se realizó esta mañana.",
        timestamp: "2024-05-14T15:40:00",
        read: true,
      },
      {
        id: "msg-7",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-3",
        recipientName: "Ana Martínez",
        recipientAvatar: "https://github.com/furkanksl.png",
        recipientType: "tenant",
        content:
          "Entiendo, procesaré el pago manualmente. Gracias por la aclaración.",
        timestamp: "2024-05-14T16:45:00",
        read: false,
      },
    ],
  },
  {
    id: "thread-3",
    participants: [
      {
        id: "user-4",
        name: "Miguel Sánchez",
        avatar: "https://github.com/yahyabedirhan.png",
        type: "tenant",
      },
      {
        id: "user-2",
        name: "Juan Díaz",
        avatar: "https://github.com/kdrnp.png",
        type: "manager",
      },
    ],

    propertyId: "building-2",
    propertyName: "Residencial Los Pinos",
    unitId: "unit-3",
    unitNumber: "B-305",
    subject: "Solicitud de renovación de contrato",
    lastMessage: {
      content:
        "Perfecto, prepararé el nuevo contrato y te lo enviaré para revisión.",
      timestamp: "2024-05-13T09:15:00",
      senderId: "user-2",
    },
    unreadCount: 0,
    priority: "normal",
    category: "general",
    status: "open",
    messages: [
      {
        id: "msg-8",
        senderId: "user-4",
        senderName: "Miguel Sánchez",
        senderAvatar: "https://github.com/yahyabedirhan.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Hola Juan, me gustaría renovar mi contrato de arrendamiento que vence el próximo mes. ¿Podemos hablar sobre las condiciones?",
        timestamp: "2024-05-12T18:30:00",
        read: true,
      },
      {
        id: "msg-9",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-4",
        recipientName: "Miguel Sánchez",
        recipientAvatar: "https://github.com/yahyabedirhan.png",
        recipientType: "tenant",
        content:
          "Hola Miguel, claro que sí. Las condiciones serían las mismas con un ajuste del 5% en la renta mensual según el índice de inflación. ¿Te parece bien?",
        timestamp: "2024-05-13T08:45:00",
        read: true,
      },
      {
        id: "msg-10",
        senderId: "user-4",
        senderName: "Miguel Sánchez",
        senderAvatar: "https://github.com/yahyabedirhan.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Sí, estoy de acuerdo con esas condiciones. Me gustaría renovar por un año más.",
        timestamp: "2024-05-13T09:00:00",
        read: true,
      },
      {
        id: "msg-11",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-4",
        recipientName: "Miguel Sánchez",
        recipientAvatar: "https://github.com/yahyabedirhan.png",
        recipientType: "tenant",
        content:
          "Perfecto, prepararé el nuevo contrato y te lo enviaré para revisión.",
        timestamp: "2024-05-13T09:15:00",
        read: true,
      },
    ],
  },
  {
    id: "thread-4",
    participants: [
      {
        id: "user-5",
        name: "Laura González",
        avatar: "https://github.com/buyuktas18.png",
        type: "tenant",
      },
      {
        id: "user-2",
        name: "Juan Díaz",
        avatar: "https://github.com/kdrnp.png",
        type: "manager",
      },
    ],

    propertyId: "building-2",
    propertyName: "Residencial Los Pinos",
    unitId: "unit-4",
    unitNumber: "C-401",
    subject: "Ruido excesivo del vecino",
    lastMessage: {
      content:
        "Gracias por la rápida respuesta. Espero que se resuelva pronto.",
      timestamp: "2024-05-16T08:20:00",
      senderId: "user-5",
    },
    unreadCount: 1,
    priority: "urgent",
    category: "complaint",
    status: "open",
    messages: [
      {
        id: "msg-12",
        senderId: "user-5",
        senderName: "Laura González",
        senderAvatar: "https://github.com/buyuktas18.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Hola, quiero reportar ruido excesivo del apartamento de arriba. Desde hace tres días hay ruido constante de música y movimiento de muebles hasta altas horas de la noche. No puedo descansar adecuadamente.",
        timestamp: "2024-05-16T07:45:00",
        read: true,
      },
      {
        id: "msg-13",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-5",
        recipientName: "Laura González",
        recipientAvatar: "https://github.com/buyuktas18.png",
        recipientType: "tenant",
        content:
          "Hola Laura, lamento los inconvenientes. Me comunicaré inmediatamente con el inquilino del apartamento superior para resolver esta situación. Te mantendré informada.",
        timestamp: "2024-05-16T08:05:00",
        read: true,
      },
      {
        id: "msg-14",
        senderId: "user-5",
        senderName: "Laura González",
        senderAvatar: "https://github.com/buyuktas18.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Gracias por la rápida respuesta. Espero que se resuelva pronto.",
        timestamp: "2024-05-16T08:20:00",
        read: false,
      },
    ],
  },
  {
    id: "thread-5",
    participants: [
      {
        id: "user-6",
        name: "Roberto Méndez",
        avatar: "https://github.com/polymet-ai.png",
        type: "tenant",
      },
      {
        id: "user-2",
        name: "Juan Díaz",
        avatar: "https://github.com/kdrnp.png",
        type: "manager",
      },
    ],

    propertyId: "building-1",
    propertyName: "Edificio Alameda",
    unitId: "unit-5",
    unitNumber: "B-102",
    subject: "Solicitud de permiso para mascota",
    lastMessage: {
      content:
        "Muchas gracias por la aprobación. Firmaré el anexo al contrato.",
      timestamp: "2024-05-10T17:30:00",
      senderId: "user-6",
    },
    unreadCount: 0,
    priority: "normal",
    category: "general",
    status: "closed",
    messages: [
      {
        id: "msg-15",
        senderId: "user-6",
        senderName: "Roberto Méndez",
        senderAvatar: "https://github.com/polymet-ai.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Hola Juan, quisiera solicitar permiso para tener una mascota en mi apartamento. Se trata de un gato adulto, castrado y con todas sus vacunas al día.",
        timestamp: "2024-05-10T10:15:00",
        read: true,
        attachments: [
          {
            id: "attach-2",
            name: "cartilla_vacunacion_gato.jpg",
            type: "image/jpeg",
            url: "#",
            size: 2450000,
          },
        ],
      },
      {
        id: "msg-16",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-6",
        recipientName: "Roberto Méndez",
        recipientAvatar: "https://github.com/polymet-ai.png",
        recipientType: "tenant",
        content:
          "Hola Roberto, revisaré el reglamento del edificio y te daré una respuesta lo antes posible. Gracias por adjuntar la cartilla de vacunación.",
        timestamp: "2024-05-10T11:30:00",
        read: true,
      },
      {
        id: "msg-17",
        senderId: "user-2",
        senderName: "Juan Díaz",
        senderAvatar: "https://github.com/kdrnp.png",
        senderType: "manager",
        recipientId: "user-6",
        recipientName: "Roberto Méndez",
        recipientAvatar: "https://github.com/polymet-ai.png",
        recipientType: "tenant",
        content:
          "Después de revisar el reglamento, puedo confirmar que está permitido tener un gato en tu apartamento. Solo necesitaremos que firmes un anexo al contrato con las responsabilidades sobre la mascota. ¿Te parece bien?",
        timestamp: "2024-05-10T15:45:00",
        read: true,
      },
      {
        id: "msg-18",
        senderId: "user-6",
        senderName: "Roberto Méndez",
        senderAvatar: "https://github.com/polymet-ai.png",
        senderType: "tenant",
        recipientId: "user-2",
        recipientName: "Juan Díaz",
        recipientAvatar: "https://github.com/kdrnp.png",
        recipientType: "manager",
        content:
          "Muchas gracias por la aprobación. Firmaré el anexo al contrato.",
        timestamp: "2024-05-10T17:30:00",
        read: true,
      },
    ],
  },
  {
    id: "thread-6",
    participants: [
      {
        id: "system",
        name: "Sistema RentaDirecta",
        type: "system",
      },
      {
        id: "user-1",
        name: "Carlos Rodríguez",
        avatar: "https://github.com/yusufhilmi.png",
        type: "tenant",
      },
    ],

    propertyId: "building-1",
    propertyName: "Edificio Alameda",
    unitId: "unit-1",
    unitNumber: "A-101",
    subject: "Recordatorio de pago de renta",
    lastMessage: {
      content:
        "Recordatorio: Su pago de renta vence en 3 días. Por favor, realice el pago a tiempo para evitar cargos por mora.",
      timestamp: "2024-05-16T09:00:00",
      senderId: "system",
    },
    unreadCount: 1,
    priority: "high",
    category: "payment",
    status: "open",
    messages: [
      {
        id: "msg-19",
        senderId: "system",
        senderName: "Sistema RentaDirecta",
        senderType: "system",
        recipientId: "user-1",
        recipientName: "Carlos Rodríguez",
        recipientAvatar: "https://github.com/yusufhilmi.png",
        recipientType: "tenant",
        content:
          "Recordatorio: Su pago de renta vence en 3 días. Por favor, realice el pago a tiempo para evitar cargos por mora.",
        timestamp: "2024-05-16T09:00:00",
        read: false,
      },
    ],
  },
];

// Utility functions

export const getThreadById = (threadId: string): MessageThread | undefined => {
  return MESSAGES_DATA.find((thread) => thread.id === threadId);
};

export const getThreadsByParticipantId = (
  participantId: string
): MessageThread[] => {
  return MESSAGES_DATA.filter((thread) =>
    thread.participants.some((participant) => participant.id === participantId)
  );
};

export const getThreadsByPropertyId = (propertyId: string): MessageThread[] => {
  return MESSAGES_DATA.filter((thread) => thread.propertyId === propertyId);
};

export const getThreadsByUnitId = (unitId: string): MessageThread[] => {
  return MESSAGES_DATA.filter((thread) => thread.unitId === unitId);
};

export const getThreadsByCategory = (category: string): MessageThread[] => {
  return MESSAGES_DATA.filter((thread) => thread.category === category);
};

export const getThreadsByStatus = (status: string): MessageThread[] => {
  return MESSAGES_DATA.filter((thread) => thread.status === status);
};

export const getUnreadThreadsCount = (userId: string): number => {
  return MESSAGES_DATA.filter(
    (thread) =>
      thread.participants.some((participant) => participant.id === userId) &&
      thread.unreadCount > 0
  ).length;
};

export const getTotalThreadsCount = (): number => {
  return MESSAGES_DATA.length;
};

export const getOpenThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.status === "open").length;
};

export const getClosedThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.status === "closed").length;
};

export const getPendingThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.status === "pending").length;
};

export const getUrgentThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.priority === "urgent").length;
};

export const getHighPriorityThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.priority === "high").length;
};

export const getNormalPriorityThreadsCount = (): number => {
  return MESSAGES_DATA.filter((thread) => thread.priority === "normal").length;
};
