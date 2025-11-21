import { Ticket, Plus } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-card border-b border-border z-50">
      <div className="flex items-center justify-around h-14 max-w-md mx-auto">
        <button
          onClick={() => navigate("/")}
          className={cn(
            "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors",
            isActive("/") || isActive("/activities")
              ? "text-success"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Ticket className="h-5 w-5" />
          <span className="text-xs">Ver Ingresso</span>
        </button>

        <button
          onClick={() => navigate("/create-ticket")}
          className={cn(
            "flex flex-col items-center justify-center gap-1 px-6 py-2 transition-colors",
            isActive("/create-ticket")
              ? "text-success"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Plus className="h-5 w-5" />
          <span className="text-xs">Criar Ingresso</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
