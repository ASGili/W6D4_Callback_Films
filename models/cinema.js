const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function() {
  const filmTitles = this.films.map((film) => {
    return film.title;
  });
  return filmTitles;
}

Cinema.prototype.findByTitle = function(filmTitle) {
  const filmByTitle = this.films.filter((film) => {
    return film.title === filmTitle
  })
  return filmByTitle[0];
}

Cinema.prototype.filmsByGenre = function(genre) {
  const filmByGenre = this.films.filter((film) => {
    return film.genre === genre
  })
  return filmByGenre;
}

Cinema.prototype.getTotalRunningTime = function() {
  const totalRunningTime = this.films.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.length}, 0);
  return totalRunningTime;
}

Cinema.prototype.confirmFilmByYear = function(yearTo) {
  return this.films.some((film) => film.year === yearTo);
}

Cinema.prototype.confirmFilmsOverLength = function(lengthTo) {
  return this.films.every((film) => film.length >= lengthTo);
}


module.exports = Cinema;
