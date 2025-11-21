import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PaymentTimerProps {
  initialMinutes?: number;
}

export const PaymentTimer = ({ initialMinutes = 10 }: PaymentTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const timeString = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (isSticky) {
    return (
      <>
        <div className="h-[88px]" aria-hidden="true" />
        <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b shadow-sm animate-in slide-in-from-top duration-200">
          <div className="max-w-md mx-auto px-4 py-2">
            <div className="flex items-center justify-center gap-2 mb-1 text-foreground">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold font-mono">{timeString}</span>
            </div>
          </div>
          <div className="w-full h-1 bg-muted overflow-hidden">
            <div
              className="h-full bg-success transition-all duration-1000 ease-linear"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <Card className="p-4 border-2">
      <div className="flex items-center justify-between mb-2 text-foreground">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-medium">Tempo restante para pagamento:</span>
        </div>
        <span className="text-lg font-bold font-mono">
          {timeString}
        </span>
      </div>
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-success transition-all duration-1000 ease-linear"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </Card>
  );
};
