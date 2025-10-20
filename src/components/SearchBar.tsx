import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative w-96">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder="Search emails..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-secondary border-transparent focus:bg-background focus:border-border"
      />
    </div>
  );
};
