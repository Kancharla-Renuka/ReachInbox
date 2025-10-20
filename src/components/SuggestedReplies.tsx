import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Copy } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface SuggestedRepliesProps {
  category: string;
}

export const SuggestedReplies = ({ category }: SuggestedRepliesProps) => {
  const { toast } = useToast();
  const [isGenerating, setIsGenerating] = useState(false);

  const suggestedReplies = {
    interested: [
      "Thank you for your interest! I'd be happy to schedule a demo. I'm available Tuesday afternoons, Wednesday mornings, or Thursday any time. You can book directly here: https://cal.com/demo",
      "Great to hear you're interested! Let me share some additional resources and schedule a call to discuss how we can help you achieve your goals."
    ],
    meeting_booked: [
      "Perfect! I've confirmed our meeting for Tuesday at 2 PM. I'll send over the meeting link and agenda shortly.",
      "Thank you for scheduling! Looking forward to our discussion. I'll prepare a customized presentation based on your needs."
    ]
  };

  const replies = suggestedReplies[category as keyof typeof suggestedReplies] || [];

  const handleCopyReply = (reply: string) => {
    navigator.clipboard.writeText(reply);
    toast({
      title: "Copied!",
      description: "Reply copied to clipboard",
    });
  };

  if (replies.length === 0) return null;

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-accent" />
        <h3 className="text-sm font-semibold text-foreground">AI Suggested Replies</h3>
      </div>

      <div className="space-y-2">
        {replies.map((reply, index) => (
          <Card key={index} className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <p className="text-sm text-foreground/90 mb-3 leading-relaxed">{reply}</p>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleCopyReply(reply)}
              className="text-xs"
            >
              <Copy className="h-3 w-3 mr-1" />
              Use this reply
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};
