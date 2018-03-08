// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  $("button").click(function(){
        var searchTerm = $("input").val();
        callGiphyAPIWithSearchTerm(searchTerm);
  });
  $("input").keyup(function(event){
    if(event.keyCode == 13){
        $("button").click();
    }
  });
  
  });
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
    var giphyURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    console.log(giphyURL);
    return giphyURL;
  }

  function appendImageToBody(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
      $('#display').html('<img src=' + srcURL + '>');
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
      var giphyURL = giphyURLWithSearchTerm(searchTerm);
      $.ajax({
      url: giphyURL,
      method: "GET",
      success: function(response) {
           var rng = Math.floor(Math.random()*response.data.length-1);
           var url = response.data[rng].images.original.url;
           appendImageToBody(url);
           // Log the whole response to the console
           console.log(response);
           // Log the first image of the data to the console
           console.log(response.image);
           // Log the "type" property of the first image object to the console
           console.log(response.type);
           // Log the "title" property of the first image object to the console
           console.log(response.title);
      },
  });
}