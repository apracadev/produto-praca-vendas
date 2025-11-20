import { Card } from "@/components/ui/card";

interface TicketSummaryProps {
  ticketNumber: number;
  totalValue: number;
  rules?: string[];
}

export const TicketSummary = ({ ticketNumber, totalValue, rules }: TicketSummaryProps) => {
  return (
    <Card className="p-4 border-2">
      <div className="text-center space-y-1">
        <p className="text-sm font-semibold text-foreground">
          Valor do ingresso: R$ {totalValue.toFixed(2)}
        </p>
        <p className="text-sm text-muted-foreground">
          Atividades do ingresso {ticketNumber}
        </p>
        {rules && rules.length > 0 && (
          <p className="text-xs text-muted-foreground pt-1">
            {rules.join(" • ")}
          </p>
        )}
      </div>
    </Card>
  );
};
