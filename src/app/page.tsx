import { MovieList } from './_components/MovieList';
import { Nav } from './_components/Nav';
import type { Movie } from '@/models';

interface SearchParams {
  q?: string;
  cert?: string[] | string;
}

async function getMovies({ q, cert }: SearchParams): Promise<Movie[]> {
  // create searchParamsString
  const urlSearchParams = new URLSearchParams();
  if (q !== undefined) urlSearchParams.append('q', q);
  if (cert !== undefined) {
    if (typeof cert === 'string') {
      urlSearchParams.append('cert', cert);
    } else {
      cert.forEach((certString) => {
        urlSearchParams.append('cert', certString);
      });
    }
  }
  const searchParamsString = urlSearchParams.toString();

  // call the api
  // eslint-disable-next-line prefer-destructuring
  const API_URL = process.env.API_URL;
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const url = `${API_URL}/movies?${searchParamsString}`;
  console.log('----> HTTP GET', url);
  // ----- No Cached Data -----
  const resMovies = await fetch(url, { cache: 'no-store' });
  return resMovies.json() as Promise<Movie[]>;
}

export interface MovieMagicRscProps {
  searchParams: SearchParams;
}

export default async function Home({ searchParams }: MovieMagicRscProps) {
  console.log('----> Rendering Home');
  console.log('----> searchParams', searchParams);
  const movies = await getMovies(searchParams);
  return (
    <div className="mx-auto max-w-3xl">
      <div className="divide-y">
        <Nav />
        <MovieList movies={movies} />
      </div>
    </div>
  );
}
