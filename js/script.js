// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  // WRITE A CLICK HANDLER HERE
  /*
    1. click handler function
    2. get the typed input from the search input box
    3. call the functions below!
  */
  
  function giphyURLWithSearchTerm(searchTerm) {
      // write a function that will return a url for the giphy API with
      // the searchTerm provided in the parameters
    var firstPart = "api.giphy.com/v1/stickers/search?q=";
    var term = "dog";
    var secondPart = "&api_key=dc6zaTOxFJmzC";
    var locaTerm = firstPart + term + secondPart;
    console.log(locaTerm);
  }

  function appendImageToGallery(srcURL) {
      // write a function that will append an <img> to the div with class="gallery"
      // using the URL provided in the parameters
      var url = "<img src="+giphyURLWithSearchTerm+">";
      $("body").append(url);
  }

  function callGiphyAPIWithSearchTerm(searchTerm) {
      // use $.ajax to call the giphy api with the given search term from the parameters.
      // get the first image url from the ajax response
      // use appendImageToGallery to put the image onto the screen
      $.ajax({
      url: "https://api.giphy.com/v1/stickers/search?q=dog&api_key=dc6zaTOxFJmzC",
      method: "GET",
      success: function(response) {
           // Log the whole response to the console
      console.log();
           // Log the first image of the data to the console
           
           // Log the "type" property of the first image object to the console
           
           // Log the "title" property of the first image object to the console
      },
    }
});

callGiphyAPIWithSearchTerm("dog");