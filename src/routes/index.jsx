import { createFileRoute } from '@tanstack/react-router';
import { Movies } from '../components/Movies';
import { fetchMoviesList } from '../utils/data';

export const Route = createFileRoute('/')({
  loader: () => fetchMoviesList(),
  component: Movies,
});
