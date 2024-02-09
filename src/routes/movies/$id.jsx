import { createFileRoute } from '@tanstack/react-router';
import { fetchMovieDetails } from '../../utils/data';

export const Route = createFileRoute('/movies/$id')({
  loader: ({ params }) => fetchMovieDetails(params.id),
});
