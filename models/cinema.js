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
  // const confirmationByYear = 
  return this.films.some((film) => film.year === yearTo);
}

Cinema.prototype.confirmFilmsOverLength = function(lengthTo) {
  // const confirmationByYear = 
  return this.films.every((film) => film.length >= lengthTo);
}


// const isBelowThreshold = (currentValue) => currentValue < 40;

// const array1 = [1, 30, 39, 29, 10, 13];

// console.log(array1.every(isBelowThreshold));
// // Expected output: true

module.exports = Cinema;

// const Film = require('../models/film.js');

// moonlight = new Film('Moonlight', 'drama', 2016, 111);
// bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
// dunkirk = new Film('Dunkirk', 'history', 2017, 96);
// blackPanther = new Film('Black Panther', 'action', 2018, 134);
// trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

// films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
// cinema = new Cinema(films);

// const filmTitles = cinema.films.map((film) => {
//   return film.title;
// });

// console.log(filmTitles);