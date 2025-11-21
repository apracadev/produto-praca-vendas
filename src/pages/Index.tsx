import { useState } from "react";
import { PaymentTimer } from "@/components/PaymentTimer";
import { TicketSummary } from "@/components/TicketSummary";
import { ActivityCard, Activity } from "@/components/ActivityCard";
import { toast } from "sonner";

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: "1",
    title: "Atividade 1",
    startTime: "09:00",
    endTime: "11:00",
    availableSlots: 30,
    price: 50,
    description: "Workshop de desenvolvimento web com foco em React e TypeScript",
  },
  {
    id: "2",
    title: "Atividade 2",
    startTime: "14:00",
    endTime: "16:00",
    availableSlots: 25,
    price: 75,
    description: "Sessão prática de design de interfaces e UX",
  },
  {
    id: "3",
    title: "Atividade 3",
    startTime: "16:30",
    endTime: "18:00",
    availableSlots: 40,
    price: 0,
    description: "Networking e coffee break - atividade gratuita",
  },
  {
    id: "4",
    title: "Atividade 4",
    startTime: "19:00",
    endTime: "21:00",
    availableSlots: 20,
    price: 100,
    description: "Palestra com especialistas do mercado tech",
  },
];

const TICKET_BASE_PRICE = 90;

const Index = () => {
  const [enrolledActivities, setEnrolledActivities] = useState<Set<string>>(new Set());

  const handleEnroll = (activityId: string) => {
    const activity = MOCK_ACTIVITIES.find((a) => a.id === activityId);
    if (activity) {
      setEnrolledActivities((prev) => new Set(prev).add(activityId));
      toast.success(`Inscrito em: ${activity.title}`, {
        description: activity.price > 0 
          ? `R$ ${activity.price.toFixed(2)} adicionado ao carrinho` 
          : "Atividade gratuita",
      });
    }
  };

  const handleUnenroll = (activityId: string) => {
    const activity = MOCK_ACTIVITIES.find((a) => a.id === activityId);
    if (activity) {
      setEnrolledActivities((prev) => {
        const newSet = new Set(prev);
        newSet.delete(activityId);
        return newSet;
      });
      toast.info(`Inscrição cancelada: ${activity.title}`);
    }
  };

  const totalValue = Array.from(enrolledActivities).reduce((sum, id) => {
    const activity = MOCK_ACTIVITIES.find((a) => a.id === id);
    return sum + (activity?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        <PaymentTimer initialMinutes={10} />
        
        <TicketSummary
          ticketNumber={1}
          totalValue={TICKET_BASE_PRICE}
          rules={["Selecione suas atividades", "Confirme o pagamento antes do tempo expirar"]}
        />

        <div className="space-y-3">
          <h2 className="text-lg font-bold text-foreground px-1">Atividades Disponíveis</h2>
          {MOCK_ACTIVITIES.map((activity) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isEnrolled={enrolledActivities.has(activity.id)}
              onEnroll={handleEnroll}
              onUnenroll={handleUnenroll}
            />
          ))}
        </div>

        {enrolledActivities.size > 0 && (
          <div className="sticky bottom-4 mt-6">
            <div className="bg-success text-success-foreground p-4 rounded-lg shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Total do Carrinho</p>
                  <p className="text-xs opacity-90">{enrolledActivities.size} atividade(s)</p>
                </div>
                <p className="text-2xl font-bold">R$ {totalValue.toFixed(2)}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
