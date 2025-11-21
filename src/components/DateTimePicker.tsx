import { useState } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DateTimePickerProps {
  date?: Date;
  onDateChange: (date: Date | undefined) => void;
  placeholder?: string;
}

export function DateTimePicker({ date, onDateChange, placeholder = "Selecione data e hora" }: DateTimePickerProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(date);
  const [time, setTime] = useState<string>(
    date ? format(date, "HH:mm") : "00:00"
  );

  const handleDateSelect = (newDate: Date | undefined) => {
    if (newDate) {
      const [hours, minutes] = time.split(":");
      newDate.setHours(parseInt(hours), parseInt(minutes));
      setSelectedDate(newDate);
      onDateChange(newDate);
    }
  };

  const handleTimeChange = (newTime: string) => {
    setTime(newTime);
    if (selectedDate) {
      const [hours, minutes] = newTime.split(":");
      const updatedDate = new Date(selectedDate);
      updatedDate.setHours(parseInt(hours), parseInt(minutes));
      setSelectedDate(updatedDate);
      onDateChange(updatedDate);
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {selectedDate ? (
            format(selectedDate, "dd/MM/yyyy 'às' HH:mm")
          ) : (
            <span>{placeholder}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          initialFocus
          className={cn("p-3 pointer-events-auto")}
        />
        <div className="p-3 border-t border-border">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <Input
              type="time"
              value={time}
              onChange={(e) => handleTimeChange(e.target.value)}
              className="flex-1"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Horário de Brasília</p>
        </div>
      </PopoverContent>
    </Popover>
  );
}
