import { EmailItem } from "./EmailItem";
import { ScrollArea } from "@/components/ui/scroll-area";

interface EmailListProps {
  folder: string;
  searchQuery: string;
  selectedEmailId: string | null;
  onEmailSelect: (id: string) => void;
}

// Mock data
const mockEmails = [
  {
    id: "1",
    from: "john.doe@company.com",
    subject: "RE: Product Demo Request",
    preview: "Thanks for reaching out! I'd love to see a demo of your product. When would be a good time?",
    timestamp: new Date(Date.now() - 1000 * 60 * 15),
    category: "interested",
    isRead: false,
    account: "work@email.com"
  },
  {
    id: "2",
    from: "sarah.smith@startup.io",
    subject: "Meeting Scheduled - Product Discussion",
    preview: "I've booked a meeting for next Tuesday at 2 PM. Looking forward to discussing how your solution can help us.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
    category: "meeting_booked",
    isRead: false,
    account: "work@email.com"
  },
  {
    id: "3",
    from: "marketing@newsletter.com",
    subject: "Weekly Newsletter - Tech Updates",
    preview: "Check out this week's top stories in technology and innovation...",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
    category: "spam",
    isRead: true,
    account: "personal@email.com"
  },
  {
    id: "4",
    from: "mike.johnson@enterprise.com",
    subject: "Not interested at this time",
    preview: "Thank you for your email, but we're not looking for solutions in this area right now.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24),
    category: "not_interested",
    isRead: true,
    account: "work@email.com"
  },
  {
    id: "5",
    from: "lisa.wong@company.net",
    subject: "Out of Office: Vacation",
    preview: "I'm currently out of office until next Monday. I'll respond to your email when I return.",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    category: "out_of_office",
    isRead: true,
    account: "work@email.com"
  }
];

export const EmailList = ({ folder, searchQuery, selectedEmailId, onEmailSelect }: EmailListProps) => {
  const filteredEmails = mockEmails.filter(email => {
    const matchesSearch = searchQuery === "" || 
      email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      email.preview.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSearch;
  });

  return (
    <div className="w-96 border-r border-border bg-card flex flex-col">
      <div className="p-4 border-b border-border">
        <h2 className="font-semibold text-foreground capitalize">{folder}</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          {filteredEmails.length} {filteredEmails.length === 1 ? 'email' : 'emails'}
        </p>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="divide-y divide-border">
          {filteredEmails.map((email) => (
            <EmailItem
              key={email.id}
              email={email}
              isSelected={selectedEmailId === email.id}
              onClick={() => onEmailSelect(email.id)}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
