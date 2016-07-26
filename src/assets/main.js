$(document).on('ready', function() {
    //prevent the event default
    // event.preventDefault();

    //sanity check
    console.log('sanity check with movie search js');


    //jQuery for the movie title
    $( ".submit" ).click(function( event ) {
      //ensure that the submit doesn't go to a server
      event.preventDefault();
      pullMovieDB($('.movie_title').val());
    });
  }); // closes the document.on


function pullMovieDB (title) {
  $.ajax({
    method: 'GET',
    url: 'http://www.omdbapi.com/' + title
  }).done(function(movie){
    console.log("Movie Info:  " + movie);
  });

}
