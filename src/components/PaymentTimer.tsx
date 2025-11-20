import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

interface PaymentTimerProps {
  initialMinutes?: number;
}

export const PaymentTimer = ({ initialMinutes = 10 }: PaymentTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => Math.max(0, prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progressPercentage = (timeLeft / (initialMinutes * 60)) * 100;

  return (
    <div className="bg-timer text-timer-foreground p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Tempo restante para pagamento:</span>
        </div>
        <span className="text-lg font-bold">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </div>
      <div className="w-full h-2 bg-timer-foreground/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-progressBar transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
};
