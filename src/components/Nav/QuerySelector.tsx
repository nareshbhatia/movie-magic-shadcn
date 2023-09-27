import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export interface QuerySelectorProps {
  // q is empty (representing "all") or ["top-10"] or ["new-releases"]
  q: string[];
  onQueryChange: (value: string) => void;
}

export function QuerySelector({ q, onQueryChange }: QuerySelectorProps) {
  return (
    <Select onValueChange={onQueryChange} value={q.length === 0 ? 'all' : q[0]}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a query" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="top-10">Top 10</SelectItem>
          <SelectItem value="new-releases">New Releases</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
