import { useState } from "react";
import { EmailList } from "@/components/EmailList";
import { EmailDetail } from "@/components/EmailDetail";
import { Sidebar } from "@/components/Sidebar";
import { SearchBar } from "@/components/SearchBar";
import { SyncStatus } from "@/components/SyncStatus";

const Index = () => {
  const [selectedEmail, setSelectedEmail] = useState<string | null>(null);
  const [selectedFolder, setSelectedFolder] = useState("inbox");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar 
        selectedFolder={selectedFolder}
        onFolderSelect={setSelectedFolder}
      />
      
      <div className="flex-1 flex flex-col">
        <header className="border-b border-border bg-card px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Email Onebox
            </h1>
            <div className="flex items-center gap-4">
              <SearchBar 
                value={searchQuery}
                onChange={setSearchQuery}
              />
              <SyncStatus />
            </div>
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          <EmailList 
            folder={selectedFolder}
            searchQuery={searchQuery}
            selectedEmailId={selectedEmail}
            onEmailSelect={setSelectedEmail}
          />
          
          {selectedEmail && (
            <EmailDetail emailId={selectedEmail} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
