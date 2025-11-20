import { useState } from "react";
import { ChevronDown, ChevronUp, Clock, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface Activity {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  availableSlots: number;
  price: number;
  description?: string;
}

interface ActivityCardProps {
  activity: Activity;
  isEnrolled: boolean;
  onEnroll: (activityId: string) => void;
  onUnenroll: (activityId: string) => void;
}

export const ActivityCard = ({
  activity,
  isEnrolled,
  onEnroll,
  onUnenroll,
}: ActivityCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">{activity.title}</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>
                {activity.startTime} - {activity.endTime}
              </span>
            </div>
          </div>
          <div className="ml-4">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isExpanded ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="px-4 pb-4 space-y-3 border-t bg-muted/30">
          {activity.description && (
            <p className="text-sm text-muted-foreground pt-3">{activity.description}</p>
          )}
          
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center gap-2 text-sm">
              <Users className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">
                {activity.availableSlots} vagas disponíveis
              </span>
            </div>
            <span className="font-semibold text-lg text-foreground">
              {activity.price > 0 ? `R$ ${activity.price.toFixed(2)}` : "Gratuito"}
            </span>
          </div>

          <Button
            onClick={() => isEnrolled ? onUnenroll(activity.id) : onEnroll(activity.id)}
            className={cn(
              "w-full font-semibold",
              isEnrolled
                ? "bg-destructive hover:bg-destructive/90"
                : "bg-success hover:bg-success/90 text-success-foreground"
            )}
          >
            {isEnrolled ? "Cancelar inscrição" : "Se inscrever"}
          </Button>
        </div>
      </div>
    </Card>
  );
};
