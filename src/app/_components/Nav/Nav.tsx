'use client';

import { CertCheckbox } from './CertCheckbox';
import { ModeToggle } from './ModeToggle';
import { QuerySelector } from './QuerySelector';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const q = searchParams.getAll('q').map((param) => param.toLowerCase());
  const cert = searchParams.getAll('cert').map((param) => param.toUpperCase());
  console.log('----> Nav: q =', q, ', ', 'cert =', cert);

  /**
   * navigate based on q and cert
   * @param q is empty (representing "all") or ["top-10"] or ["new-releases"]
   * @param cert is an array containing all the selected certs
   */
  const navigate = (q: string[], cert: string[]) => {
    // create searchParamsString
    const urlSearchParams = new URLSearchParams();
    if (q.length > 0) urlSearchParams.append('q', q[0]);
    cert.forEach((certString) => {
      urlSearchParams.append('cert', certString);
    });
    const searchParamsString = urlSearchParams.toString();

    // navigate
    const url = `${pathname}?${searchParamsString}`;
    console.log('----> navigate to', url);
    router.push(url);
  };

  const handleQueryChange = (value: string) => {
    navigate(value === 'all' ? [] : [value], cert);
  };

  const handleCertChange = (id: string) => {
    const newCerts = cert.includes(id)
      ? cert.filter((c) => c !== id)
      : cert.concat([id]);
    navigate(q, newCerts);
  };

  return (
    <nav className="flex items-center px-6 py-4 text-sm font-medium">
      <div className="flex-1 text-sm sm:text-lg">Movie Magic</div>
      <ul className="flex items-center space-x-5 sm:space-x-10">
        <li>
          <QuerySelector onQueryChange={handleQueryChange} q={q} />
        </li>
        <li>
          <div className="flex items-center space-x-3 sm:space-x-5">
            {['PG-13', 'R', 'NR'].map((c) => (
              <CertCheckbox
                checked={cert.includes(c)}
                id={c}
                key={c}
                onCertChange={handleCertChange}
              />
            ))}
          </div>
        </li>
        <li>
          <ModeToggle />
        </li>
      </ul>
    </nav>
  );
}
