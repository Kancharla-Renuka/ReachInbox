import { Mail, Inbox, Send, Archive, Trash2, Star, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  selectedFolder: string;
  onFolderSelect: (folder: string) => void;
}

export const Sidebar = ({ selectedFolder, onFolderSelect }: SidebarProps) => {
  const folders = [
    { id: "inbox", label: "Inbox", icon: Inbox, count: 12 },
    { id: "starred", label: "Starred", icon: Star, count: 3 },
    { id: "sent", label: "Sent", icon: Send, count: 45 },
    { id: "archive", label: "Archive", icon: Archive, count: 128 },
    { id: "trash", label: "Trash", icon: Trash2, count: 8 },
  ];

  return (
    <aside className="w-64 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <button className="w-full bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg px-4 py-3 font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
          <Mail className="h-5 w-5" />
          Compose
        </button>
      </div>

      <nav className="flex-1 p-2 overflow-y-auto">
        <div className="space-y-1">
          {folders.map((folder) => {
            const Icon = folder.icon;
            const isSelected = selectedFolder === folder.id;
            
            return (
              <button
                key={folder.id}
                onClick={() => onFolderSelect(folder.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all",
                  isSelected
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                <span className="flex-1 text-left">{folder.label}</span>
                {folder.count > 0 && (
                  <span className={cn(
                    "text-xs px-2 py-0.5 rounded-full",
                    isSelected 
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}>
                    {folder.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-2 border-t border-border">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-secondary hover:text-foreground transition-all">
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
};
