import { useState } from "react";
import { Calendar, Clock, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

const CreateTicket = () => {
  const [salesPeriod, setSalesPeriod] = useState<"date" | "batch">("date");
  const [availability, setAvailability] = useState<"public" | "invited" | "manual">("public");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-14 pb-6 px-4 max-w-md mx-auto">
        <div className="space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-foreground">Criar Ingresso</h1>
            <p className="text-sm text-muted-foreground">
              A taxa de serviço é repassada ao comprador, sendo exibida junto com o valor do ingresso
            </p>
          </div>

          {/* Título do Ingresso */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Título do Ingresso <span className="text-destructive">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Ingresso Único, Meia-Entrada, VIP, etc."
              className="text-sm"
            />
            <p className="text-xs text-muted-foreground">45 caracteres restantes</p>
          </div>

          {/* Quantidade */}
          <div className="space-y-2">
            <Label htmlFor="quantity" className="text-sm font-medium">
              Quantidade <span className="text-destructive">*</span>
            </Label>
            <Input
              id="quantity"
              type="number"
              placeholder="Ex. 100"
              className="text-sm"
            />
          </div>

          {/* Valor a receber */}
          <div className="space-y-2">
            <Label htmlFor="value" className="text-sm font-medium">
              Valor a receber <span className="text-destructive">*</span>
            </Label>
            <Input
              id="value"
              placeholder="R$"
              className="text-sm"
            />
          </div>

          {/* Valor do comprador */}
          <div className="space-y-2">
            <Label className="text-sm font-medium flex items-center gap-2">
              Valor do comprador
              <Info className="h-4 w-4 text-muted-foreground" />
            </Label>
            <p className="text-success font-semibold">R$ 0,00</p>
          </div>

          {/* Meia-entrada */}
          <div className="flex items-center space-x-2">
            <Checkbox id="half-price" />
            <Label htmlFor="half-price" className="text-sm font-normal cursor-pointer">
              Criar meia-entrada para esse ingresso
            </Label>
            <Info className="h-4 w-4 text-muted-foreground" />
          </div>

          <Separator />

          {/* Período das vendas */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Período das vendas deste Ingresso: <span className="text-destructive">*</span>
            </Label>
            <RadioGroup value={salesPeriod} onValueChange={(v) => setSalesPeriod(v as "date" | "batch")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="date" id="by-date" />
                <Label htmlFor="by-date" className="font-normal cursor-pointer">Por data</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="batch" id="by-batch" />
                <Label htmlFor="by-batch" className="font-normal cursor-pointer">Por lote</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
            </RadioGroup>
          </div>

          {/* Data de Início das Vendas */}
          <div className="space-y-2">
            <Label htmlFor="start-date" className="text-sm font-medium">
              Data de Início das Vendas <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="start-date"
                type="date"
                defaultValue="2025-11-06"
                className="pl-10 text-sm"
              />
            </div>
          </div>

          {/* Hora de Início */}
          <div className="space-y-2">
            <Label htmlFor="start-time" className="text-sm font-medium">
              Hora de Início <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="start-time"
                type="time"
                defaultValue="15:15"
                className="pl-10 text-sm"
              />
            </div>
            <p className="text-xs text-muted-foreground">Horário de Brasília</p>
          </div>

          {/* Data de Término das Vendas */}
          <div className="space-y-2">
            <Label htmlFor="end-date" className="text-sm font-medium">
              Data de Término das Vendas <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="end-date"
                type="date"
                defaultValue="2025-11-09"
                className="pl-10 text-sm"
              />
            </div>
          </div>

          {/* Hora de Término */}
          <div className="space-y-2">
            <Label htmlFor="end-time" className="text-sm font-medium">
              Hora de Término <span className="text-destructive">*</span>
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                id="end-time"
                type="time"
                defaultValue="15:00"
                className="pl-10 text-sm"
              />
            </div>
            <p className="text-xs text-muted-foreground">Horário de Brasília</p>
          </div>

          <Separator />

          {/* Disponibilidade do ingresso */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Disponibilidade do Ingresso: <span className="text-destructive">*</span>
            </Label>
            <RadioGroup value={availability} onValueChange={(v) => setAvailability(v as "public" | "invited" | "manual")}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="public" id="public" />
                <Label htmlFor="public" className="font-normal cursor-pointer">Para todo o público</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="invited" id="invited" />
                <Label htmlFor="invited" className="font-normal cursor-pointer">Restrito a convidados</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="manual" id="manual" />
                <Label htmlFor="manual" className="font-normal cursor-pointer">Para ser adicionado manualmente</Label>
                <Info className="h-4 w-4 text-muted-foreground" />
              </div>
            </RadioGroup>
          </div>

          {/* Quantidade permitida por compra */}
          <div className="space-y-3">
            <Label className="text-sm font-medium flex items-center gap-2">
              Quantidade permitida por compra
              <Info className="h-4 w-4 text-muted-foreground" />
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="min" className="text-xs text-muted-foreground">
                  Mínima <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="min"
                  type="number"
                  defaultValue="1"
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="max" className="text-xs text-muted-foreground">
                  Máxima <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="max"
                  type="number"
                  defaultValue="5"
                  className="text-sm"
                />
              </div>
            </div>
          </div>

          {/* Descrição do Ingresso */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium">
              Descrição do Ingresso (opcional):
            </Label>
            <Textarea
              id="description"
              placeholder="Informações adicionais ao nome do ingresso. Ex.: Esse ingresso dá direito a um copo"
              rows={4}
              className="text-sm resize-none"
            />
            <p className="text-xs text-muted-foreground text-right">100 caracteres restantes</p>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              variant="ghost"
              className="flex-1 text-success hover:text-success hover:bg-success/10"
            >
              CANCELAR
            </Button>
            <Button
              className="flex-1 bg-success hover:bg-success/90 text-success-foreground"
            >
              CRIAR INGRESSO
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
