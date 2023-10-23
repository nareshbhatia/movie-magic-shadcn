'use client';

import { Icons } from '@/components/icons';

export interface FavoriteToggleProps {
  movieId: string;
  checked: boolean;
}

export function FavoriteToggle({ movieId, checked }: FavoriteToggleProps) {
  const handleChange = async () => {
    // eslint-disable-next-line prefer-destructuring
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    const url = `${NEXT_PUBLIC_API_URL}/movies/${movieId}`;
    console.log('----> HTTP PATCH', url, 'favorite =', !checked);
    await fetch(url, {
      method: 'PATCH',
      body: JSON.stringify({
        favorite: !checked,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        className="peer sr-only"
        defaultChecked={checked}
        id="favorite"
        name="favorite"
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onChange={handleChange}
        type="checkbox"
      />
      <Icons.heart className="peer block h-6 w-6 text-emphasis-foreground peer-checked:hidden" />
      <Icons.heart
        className="peer hidden h-6 w-6 text-emphasis-foreground peer-checked:block"
        fill="currentColor"
      />
    </label>
  );
}
