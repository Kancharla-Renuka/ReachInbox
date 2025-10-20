import { RefreshCw } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const SyncStatus = () => {
  const [isSyncing, setIsSyncing] = useState(false);
  const [lastSync] = useState(new Date());

  const formatLastSync = () => {
    const now = new Date();
    const diff = Math.floor((now.getTime() - lastSync.getTime()) / 1000);
    
    if (diff < 60) return "Just now";
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <button
        onClick={() => {
          setIsSyncing(true);
          setTimeout(() => setIsSyncing(false), 2000);
        }}
        className="p-2 rounded-lg hover:bg-secondary transition-colors"
      >
        <RefreshCw className={cn("h-4 w-4", isSyncing && "animate-spin")} />
      </button>
      <span>Synced {formatLastSync()}</span>
    </div>
  );
};
