import type { ChangeEvent } from 'react';

export interface QuerySelectorProps {
  // q is empty (representing "all") or ["top-10"] or ["new-releases"]
  q: string[];
  onQueryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export function QuerySelector({ q, onQueryChange }: QuerySelectorProps) {
  return (
    <select
      className="rounded-md border-0 py-1.5 pl-3 pr-10 text-xs text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm"
      id="query"
      name="query"
      onChange={onQueryChange}
      value={q.length === 0 ? 'all' : q[0]}
    >
      <option value="all">All</option>
      <option value="top-10">Top 10</option>
      <option value="new-releases">New Releases</option>
    </select>
  );
}
