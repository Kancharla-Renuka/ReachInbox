import { ScrollArea } from "@/components/ui/scroll-area";
import { CategoryBadge } from "./CategoryBadge";
import { SuggestedReplies } from "./SuggestedReplies";
import { Button } from "@/components/ui/button";
import { Reply, Forward, Archive, Trash2, Star } from "lucide-react";

interface EmailDetailProps {
  emailId: string;
}

// Mock data - in real app, fetch based on emailId
const mockEmail = {
  id: "1",
  from: "john.doe@company.com",
  to: "work@email.com",
  subject: "RE: Product Demo Request",
  timestamp: new Date(Date.now() - 1000 * 60 * 15),
  category: "interested",
  body: `Hi there,

Thanks for reaching out! I'd love to see a demo of your product. We're currently evaluating solutions in this space and your offering seems very interesting.

When would be a good time for a call? I'm generally available:
- Tuesday afternoons
- Wednesday mornings
- Thursday any time

Looking forward to learning more about how your solution can help us achieve our goals.

Best regards,
John Doe
Head of Operations
Company Inc.`,
  account: "work@email.com"
};

export const EmailDetail = ({ emailId }: EmailDetailProps) => {
  const email = mockEmail;

  const formatTimestamp = (date: Date) => {
    return date.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      <div className="border-b border-border p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-foreground mb-2">{email.subject}</h1>
            <div className="flex items-center gap-2">
              <CategoryBadge category={email.category} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Star className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Archive className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">From:</span>
            <span className="text-muted-foreground">{email.from}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">To:</span>
            <span className="text-muted-foreground">{email.to}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">Date:</span>
            <span className="text-muted-foreground">{formatTimestamp(email.timestamp)}</span>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-6">
        <div className="prose prose-sm max-w-none">
          <pre className="whitespace-pre-wrap font-sans text-foreground/90 leading-relaxed">
            {email.body}
          </pre>
        </div>
      </ScrollArea>

      <div className="border-t border-border p-6">
        <div className="flex items-center gap-2 mb-6">
          <Button className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline">
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>

        <SuggestedReplies category={email.category} />
      </div>
    </div>
  );
};
