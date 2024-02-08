import data from './data.json';

export const fetchMoviesList = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
};

export const fetchMovieDetails = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.results.find((movie) => movie.id === Number(id)));
    }, 1000);
  });
};
