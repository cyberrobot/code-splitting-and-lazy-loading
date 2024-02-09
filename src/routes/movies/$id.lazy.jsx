import { createLazyFileRoute } from '@tanstack/react-router';
import { MovieDetails } from '../../components/MovieDetails';

export const Route = createLazyFileRoute('/movies/$id')({
  component: MovieDetails,
});
