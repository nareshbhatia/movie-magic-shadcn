'use client';

import { HeartIcon, HeartFilledIcon } from '@radix-ui/react-icons';

export interface FavoriteToggleProps {
  movieId: string;
  checked: boolean;
}

export function FavoriteToggle({ movieId, checked }: FavoriteToggleProps) {
  const handleChange = async () => {
    // eslint-disable-next-line prefer-destructuring
    const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
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
        onChange={handleChange}
        type="checkbox"
      />
      <HeartIcon className="peer block h-6 w-6 text-sky-500 peer-checked:hidden" />
      <HeartFilledIcon className="peer hidden h-6 w-6 text-sky-500 peer-checked:block" />
    </label>
  );
}
