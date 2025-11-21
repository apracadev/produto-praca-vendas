import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

import { PaymentTimer } from "@/components/PaymentTimer";

const TicketPurchase = () => {
  const navigate = useNavigate();
  const ticketPrice = 90;

  return (
    <div className="min-h-screen bg-background pb-6">
      <div className="max-w-md mx-auto px-4 py-6 space-y-4">
        <PaymentTimer />
        {/* Header */}
        <div className="space-y-2">
          <Card className="p-4 border-2">
            <h2 className="text-xl font-bold text-foreground">Carrinho</h2>
            <div className="flex items-center justify-between">
              <p className="text-sm text-success font-medium">
                3 ingressos R$ {ticketPrice.toFixed(2)}
              </p>
           
            <Button
              onClick={() => navigate("/activities")}
              size="sm"
              className="bg-success hover:bg-success/90 text-success-foreground"
            >
              Selecionar atividades
            </Button>
          </div>
          </Card>
        </div>

        {/* Event Details Card */}
        <Card className="p-4 border-2">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">1×</span>
                  <h3 className="text-sm font-bold text-foreground">
                    KINGS WORLD CUP NATIONS - FINAL
                  </h3>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>SÃO PAULO, Allianz Parque</p>
                  <p>sábado, 17/01/2026, 18h00</p>
                  <p className="text-[10px]">
                    Promotor: KINGS WORLD CUP BRASIL LTDA
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-success">
                  R$ {ticketPrice.toFixed(2)}
                </p>
              </div>
            </div>

            <button className="text-xs text-success hover:underline flex items-center gap-1">
              Editar detalhes e valores da taxa, quando aplicável
              <ChevronRight className="h-3 w-3" />
            </button>

            <button className="text-xs text-destructive hover:underline">
              remover ingresso
            </button>
          </div>
        </Card>

        {/* Event Details Card */}
        <Card className="p-4 border-2">
          <div className="space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm text-muted-foreground">2×</span>
                  <h3 className="text-sm font-bold text-foreground">
                    KINGS WORLD CUP NATIONS - FINAL
                  </h3>
                </div>
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>SÃO PAULO, Allianz Parque</p>
                  <p>sábado, 17/01/2026, 18h00</p>
                  <p className="text-[10px]">
                    Promotor: KINGS WORLD CUP BRASIL LTDA
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-success">
                  R$ {ticketPrice.toFixed(2)}
                </p>
              </div>
            </div>

            <button className="text-xs text-success hover:underline flex items-center gap-1">
              Editar detalhes e valores da taxa, quando aplicável
              <ChevronRight className="h-3 w-3" />
            </button>

            <button className="text-xs text-destructive hover:underline">
              remover ingresso
            </button>
          </div>
        </Card>

        {/* Special Services */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-foreground px-1">
            Serviços especiais e adicionais
          </h3>

          <Card className="p-4 border-2">
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <input type="checkbox" className="mt-1" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Seguro Ingresso Protegido Premium
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-foreground">R$ 22,44</p>
                <p className="text-xs text-muted-foreground">por item</p>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
              Esse seguro protege dentro de critérios específicos cobertos pela
              apólice: o reembolso do valor dos ingressos e cobertura de até R$
              2.000,00 em caso de roubo e furto do celular.
            </p>
          </Card>
        </div>

        {/* Voucher Section */}
        <Card className="p-4 border-2">
          <div className="space-y-2">
            <p className="text-sm font-semibold text-foreground">
              Resgatar voucher/vale presente
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Código do voucher/vale presente"
                className="flex-1 text-xs px-3 py-2 border rounded-md bg-background"
              />
              <Button
                size="sm"
                className="px-6 bg-success hover:bg-success/90 text-success-foreground"
              >
                →
              </Button>
            </div>
          </div>
        </Card>

        {/* Summary */}
        <Card className="p-4 border-2 bg-muted/30">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground mb-3">
              Resumo
            </h3>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                1 × KINGS WORLD CUP NATIONS - FINAL
              </span>
              <span className="font-medium">R$ {ticketPrice.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between text-base font-bold">
                <span>Subtotal</span>
                <span>R$ {ticketPrice.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Incluindo taxas. Consulte em Tudo abaixo
              </p>
            </div>
          </div>
        </Card>

        {/* Continue Button */}
        <Button
          className="w-full py-6 text-base font-semibold bg-success hover:bg-success/90 text-success-foreground"
          size="lg"
          onClick={() => navigate("/activities")}
        >
          Selecionar atividades
        </Button>

        {/* Back Link */}
        <button className="text-xs text-success hover:underline flex items-center justify-center gap-1 w-full">
          ← Voltar
        </button>
      </div>
    </div>
  );
};

export default TicketPurchase;
