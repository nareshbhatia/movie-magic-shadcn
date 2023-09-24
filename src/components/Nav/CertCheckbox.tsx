import { Checkbox } from '@/components/ui/checkbox';

export interface CertCheckboxProps {
  id: string;
  checked: boolean;
  onCertChange: (id: string) => void;
}

export function CertCheckbox({ id, checked, onCertChange }: CertCheckboxProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        checked={checked}
        id={id}
        onCheckedChange={() => onCertChange(id)}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {id}
      </label>
    </div>
  );
}
