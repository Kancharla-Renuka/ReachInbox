import { cn } from "@/lib/utils";
import { CategoryBadge } from "./CategoryBadge";

interface Email {
  id: string;
  from: string;
  subject: string;
  preview: string;
  timestamp: Date;
  category: string;
  isRead: boolean;
  account: string;
}

interface EmailItemProps {
  email: Email;
  isSelected: boolean;
  onClick: () => void;
}

export const EmailItem = ({ email, isSelected, onClick }: EmailItemProps) => {
  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (hours < 1) return "Just now";
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 transition-all hover:bg-secondary/50",
        isSelected && "bg-secondary",
        !email.isRead && "bg-primary/5"
      )}
    >
      <div className="flex items-start justify-between gap-2 mb-1">
        <span className={cn(
          "text-sm font-medium truncate flex-1",
          !email.isRead && "text-foreground",
          email.isRead && "text-muted-foreground"
        )}>
          {email.from}
        </span>
        <span className="text-xs text-muted-foreground shrink-0">
          {formatTime(email.timestamp)}
        </span>
      </div>
      
      <h3 className={cn(
        "text-sm mb-1 truncate",
        !email.isRead && "font-semibold text-foreground",
        email.isRead && "text-foreground/80"
      )}>
        {email.subject}
      </h3>
      
      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
        {email.preview}
      </p>

      <div className="flex items-center gap-2">
        <CategoryBadge category={email.category} />
        {!email.isRead && (
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        )}
      </div>
    </button>
  );
};
