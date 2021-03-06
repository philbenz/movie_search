$(document).on('ready', function() {
    //prevent the event default
    // event.preventDefault();

    //sanity check
    console.log('sanity check with movie search js');


    //jQuery for the movie title
    $('button').click('submit', function( event ) {
      //ensure that the submit doesn't go to a server
      event.preventDefault();
      pullMovieDB($('.movie_title').val());
    });
});

function pullMovieDB(title) {
$.ajax({
  method: 'GET',
  url: 'http://www.omdbapi.com/?t=' + title
}).done(function(movie){
  console.log(movie);
  $('.poster').append('<img src="' + movie.Poster + '"</img>"');
  $('.poster_title').append(movie.Title)
  var genres = movie.Genre.split(',')
  console.log(genres);
  for (var i = 0; i < genres.length; i++) {
    $('#genre_select').append('<option>' + genres[i] + '</option>')
  }

});
}
