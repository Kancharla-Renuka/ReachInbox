import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Calendar, XCircle, AlertTriangle, Coffee } from "lucide-react";

interface CategoryBadgeProps {
  category: string;
}

const categoryConfig = {
  interested: {
    label: "Interested",
    icon: CheckCircle2,
    className: "bg-success/10 text-success hover:bg-success/20 border-success/20"
  },
  meeting_booked: {
    label: "Meeting Booked",
    icon: Calendar,
    className: "bg-primary/10 text-primary hover:bg-primary/20 border-primary/20"
  },
  not_interested: {
    label: "Not Interested",
    icon: XCircle,
    className: "bg-destructive/10 text-destructive hover:bg-destructive/20 border-destructive/20"
  },
  spam: {
    label: "Spam",
    icon: AlertTriangle,
    className: "bg-warning/10 text-warning hover:bg-warning/20 border-warning/20"
  },
  out_of_office: {
    label: "Out of Office",
    icon: Coffee,
    className: "bg-accent/10 text-accent hover:bg-accent/20 border-accent/20"
  }
};

export const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const config = categoryConfig[category as keyof typeof categoryConfig];
  
  if (!config) return null;

  const Icon = config.icon;

  return (
    <Badge variant="outline" className={cn("text-xs font-medium", config.className)}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
    </Badge>
  );
};
