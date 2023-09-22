export interface Movie {
  id: string;
  name: string;
  year: number;
  rating: number;
  photoUrl: string;
  certification: string;
  genres: string[];
  cast: string[];
  runtime: number;
  favorite: boolean;
  tagline: string;
  logline: string;
}
