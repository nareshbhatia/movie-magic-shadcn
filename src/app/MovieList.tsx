import { MovieItem } from './MovieItem';
import type { Movie } from '@/models';

export interface MovieListProps {
  movies: Movie[];
}

export function MovieList({ movies }: MovieListProps) {
  return (
    <ul className="divide-y divide-slate-200">
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
