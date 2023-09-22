import type { ChangeEvent } from 'react';

export interface CertCheckboxProps {
  id: string;
  checked: boolean;
  onCertChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export function CertCheckbox({ id, checked, onCertChange }: CertCheckboxProps) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          checked={checked}
          className="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600"
          id={id}
          name={id}
          onChange={onCertChange}
          type="checkbox"
        />
      </div>
      <div className="ml-2 text-xs leading-6 sm:ml-3 sm:text-sm">
        <label className="font-medium text-gray-900" htmlFor={id}>
          {id}
        </label>
      </div>
    </div>
  );
}
