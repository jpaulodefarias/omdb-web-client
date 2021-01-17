export const createFavoritesStore = () => ({
  movies: [],
  includes(movie) {
    return this.movies.some(_movie => _movie.id === movie.id);
  },
  add(movie) {
    if (!this.includes(movie)) {
      this.movies.push(movie); 
    }
  },
  remove(movie) {
    this.movies = this.movies.filter(_movie => _movie.id !== movie.id);
  },
  toggle(movie) {
    if (!this.includes(movie)) {
      this.add(movie);
    } else {
      this.remove(movie);
    }
  }
});
