$( '.logo' ).click(function() {
  $( '#home' ).show();
  $( '#display' ).html("<!-- display -->");
});

var loadedContent = "";
var contentCounter = 0;

$( ".nextButton" ).click(function() {
  if (contentCounter === 0) {
    $( '#display' ).html(posts[contentCounter].content);
    $( '#home' ).hide();
    contentCounter++
  } else if (contentCounter < posts.length) {
    $( '#display' ).html(posts[contentCounter].content);
    console.log(posts[contentCounter]);
    console.log(posts.length);
    $( '#home' ).hide();
    contentCounter++
  } else if (contentCounter === posts.length) {
    alert("No more posts, for now...");
    contentCounter = 0;
  }
});