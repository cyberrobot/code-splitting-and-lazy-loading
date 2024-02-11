import { fetchMovieDetails } from '../utils/data';
import MovieDetails from './MovieDetails';

export async function loader({ params }) {
  return await fetchMovieDetails(params.id);
}

export function Component() {
  return <MovieDetails />;
}
